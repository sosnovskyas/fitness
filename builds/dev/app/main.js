;(function () {
    'use strict';

    angular
        .module('fitness', ['ui.router'])
        .config(FitnessConfig);

    function FitnessConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('/userSpace', '/userSpace/workout')
            //.when('/userSpace/statistics', '/userSpace/statistics/common')
            .otherwise('/home');

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
            .state('userSpace.statistics.detailed', {
                url: '/detailed',
                templateUrl: 'app/statistics/statisticsDetailed.html'
            })
            .state('userSpace.statistics.common', {
                url: '/common',
                templateUrl: 'app/statistics/statisticsCommon.html'
            })

            .state('userSpace.profile', {
                url: '/profile',
                templateUrl: 'app/profile/profile.html'
            })
            .state('userSpace.profile.account', {
                url: '/account',
                templateUrl: 'app/profile/profileAccount.html'
            })
            .state('userSpace.profile.password', {
                url: '/password',
                templateUrl: 'app/profile/profilePassword.html'
            })
            .state('userSpace.profile.design', {
                url: '/design',
                templateUrl: 'app/profile/profileDesign.html'
            })
            .state('userSpace.profile.exit', {
                url: '/exit',
                templateUrl: 'app/profile/proflieExit.html'
            });
    }

})();