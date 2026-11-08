const DEMO_USER = {
    email: 'roancochanco@kapesta.com',
    password: 'kapesta@123',
    name: 'Roan Cochanco'
};

function getStoredUsers() {
    try {
        const users = JSON.parse(localStorage.getItem('kapestaUsers'));
        return Array.isArray(users) ? users : [];
    } catch (e) {
        return [];
    }
}

// The demo account always exists, plus anyone who signed up
function findUser(email) {
    const target = email.trim().toLowerCase();
    if (target === DEMO_USER.email) return DEMO_USER;
    return getStoredUsers().find((u) => u.email.toLowerCase() === target) || null;
}

function registerUser(user) {
    const users = getStoredUsers();
    users.push(user);
    localStorage.setItem('kapestaUsers', JSON.stringify(users));
}