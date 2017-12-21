const list 		= document.querySelector('.list');
const input 	= document.querySelector('#todoInput');
const deleteBtn = document.querySelector('span'); 
const url 		= "http://localhost:3000/api/todos";

function getTodos() {
	fetch(url)
	.then(handleErrors)
	.then( res => {
		res.json()
		.then( data => {
			data.forEach(todo => {
				addTodo(todo)
			})
		})
	})
}

function handleErrors(res) {
	if(!res.ok) {
		throw Error(res.status);
	}
	return res;
}


function addTodo(todo) {
	const newTodo = document.createElement('li');
	newTodo.classList.add('task');
	newTodo.setAttribute('data-id', todo._id);
	newTodo.setAttribute('completed', todo.completed);
	newTodo.innerHTML = `${todo.name} <span>X</span>`;
	if(todo.completed) {
		newTodo.classList.add('done');
	}
	list.appendChild(newTodo);
}

function newTodo(userInput) {
	fetch(url, {
		method: "POST",
		headers: {
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({name: userInput})
	})
	.then(handleErrors)
	.then(res => res.json())
	.then(todo => addTodo(todo))
}

function toggleTodo(todo) {
	let updateData;
	todo.getAttribute('completed') == 'true' ? updateData = {completed: false} : updateData = {completed: true};
	todo.classList.toggle('done');
	fetch(`${url}/${todo.getAttribute('data-id')}`, {
		method: "PUT",
		headers: {
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(updateData)
	})
	.then(handleErrors)
	.then(res => res.json())
	.then(res => res.completed ? todo.setAttribute('completed', 'true') : todo.setAttribute('completed', 'false'))
}

function deleteTodo(todo) {
	fetch(`${url}/${todo.parentNode.getAttribute('data-id')}`, {
		method: "DELETE",
		headers: {
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json"
		}
	})
	.then(handleErrors)
	.then(todo.parentNode.parentNode.removeChild(todo.parentNode))
}

input.addEventListener('keydown', e => {
	if (e.keyCode == 13) {
		newTodo(e.target.value);
		e.target.value = "";
	}
})

list.addEventListener('click', e => {
	if (e.target && e.target.matches('li')) {
		toggleTodo(e.target);
	}
})

list.addEventListener('click', e => {
	if (e.target && e.target.matches("span")) {
		deleteTodo(e.target);
	}
})

getTodos();































