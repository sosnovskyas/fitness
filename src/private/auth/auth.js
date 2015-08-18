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

        return {
            login: function (_user) {
                authRef.$authWithPassword(_user)
                    .then(function (authData) {
                        console.log('Logged in as:', authData.uid);
                        $state.transitionTo('userSpace');
                    })
                    .catch(function (error) {
                        console.error('Authentication failed:', error);
                        // $state.transitionTo('login');
                    });
            },

            logout: function () {
                authRef.$unauth();
            },

            auth: authRef.$getAuth(),

            signedIn: function () {
                return !authRef.$getAuth();
            }
        };
    }

    // @ngInject
    function authController(authFct){
        var s = this;
        s.user = {
            email: 'qwe@qwe.ru',
            password: '1234'
        };
        s.login = authFct.login(s.user);

        s.logout = authFct.logout();

        s.auth = authFct.auth;

        s.signedIn = authFct.signedIn;
    }
})();