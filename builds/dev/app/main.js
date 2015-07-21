;(function(){
    'use strict';

    angular
        .module('fitness',['ui.router'])
        .config(FitnessConfig);

    function FitnessConfig ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: 'app/home/home.html'
            })
            .state('about',{
                url:'/about',
                templateUrl: 'app/about/about.html'
            })
            .state('contacts',{
                url:'/contacts',
                templateUrl: 'app/contacts/contacts.html'
            })
            .state('profile',{
                url:'/profile',
                templateUrl: 'app/profile/profile.html'
            })
    }

})();