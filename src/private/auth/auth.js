;(function () {
    angular
        .module('auth', [
            'ui.router',
            'firebase'
        ])
        .constant('URL', 'https://autokeys.firebaseio.com')
        .factory('authFct', authFactory)
        .controller('authCtrl', authController)
    ;

    // @ngInject
    function authFactory(URL, $firebaseAuth, $state){
        var ref = new Firebase(URL);
        var authRef =  $firebaseAuth(ref);
        var o = {};

        o.login = function (_user) {
            authRef.$authWithPassword(_user)
                .then(function (authData) {
                    console.log('Logged in as:', authData.uid);
                    $state.transitionTo('userSpace');
                })
                .catch(function (error) {
                    console.error('Authentication failed:', error);
                    // $state.transitionTo('login');
                });
        };

        o.logout = function () {
            authRef.$unauth();
        };

        o.signedIn = function () {
            return authRef.$getAuth();
        };

        return o;
    }

    // @ngInject
    function authController(authFct){
        var s = this;
        s.user = {
            email: 'qwe@qwe.ru',
            password: '1234'
        };
        s.login = function () {
            return authFct.login(s.user);
        };

        s.logout = function () {
            return authFct.logout();
        };

        s.signedIn = function () {
            return !!authFct.signedIn();
        }
    }
})();