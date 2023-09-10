document.addEventListener("DOMContentLoaded", function () {
    // Retrieve settings from local storage
    const fontSizeInput = document.getElementById("font-size");
    const themeSelect = document.getElementById("theme");
    const saveButton = document.getElementById("save-settings");

    // Load settings from local storage
    const savedFontSize = localStorage.getItem("font-size");
    const savedTheme = localStorage.getItem("theme");

    if (savedFontSize) {
        fontSizeInput.value = savedFontSize;
        // Apply font size to the body
        document.body.style.fontSize = savedFontSize + "px";
    }

    if (savedTheme) {
        themeSelect.value = savedTheme;
        // Apply theme to the body
        document.body.classList.toggle("dark-theme", savedTheme === "dark");
    }

    // Save settings to local storage when the "Save Settings" button is clicked
    saveButton.addEventListener("click", function () {
        const selectedFontSize = fontSizeInput.value;
        const selectedTheme = themeSelect.value;

        // Save settings to local storage
        localStorage.setItem("font-size", selectedFontSize);
        localStorage.setItem("theme", selectedTheme);

        // Apply settings to the current page
        document.body.style.fontSize = selectedFontSize + "px";
        document.body.classList.toggle("dark-theme", selectedTheme === "dark");

        alert("Settings saved!");
    });
});
