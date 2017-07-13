angular.module('myApp.home.service',[])
	.service('homeService',function(
									dataService,
									$rootScope){

		this.getPosts = function(){
			return dataService.postCollection();
		}

		this.formatData = function(post){

			return {'username':$rootScope.loggedInUser.username,'fullname':$rootScope.loggedInUser.fullname,'post': post,'date': new Date(),'image':$rootScope.loggedInUser.image,'is_new': false};
		}
	});