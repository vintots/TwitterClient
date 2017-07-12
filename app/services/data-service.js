angular.module('myApp.data.service', [])
	.service('dataService',function(){

		this.usersCollection = function(){
			var users= [
							{
								'username': 'test1',
								'email': 'test1@gmail.com',
								'phone_number':'123456',
								'password': 'test123'
							},
							{
								'username': 'test2',
								'email': 'test2@gmail.com',
								'phone_number':'456123',
								'password': 'test223'
							},
							{
								'username': 'test3',
								'email': 'test3@gmail.com',
								'phone_number':'456231',
								'password': 'test222'
							}
						];

		return users;
		}

		
	});