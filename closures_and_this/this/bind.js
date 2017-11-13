// The parameters work like call, but bind returns a function
// with the context of 'this' bound already


function addNumbers(a, b, c, d) {
	return `${this.firstName} just calculated ${(a + b + c + d)}`;
}

const elie = {
	firstName: "Elie"
}

const elieCalc = addNumbers.bind(elie, 1, 2, 3, 4); // function(){}...
elieCalc(); // Elie just calculated 10


// With bind() we do not need to know all the arguments up front

const elieCalc = addNumbers.bind(elie, 1, 2); // function(){}...
elieCalc(3, 4) // Elie just calculated 10


/////////////////////////////////////////////////////////////////////////////

// Very commonly we lose the context of 'this', but in functions
// that we do not want to execute right away

const colt = {
	firstName: 'Colt',
	sayHi: function() {
		setTimeout(function() {
			console.log(`Hi ${this.firstName}`);
		}, 1000)
	}
}

// setTimeout is a method on the window object. Context is lost.
colt.sayHi(); // Hi undefined (1000 milliseconds later)


// Use bind() to set the correct contect of 'this'
const colt = {
	firstName: 'Colt',
	sayHi: function() {
		setTimeout(function() {
			console.log(`Hi ${this.firstName}`);
		}.bind(this), 1000)
	}
}

colt.sayHi(); // Hi Colt (1000 milliseconds later)




















