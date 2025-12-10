// Function Composition:
// When we combine two (or more) functions together so that
// the output of one function becomes the input of the next.
// Example: Outer(Inner(param))

// compose() takes two functions and returns a new function.
// That new function takes 'param' and applies funtionTwo first,
// then passes its result to functionOne:  functionOne(funtionTwo(param))
const compose = (functionOne, funtionTwo) => param => functionOne(funtionTwo(param))

// Function that adds 10 to the number
const add10 = function(num) {
    return num + 10;
}

// Function that multiplies the number by 10
const mult10 = function(num) {
    return num * 10;
}

// compose(mult10, add10)(10)
// Step-by-step:
// 1️⃣ add10(10)  → 20
// 2️⃣ mult10(20) → 200
console.log(compose(mult10, add10)(10)); // Output: 200
