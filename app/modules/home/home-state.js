'use strict';

var myApp = angular.module('myApp');

myApp.config(function($stateProvider, $urlRouterProvider) {

	 $stateProvider
    
    .state('home', {
     url: "/home",
     cache: false,
     templateUrl: "modules/home/home.html",
     controller: 'homeController'
   })
})