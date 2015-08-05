;
(function(){
    'use strict';
    angular
        .module('fitness.auth', [
            'firebase',
            'ui.router' // каждый модуль должен быть максимально независимым, а тут есть роутинг. считаю не грех добавть ui.router тут избыточно
        ])
        .factory('DBC', DbFactory) //DB Connection
        .factory('Authentication', AuthenticationFactory)
        .config(configAuth)
        .controller('RegisterCtrl', RegisterController)
        .controller('LoginCtrl', LoginController)
        .controller('StatusCtrl', StatusController);

    // @ngInject
    function DbFactory (FURL, $firebaseAuth){
        var o ={};
        var ref = new Firebase(FURL);
        var auth = $firebaseAuth(ref);

        o.getRef = function (){
            return ref;
        };

        o.get$Auth = function (){
            return auth;
        };

        o.getAuth = function (){
            return ref.getAuth();
        };

        return o;
    }
    // @ngInject
    function AuthenticationFactory(DBC){
        var ref = DBC.getRef();
        var usersRef = ref.child('users');
        var o = {};

        function authHandler(error, authData){
            if(error){
                console.warn('Login FAILED!', error)
            }else{
                console.log('Login success!', authData)
            }
        }

        o.login = function (_user, _authHndl){
            // если не задан то переопределяется хэндлер
            var authHndl = typeof _authHndl !== "undefined" ? _authHndl : authHandler;

            DBC.get$Auth()
                .$authWithPassword(_user)
                .then(authHndl);

        };/*login*/

        o.logout = function(){
            ref.unauth();
            console.log('ref.unauth();')
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
                    console.log("Logged in as:", authData.uid);
                })
                .catch(function(error) {
                    console.error("Error: ", error);
                });
        };

        o.loggedIn = function(){
            return !!DBC.getAuth();
        };

        o.$loggedIn = function($q){
            if(o.loggedIn()){
                console.log('Logged In');
                return $q.resolve();
            }else{
                console.log('NO LOGINED');
                return $q.reject();
            }
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

        s.logout = function () {
             Authentication.logout();
        };
    }

    // @ngInject
    function StatusController (Authentication) {
        var s = this;
        //s.status = Authentication.status;
     } 
})();