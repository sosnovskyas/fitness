;(function(){
    'use strict';
    angular
        .module('fitness.userSpace', [
            'fitness.userSpaceWorkout',
            'fitness.userSpaceExercises'

        ])
        .config(FitnessUserSpaceConfig);

    function FitnessUserSpaceConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider
            .when('/userSpace', '/userSpace/workout');
        $stateProvider
            .state('userSpace', {
                url: '/userSpace',
                templateUrl: 'app/userSpace/userSpace.html'
            })

    }
})();
