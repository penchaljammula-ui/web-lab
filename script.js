console.log("JS is connected! 🚀");

// Exercise 2: Responsive Button Interaction
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    // Check if the current theme is dark
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});
