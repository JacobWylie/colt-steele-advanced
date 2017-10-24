const btn = document.querySelector('.btn');
const photo = document.querySelector('#photo');

btn.addEventListener('click', function() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			let url = JSON.parse(xhr.responseText);
			photo.setAttribute('src', url.message);
		}
	}

	xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
	xhr.send();
})

const heading = document.querySelector('#heading');
const img = document.querySelector('img');

const textShine = () => {
	let loopText = "Dogs For Matt"
	for(i=0;i<loopText.length;i++) {
		let iDiv = document.createElement('button');
	    iDiv.classList.add("title");
	    setInterval( () => {
	    	iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
	    	iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
	    }, 300);
	    iDiv.innerHTML = `${loopText[i]}  `;
	    heading.appendChild(iDiv); 
	}
}

const border = () => {
	setInterval( () => {
	    	img.style.borderColor = '#'+Math.random().toString(16).substr(-6);
	    }, 300);
}

border();
textShine();
