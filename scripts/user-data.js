// USER ACCOUNT DATA

// Register the demo account
function registerUser(firstName, lastName, username, email, password) {

    const user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        profilePicture: "images/default-profile.png"
    };

    localStorage.setItem("kapestaUser", JSON.stringify(user));

    alert("Account created successfully!");
}

// Check login credentials
function loginUser(username, password) {

    const savedUser = JSON.parse(
        localStorage.getItem("kapestaUser")
    );

    if (!savedUser) {
        alert("No account found. Please register first.");
        return false;
    }

    if (
        (username === savedUser.username || username === savedUser.email) &&
        password === savedUser.password
    ) {
        localStorage.setItem("kapestaLoggedIn", "true");
        return true;
    }

    alert("Incorrect username or password.");
    return false;
}

// Get the current logged-in user
function getCurrentUser() {

    const isLoggedIn = localStorage.getItem("kapestaLoggedIn");

    if (isLoggedIn !== "true") {
        return null;
    }

    return JSON.parse(localStorage.getItem("kapestaUser"));
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem("kapestaLoggedIn") === "true";
}

// Log out
function logoutUser() {
    localStorage.setItem("kapestaLoggedIn", "false");
}
