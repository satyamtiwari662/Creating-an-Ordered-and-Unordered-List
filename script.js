// Function to toggle between Light and Dark mode
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update button text
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        toggleBtn.textContent = "Switch to Dark Mode";
    }
});

// Logging a message to confirm script is running
console.log("List assignment loaded successfully!");