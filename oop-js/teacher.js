// Example of Prototypal Inheritance

function Teacher(firstName, lastName, roomNumber) {
    Person.call(this, firstName, lastName);
    this.room = roomNumber;
}

Teacher.prototype = Object.create(Person.prototype);
