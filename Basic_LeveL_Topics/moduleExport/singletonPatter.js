// ======================================================================
// 🔵 Singleton Pattern Using a Class
// ----------------------------------------------------------------------
// This ensures ONLY ONE instance of the class can ever exist.
// Every time `new student()` is called, it returns the SAME instance.
// ======================================================================

class student {
    constructor(name) {

        // ------------------------------------------------------------
        // If an instance already exists, RETURN the existing instance.
        // This prevents creating a new object.
        // ------------------------------------------------------------
        if (student.instance) {
            return student.instance;  // Return previously created instance
        }

        // ------------------------------------------------------------
        // If NO instance exists yet:
        // - Save this newly created object as the single instance.
        // - Initialize the object's properties.
        // ------------------------------------------------------------
        student.instance = this;  // Store the instance
        this.name = name;         // Set initial property
    }
}

// ======================================================================
// 🔵 USAGE
// ----------------------------------------------------------------------
// Even though we call `new` twice, both s1 and s2 will reference
// the SAME SINGLE object.
// ======================================================================

const s1 = new student("rahul bisht");
const s2 = new student("sheetal bisht");

// Since student is a Singleton, s2 does NOT overwrite the name.
// Both s1 and s2 point to the FIRST created instance.
console.log(s1.name, s2.name);
// Output: "rahul bisht rahul bisht"
