angular.module('myApp.home.controller',[])
	.controller('homeController',function(
											homeService,
											$scope,
											$rootScope,
											$state
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
			$state.go('login');
		}

		$scope.mergeNewPost = function(){
			homeService.mergeNewPost();
			$rootScope.thereIsNewPost = false;
			$rootScope.newEntry=false;
		}


		
	});