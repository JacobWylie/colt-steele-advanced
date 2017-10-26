const avatar = document.querySelector('#avatar');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const button = document.querySelector('#btn');

function getProfile() {
	fetch('https://randomuser.me/api/')
	.then(handleErrors)
	.then(parseJSON)
	.then(updateProfile)
	.catch(displayErrors)
}

function handleErrors(res) {
	if(!res.ok) {
		throw Error(res.status);
	}
	return res;
}

function parseJSON(res) {
	return res.json().then(function(parsedData) {
		return parsedData.results[0];
	})
}

function updateProfile(data) {
	let name = `${data.name.first} ${data.name.last}`;
	fullname.innerText = name;
	avatar.src = data.picture.medium;
	username.innerText = data.login.username;
	city.innerText = data.location.city;
	email.innerText = data.email;
}

function displayErrors(err) {
	console.log('Errors');
	console.log(err);
}

getProfile();

btn.addEventListener('click', getProfile);




