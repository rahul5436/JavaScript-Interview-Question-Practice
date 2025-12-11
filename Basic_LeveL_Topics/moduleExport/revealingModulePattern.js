// ======================================================================
// 🔵 Revealing Module Pattern Example
// ----------------------------------------------------------------------
// The goal of this pattern is to create PRIVATE variables/functions,
// and return ONLY the methods we want to make PUBLIC.
// ======================================================================

function reveallingModule() {

    // -----------------------------
    // 🔐 PRIVATE VARIABLE
    // -----------------------------
    // This variable is NOT accessible outside the function.
    let count = 0;

    // -----------------------------
    // 🔐 PRIVATE FUNCTION (Setter)
    // -----------------------------
    // This updates the private variable `count`.
    function setCount(countValue) {
        count = countValue;
    }

    // -----------------------------
    // 🔐 PRIVATE FUNCTION (Getter)
    // -----------------------------
    // This prints the private variable.
    function getCount() {
        console.log(count);
    }

    // -----------------------------
    // 🔓 PUBLIC API (Revealing Part)
    // -----------------------------
    // We return an object containing references to the internal functions.
    // Only these methods are publicly accessible.
    return {
        getCount,  // exposes getCount: allows reading the private value
        setCount   // exposes setCount: allows modifying the private value
    };
}

// ======================================================================
// 🔵 USAGE
// ----------------------------------------------------------------------
// Calling reveallingModule() returns an object with public functions,
// but the internal variables remain private.
// ======================================================================

const reveallingModuleTesting = reveallingModule();

// Now we can use the public methods:
reveallingModuleTesting.setCount(10);  // sets private count
reveallingModuleTesting.getCount();    // outputs: 10
