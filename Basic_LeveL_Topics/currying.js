// 🎯 What is Currying in JavaScript?
// Currying is a functional programming technique where a function that takes multiple
// parameters is transformed into a series of nested functions, each taking a SINGLE parameter.
// This allows partial application — meaning we can pass arguments one-by-one and reuse functions easily.


// 🧪 Simple example of Currying
function add(a) {                // 1st function takes parameter `a`
    return function(b) {         // returns a new function that takes `b`
        return function(c) {     // returns another function that takes `c`
            return a + b * c;    // final expression executed only when all params are received
        }
    }
}

console.log(add(112)(2)(123));   // All arguments provided step-by-step → final result printed


// 🧩 Same functionality using arrow functions (shorter syntax)
const multy = (param1) => (param2) => (param3) =>
    console.log(param1 * param2 * param3);
// Each arrow function returns another function until `param3` is passed


multy(10)(10)(10);               // Arguments supplied one-by-one → output shown


// 📌 Note:
// If ANY argument is missing, the function will not execute the final logic.
// Instead, it will keep returning a function until all required parameters are provided.
