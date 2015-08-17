;(function () {
    'use strict';
    angular
        .module('fitness.userSpaceExercises', [])
        .config(FitnessUserSpaceExercisesConfig)
        .controller('exercisesCtrl', exercisesController)
    ;

    function FitnessUserSpaceExercisesConfig($stateProvider) {
        $stateProvider
            .state('userSpace.exercises', {
                url: '/exercises',
                templateUrl: 'private/exercises/exercises.html',
                controller: 'exercisesCtrl as ec'
            });
    }

    function exercisesController() {
        var s = this;
    }
})();