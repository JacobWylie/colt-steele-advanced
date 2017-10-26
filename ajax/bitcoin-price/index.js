const price = document.querySelector('span');
const button = document.querySelector('button');
const euro = document.querySelector('#euro');
const pound = document.querySelector('#pound');
const dollar = document.querySelector('#dollar');

function getPrice() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			let data = JSON.parse(xhr.responseText);
			let curr = 'EUR';
			if (euro.checked) {
				price.innerHTML = `${data.bpi.EUR.symbol} ${data.bpi.EUR.rate}`;
			} else if (pound.checked) {
				price.innerHTML = `${data.bpi.GBP.symbol} ${data.bpi.GBP.rate}`;
			} else if (dollar.checked) {
				price.innerHTML = `${data.bpi.USD.symbol} ${data.bpi.USD.rate}`;
			}

		}
	}

	xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
	xhr.send();
}

button.addEventListener('click', getPrice)

getPrice();