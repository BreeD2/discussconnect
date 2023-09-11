// Function to change the font size
function changeFontSize(fontSize) {
    document.documentElement.style.fontSize = fontSize + 'px'; // Set font size for the entire document
}

// Function to toggle the theme (light/dark)
function toggleTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

// Function to save settings to local storage
function saveSettings() {
    const fontSize = document.getElementById('font-size').value;
    const theme = document.getElementById('theme').value;

    // Save settings to local storage
    localStorage.setItem('font-size', fontSize);
    localStorage.setItem('theme', theme);

    // Apply settings
    changeFontSize(fontSize);
    toggleTheme(theme);

    alert('Settings saved!');
}

// Initialize settings based on local storage (if available)
document.addEventListener('DOMContentLoaded', function () {
    const savedFontSize = localStorage.getItem('font-size');
    const savedTheme = localStorage.getItem('theme');

    if (savedFontSize) {
        document.getElementById('font-size').value = savedFontSize;
        changeFontSize(savedFontSize);
    }

    if (savedTheme) {
        document.getElementById('theme').value = savedTheme;
        toggleTheme(savedTheme);
    }
});

// Add click event listener for "Save Settings" button
document.getElementById('save-settings').addEventListener('click', saveSettings);
