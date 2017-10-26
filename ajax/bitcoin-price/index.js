const price = document.querySelector('span');
const button = document.querySelector('button');
const currency = document.querySelectorAll('.curr');

function getPrice() {
	// Get the value of the selected currency
	let curr;
	currency.forEach(function(currency) {
		if(currency.checked) {
			curr = currency.value;
		}
		return curr;
	})

	// AJAX request for current Bitcoin price
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			let data = JSON.parse(xhr.responseText);
			// Change the HTML text
			price.innerHTML = `${data.bpi[curr].symbol} ${data.bpi[curr].rate}`;
		}
	}

	xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
	xhr.send();
}

// Call function when button is clicked
button.addEventListener('click', getPrice);

// Call function when currency is changed
currency.forEach(currency => {
	currency.addEventListener("click", getPrice);
})

// Call the function on page load
getPrice();