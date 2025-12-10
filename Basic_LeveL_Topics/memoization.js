// ⭐ Memoization ⭐
// Memoization is a performance optimization technique.
// It stores the result of an expensive function call in a cache.
// If the same input occurs again, the stored result is returned instantly
// instead of performing the calculation again.

// --------------------------------------
// Normal function → calculates sum from 0 to `num`
// --------------------------------------
function provideSum(num) {
    let sum = 0;

    // Loop from 0 → num and accumulate total
    for (let i = 0; i <= num; i++) {
        sum += i;
    }

    return sum; // final result
}


// --------------------------------------
// Higher-order function for Memoization
// Takes any function and returns its memoized version
// --------------------------------------
const memo = (func) => {

    // Cache object to store previously computed results
    const cacheMemo = {};

    // Returned function has access to the cache due to closure
    return function (...args) {

        // Using first argument as the cache key
        const key = args[0];

        // If cache already has a stored result for this argument:
        if (key in cacheMemo) {
            console.log("📌 Returning from cache:", key);
            return cacheMemo[key]; // instantly return saved value
        }

        // If not stored → compute using the original function
        console.log("⚙️ Calculating fresh:", key);
        const result = func(...args);

        // Save result in cache for future use
        cacheMemo[key] = result;

        return result; // return the freshly computed result
    };
};


// --------------------------------------
// Create a memoized version of provideSum
// --------------------------------------
const memoProvideSum = memo(provideSum);


// --------------------------------------
// Execution & Memoization Results
// --------------------------------------
console.log(memoProvideSum(200)); // calculates fresh (first time)
console.log(memoProvideSum(200)); // returns cached result (faster)

console.log(memoProvideSum(100)); // fresh
console.log(memoProvideSum(100)); // cached
