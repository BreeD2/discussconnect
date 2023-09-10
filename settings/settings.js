// Function to change font size
function changeFontSize(action) {
    const fontSizeElement = document.getElementById('font-size');
    let currentSize = parseInt(fontSizeElement.value);

    if (action === 'increase') {
        currentSize += 2; // Increase font size by 2 units (adjust as needed)
    } else if (action === 'decrease') {
        currentSize -= 2; // Decrease font size by 2 units (adjust as needed)
    }

    // Set the new font size
    document.body.style.fontSize = currentSize + 'px';
    fontSizeElement.value = currentSize;

    // Save settings when font size changes
    saveSettings();
}

// Function to toggle mode (e.g., light/dark)
function toggleMode() {
    const themeSelect = document.getElementById('theme');
    const selectedTheme = themeSelect.value;

    if (selectedTheme === 'light') {
        document.body.classList.remove('dark-theme');
    } else if (selectedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Save settings when theme changes
    saveSettings();
}

// Save settings
function saveSettings() {
    const fontSizeElement = document.getElementById('font-size');
    const themeSelect = document.getElementById('theme');

    // Save font size and theme settings to localStorage
    localStorage.setItem('fontSize', fontSizeElement.value);
    localStorage.setItem('theme', themeSelect.value);
}

// Load settings from localStorage
function loadSettings() {
    const fontSizeElement = document.getElementById('font-size');
    const themeSelect = document.getElementById('theme');

    const savedFontSize = localStorage.getItem('fontSize');
    const savedTheme = localStorage.getItem('theme');

    if (savedFontSize) {
        fontSizeElement.value = savedFontSize;
        document.body.style.fontSize = savedFontSize + 'px';
    }

    if (savedTheme) {
        themeSelect.value = savedTheme;
        toggleMode(); // Apply the saved theme
    }
}

// Event listeners
document.getElementById('increase-font-btn').addEventListener('click', () => changeFontSize('increase'));
document.getElementById('decrease-font-btn').addEventListener('click', () => changeFontSize('decrease'));
document.getElementById('toggle-mode-btn').addEventListener('change', toggleMode); // Use 'change' event for select
document.getElementById('save-settings').addEventListener('click', saveSettings);

// Load settings when the page loads
window.addEventListener('load', loadSettings);
