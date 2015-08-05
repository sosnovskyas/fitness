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
        ])
        .constant('FURL', 'https://ngfitness.firebaseio.com/')
        .config(FitnessConfig)
        .factory('currentUser', currentUserFactory)
    ;
    function currentUserFactory(){
        var o = {};
        var u = {
            name: '',
            signedIn: false
        };

        o.getUser = function(){
            return u;
        };
        return o;
    }

    //конфигурируем в данном случае роутинг на дефолтную страницу
    function FitnessConfig($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/home');
    }
})();