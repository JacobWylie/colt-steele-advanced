// Private Variables

// In other languages, there exists support for variables that not be modified externally.
// We call those private variables, but in Javascript we don't have that built in.
// No worries - closures can help.

function counter() {
	let count = 0;
	return function() {
		count++;
		return count;
	}
}

const counter1 = counter();
counter1(); // 1
counter1(); // 2

const counter2 = counter();
counter2(); // 1
counter2(); // 2

counter1(); // 3  This is not affected by counter2

count; // ReferenceError: count is not defined - because it is private