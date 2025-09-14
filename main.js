function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// INFINITE SCROLL FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add active state animation
                const allSections = document.querySelectorAll('section');
                allSections.forEach(section => section.classList.remove('active-section'));
                targetSection.classList.add('active-section');
                
                // Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Add scroll spy functionality
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // Update active nav and back to top button on scroll
    window.addEventListener('scroll', function() {
        updateActiveNav();
        toggleBackToTop();
    });
    
    // Initial calls
    updateActiveNav();
    toggleBackToTop();

    // Random glitch effects
    setInterval(() => {
        const elements = document.querySelectorAll('.stat-number, .feature-icon');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        randomElement.classList.add('glitch');
        setTimeout(() => randomElement.classList.remove('glitch'), 500);
    }, 8000);

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash;
        if (hash) {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});