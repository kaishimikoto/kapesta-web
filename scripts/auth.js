// ---------- Logged-in state for the navbar ----------
(function () {
    const label = document.getElementById('profileLabel');
    const dropdown = document.getElementById('profileDropdown');
    if (!label || !dropdown) return;

    let user = null;
    try {
        user = JSON.parse(sessionStorage.getItem('kapestaUser'));
    } catch (e) { }

    if (!user) return; // not logged in: keep the default Log in / Sign up

    // Show the first name in the navbar button
    label.textContent = user.name.split(' ')[0].toUpperCase();

    // Rebuild the dropdown: signed-in label + Log out
    dropdown.innerHTML = '';

    const infoItem = document.createElement('li');
    const info = document.createElement('span');
    info.className = 'dropdown-user';
    info.append('Signed in as');
    info.appendChild(document.createElement('br'));
    const strong = document.createElement('strong');
    strong.textContent = user.email;   // textContent keeps it safe
    info.appendChild(strong);
    infoItem.appendChild(info);

    const logoutItem = document.createElement('li');
    const logout = document.createElement('a');
    logout.href = '#';
    logout.id = 'logoutBtn';
    logout.textContent = 'Log out';
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('kapestaUser');
        window.location.href = 'index.html';
    });
    logoutItem.appendChild(logout);

    dropdown.append(infoItem, logoutItem);
})();