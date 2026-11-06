
// ========================================
// NAVIGATION LOGIN CHECK
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const profileMenu = document.querySelector(".profile-menu");
    const profileToggle = document.getElementById("profileToggle");
    const profileDropdown = document.querySelector(".profile-dropdown");

    if (!profileMenu || !profileToggle || !profileDropdown) {
        return;
    }

    function updateProfileDropdown() {

        if (isLoggedIn()) {
            profileDropdown.innerHTML = `
                <li><a href="profile.html">My Profile</a></li>
                <li><a href="#" id="logout-link">Log out</a></li>
            `;
        } else {
            profileDropdown.innerHTML = `
                <li><a href="login.html">Log in</a></li>
                <li><a href="signup.html">Sign up</a></li>
            `;
        }

        const logoutLink = document.getElementById("logout-link");

        if (logoutLink) {
            logoutLink.addEventListener("click", function (event) {
                event.preventDefault();

                logoutUser();
                window.location.href = "index.html";
            });
        }
    }

    updateProfileDropdown();

});
