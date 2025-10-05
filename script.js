// Get all necessary elements
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const lectureSearch = document.getElementById('lecture-search');
const labSearch = document.getElementById('lab-search');
const examSearch = document.getElementById('exam-search');
const lectureCards = document.getElementById('lecture-cards');
const labCards = document.getElementById('lab-cards');
const examCards = document.getElementById('exam-cards');

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Real-time clock function
function startTime() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const formattedTime = today.toLocaleString('en-IN', options);
    const timeElement = document.getElementById('txt');
    if (timeElement) {
        timeElement.textContent = `Current time is ${formattedTime}`;
    }
    setTimeout(startTime, 1000);
}

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('active');
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.add('active');
    }
});

// Search and Filter functionality
function filterCards(searchElement, cardContainer) {
    searchElement.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = cardContainer.querySelectorAll('.card');
        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Apply filter to all sections
if (lectureSearch && lectureCards) filterCards(lectureSearch, lectureCards);
if (labSearch && labCards) filterCards(labSearch, labCards);
if (examSearch && examCards) filterCards(examSearch, examCards);
