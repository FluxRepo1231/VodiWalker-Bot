// Select the text element
const fluxRepoText = document.getElementById("fluxRepoText");

// Array of colors to cycle through
const colors = ["#ffcc00", "#00ccff", "#ff0066", "#00ff66", "#cc00ff"];

// Variable to keep track of the current color index
let colorIndex = 0;

// Add a click event listener to the text element
fluxRepoText.addEventListener("click", function () {
    // Change the color of the text
    fluxRepoText.style.color = colors[colorIndex];

    // Update the color index to cycle through colors
    colorIndex = (colorIndex + 1) % colors.length;
});
