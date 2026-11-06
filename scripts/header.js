// ==========================================================
// HEADER
// ==========================================================

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
        if (navbar.classList.contains('menu-open')) return;
        if (pastHero()) navbar.classList.add('hide');
    };

    const updateNav = () => {
        const past = pastHero();
        navbar.classList.toggle('scrolled', past);
        if (!past) navbar.classList.remove('hide'); // back on the hero: always show
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


// ---------- Profile dropdown ----------
{
    const menu = document.querySelector('.profile-menu');

    if (menu) {
        const toggle = document.getElementById('profileToggle');

        const setOpen = (open) => {
            menu.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open);
        };

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            setOpen(!menu.classList.contains('open'));
        });

        // click anywhere else, or press Esc, to close
        document.addEventListener('click', () => setOpen(false));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setOpen(false);
        });
    }
}

// ---------- Mobile hamburger menu ----------
{
    const nav = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');

    if (nav && navToggle) {
        const setMenu = (open) => {
            nav.classList.toggle('menu-open', open);
            navToggle.setAttribute('aria-expanded', open);
        };

        // hamburger button opens and closes the menu
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            setMenu(!nav.classList.contains('menu-open'));
        });

        // choosing a link closes the menu
        nav.querySelectorAll('.nav-links a').forEach((link) => {
            link.addEventListener('click', () => setMenu(false));
        });

        // click outside the navbar, or press Esc, to close
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) setMenu(false);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setMenu(false);
        });

        // resizing back to desktop closes the menu
        window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
            if (e.matches) setMenu(false);
        });
    }
}
