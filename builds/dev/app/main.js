;(function () {
    'use strict';

    angular
        .module('fitness', ['ui.router'])
        .config(FitnessConfig);

    function FitnessConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html'
            })

            .state('userSpace', {
                url: '/userSpace',
                templateUrl: 'app/userSpace/userSpace.html'
            })

            .state('userSpace.workout', {
                url: '/workout',
                templateUrl: 'app/workout/workout.html'
            })

            .state('userSpace.exercises', {
                url: '/exercises',
                templateUrl: 'app/exercises/exercises.html'
            })

            .state('userSpace.statistics', {
                url: '/statistics',
                templateUrl: 'app/statistics/statistics.html'
            })

            .state('userSpace.profile', {
                url: '/profile',
                templateUrl: 'app/profile/profile.html'
            })
    }

})();