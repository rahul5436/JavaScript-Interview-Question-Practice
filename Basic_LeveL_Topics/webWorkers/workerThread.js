self.onmessage = function ({ data }) {
    console.log("Received from main thread:", data);

    const { start = 0, end = 100000 } = data; // defaults if not provided

    let sum = 0;
    for (let i = start; i <= end; i++) {
        console.log(i)
        sum += i;
    }

    // Send result back
    self.postMessage(sum);
};
