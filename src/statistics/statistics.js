;(function(){
    'use strict';
    angular
        .module('fitness.userSpaceStatistics', [])
        .config(FitnessUserSpaceStatisticsConfig);

    function FitnessUserSpaceStatisticsConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider
            .when('/userSpace/statistics', '/userSpace/statistics/common');
        $stateProvider
            .state('userSpace.statistics', {
                url: '/statistics',
                templateUrl: 'statistics/statistics.html'
            })
            .state('userSpace.statistics.detailed', {
                url: '/detailed',
                templateUrl: 'statistics/statisticsDetailed.html'
            })
            .state('userSpace.statistics.common', {
                url: '/common',
                templateUrl: 'statistics/statisticsCommon.html'
            })
    }
})();