// QUESTION : WHAT IS instanceof AND what it does
    // https://chatgpt.com/share/69390200-df48-8011-85a1-d4e185ef296e
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof


// Parent class definition
class parentObject {
    // Constructor of the parent class (runs automatically when object is created)
    constructor(name) {
        this.name = name;  // Store the passed name in the object
    }

    // Method of parent class to print the name
    printName() {
        console.log(this.name);
    }
}

// Child class extending the parent class (inherits its properties & methods)
class childObject extends parentObject {
    // Constructor of the child class
    constructor(name, surname) {
        super(name);       // Call parent class constructor to set 'name'
        this.surname = surname;  // Extra property only present in child class
    }

    // Method of child class to print both name & surname together
    fullName() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// Creating an instance (object) of the child class
obj1 = new childObject("rahul", "bisht");

// Calling method from parent class (inherited by child)
obj1.printName();   // Output: rahul

// Calling method from child class (only defined here)
obj1.fullName();    // Output: rahul bisht

// Check whether obj1 is an instance of parentObject
// Since childObject extends parentObject, obj1 inherits parentObject’s prototype
// So this returns true
console.log(obj1 instanceof parentObject);  // true
