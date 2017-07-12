'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // 'ngRoute',	
  // 'myApp.view1',
  // 'myApp.view2',
  'ui.router',
  'ngMaterial',
  'myApp.version'
])

.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/login')
})

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])
