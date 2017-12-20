const list = document.querySelector('.list');
const input = document.querySelector('#todoInput');
const url = "http://localhost:3000/api/todos";

function getTodos() {
	fetch(url)
	.then(handleErrors)
	.then(addTodos)
}

function handleErrors(res) {
	if(!res.ok) {
		throw Error(res.status);
	}
	return res;
}

function addTodos(res) {
	res.json()
	.then( data => {
		data.forEach(todo => {
			addTodo(todo)
		})
	})
}

function addTodo(todo) {
	const newTodo = document.createElement('li');
	newTodo.classList.add('task');
	newTodo.textContent = todo.name;
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

input.addEventListener('keydown', e => {
	if (e.keyCode == 13) {
		newTodo(e.target.value);
		e.target.value = "";
	}
}) 
	

getTodos();































