const p1 = new Promise(function(resolve, reject) {
	const num = Math.random();
	if(num<0.5) {
		resolve(num);
	} else {
		reject(num);
	}
});

p1.then(function(result) {
	console.log('Success:', result);
}).catch(function(error) {
	console.log('Error:'. error)
});