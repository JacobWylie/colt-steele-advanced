const list = document.querySelector('.list');

function getTodos() {
	const url = "http://localhost:3000/api/todos";
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
			const newTodo = document.createElement('li');
			newTodo.classList.add('task');
			newTodo.textContent = todo.name;
			list.appendChild(newTodo);
		})
	})
}

getTodos();
