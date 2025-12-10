// what is Prototypal inheritance
// what is Prototype chain

// ---------------- Parent Constructor Function ----------------
function parentFunction(firstName) {
    // Adding a property to the new object
    this.name = firstName;
}

// Adding a method to Parent's prototype
parentFunction.prototype.printfirstName = function () {
    console.log("Parent says: My first name is " + this.name);
};


// ---------------- Child Constructor Function ----------------
function childFunction(firstName, surName) {

    // Borrowing properties from parent constructor
    // so 'name' becomes a property of the child object as well
    parentFunction.call(this, firstName);

    // Adding child's specific property
    this.surName = surName;
}


// 🔗 Setting up inheritance
// Connect child's prototype → parent's prototype
childFunction.prototype = Object.create(parentFunction.prototype);

// Reset constructor pointer (good practice)
childFunction.prototype.constructor = childFunction;


// ---------------- Child Methods ----------------

// Print both firstName & surName
childFunction.prototype.fullName = function () {
    console.log(`Full Name: ${this.name} ${this.surName}`);
};

// Print only surname
childFunction.prototype.printSurName = function () {
    console.log("Surname: " + this.surName);
};


// ---------------- Testing the Inheritance ----------------
const obj1 = new childFunction("Rahul", "Bisht");

// 🔽 These work because inheritance is correctly set
obj1.printfirstName();     // Method from parent
obj1.printSurName();       // Method from child
obj1.fullName();           // Method using both properties
