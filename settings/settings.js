

// Function to apply the font size to the body
function applyFontSize(fontSize) {
    document.body.style.fontSize = fontSize + 'px';
    localStorage.setItem('font-size', fontSize);
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const themeSelect = document.getElementById('theme');

    // Check the selected theme
    if (themeSelect.value === 'dark') {
        body.classList.add('dark-theme'); // Apply the dark theme
    } else {
        body.classList.remove('dark-theme'); // Apply the light theme
    }

    // Update the theme in local storage
    localStorage.setItem('theme', themeSelect.value);
}

// Function to change the font size
function changeFontSize(amount) {
    const fontSizeInput = document.getElementById('font-size');
    let currentSize = parseInt(fontSizeInput.value);

    // Check if the input value is a valid number
    if (!isNaN(currentSize)) {
        currentSize += amount; // Adjust the font size by the specified amount
        currentSize = Math.max(8, currentSize); // Ensure the font size doesn't go below 8
        fontSizeInput.value = currentSize; // Update the input value
        document.body.style.fontSize = currentSize + 'px'; // Apply the font size
    }
}

// Add event listeners to the font size buttons
document.getElementById('increase-font-btn').addEventListener('click', function () {
    changeFontSize(5); // Increase font size by 5 units
});

document.getElementById('decrease-font-btn').addEventListener('click', function () {
    changeFontSize(-5); // Decrease font size by 5 units
});



// Add a change event listener to the theme select
const themeSelect = document.getElementById('theme');
themeSelect.addEventListener('change', toggleTheme);

// Initialize settings based on local storage (if available)
document.addEventListener('DOMContentLoaded', function () {
    const savedFontSize = localStorage.getItem('font-size');
    const savedTheme = localStorage.getItem('theme');

    if (savedFontSize) {
        document.getElementById('font-size').value = savedFontSize;
        applyFontSize(savedFontSize);
    }

    if (savedTheme) {
        themeSelect.value = savedTheme;
        toggleTheme();
    }
});

// Function to save settings to local storage
function saveSettings() {
    const fontSize = document.getElementById('font-size').value;
    const theme = themeSelect.value;

    // Save settings to local storage
    localStorage.setItem('font-size', fontSize);
    localStorage.setItem('theme', theme);

    alert('Settings saved!');
}

// Function to change the font size
function changeFontSize(amount) {
    const fontSizeInput = document.getElementById('font-size');
    let currentSize = parseInt(fontSizeInput.value);

    if (amount === 'increase') {
        currentSize += 2; // Increase font size by 2 units (adjust as needed)
    } else if (amount === 'decrease') {
        currentSize -= 2; // Decrease font size by 2 units (adjust as needed)
    }

    // Set the new font size in the input element
    fontSizeInput.value = currentSize;

    // Apply the font size to the body
    document.body.style.fontSize = currentSize + 'px';
}

// Function to change the font size
function changeFontSize(fontSize) {
    const fontSizeInput = document.getElementById('font-size');
    fontSizeInput.value = fontSize; // Update the input value
    document.body.style.fontSize = fontSize + 'px';
}

// Add an input event listener to the font size input
const fontSizeInput = document.getElementById('font-size');
fontSizeInput.addEventListener('input', function () {
    let newSize = parseInt(this.value, 10);

    // Ensure the font size is within the valid range (8 to 64 pixels)
    if (isNaN(newSize) || newSize < 8) {
        newSize = 8; // Set the minimum font size
    } else if (newSize > 64) {
        newSize = 64; // Set the maximum font size
    }

    changeFontSize(newSize);
});

// Rest of your JavaScript code...

// Function to toggle between normal and inverted colors
function toggleInvert() {
    const body = document.body;
    const invertCheckbox = document.getElementById('invert-checkbox');

    // Check if the checkbox is checked
    if (invertCheckbox.checked) {
        body.classList.add('invert'); // Add the 'invert' class
    } else {
        body.classList.remove('invert'); // Remove the 'invert' class
    }

    // Update the invert state in local storage
    const isInvert = body.classList.contains('invert');
    localStorage.setItem('invert', isInvert ? 'true' : 'false');
}

// Add a change event listener to the checkbox
document.getElementById('invert-checkbox').addEventListener('change', toggleInvert);

// Function to toggle between normal and inverted colors
function toggleInvert() {
    const body = document.body;
    const invertCheckbox = document.getElementById('invert-checkbox');

    // Check if the checkbox is checked
    if (invertCheckbox.checked) {
        body.classList.add('invert'); // Add the 'invert' class
    } else {
        body.classList.remove('invert'); // Remove the 'invert' class
    }

    // Update the invert state in local storage
    const isInvert = body.classList.contains('invert');
    localStorage.setItem('invert', isInvert ? 'true' : 'false');
}

// Add a change event listener to the checkbox
document.getElementById('invert-checkbox').addEventListener('change', toggleInvert);


// Rest of your JavaScript code...

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const themeSelect = document.getElementById('theme');
    const theme = themeSelect.value;

    // Determine the background and text colors based on the selected theme
    let backgroundColor, textColor;

    if (theme === 'dark') {
        backgroundColor = 'black'; // Dark background
        textColor = 'white'; // Light text on dark background
    } else {
        backgroundColor = 'white'; // Light background
        textColor = 'black'; // Dark text on light background
    }

    // Apply the background and text colors to the body
    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;

    // Update the theme in local storage
    localStorage.setItem('theme', theme);
}

// Rest of your code...








document.getElementById('save-settings').addEventListener('click', saveSettings);
