;(function(){
    'use strict';
    angular
        .module('fitness.userSpaceWorkout', [])
        .config(FitnessUserSpaceWorkoutConfig);

    function FitnessUserSpaceWorkoutConfig($stateProvider){
        $stateProvider
            .state('userSpace.workout', {
                url: '/workout',
                templateUrl: 'userSpace/workout.html'
            })

    }
})();