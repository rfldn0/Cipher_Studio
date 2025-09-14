function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Random glitch effects
setInterval(() => {
    const elements = document.querySelectorAll('.stat-number, .feature-icon');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    randomElement.classList.add('glitch');
    setTimeout(() => randomElement.classList.remove('glitch'), 500);
}, 8000);