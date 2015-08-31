;(function () {
    'use strict';
    angular
        .module('fitness.userSpaceExercises', [])
        .config(FitnessUserSpaceExercisesConfig)
        .controller('exercisesCtrl', exercisesController)
        .factory('excFct', exercisesFactory)
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
    function exercisesFactory(DBC, $firebaseArray) {
        var o = {};

        o.getUserExercises = $firebaseArray(DBC.getRef().child('exercises'));

        o.addExercise = function (_exercise) {
            var t = {};
            t.timestamp = Firebase.ServerValue.TIMESTAMP;
            t.userID = DBC.getAuthRef().$getAuth().password.uid;
            t.name = _exercise.name;
            t.description = _exercise.description;
            DBC.getRef().child('exercises').push(t);
        };
        return o;
    }

    // @ngInject
    function exercisesController($scope, excFct) {
        $scope.exercises = excFct.getUserExercises;
    }
})();