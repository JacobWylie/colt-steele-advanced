var arr = [1,2,3,4,5,6];

///////////////////////////////////////
function double(arr) {
	for(i = 0; i < arr.length; i++) {
		console.log(arr[i] * 2)
	}
}

double(arr);

/////////////////////////////
function double(num) {
	console.log(num * 2);
}

arr.forEach(double);


/////////////////////////////
arr.forEach( function(num) {
	console.log(num * 2);
})