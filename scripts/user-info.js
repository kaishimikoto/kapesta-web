let isLoggedIn = false;

const profileLink = document.getElementById("profile-link");

profileLink.addEventListener("click", function(event) {

    event.preventDefault();

    if (isLoggedIn === false) {
        window.location.href = "login-signup.html";
    } else {
        window.location.href = "profile.html";
    }

});

// CHECK LOGIN STATUS
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


// PROFILE NAVBAR LINK
const profileLink = document.getElementById("profile-link");

if (profileLink) {
    profileLink.addEventListener("click", function(event) {

        event.preventDefault();

        if (isLoggedIn) {
            window.location.href = "profile.html";
        } else {
            window.location.href = "login-signup.html";
        }

    });
}


// IMPORTANT!!!!!!!!!!!!! This assumes your form has id="login-form".
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // SIMULATE SUCCESSFUL LOGIN
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "profile.html";

});

/* ADD A LOGOUT BUTTON: <button id="logout-button">Log Out</button>
const logoutButton = document.getElementById("logout-button");

if (logoutButton) {
    logoutButton.addEventListener("click", function() {

        localStorage.setItem("isLoggedIn", "false");

        window.location.href = "login-signup.html";

    });
}

/* NOTES:
One important note for your presentation: Explain that this is a client-side login simulation, not real authentication. localStorage can be manually changed by users, so it should not be used to secure real accounts.

My recommendation: use this approach rather than just let isLoggedIn = false, because it lets your professor navigate between pages and see both states working without the login status resetting.

Here's one important detail: a normal JavaScript variable resets when you navigate to another HTML page.

For your demonstration, I recommend using localStorage instead. It keeps the simulated login state even when the user moves between pages or refreshes.

In your shared JavaScript file, use:

// CHECK LOGIN STATUS
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


// PROFILE NAVBAR LINK
const profileLink = document.getElementById("profile-link");

if (profileLink) {
    profileLink.addEventListener("click", function(event) {

        event.preventDefault();

        if (isLoggedIn) {
            window.location.href = "profile.html";
        } else {
            window.location.href = "login-signup.html";
        }

    });
}
