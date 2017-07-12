'use strict';

var myApp = angular.module('myApp');

myApp.config(function($stateProvider, $urlRouterProvider) {

	 $stateProvider
    
    .state('login', {
     url: "/login",
     cache: false,
     templateUrl: "modules/login/login.html",
     controller: 'loginController'
   })
})