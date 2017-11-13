const person = {
	firstName: 'Colt',
	sayHi: function() {
		return `Hi ${this.firstName}`;
	},
	determineContext: function() {
		return this === person;
	},
	dog: {
		sayHello: function() {
			`Hello ${this.firstName}`;
		},
		determineContext: function() {
			return this === person;
		}
	}
}


person.sayHi(); // 'Hi Colt'
person.determineContext(); // true

person.dog.sayHello(); // 'Hello undefined'
person.dog.determineContext(); // false

person.dog.sayHello.call(person); // 'Hello Colt'
person.dog.sayHello.call(person); // true

// Using call worked
// Notice that you do NOT invoke sayHello or determineContext


////////////////////////////////////////////////////////////////////////////////

function sayHi() {
	return `Hi ${this.firstName}`;
}

const colt = {
	firstName: 'Colt'
}

const elie = {
	firstName: 'Elie'
}

sayHi.call(colt); // Hi Colt
sayHi.call(elie); // Hi Elie