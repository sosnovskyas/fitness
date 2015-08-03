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
            //,
            //'fitness.fire'
        ])
        .constant('FURL', 'https://ngfitness.firebaseio.com/')
        .config(FitnessConfig)
        .value('currentUser', {
            name: '',
            loggedIn: false
        }) // делает после конфига
        .service('userService', function () {
            // private
            var userName = 'Default Name';

            // Public
            this.getName = function () {
                return userName;
            };

            this.setName = function (_name) {
                userName = _name;
            }


        })
        .factory('userFactory', function () {
            var o = {};

            var userName = 'Default Name';

            // Public
            o.getName = function () {
                return userName;
            };

            o.setName = function (_name) {
                userName = _name;
                o.name = userName;
            };

            o.name = userName;

            return o;
        }).
        provider('userPr', function () {

            // super private

            var nativeName = '';

            return {
                setNativeName: function (_name) {
                    nativeName = _name;
                },

                $get: function () {
                    // private

                    var userName = nativeName;

                    // public

                    var o = {};

                    o.getName = function () {
                        return userName;
                    };

                    o.setName = function (_name) {
                        userName = _name;
                        o.name = userName
                    };
                    o.name = userName;

                    return o;

                }
            }
        });
            function FitnessConfig($urlRouterProvider) {
                $urlRouterProvider
                    .otherwise('/home');
        }
})();