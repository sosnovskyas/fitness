;(function(){
    'use strict';
    angular
        .module('fitness.userSpaceExercises', [])
        .config(FitnessUserSpaceExercisesConfig);

    function FitnessUserSpaceExercisesConfig($stateProvider){
        $stateProvider
            .state('userSpace.exercises', {
                url: '/exercises',
                templateUrl: 'private/exercises/exercises.html'
            })

    }
})();