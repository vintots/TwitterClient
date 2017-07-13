angular.module('myApp.home.controller',[])
	.controller('homeController',function(
											homeService,
											$scope,
											$rootScope,
											$state,
											User
											){

		if(angular.isDefined($rootScope.loggedInUser)){
			
			homeService.periodicTweets();
			$rootScope.posts = homeService.getPosts();

			$scope.tweet = function(){

				if(angular.isDefined($scope.new_post)){
					$rootScope.posts.push(homeService.formatData($scope.new_post,$rootScope.posts.length));
					$scope.new_post='';
				}
			}

		}else{
			$state.go('login');
		}

		$scope.logout = function(){
			$rootScope.loggedInUser=false;
			User.deleteEntry();
			$state.go('login');
			location.reload(); //reinitialized all scopes and stop all background processes
		}

		$scope.mergeNewPost = function(){
			homeService.mergeNewPost();
			homeService.limitEntries($rootScope.posts);
			$rootScope.thereIsNewPost = false;
			$rootScope.newEntry=false;
		}


		
	});