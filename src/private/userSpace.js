;(function () {
    'use strict';
    angular
        .module('fitness.userSpace', [
            'fitness.userSpaceWorkout',
            'fitness.userSpaceExercises'
        ])
        .config(FitnessUserSpaceConfig)
        .filter('toRub', toRublesFilter)
        .directive('userBar', userBarDirective)
     ;
    // @ngInject
    function userBarDirective() {
        return {
            //compile: function compile(temaplateElement, templateAttrs) {
            //    return {
            //        pre: function (scope, element, attrs) {
            //        },
            //        post: function (scope, element, attrs) {
            //        }
            //    };
            //},
            //link: function (scope, element, attrs) {
            //
            //},
            priority: 0,
            //terminal: false,
            templateUrl: 'private/userBar/userBar.html',
            //replace: false,
            //transclude: false,
            restrict: 'E',
            //scope: false,
            controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
            }
        };
    }

    // @ngInject
    function toRublesFilter() {
        return function (input) {
            return String(Math.floor(input * 100) / 100).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')  + ' руб';
        };
    }

    // @ngInject
    function FitnessUserSpaceConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('/userSpace', '/userSpace/workout');
        $stateProvider
            .state('userSpace', {
                url: '/userSpace',
                templateUrl: 'private/userSpace.html',
                controller: 'authCtrl as ac',
                resolve:{
                    signedIn: function (authFct, $q) {
                        var defered = $q.defer();
                        if (!authFct.signedIn()){
                            console.log('OK');
                            defered.resolve();
                        } else {
                            console.log('ERROR');
                            defered.reject();
                        }
                        return defered.promise;
                    }
                }
            });
    }
})();
