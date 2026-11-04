document.addEventListener("DOMContentLoaded", function () {

    // Check if user is logged in
    if (!isLoggedIn()) {
        window.location.href = "login.html";
        return;
    }

    const container = document.getElementById("all-favorite-cafes");

    container.replaceChildren();

    const favoriteIds = getFavoriteCafeIds();

    const favoriteCafes = cafes.filter(cafe =>
        favoriteIds.includes(Number(cafe.id))
    );

    // Show empty message
    if (favoriteCafes.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("profile-empty-message");
        emptyMessage.textContent =
            "You haven't favorited any cafés yet.";

        container.appendChild(emptyMessage);
        return;
    }

    // Display ALL favorite cafés
    favoriteCafes.forEach(cafe => {
        container.appendChild(createFavoriteCafeCard(cafe));
    });

});
