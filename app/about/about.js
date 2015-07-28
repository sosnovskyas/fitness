;
(function(){
    'use strict';
    angular
        .module('fitness.about', [])
        .config(FitnessAboutConfig);

    function FitnessAboutConfig($stateProvider){
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.html'
            })

    }
})();
