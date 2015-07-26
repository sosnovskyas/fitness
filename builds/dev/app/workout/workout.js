;(function(){
    'use strict';
    angular
        .module('fitness.userSpaceWorkout', [])
        .config(FitnessUserSpaceWorkoutConfig);

    function FitnessUserSpaceWorkoutConfig($stateProvider){
        $stateProvider
            .state('userSpace.workout', {
                url: '/workout',
                templateUrl: 'app/workout/workout.html'
            })

    }
})();