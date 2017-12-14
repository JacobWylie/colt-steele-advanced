/*

PART II 

1 - Implement your own version of Array.prototype.map. The function should accept a callback and return 
	a new array with the result of the callback for each value in the array. 

2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"

*/

Array.prototype.myMap = function(callback) {
	const newArr = [];
	for(i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this))
	}
	return newArr;
}

[1, 2, 3].myMap(x => x * 2); // [2, 4, 6]


String.prototype.reverse = function() {
	let newStr = "";
	for (i = this.length - 1; i >= 0; i--) {
		newStr += this[i];
	}
	return newStr;
}

"Hello".reverse(); // 'olleH'
