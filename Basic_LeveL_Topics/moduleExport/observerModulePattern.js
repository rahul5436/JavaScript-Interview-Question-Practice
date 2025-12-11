// ======================================================================
// 🔵 OBSERVER PATTERN
// ----------------------------------------------------------------------
// The Subject keeps a list of observers (listeners).
// Whenever something happens (notify), all observers are informed.
// This pattern is used in event systems, Redux-like stores, sockets, etc.
// ======================================================================

class Subject {
  constructor() {
    // Array to store all subscriber callback functions
    this.observers = [];
  }

  // -----------------------------------------------------------
  // 🔹 subscribe(fn)
  // Adds a new observer/listener.
  // The "fn" is a callback that runs when notify() is triggered.
  // -----------------------------------------------------------
  subscribe(fn) {
    this.observers.push(fn);
  }

  // -----------------------------------------------------------
  // 🔹 notify(data)
  // Calls every subscribed function and passes them the new data.
  // This “notifies” all observers that something has changed.
  // -----------------------------------------------------------
  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

// ======================================================================
// 🔵 USAGE
// ----------------------------------------------------------------------
// Create a subject instance (Event Manager).
// Subscribe multiple listeners.
// Notify all listeners with a message/event.
// ======================================================================

const subject = new Subject();

// Adding first observer/listener
subject.subscribe((d) => console.log("Listener 1:", d));

// Adding second observer/listener
subject.subscribe((d) => console.log("Listener 2:", d));

// Trigger event → both listeners receive the data
subject.notify("Rahul clicked a button!");
// Output:
// Listener 1: Rahul clicked a button!
// Listener 2: Rahul clicked a button!
