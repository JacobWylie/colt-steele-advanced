function countDown(seconds) {
	const timer = setInterval(function() {
		seconds--;
		if(seconds === 0) {
			console.log("Ring Ring Ring");
			clearInterval(timer);
		} else {
			console.log(seconds);
		}
	}, 1000);
}

