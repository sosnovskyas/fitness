;(function () {
    'use strict';
    angular
        .module('fitness.userSpaceWorkout', [])
        .config(FitnessUserSpaceWorkoutConfig);

    function FitnessUserSpaceWorkoutConfig($stateProvider) {
        $stateProvider
            .state('userSpace.workout', {
                url: '/workout',
                templateUrl: 'private/workout/workout.html'
            });

    }
})();