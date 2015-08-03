;
(function(){
    'use strict';
    angular
        .module('fitness.auth', [
            'ui.router',
            'fitness.fire'
        ])
        .factory('Authentication', AuthenticationFactory)
        .config(configAuth)
        .controller('RegisterCtrl', RegisterController)
        .controller('LoginCtrl', LoginController)
        .controller('StatusCtrl', StatusController);


    // @ngInject
    function StatusController(currentUser, Authentication){
        var s = this;
        s.signedIn = currentUser.signedIn;
        s.userName = currentUser.name;
        s.logout = Authentication.logout;
    }

    // @ngInject
    function AuthenticationFactory(DBC, currentUser, $firebaseObject){
        var ref = DBC.getRef();
        var usersRef = ref.child('users');
        var o = {};

        function authHandler(error, authData){
            if(error){
                console.warn('Login FAILED!', error)
            }else if (authData){
                console.log('Login success!', authData);
                currentUser.signedIn = true;
                var user = $firebaseObject(usersRef.child(authData.uid));
                user.$loaded(function(_user){
                    currentUser.name = _user.fullname;
                })
            } else {
                currentUser.name = '';
                currentUser.signedIn = false;
            }
        }

        o.login = function (_user, _authHndl){
            // если не задан то переопределяется
            var authHndl = typeof _authHndl !== "undefined" ? _authHndl : authHandler;

            DBC.get$Auth()
                .$authWithPassword(_user)
                .then(authHndl);
        };/*login*/

        o.logout = function(){
            ref.unauth();
            console.log('logout');
        };

        o.register = function(_user){
            DBC.get$Auth()
                .$createUser({
                    email : _user.email,
                    password : _user.password
                })
                .then(function(userData){
                    console.log('User '+ userData.uid + ' created successfully!');
                    var userRef = usersRef.child(userData.uid);
                    userRef.set({
                        fullname: _user.fullname,
                        date: Firebase.ServerValue.TIMESTAMP
                    });

                    return  DBC.get$Auth().$authWithPassword({
                        email: _user.email,
                        password: _user.password
                    });

                })
                .then(function(authData) {
                    console.log("Logged in ad:", authData.uid);
                }).catch(function(error) {
                    console.error("Error", error);
                });
        };

        return o;
    }

    // @ngInject
    function configAuth($stateProvider){
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'auth/registration.html',
                controller: 'RegisterCtrl',
                controllerAs: 'rc'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'auth/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'lc'
            })
    }

    // @ngInject
    function RegisterController (Authentication){
        var s = this;
        s.user = {
            fullname: 'Qwe Qwe',
            email: 'qwe@qwe.ru',
            password: '1234'
        };
        s.register  = function (){
            Authentication.register(s.user);
        }
    }

    // @ngInject
    function LoginController (Authentication) {
        var s = this;
        s.user = {
            email: 'qwe@qwe.ru',
            password: '1234'
        };
        s.login = function () {
            Authentication.login(s.user);
        };
    }
})();