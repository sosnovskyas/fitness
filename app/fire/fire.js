;(function(){
    'use strict';

    angular
        .module('fitness.fire',[
            'firebase'
        ])
        .factory('DBC', DbFactory); //DB Connection

    // @ngInject
    function DbFactory (FURL, $firebaseAuth){
        var o ={};
        var ref = new Firebase(FURL);
        var auth = $firebaseAuth(ref);

        o.getRef = function (){
            return ref;
        };

        o.get$Auth = function (){
            return auth;
        };

        o.getAuth = function (){
            return ref.getAuth();
        };

        return o;
    }

})();