document.addEventListener('DOMContentLoaded', () => {

    const heroText = document.querySelector('.hero-text');
    let ticking = false;

    if (heroText) {
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scroll = window.scrollY;
                    heroText.style.transform = `translateY(${scroll * 0.3}px)`;
                    heroText.style.opacity = Math.max(1 - (scroll / 500), 0).toString();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    if (navContainer && navLinks) {
        navContainer.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && e.target === navContainer) {
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

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = `scaleX(${entry.target.getAttribute('data-width')})`;
            } else {
                entry.target.style.transform = 'scaleX(0)';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));
});