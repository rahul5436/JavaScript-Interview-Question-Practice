
// debounce 

// UNOFFICAL STATEMENT
// finding for a event that marks the break in contineius input and then we perform
// our operation in order to make API fetching like operation effecient
// API is called after a set interval of time , if there is any distruption then we start the 
// timer again


//OFFICAL STATEMENT
// Debouncing is a performance optimization technique that ensures a function
// runs only after the user stops performing an action for a certain amount of time.


// Selecting the input field by its ID
let searchElementDebouncing = document.querySelector("#serachBarDebouncing")

// A factory function that creates a debounced version of any function
function factoryDebouncing(func, timer) {

    console.log("called the main function")

    // This variable will store the timeout ID between multiple calls
    let timeOutId

    // Returning a new function (this creates a closure)
    // "...param" collects all arguments passed into an array
    return function (...param) {

        // If the function was called earlier, cancel its previous timer
        clearTimeout(timeOutId)

        // Start a new timer
        timeOutId = setTimeout(() => {

            // After timer finishes, we call the original function
            // "...param" spreads array back into separate arguments
            func(...param)

        }, timer) // delay in milliseconds
    }
}

// Function that prints the entered value
// 'element' will be the input element passed from the debounced function
function searchPrint(element) {
    if (element.value != "") {
        alert(element.value) // show the value in an alert
    }
}

// Creating a debounced version of searchPrint
// Now searchPrint will only fire after 1000ms of no typing
const debouncingSearchPrint = factoryDebouncing(searchPrint, 1000)

// Add event listener only if element exists in DOM
if (searchElementDebouncing) {

    // on every key press ("input" event):
    searchElementDebouncing.addEventListener("input", () => {

        // pass the input element as argument
        // but debounce will delay the execution
        debouncingSearchPrint(searchElementDebouncing);
    });
}




let searchElementTrotteling = document.querySelector("#serachBarTrotteling")



