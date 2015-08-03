;(function(){
    'use strict';
    angular
        .module('fitness.userSpace', [
            'fitness.userSpaceWorkout',
            'fitness.userSpaceExercises',
            //'fitness.fire'
            'fitness.auth'
        ])
        .config(FitnessUserSpaceConfig)
        .controller('userSpaceCtrl',userSpaceController);


    function FitnessUserSpaceConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider
            .when('/userSpace', '/userSpace/workout');
        $stateProvider
            .state('userSpace', {
                url: '/userSpace',
                templateUrl: 'userSpace/userSpace.html',
                resolve:{
                    loggedIn: false
                }
            })

    }

    function userSpaceController(){
        var ref = new Firebase("https://ngfitness.firebaseio.com");
        ref.authWithPassword({
            email    : "lvlonstradamus@gmail.com",
            password : "123123"
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    }

})();
