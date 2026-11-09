const form = document.getElementById('login-form');
const email = document.getElementById('email');
const pword = document.getElementById('pword');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function showError(input, errorId, msg) {
    document.getElementById(errorId).textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    input.classList.toggle('invalid', !!msg);
}

function validateEmail() {
    const value = email.value.trim();
    let msg = '';

    if (!value) msg = 'Email is required.';
    else if (!emailRegex.test(value)) msg = 'Enter a valid email, e.g. name@example.com.';

    showError(email, 'email-error', msg);
    return !msg;
}

function validatePassword() {
    const value = pword.value;
    let msg = '';

    if (!value) msg = 'Password is required.';
    else if (value.length < 8) msg = 'Password must be at least 8 characters.';

    showError(pword, 'pword-error', msg);
    return !msg;
}

// Validate when the user leaves a field, then re-check as they type
email.addEventListener('blur', validateEmail);
pword.addEventListener('blur', validatePassword);
email.addEventListener('input', () => email.classList.contains('invalid') && validateEmail());
pword.addEventListener('input', () => pword.classList.contains('invalid') && validatePassword());

// Demo button fills the form (DEMO_USER comes from users.js)
document.getElementById('demo-btn').addEventListener('click', () => {
    email.value = DEMO_USER.email;
    pword.value = DEMO_USER.password;
    showError(email, 'email-error', '');
    showError(pword, 'pword-error', '');
    pword.focus();
});

// Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailOk = validateEmail();
    const pwordOk = validatePassword();

    if (!emailOk || !pwordOk) {
        (emailOk ? pword : email).focus();
        return;
    }

    const user = findUser(email.value);

    // Account doesn't exist -> popup with a link to sign up
    if (!user) {
        openAlert({
            title: 'Account not registered',
            message: "We couldn't find an account with that email. Create one to get started.",
            actionText: 'Create an account',
            actionHref: 'signup.html'
        });
        return;
    }

    // Account exists but the password is wrong
    if (user.password !== pword.value) {
        showError(pword, 'pword-error', 'Incorrect password.');
        pword.focus();
        return;
    }

    // Success -> log in and go to the homepage
    const existingUser = JSON.parse(localStorage.getItem("kapestaUser")) || {};

    const kapestaUser = {
        ...existingUser,
        username: user.name,
        name: user.name,
        email: user.email,
        password: user.password,
        profilePicture: existingUser.profilePicture || "pictures/coffee1.jpg"
    };

    // Your existing pages use localStorage
    localStorage.setItem("kapestaUser", JSON.stringify(kapestaUser));
    localStorage.setItem("kapestaLoggedIn", "true");

    // Keep her dropdown's sessionStorage data
    sessionStorage.setItem("kapestaUser", JSON.stringify({
        name: user.name,
        email: user.email
    }));

    window.location.href = "index.html";
});
