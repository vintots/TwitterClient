'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMaterial',
  'myApp.loginController',
  'myApp.login.service',
  'myApp.data.service',
  'myApp.home.controller',
  'myApp.home.service',
  'myApp.user.model',
  'myApp.version'
])

.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/login')
})

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])
