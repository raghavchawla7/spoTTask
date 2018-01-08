
var taskObject={
		name:'qefg',
		desc:'wefgrh'	};
	addTask(taskObject, "sahil070197");

function randomGenerator(callback, userObject)
{
		database.ref('users').push().then(function(snapshot){
			console.log("sample", snapshot.key, userObject);
			callback(snapshot.key, userObject);
	});
	
}
function addUserUtil(task_list_key, userObject)
{
	userObject.task_list_key=task_list_key;
	database.ref('users/'+userObject.email).set(userObject).then(function(){
		console.log('inserted');
	}).catch(function(err){
		console.log(err);
	});

}
function addUser(userObject)
{
	randomGenerator(addUserUtil, userObject);
	// var userObject={
	// 	name:'vwnkn',
	// 	age:123,
	// 	email:'sahil070197',
	// 	task_list_key: task_key
	// };
	
}
function addTask(task, email)
{

	database.ref('users/'+email+'/task_list_key').once('value', function(snapshot){
		var list_key=snapshot.val();
		console.log("Snapshot", list_key);
		addTaskToUser(list_key, task);
	});

}
function addTaskToUser(list_key, task)
{
	var task_key=database.ref('task-list/'+list_key).push(task).then(function(){
		console.log("Task inserted");
	}).catch(function(err){
		console.log("Task insertion error: ", err);
	});
}
var userObject={
		name:'Raghav',
		age:24,
		email:'sahil070197',
	};
// addUser(userObject);

// function callback(f)
// {
// 	console.log("callbacked");

// }

// function foo(callback)
// {
// 	//It is a very ha=eavy function, and is asyncronous
// 	int size=50;
// 	callback(size);
// }

// function f()
// {
// 	foo(callback);
// }
