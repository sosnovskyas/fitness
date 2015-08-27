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
    function exercisesFactory (authFct, $firebaseArray) {
        var o = {};
        var ref = authFct.getRef();
        var userExercisesRef = ref.child('exercises')
                                    .orderByChild('userId')
                                    .equalTo('simplelogin:29');

        o.$getUserExercises = function () {
            var res = userExercisesRef
                                .on("value",
                                    function(snapshot) {
                                        return snapshot.val();
                                    },
                                    function (errorObject) {
                                        console.log("The read failed: " + errorObject.code);
                                    });
            console.log('qwe');
            return res;

        };
        return o;
    }

    // @ngInject
    function exercisesController(excFct) {
        var s = this;
        s.exc = function () {
            return excFct.$getUserExercises;
        };

    }
})();