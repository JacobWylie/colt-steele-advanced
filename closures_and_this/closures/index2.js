function classRoom() {
	const instructors = ['Elie', 'Colt'];
	return {
		getInstructors: function() {
			// return copy of variable to be truly private
			return instructors.slice();
		},
		addInstructor: function(instructor) {
			instructors.push(instructor);
			// return copy of variable to be truly private
			return instructors.slice();
		}
	}
}

const firstClass = classRoom();
firstClass.getInstructors(); // ['Elie', 'Colt']
firstClass.addInstructor('Tim'); // ['Elie', 'Colt', 'Tim']

const secondClass = classRoom();
secondClass.getInstructors(); // ['Elie', 'Colt']
secondClass.addInstructor('Matt'); // ['Elie', 'Colt', 'Matt'] 
