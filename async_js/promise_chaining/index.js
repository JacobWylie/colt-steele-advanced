let counter = 0;

function incCounter() {
	counter++;
	console.log('Counter:', counter);
}

function runLater(callback, timeInMs) {
	const p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			const res = callback();
			resolve(res);
		}, timeInMs);
	});
	return p;
}

runLater(incCounter, 1000).then(function() {
	return runLater(incCounter, 2000);
}).then(function() {
	return runLater(incCounter, 3000);
});