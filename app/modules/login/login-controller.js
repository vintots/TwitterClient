angular.module('myApp.loginController', [])
	.controller('loginController', function(
											$scope,
											$state,
											loginService
											){

		if(loginService.checkedLoggedInUser()){
			$state.go('home');
		}

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