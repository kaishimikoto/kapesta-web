// ==========================================================
// HEADER
// ==========================================================
const navbar = document.querySelector('.navbar');
const hoverZone = document.querySelector('.nav-hover-zone');
const hero = document.querySelector('.hero-container');
const MOBILE_BREAKPOINT = 768;

if (navbar) {
    // ---------- Show/hide on scroll ----------
    const pastHero = () => {
        const limit = hero ? hero.offsetHeight - navbar.offsetHeight : 50;
        return window.scrollY > limit;
    };
    const showNav = () => navbar.classList.remove('hide');
    const hideNav = () => {
        // never hide while the mobile menu is open
        if (pastHero() && !navbar.classList.contains('menu-open')) {
            navbar.classList.add('hide');
        }
    };
    const updateNav = () => {
        const past = pastHero();
        navbar.classList.toggle('scrolled', past);
        if (!past) navbar.classList.remove('hide');
    };
    window.addEventListener('scroll', () => {
        updateNav();
        hideNav();
    }, { passive: true });
    if (hoverZone) hoverZone.addEventListener('mousemove', showNav);
    navbar.addEventListener('mousemove', showNav);
    navbar.addEventListener('mouseleave', hideNav);
    updateNav();

    // ---------- Hamburger menu ----------
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        const setMenuOpen = (open) => {
            navbar.classList.toggle('menu-open', open);
            navToggle.setAttribute('aria-expanded', String(open));
            if (open) showNav();
        };

        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            setMenuOpen(!navbar.classList.contains('menu-open'));
        });

        // tapping a real link closes the menu
        navLinks.addEventListener('click', (e) => {
            if (e.target.closest('a')) setMenuOpen(false);
        });

        // tapping outside the navbar closes it
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) setMenuOpen(false);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        });

        // rotating the phone or resizing to desktop resets the menu
        window.addEventListener('resize', () => {
            if (window.innerWidth > MOBILE_BREAKPOINT) setMenuOpen(false);
        });
    }
}

// ---------- Profile dropdown (desktop) ----------
{
    const menu = document.querySelector('.profile-menu');
    const toggle = document.getElementById('profileToggle');
    if (menu && toggle) {
        const setOpen = (open) => {
            menu.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', String(open));
        };
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            setOpen(!menu.classList.contains('open'));
        });
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target)) setOpen(false);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setOpen(false);
        });
    }
}
