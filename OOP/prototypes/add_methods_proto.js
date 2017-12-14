function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
	this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
	this.isRunning = false;
}

Vehicle.prototype.honk = function() {
	if (this.isRunning) {
		return "beep";
	}
}

const car1 = new Vehicle("Ford", "Mustang", 1992);

car1.honk(); // undefined
car1.turnOn();
car1.honk(); // "beep"

