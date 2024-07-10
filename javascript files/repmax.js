document.addEventListener('DOMContentLoaded', (event) => {
    // Select DOM elements
    const weightInput = document.getElementById("value1");
    const repsInput = document.getElementById("value2");
    const operator = document.querySelector("#weight-op");
    const calcButton = document.querySelector(".calc");
    const repMaxDisplay = document.getElementById("repMaxDisplay");
    const acButton = document.getElementById("acButton");
    const clearButton = document.getElementById("clearButton");
    const buttons = document.querySelectorAll(".button");

    let activeInput = weightInput; // Default to weightInput

    // Add focus event listeners to track the last active input
    weightInput.addEventListener('focus', () => {
        activeInput = weightInput;
    });
    repsInput.addEventListener('focus', () => {
        activeInput = repsInput;
    });

    // Arrow function to calculate One Rep Max
    const calc = (weight, reps) => Math.round(weight * (1 + reps / 30));

    // Add event listener to the calculate button
    calcButton.addEventListener('click', () => {
        const weight = parseFloat(weightInput.value);
        const reps = parseInt(repsInput.value);

        if (!isNaN(weight) && !isNaN(reps) && weight > 0 && reps > 0) {
            const oneRepMax = calc(weight, reps);
            repMaxDisplay.textContent = oneRepMax;
        } else {
            repMaxDisplay.textContent = 'Invalid input';
        }
    });

    clearButton.addEventListener('click', () => {
        if (activeInput) {
            activeInput.value = activeInput.value.slice(0, -1); // Remove the last character
            activeInput.focus(); // Re-focus the active input
        }
    });

    // Add event listener to the AC button to clear all inputs and reset the display
    acButton.addEventListener('click', () => {
        weightInput.value = '';
        repsInput.value = '';
        repMaxDisplay.textContent = '';
    });

    // Function to handle button clicks and update the input fields
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            // Append the button value to the active input field
            if (activeInput) {
                activeInput.value += value;
                activeInput.focus(); // Re-focus the last active input
            }
        });
    });
});
