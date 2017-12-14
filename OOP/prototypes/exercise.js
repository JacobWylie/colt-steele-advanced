/* 

1 - Create a constructor function for a Person. Each person should have a firstName, lastName, 
	favoriteColor, favoriteNumber)

2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName 
	property of an object created by the Person constructor concatenated together.
    
Examples:    
	var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

3 -  Add a property on the object created from the Person function called family which is an empty 
	 array. This will involve you adding an additional line of code to your Person constructor.

4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from 
	the Person constructor to the family array. To make sure that the object you are adding is an object 
	construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that 
	your family array does not include duplicates! This method should return the length of the family array.

*/

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.family = [];
}

Person.prototype.fullName = function() {
	return `${this.firstName} ${this.lastName}`;
}

Person.prototype.addToFamily = function(newMember) {
	if(newMember instanceof Person && !this.family.includes(newMember)) {
		this.family.push(newMember)
	}
	return this.family.length;
};

const person = new Person("Elie", "Schoppik", "purple", 34)
const anotherPerson = new Person();
person.addToFamily(anotherPerson); // 1
person.addToFamily(anotherPerson); // 1
person.family.length; // 1
person.addToFamily("test"); // 1
person.addToFamily({}); // 1
person.addToFamily([]); // 1
person.addToFamily(false); // 1
person.family.length;// 1
const anotherPerson2 = new Person();
person.addToFamily(anotherPerson2); //2