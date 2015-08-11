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
                templateUrl: 'userSpace/profile.html'
            })
            .state('userSpace.profile.account', {
                url: '/account',
                templateUrl: 'userSpace/profileAccount.html'
            })
            .state('userSpace.profile.password', {
                url: '/password',
                templateUrl: 'userSpace/profilePassword.html'
            })
            .state('userSpace.profile.design', {
                url: '/design',
                templateUrl: 'userSpace/profileDesign.html'
            })
            .state('userSpace.profile.exit', {
                url: '/exit',
                templateUrl: 'userSpace/proflieExit.html'
            });

    }
})();