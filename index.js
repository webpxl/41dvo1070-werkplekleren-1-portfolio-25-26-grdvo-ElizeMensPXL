window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const heroText = document.querySelector('.hero-text');

    if (heroText) {
        heroText.style.transform = `translateY(${scroll * 0.3}px)`;
        heroText.style.opacity = (1 - (scroll / 500)).toString();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    if (navContainer && navLinks) {
        navContainer.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.toggle('active');
                navContainer.classList.toggle('menu-open');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navContainer.classList.remove('menu-open');
            });
        });
    }
});