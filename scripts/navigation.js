// ========================================
// NAVIGATION LOGIN CHECK
// ========================================

const profileNavLink = document.getElementById("profile-nav-link");

if (profileNavLink) {
    profileNavLink.addEventListener("click", function(event) {

        if (!isLoggedIn()) {
            event.preventDefault();
            window.location.href = "login.html";
        }

    });
}
