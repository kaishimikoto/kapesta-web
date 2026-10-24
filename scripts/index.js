// ---------- Navbar: always visible on hero, hide on scroll after it ----------
const navbar = document.querySelector('.navbar');
const hoverZone = document.querySelector('.nav-hover-zone');
const hero = document.querySelector('.hero-container');

if (navbar) {
    // true once the hero section has scrolled out of view
    const pastHero = () => {
        const limit = hero ? hero.offsetHeight - navbar.offsetHeight : 50;
        return window.scrollY > limit;
    };

    const showNav = () => navbar.classList.remove('hide');

    const hideNav = () => {
        if (pastHero()) navbar.classList.add('hide');
    };

    const updateNav = () => {
        const past = pastHero();
        navbar.classList.toggle('scrolled', past);
        if (!past) navbar.classList.remove('hide');   // back on the hero: always show
    };

    window.addEventListener('scroll', () => {
        updateNav();
        hideNav();
    });

    if (hoverZone) hoverZone.addEventListener('mousemove', showNav);
    navbar.addEventListener('mousemove', showNav);
    navbar.addEventListener('mouseleave', hideNav);

    updateNav();
}

// ---------- Cafe Spotlight slider ----------
const track = document.querySelector('.slider-track');

if (track) {
    const prev = document.querySelector('.slider-btn.prev');
    const next = document.querySelector('.slider-btn.next');

    const slideAmount = () => {
        const card = track.querySelector('.videos');
        const gap = parseInt(getComputedStyle(track).gap) || 0;
        return card.offsetWidth + gap;
    };

    next.addEventListener('click', () => {
        track.scrollBy({ left: slideAmount(), behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
        track.scrollBy({ left: -slideAmount(), behavior: 'smooth' });
    });

    // Only one video plays at a time
    const allVideos = track.querySelectorAll('video');
    allVideos.forEach(video => {
        video.addEventListener('play', () => {
            allVideos.forEach(other => {
                if (other !== video) other.pause();
            });
        });
    });
}