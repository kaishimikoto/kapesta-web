// ---------- Logged-in state for the navbar ----------
(function () {
    const label = document.getElementById('profileLabel');
    const dropdown = document.getElementById('profileDropdown');

    if (!label || !dropdown) return;

    if (!isLoggedIn()) return;

    const user = getCurrentUser();

    if (!user) return;

    // Show first name in navbar
    label.textContent = user.name.split(' ')[0].toUpperCase();

    dropdown.innerHTML = '';

    // Signed in as
    const infoItem = document.createElement('li');
    const info = document.createElement('span');

    info.className = 'dropdown-user';
    info.append('Signed in as');
    info.appendChild(document.createElement('br'));

    const strong = document.createElement('strong');
    strong.textContent = user.email;

    info.appendChild(strong);
    infoItem.appendChild(info);

    // My Profile
    const profileItem = document.createElement('li');
    const profileLink = document.createElement('a');

    profileLink.href = 'profile.html';
    profileLink.textContent = 'My Profile';

    profileItem.appendChild(profileLink);

    // Log out
    const logoutItem = document.createElement('li');
    const logout = document.createElement('a');

    logout.href = '#';
    logout.id = 'logoutBtn';
    logout.textContent = 'Log out';

    logout.addEventListener('click', (e) => {
        e.preventDefault();
        logoutUser();
        window.location.href = 'index.html';
    });

    logoutItem.appendChild(logout);

    dropdown.append(infoItem, profileItem, logoutItem);
})();
