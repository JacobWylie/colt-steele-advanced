function addNumbers(a, b, c, d) {
	return `${this.firstName} just calculated ${(a + b + c + d)}`;
}

const colt = {
	firstName: 'Colt'
}

const elie = {
	firstName: 'Elie'
}

addNumbers.call(elie, 1, 2, 3, 4); // Elie just calculated 10

addNumbers.apply(elie, [1, 2, 3, 4]); // Elie just calculated 10

//////////////////////////////////////////////////////////////////////

// When to use apply()

// When a function does not accept an array, apply will spread out 
// values in an array for us


const nums = [5, 7, 1, 4, 2]

Math.max(nums); // NaN

Math.max.apply(this, nums); // 7

// or 

function sumValues(a, b, c) {
	return a + b + c;
}

const values = [4, 1, 2];

sumValues(values); // '4, 1, 2undefinedundefinedundefined'

sumValues.apply(this, [4, 1, 2]) // 7