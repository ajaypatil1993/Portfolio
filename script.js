// JavaScript for dynamic text transition with color effect
const dynamicText = document.querySelector('.dynamic-text');
const roles = [
    "Frontend Developer", 
    "Coder", 
    "React.js Developer", 
    "UI/UX Designer"
];
const colors = [
    "#7d2ae8", // Original color
    "#6c1ac2", // Darker shade
    "#8a3de1", // Lighter shade
    "#9a4ce6"  // Another shade
];
let currentIndex = 0;

function changeText() {
    dynamicText.textContent = roles[currentIndex];
    dynamicText.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % roles.length;
}

// Change text and color every 4 seconds
setInterval(changeText, 4000);

// JavaScript to toggle the hamburger menu
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
});
