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
    function authFactory(URL, $firebaseAuth){
        var ref = new Firebase(URL);

        return $firebaseAuth(ref);
    }

    // @ngInject
    function authController(authFct, $state){
        var s = this;
        s.user = {
            email: 'qwe@qwe.ru',
            password: '1234'
        };
        s.login = function () {
            authFct.$authWithPassword(s.user)
                .then(function (authData) {
                    console.log('Logged in as:', authData.uid);
                    $state.transitionTo('userSpace');
                })
                .catch(function (error) {
                    console.error('Authentication failed:', error);
                    $state.transitionTo('login');
                });
        };

        s.logout = function () {
            authFct.$unauth();
        };

        s.auth = authFct.$getAuth();

        s.signedIn = function () {
            return !authFct.$getAuth();
        };
    }
})();