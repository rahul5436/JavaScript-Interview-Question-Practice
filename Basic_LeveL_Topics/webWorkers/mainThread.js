const sumWorker = new Worker('./workerThread.js');

function changeBackgroundColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = randomColor;
}

function calculateSum() {
    // Sending parameters to worker
    sumWorker.postMessage({
        action: "sum",
        start: 1,
        end: 100000   // worker will calculate sum of 1 to 100M
    });
}

sumWorker.onmessage = function (message) {
    alert(message.data);
}

document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);
