'use strict'
console.log(this)
// In strict mode (browser): `this` in global scope → undefined
// In Node.js environment: global scope `this` → module.exports


// ---------------------- Regular Function Example ----------------------
const obj1 = {
    name: "rahul bisht",
    x: function () {
        // In regular functions, `this` depends on HOW the function is called
        console.log(this)
    }
}

// Called as a method of obj1 → `this` points to obj1
obj1.x()



// ---------------------- call() Example ----------------------
const student1 = {
    name: "student1",
    printName: function (surName) {
        // `this` refers to the object that invoked the function
        console.log(this.name, this.surName)
    }
}

const student2 = {
    name: "student2",
    surName: "student2 surname"
}

// Manually changing the value of `this` using call()
// Now inside printName(), `this` will refer to student2
student1.printName.call(student2, "bisht")
// Output: "student2 student2 surname"
// Reason: `this` was forced to student2



// ---------------------- Arrow Function Example ----------------------
// ⚠ Arrow functions do NOT have their own `this`
// They use the value of `this` from their LEXICAL (outer) scope
const obj2 = {
    name: "arrow example",
    
    x: () => {
        console.log(this)
        // Here `this` does NOT point to obj2
        // It inherits `this` from the surrounding scope (global/module)
    },

    y: function () {
        // A regular function, so `this` = obj2 here
        console.log("Inside y:", this)

        const arrowFnInside = () => {
            // Arrow function inherits `this` from y()
            console.log("Inside arrowFnInside:", this)
        }
        arrowFnInside()
    }
}

// Arrow function directly inside object → this = global (or module.exports)
obj2.x()

// Regular function method → this = obj2
// And arrow function inside it → also this = obj2 (inherited)
obj2.y()
