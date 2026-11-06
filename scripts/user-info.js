// ========================================
// CHECK LOGIN STATUS
// ========================================

function isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}


// ========================================
// PROFILE NAVBAR LINK
// ========================================

const profileLink = document.getElementById("profile-link");

if (profileLink) {
    profileLink.addEventListener("click", function(event) {
        event.preventDefault();

        if (isLoggedIn()) {
            window.location.href = "profile.html";
        } else {
            window.location.href = "login-signup.html";
        }
    });
}


// ========================================
// LOGIN FORM
// ========================================

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Save simulated login status
        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "profile.html";
    });
}


// ========================================
// LOGOUT BUTTON
// ========================================

const logoutButton = document.getElementById("logout-button");

if (logoutButton) {
    logoutButton.addEventListener("click", function() {

        localStorage.setItem("isLoggedIn", "false");

        window.location.href = "login-signup.html";
    });
}
