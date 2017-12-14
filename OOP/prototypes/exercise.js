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