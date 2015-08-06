;(function(){
    'use strict';
    angular
        .module('fitness.userSpace', [
            'fitness.userSpaceWorkout',
            'fitness.userSpaceExercises'
        ])
        .config(FitnessUserSpaceConfig)
    ;

    function FitnessUserSpaceConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider
            .when('/userSpace', '/userSpace/workout');
        $stateProvider
            .state('userSpace', {
                url: '/userSpace',
                templateUrl: 'userSpace/userSpace.html',
                controller: 'StatusCtrl',
                resolve: {
                    auth: ['Authentication', '$q', function (Authentication, $q) {
                        var d = $q.defer();
                        if (Authentication.loggedIn()) {
                            console.log('yes');
                            d.resolve();
                        } else {
                            // here the rejection
                            console.log('no');
                            d.reject('not logged');
                        }
                        return d.promise;
                    }]
                }
            })
    }
})();
