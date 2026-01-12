function factorItemOutfunction(fn, delay = 2000) {

    let passChecker = false;
    return function (...params) {
        if (!passChecker) {
            passChecker = true;
            fn(...params);
            setTimeout(() => {

                passChecker = false
            }, delay)
        }
    }

}

function customFunction(element) {
    console.log("inside the custom section")
    console.log(element.value);
}

const wrappedFunction = factorItemOutfunction(customFunction, 2000);

document.addEventListener("DOMContentLoaded", () => {
    let elementSearch = document.querySelector("#serachBarDebouncing");

    elementSearch.addEventListener("input", (event) => {
        wrappedFunction(event.target);
    });
});


// =========>>>using the curring






