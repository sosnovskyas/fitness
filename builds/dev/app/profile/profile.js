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