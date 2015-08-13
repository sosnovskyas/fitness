;(function(){
    'use strict';
    angular
        .module('fitness.userSpace', [
            'fitness.userSpaceWorkout',
            'fitness.userSpaceExercises'
        ])
        .config(FitnessUserSpaceConfig)
        .filter('reverse', reverseFilter)
    ;

    function reverseFilter() {
        return function (input, uppercase) {
            var out = '';
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // условная часть для необязательного аргумента
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
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
