// script.js

// =================================================================================
// Part 2: JavaScript Functions (Scope, Parameters & Return Values)
// =================================================================================
console.log("--- Part 2: Functions in Action ---");

// Example of Global vs. Local Scope
const globalVariable = "I am a global variable."; // Global scope

function showScope() {
    const localVariable = "I am a local variable."; // Local scope
    console.log(globalVariable); // This works
    console.log(localVariable); // This works
}

showScope();
// console.log(localVariable); // This would cause a ReferenceError because it's out of scope

// Displaying a global variable on the page
const globalVarEl = document.getElementById("globalVar");
globalVarEl.textContent = globalVariable;

// Function with Parameters and a Return Value
function calculateRectangleArea(length, width) {
    const area = length * width; // Variable 'area' is local to this function
    return area; // The function returns the calculated value
}

const areaResult = calculateRectangleArea(10, 5);
const areaResultEl = document.getElementById("areaResult");
areaResultEl.textContent = areaResult;
console.log("Function returned a value: The area is " + areaResult);

// =================================================================================
// Part 3: Combining CSS Animations with JavaScript
// =================================================================================
console.log("\n--- Part 3: Combining CSS & JS ---");

// Action 1: Triggering an animation on click
const triggerButton = document.getElementById("triggerButton");
const targetBox = document.getElementById("targetBox");

triggerButton.addEventListener("click", () => {
    // Add the CSS class to trigger the bounce animation
    targetBox.classList.add("bounce");
    console.log("Triggered animation on targetBox.");
    
    // Remove the class after the animation finishes so it can be re-triggered
    // We use setTimeout to wait for the animation duration (0.8s)
    setTimeout(() => {
        targetBox.classList.remove("bounce");
    }, 800);
});

// Action 2: Showing and hiding a modal with CSS transitions
const showModalBtn = document.getElementById("showModalBtn");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModalBtn = document.getElementById("closeModalBtn");

showModalBtn.addEventListener("click", () => {
    // Add the 'active' class to the backdrop to show the modal
    modalBackdrop.classList.add("active");
    console.log("Show Modal button clicked.");
});

closeModalBtn.addEventListener("click", () => {
    // Remove the 'active' class to hide the modal
    modalBackdrop.classList.remove("active");
    console.log("Close Modal button clicked.");
});