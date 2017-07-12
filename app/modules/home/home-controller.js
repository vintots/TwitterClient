angular.module('myApp.home.controller',[])
	.controller('homeController',function(){
		 var randomName = faker.name.findName();
		console.log(randomName);
	});