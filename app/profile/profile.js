;(function(){
    'use strict';
    angular
        .module('fitness.userSpaceProfile', [])
        .config(FitnessUserSpaceProfileConfig);

    function FitnessUserSpaceProfileConfig($urlRouterProvider, $stateProvider){
        $urlRouterProvider
            .when('/userSpace/profile', '/userSpace/profile/account');

        $stateProvider
            
            .state('userSpace.profile', {
                url: '/profile',
                templateUrl: 'profile/profile.html'
            })
            .state('userSpace.profile.account', {
                url: '/account',
                templateUrl: 'profile/profileAccount.html'
            })
            .state('userSpace.profile.password', {
                url: '/password',
                templateUrl: 'profile/profilePassword.html'
            })
            .state('userSpace.profile.design', {
                url: '/design',
                templateUrl: 'profile/profileDesign.html'
            })
            .state('userSpace.profile.exit', {
                url: '/exit',
                templateUrl: 'profile/proflieExit.html'
            });

    }
})();