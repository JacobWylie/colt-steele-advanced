const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		if(xhr.status === 200) {
			console.log(xhr.responseText);
		} else {
			console.log(xhr.status);
		}
	}
}

xhr.open("GET", "https://api.github.com/zen")
xhr.send()