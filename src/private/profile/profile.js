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
                templateUrl: 'private/profile/profile.html'
            })
            .state('userSpace.profile.account', {
                url: '/account',
                templateUrl: 'private/profile/profileAccount.html'
            })
            .state('userSpace.profile.password', {
                url: '/password',
                templateUrl: 'private/profile/profilePassword.html'
            })
            .state('userSpace.profile.design', {
                url: '/design',
                templateUrl: 'private/profile/profileDesign.html'
            })
            .state('userSpace.profile.exit', {
                url: '/exit',
                templateUrl: 'private/profile/proflieExit.html'
            });

    }
})();