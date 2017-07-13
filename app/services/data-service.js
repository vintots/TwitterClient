angular.module('myApp.data.service', [])
	.service('dataService',function(){
		var posts =[];
		this.usersCollection = function(){
			var users= [
							{
								'username': 'test1',
								'fullname': faker.name.findName(),
								'email': 'test1@gmail.com',
								'phone_number':'123456',
								'password': 'test123',
								'image': faker.image.avatar()
							},
							{
								'username': 'test2',
								'fullname': faker.name.findName(),
								'email': 'test2@gmail.com',
								'phone_number':'456123',
								'password': 'test223',
								'image': faker.image.avatar()
							},
							{
								'username': 'test3',
								'fullname': faker.name.findName(),
								'email': 'test3@gmail.com',
								'phone_number':'456231',
								'password': 'test222',
								'image': faker.image.avatar()
							}
						];

		return users;
		}

		this.generateEntry = function(isNew){
			var firstName= faker.name.lastName();
			var lastName= faker.name.lastName();
			var fullName = firstName+' '+lastName;
			if(angular.isDefined(isNew)){
				isNew = true;
			}else{
				isNew = false;
			}
			return {'username':lastName,'fullname':fullName,'post': faker.lorem.sentence(),'date': faker.date.recent(),'image':faker.image.avatar(),'is_new': isNew};
		}

		this.postCollection = function(){
			
			for(var i=0;i<10;i++){
				var entry = this.generateEntry();
				entry.id =i;
				posts.push(entry);
			}

			if(posts.length > 0){
				return 	posts;	
			}
		}

		
	});