angular.module('myApp.home.service',[])
	.service('homeService',function(
									dataService,
									$rootScope,
									$interval){

		this.getPosts = function(){
			return dataService.postCollection();
		}

		this.formatData = function(post,arraySize){

			return {'id':parseInt(arraySize),'username':$rootScope.loggedInUser.username,'fullname':$rootScope.loggedInUser.fullname,'post': post,'date': new Date(),'image':$rootScope.loggedInUser.image,'is_new': false};
		}

		this.periodicTweets= function(){
			$rootScope.newPosts =[];
			
			$interval(function(){
				$rootScope.postNewLength = $rootScope.newPosts.length;
				$rootScope.thereIsNewPost = $rootScope.newEntry;
				console.log('checking');
				// console.log($rootScope.thereIsNewPost);
			},1000);

			$interval(function(){
				var numberPicker = Math.floor(Math.random() * 3);
				for(var i=0;i<numberPicker;i++){
					console.log('start populating...');
					$rootScope.newPosts.push(dataService.generateEntry());
					$rootScope.newEntry=true;
				}
			},10000);
		}

		this.mergeNewPost = function(){
			angular.forEach($rootScope.newPosts,function(post){
				post.id = $rootScope.posts.length;
				$rootScope.posts.push(post);
				console.log($rootScope.posts);
			});
		}
	});