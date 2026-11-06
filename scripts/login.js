
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("pword").value;

        if (loginUser(email, password)) {
            window.location.href = "index.html";
        } else {
            alert("Incorrect email or password. Please try again.");
        }
    });

});
