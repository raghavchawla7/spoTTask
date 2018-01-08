var database=firebase.database();
function addFriend(email){
	var name='raghav';
	var f_email='raghav@raghav'
	//query if email exist in database
	var isPresent;
	database.ref('users/'+'raghav').once('value',function(snapshot){
		var val=snapshot.exists();
		console.log(val);
		if(val){
			console.log('friend exist in db of user');
			isPresent=1;
		}
		else{
			isPresent=0;
		}
	})
	if(isPresent==1){
		var friendObject={
			f_email:f_email
		}
		var db_ref=database.ref('friends/'+email).push().key;
		database.ref('friends/'+email+"/"+db_ref).set(friendObject).then(function(){
			console.log('inserted friend');
		}).catch(function(error){
			console.log(error);
		});
	}
	else{
		console.log('not present');
	}
}
console.log('finalMainPOoAGE is Called');
addFriend('sahil070197');