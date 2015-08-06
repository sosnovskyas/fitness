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
        .factory('UserExercises', UserExercisesFactory)
        .config(configAuth)
        .controller('RegisterCtrl', RegisterController)
        .controller('LoginCtrl', LoginController)
        .controller('StatusCtrl', StatusController)
        .controller('UserCtrl', UserController)
    ;

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
    function AuthenticationFactory(DBC, $firebaseObject, $rootScope){
        var ref = DBC.getRef();
        var usersRef = ref.child('users');
        var o = {};

        function authHandler(authData){
            if(authData){
                console.log('Login success!', authData);
                $rootScope.currentUser.signedIn = true;
                $rootScope.currentUser.email = authData.password.email;
                var user = $firebaseObject(usersRef.child(authData.uid));
                user.$loaded(function (_user) {
                    $rootScope.currentUser.name = _user.fullname;
                })
            }else{
                $rootScope.currentUser.name = '';
                $rootScope.currentUser.signedIn = false;
                $rootScope.currentUser.email = null;
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
            $rootScope.currentUser.signedIn = false;
            $rootScope.currentUser.name = '';
            console.log('LOGOUT')
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
                        email: _user.email,
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
            return $rootScope.currentUser.signedIn;
        };
        return o;
    }
    // @ngInject
    function UserExercisesFactory(DBC, $rootScope, $firebaseObject, $firebaseArray){
        var o = {};
        var ref = DBC.getRef();
        var userRef = ref.child($rootScope.currentUser.email);
        var userExercisesRef = ref.child('exercises')
                                    .orderByChild('userId')
                                    .equalTo($rootScope.currentUser.email);
        o.$getUserExercises = function () {
            return $firebaseArray(userExercisesRef).$loaded();
        }

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
    // @ngInject
    function StatusController ($rootScope, Authentication) {
        var s = this;
        s.signedIn = $rootScope.currentUser.signedIn;
        s.username = $rootScope.currentUser.name;
        s.logout = Authentication.logout;
     }
    // @ngInject
    function UserController(UserExercises) {
        var s = this;

        s.exercises = [];
        UserExercises
            .$getUserExercises()
            .then(function (_exercises) {
                s.exercises = _exercises;
            })

    }
})();