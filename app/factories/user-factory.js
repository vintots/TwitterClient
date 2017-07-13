angular.module('myApp.user.model',[])
.factory('User',function($window){


	return {
		getUser: function(){
			return angular.fromJson(window.localStorage.getItem('user'));
		},
		save: function(obj){
			return window.localStorage.setItem("user", JSON.stringify(obj));
		},
		deleteEntry: function(){
			return $window.localStorage.removeItem('user');
		} 
	}
});