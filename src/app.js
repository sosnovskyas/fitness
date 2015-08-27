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
            'auth',
            'dbf'
        ])
        .config(FitnessConfig)
    ;

    //конфигурируем в данном случае роутинг на дефолтную страницу
    function FitnessConfig($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/home');
    }
})();