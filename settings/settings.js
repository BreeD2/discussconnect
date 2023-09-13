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
// Function to change contrast
function changeContrast(value) {
    const currentContrast = parseFloat(document.body.style.filter?.match(/contrast\((\d+)%\)/)?.[1] || 100);
    const newContrast = currentContrast + value;

    // Ensure contrast stays within a valid range (0% to 200%)
    if (newContrast >= 0 && newContrast <= 200) {
        document.body.style.filter = `contrast(${newContrast}%)`;
        localStorage.setItem('contrast', newContrast);
    }
}

// Function to change saturation
function changeSaturation(value) {
    const currentSaturation = parseFloat(document.body.style.filter?.match(/saturate\((\d+)%\)/)?.[1] || 100);
    const newSaturation = currentSaturation + value;

    // Ensure saturation stays within a valid range (0% to 200%)
    if (newSaturation >= 0 && newSaturation <= 200) {
        document.body.style.filter = `saturate(${newSaturation}%)`;
        localStorage.setItem('saturation', newSaturation);
    }
}

// Function to change blur
function changeBlur(value) {
    const currentBlur = parseFloat(document.body.style.filter?.match(/blur\((\d+)px\)/)?.[1] || 0);
    const newBlur = currentBlur + value;

    // Ensure blur stays within a valid range (0px to 10px)
    if (newBlur >= 0 && newBlur <= 10) {
        document.body.style.filter = `blur(${newBlur}px)`;
        localStorage.setItem('blur', newBlur);
    }
}

// Add event listeners to the contrast buttons
document.getElementById('contrast-up-btn').addEventListener('click', function () {
    changeContrast(10); // Increase contrast by 10%
});

document.getElementById('contrast-down-btn').addEventListener('click', function () {
    changeContrast(-10); // Decrease contrast by 10%
});

// Add event listeners to the saturation buttons
document.getElementById('saturation-up-btn').addEventListener('click', function () {
    changeSaturation(10); // Increase saturation by 10%
});

document.getElementById('saturation-down-btn').addEventListener('click', function () {
    changeSaturation(-10); // Decrease saturation by 10%
});

// Add event listeners to the blur buttons
document.getElementById('blur-up-btn').addEventListener('click', function () {
    changeBlur(1); // Increase blur by 1px
});

document.getElementById('blur-down-btn').addEventListener('click', function () {
    changeBlur(-1); // Decrease blur by 1px
});

// Initialize settings based on local storage (if available)
document.addEventListener('DOMContentLoaded', function () {
    const savedContrast = localStorage.getItem('contrast');
    const savedSaturation = localStorage.getItem('saturation');
    const savedBlur = localStorage.getItem('blur');

    if (savedContrast) {
        document.body.style.filter = `contrast(${savedContrast}%)`;
    }

    if (savedSaturation) {
        document.body.style.filter = `saturate(${savedSaturation}%)`;
    }

    if (savedBlur) {
        document.body.style.filter = `blur(${savedBlur}px)`;
    }
});

// Function to handle the click event of filter buttons
function handleFilterButtonClick(event) {
    const button = event.target;
    const filterElement = document.getElementById('filter-element'); // Replace with your element ID
    const filterValue = button.getAttribute('data-filter');

    // Remove all custom filter classes from the filter element
    filterElement.classList.remove('grayscale-filter', 'sepia-filter', 'saturate-filter', 'hue-rotate-filter', 'brightness-filter');

    // Toggle the custom filter class for the clicked button
    if (filterValue) {
        filterElement.classList.toggle(filterValue);
    }
}

// Add click event listeners to filter buttons
const filterButtons = document.querySelectorAll('.filter-btn, .filter-btn2, .filter-btn3, .filter-btn4, .filter-btn5');
filterButtons.forEach(button => {
    button.addEventListener('click', handleFilterButtonClick);
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to increase saturation
    function increaseSaturation() {
        const elements = document.querySelectorAll(".saturation");
        elements.forEach(function (element) {
            element.style.filter = "saturate(150%)"; // Increase the saturation to 150%
        });
    }

    // Function to decrease saturation
    function decreaseSaturation() {
        const elements = document.querySelectorAll(".saturation");
        elements.forEach(function (element) {
            element.style.filter = "saturate(50%)"; // Decrease the saturation to 50%
        });
    }

    // Attach click event listeners to the buttons
    document.getElementById("increase-saturation-btn").addEventListener("click", increaseSaturation);
    document.getElementById("decrease-saturation-btn").addEventListener("click", decreaseSaturation);
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to apply the saturation effect
    function applySaturation() {
        const elements = document.querySelectorAll(".saturation");
        elements.forEach(function (element) {
            element.style.filter = "saturate(150%)"; // Apply the saturation effect
        });
    }

    // Function to remove the saturation effect
    function removeSaturation() {
        const elements = document.querySelectorAll(".saturation");
        elements.forEach(function (element) {
            element.style.filter = "none"; // Remove the saturation effect
        });
    }

    // Function to handle theme selection
    function handleThemeSelection() {
        const themeSelect = document.getElementById("theme");
        const selectedTheme = themeSelect.value;

        if (selectedTheme === "dark") {
            applySaturation(); // Apply saturation for the "Dark" theme
        } else {
            removeSaturation(); // Remove saturation for the "Light" theme
        }
    }

    // Function to handle invert colors selection
    function handleInvertSelection() {
        const invertSelect = document.getElementById("invert-select");
        const selectedOption = invertSelect.value;

        if (selectedOption === "yes") {
            // Apply invert colors effect
            document.body.classList.add("invert");
        } else {
            // Remove invert colors effect
            document.body.classList.remove("invert");
        }
    }

    // Attach event listeners
    document.getElementById("theme").addEventListener("change", handleThemeSelection);
    document.getElementById("invert-select").addEventListener("change", handleInvertSelection);
});


document.getElementById('save-settings').addEventListener('click', saveSettings);
