// 'new' keyword
// set the context of of the keyword 'this' using the 'new' keyword

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
} 

const elie = new Person('Elie', "Schoppik");

elie.firstName; // 'Elie'
elie.lastName; // 'Schoppik'