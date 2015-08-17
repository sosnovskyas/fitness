;(function () {
    'use strict';
    angular
        .module('fitness.userSpaceExercises', [])
        .config(FitnessUserSpaceExercisesConfig)
        .controller('exercisesCtrl', exercisesController)
    ;

    // @ngInject
    function FitnessUserSpaceExercisesConfig($stateProvider) {
        $stateProvider
            .state('userSpace.exercises', {
                url: '/exercises',
                templateUrl: 'private/exercises/exercises.html',
                controller: 'exercisesCtrl as ec'
            });
    }

    // @ngInject
    function exercisesController() {
        var s = this;
    }
})();