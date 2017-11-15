function House(bedrooms, bathrooms, numSqft) {
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.numSqft = numSqft;
}

const firstHouse = new House(2, 2, 2000);

firstHouse.bedrooms; // 2
firstHouse.bathrooms; // 2
firstHouse.numSqft; // 2000

// the 'new' keyword

//  - creates an empty object
//  - sets the value of 'this' to be that empty object
//  - it add the line 'return this' to the end of the function, which follows it
//  - it adds a property onto the empty object call "__proto__", which links
// 	  the prototype property on the constructor function to the empty object


// Constructor function for a Dog

function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.bark = function() {
		console.log(`${this.name} just barked!`);
	}
}

const rusty = new Dog('Rusty', 3);
const fido = new Dog('Fido', 5);

rusty.bark() // Rusty just barked!;
fido.bark() // Fido just barked!