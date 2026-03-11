// Function to update the copyright year automatically
function setCopyrightYear() {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// Function to give a time-based greeting in the hero section
function setGreeting() {
    const title = document.getElementById('greeting-title');
    const hour = new Date().getHours();
    let greeting = "Official Citizen Portal";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning, Citizens";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon, Citizens";
    } else {
        greeting = "Good Evening, Citizens";
    }

    title.textContent = greeting;
}

// Run these functions when the page loads
window.onload = function() {
    setCopyrightYear();
    setGreeting();
};
