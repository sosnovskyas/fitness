;
(function(){
    'use strict';
    angular
        .module('fitness.home', [])
        .config(FitnessHomeConfig);

    function FitnessHomeConfig($stateProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html'
            })

    }
})();
