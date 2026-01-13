window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const heroText = document.querySelector('.hero-text');
    // De tekst schuift langzamer omhoog dan de rest (parallax)
    heroText.style.transform = `translateY(${scroll * 0.3}px)`;
    // De tekst vervaagt langzaam tijdens het scrollen
    heroText.style.opacity = 1 - (scroll / 500);
});