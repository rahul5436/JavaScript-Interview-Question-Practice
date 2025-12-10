// Example of Closure in JavaScript

function outer() {
    // A local variable inside outer() function
    const name = "rahul bisht";

    // inner() function is defined inside outer(), so it can access 'name'
    function inner() {
        // Using setTimeout creates an asynchronous execution (runs after 3 seconds)
        setTimeout(() => {
            console.log("timer function executed");
            
            // Even after outer() has finished, 
            // inner() still remembers and accesses 'name' due to closure
            console.log(name);
        }, 3000);
    }

    // Calling the inner function
    inner();

    // This runs immediately before the timeout callback
    console.log("outer function is executed and done");
}

// Calling the outer function
outer();

/*
OUTPUT:
outer function is executed and done   -> printed immediately
timer function executed               -> printed after 3 seconds
rahul bisht                           -> value accessed through closure
*/
