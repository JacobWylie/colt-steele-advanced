// every()

// - Iterates through an array
// - Runs a callback on each value in the array
// - If the callback returns false for any single value, return false
// - Otherwise, return true
// - hte result of the callback will always be a boolean


function allLowerCase(str) {
	return str.split('').every(val => val === val.toLowerCase())
}

allLowerCase('this is really nice'); // true
allLowerCase('this is Really nice'); // false


function allArrays(arr) {
	return arr.every(Array.isArray)
}

allArrays([[1], [3,4]]); // true
allArrays([[1], [2], {}]) // false