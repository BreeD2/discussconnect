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

// Load settings when the page loads
window.addEventListener('load', loadSettings);
