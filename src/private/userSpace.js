;(function () {
    'use strict';
    angular
        .module('fitness.userSpace', [
            'fitness.userSpaceWorkout',
            'fitness.userSpaceExercises'
        ])
        .config(FitnessUserSpaceConfig)
        .filter('toRub', toRublesFilter)
     ;

    function toRublesFilter() {
        return function (input) {
            return String(Math.floor(input * 100) / 100).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')  + ' руб';
        };
    }
    function FitnessUserSpaceConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('/userSpace', '/userSpace/workout');
        $stateProvider
            .state('userSpace', {
                url: '/userSpace',
                templateUrl: 'private/userSpace.html',
                controller: 'authCtrl as ac',
                resolve:{
                    signedIn: function (authFct, $q) {
                        var defered = $q.defer();
                        if (authFct.$getAuth()){
                            console.log('OK');
                            defered.resolve();
                        } else {
                            console.log('ERROR');
                            defered.reject();
                        }
                        return defered.promise;
                    }
                }
            });
    }
})();
