;(function () {
    'use strict';

    angular
        .module('fitness', [
            'ui.router',
            'fitness.home',
            'fitness.about',
            'fitness.userSpace',
            'fitness.userSpaceWorkout',
            'fitness.userSpaceStatistics',
            'fitness.userSpaceExercises',
            'fitness.userSpaceProfile',
            'fitness.auth'
            //,
            //'fitness.fire'
        ])
        .constant('FURL', 'https://ngfitness.firebaseio.com/')
        .config(FitnessConfig);
            function FitnessConfig($urlRouterProvider) {
                $urlRouterProvider
                    .otherwise('/home');
        }
})();