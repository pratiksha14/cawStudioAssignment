function addTask() {
	document.getElementById('error').innerHTML = "";
	let name = document.getElementById('task').value;
	if(name == '') {
		document.getElementById('error').innerHTML = "Please enter a valid value";
	} else {
		let taskList = document.getElementById('taskList');
		let li = document.createElement('li');
		li.className = "task-display";
		
		let newTask = document.createElement('span');
		newTask.id="task";
		newTask.textContent = name;
		li.append(newTask);
		
		let done = document.createElement('a');
		done.textContent="Done";
		done.href = "javascript:void(0)";
		done.id = "done";
		done.style.margin = "0 12px";
		li.append(done);
		
		let remove = document.createElement('a');
		remove.textContent="Delete";
		remove.href = "javascript:void(0)";
		remove.id = "delete";
		li.append(remove);
		
		remove.addEventListener('click', function(){
			taskList.removeChild(li);
		});
		
		done.addEventListener('click', function() {
			newTask.style.textDecoration = "line-through";
		});
			
		taskList.prepend(li);
	}
	document.getElementById('task').value="";
}
