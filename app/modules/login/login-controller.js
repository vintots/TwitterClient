angular.module('myApp.loginController', [])
	.controller('loginController', function(
											$scope,
											$state,
											loginService
											){

		$scope.login = function(){
			$scope.userNotFound = false;
			if(angular.isDefined($scope.user.email) && angular.isDefined($scope.user.password)){
				// console.log(loginService.authenticate($scope.user));
				if(loginService.authenticate($scope.user)){
					$state.go('home');
				}else{
					$scope.userNotFound = true;
				}
			}
		}


	});