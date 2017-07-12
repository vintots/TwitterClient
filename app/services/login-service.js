angular.module('myApp.login.service', [])
	.service('loginService', function(
										dataService,
										$filter
										){
		this.authenticate = function(params){
			// isExist = $filter('filter')(dataService.usersCollection(), params, true);
			// console.log(isExist);
			var ctr = 0;
			angular.forEach(dataService.usersCollection(),function(user){
				
				if((params.email == user.username || params.email == user.email || params.email == user.phone_number) && params.password == user.password){
					console.log('true');
					ctr++;
				}
			});

			return ctr; 
		}

	});