const price = document.querySelector('span');
const button = document.querySelector('button');
const currency = document.querySelectorAll('.curr');

function getPrice() {
	let curr;
	currency.forEach(function(currency) {
		if(currency.checked) {
			curr = currency.value;
		}
		return curr;
	})

	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			let data = JSON.parse(xhr.responseText);
			price.innerHTML = `${data.bpi[curr].symbol} ${data.bpi[curr].rate}`;
		}
	}

	xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
	xhr.send();
}

button.addEventListener('click', getPrice);

currency.forEach(currency => {
	currency.addEventListener("click", getPrice);
})

getPrice();