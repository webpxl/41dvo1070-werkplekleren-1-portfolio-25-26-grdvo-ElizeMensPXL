window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const heroText = document.querySelector('.hero-text');
    // De tekst schuift langzamer omhoog dan de rest (parallax)
    heroText.style.transform = `translateY(${scroll * 0.3}px)`;
    // De tekst vervaagt langzaam tijdens het scrollen
    heroText.style.opacity = 1 - (scroll / 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    // Luister naar een klik op de nav-container (waar ons ☰ icoon nu staat)
    navContainer.addEventListener('click', (e) => {
        // Alleen reageren op mobiel (als het icoon zichtbaar is)
        if (window.innerWidth <= 768) {
            navLinks.classList.toggle('active');
            navContainer.classList.toggle('menu-open');
        }
    });

    // Sluit het menu automatisch als je op een link klikt
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navContainer.classList.remove('menu-open');
        });
    });
});