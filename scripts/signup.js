const form = document.getElementById('signup-form');
const email = document.getElementById('email');
const uname = document.getElementById('uname');
const pword = document.getElementById('pword');
const terms = document.getElementById('terms');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const unameRegex = /^[a-zA-Z0-9_.]+$/;

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

function validateUsername() {
    const value = uname.value.trim();
    let msg = '';
    if (!value) msg = 'Username is required.';
    else if (value.length < 3) msg = 'Username must be at least 3 characters.';
    else if (value.length > 20) msg = 'Username must be 20 characters or less.';
    else if (!unameRegex.test(value)) msg = 'Use only letters, numbers, _ and .';
    showError(uname, 'uname-error', msg);
    return !msg;
}

function validatePassword() {
    const value = pword.value;
    const name = uname.value.trim().toLowerCase();
    let msg = '';
    if (!value) msg = 'Password is required.';
    else if (value.length < 8) msg = 'Password must be at least 8 characters.';
    else if (!/[A-Z]/.test(value)) msg = 'Add at least one uppercase letter.';
    else if (!/[a-z]/.test(value)) msg = 'Add at least one lowercase letter.';
    else if (!/[0-9]/.test(value)) msg = 'Add at least one number.';
    else if (!/[^A-Za-z0-9]/.test(value)) msg = 'Add at least one special character (e.g. !@#$).';
    else if (name.length >= 3 && value.toLowerCase().includes(name)) msg = 'Password should not contain your username.';
    showError(pword, 'pword-error', msg);
    return !msg;
}

function validateTerms() {
    const msg = terms.checked ? '' : 'You must accept the terms to continue.';
    showError(terms, 'terms-error', msg);
    return !msg;
}

// Validate when leaving a field, then re-check live once it has been flagged
[
    [email, validateEmail],
    [uname, validateUsername],
    [pword, validatePassword]
].forEach(([input, validator]) => {
    input.addEventListener('blur', validator);
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) validator();
    });
});

// Re-check the password when the username changes (the "contains username" rule)
uname.addEventListener('input', () => {
    if (pword.value) validatePassword();
});

terms.addEventListener('change', validateTerms);

form.addEventListener('submit', (e) => {
    e.preventDefault(); // always stop the page reload / credentials in the URL

    const results = [
        [email, validateEmail()],
        [uname, validateUsername()],
        [pword, validatePassword()],
        [terms, validateTerms()]
    ];

    const firstInvalid = results.find(([, ok]) => !ok);
    if (firstInvalid) {
        firstInvalid[0].focus();
        return;
    }

    // Demo: "create" the account by logging the new user in, then go home
    sessionStorage.setItem('kapestaUser', JSON.stringify({
        name: uname.value.trim(),
        email: email.value.trim()
    }));
    window.location.href = 'index.html';
});
