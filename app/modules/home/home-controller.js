angular.module('myApp.home.controller',[])
	.controller('homeController',function(
											homeService,
											$scope,
											$rootScope,
											$state
											){
		if(angular.isDefined($rootScope.loggedInUser)){

			$scope.posts = homeService.getPosts();

			$scope.tweet = function(){
				// console.log($scope.new_post);
				if(angular.isDefined($scope.new_post)){
					$scope.posts.push(homeService.formatData($scope.new_post,$scope.posts.length));
					$scope.new_post='';
					// console.log($scope.posts);
				}
			}

		}else{
			$state.go('login');
		}

		$scope.logout = function(){
			$rootScope.loggedInUser=false;
			$state.go('login');
		}


		
	});