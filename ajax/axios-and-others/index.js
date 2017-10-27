const xhrBtn = document.querySelector('#xhr');
const fetchBtn = document.querySelector('#fetch');
const jqueryBtn = document.querySelector('#jquery');
const axiosBtn = document.querySelector('#axios');
const display = document.querySelector('#quote');
const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


// Change quote on screen
function displayQuote(quote) {
	display.innerText = quote;
}


// XHR request
function xhrRequest() {
	const XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function() {
		if(XHR.readyState === 4 && XHR.status === 200) {
			const quote = JSON.parse(XHR.responseText)[0];
			displayQuote(quote);
		}
	}
	XHR.open('GET', url);
	XHR.send();
}

xhrBtn.addEventListener('click', xhrRequest);


// Fetch() request
function fetchRequest() {
	fetch(url)
	.then( function(res) {
		res.json().then( function(data) {
			displayQuote(data[0]);
		})
	})
	.catch( function() {

	})
}

fetchBtn.addEventListener('click', fetchRequest);


// jQuery request
function jqueryRequest() {
	$.getJSON(url)
	.done( function(data) {
		displayQuote(data[0]);
	}) 
}

jqueryBtn.addEventListener('click', jqueryRequest);


// Axios request
function axiosRequest() {
	axios.get(url)
	.then( function(res) {
		displayQuote(res.data[0]);
	})
	.catch( function() {

	})
}

axiosBtn.addEventListener('click', axiosRequest);





























