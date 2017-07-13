angular.module('myApp.login.service', [])
	.service('loginService', function(
										dataService,
										$filter,
										$rootScope,
										User
										){
		this.authenticate = function(params){
			// isExist = $filter('filter')(dataService.usersCollection(), params, true);
			// console.log(isExist);
			var ctr = 0;
			angular.forEach(dataService.usersCollection(),function(user){
				
				if((params.email == user.username || params.email == user.email || params.email == user.phone_number) && params.password == user.password){
					$rootScope.loggedInUser = angular.copy(user);
					User.save($rootScope.loggedInUser);
					ctr++;
				}
			});

			return ctr; 
		}

		this.checkedLoggedInUser = function(){
			var userObj = angular.copy(User.getUser());
			console.log(userObj);
			if(angular.isDefined(userObj) && userObj!=null){
					$rootScope.loggedInUser =  angular.copy(userObj);
					return true;	
			}	
			return false;
			

		}

	});