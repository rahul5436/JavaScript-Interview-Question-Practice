// Select the main button (the one that shows alert)
const btnElement = document.querySelector("button.mainButton");

// Select the remove button (the one that cancels the event listener)
const removeEventButton = document.querySelector("button.removeButton");

if (btnElement) {
    // Create an AbortController to control (abort/cancel) the event listener later
    const removeElementEvent = new AbortController();

    // Add click event to the main button
    btnElement.addEventListener("click", () => {
        alert("button is clicked");
    }, {
        capture: true,       // Event is captured during the capturing phase (before bubbling)
        once: true,          // Event will fire only once, then automatically removed
        passive: true,       // Indicates the event handler won't call preventDefault()
        signal: removeElementEvent.signal // Connect event listener with AbortController
    });

    // Add event to the "remove event" button
    removeEventButton.addEventListener('click', () => {
        removeElementEvent.abort();  // This cancels the event listener on main button
        // After abort(), clicking main button will no longer trigger alert
    });
}
