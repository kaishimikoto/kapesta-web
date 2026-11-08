document.addEventListener("DOMContentLoaded", function () {

    if (!isLoggedIn()) {
        window.location.href = "login.html";
        return;
    }

    const pageUser = getCurrentUser();

    if (pageUser) {
        document.getElementById("profile-picture").src =
            pageUser.profilePicture || "pictures/coffee1.jpg";

        document.getElementById("profile-username").textContent =
            `@${pageUser.username}`;
    }

    const container = document.getElementById("all-favorite-cafes");
    container.replaceChildren();

    const favoriteIds = getFavoriteCafeIds();

    const favoriteCafes = cafes.filter(cafe =>
        favoriteIds.includes(Number(cafe.id))
    );

    if (favoriteCafes.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("profile-empty-message");
        emptyMessage.textContent =
            "You haven't favorited any cafés yet.";

        container.appendChild(emptyMessage);
        return;
    }

    // Create the same row and viewport structure as Explore
    const cafesContainer = document.createElement("div");
    cafesContainer.className = "favorite-cafes-grid";
    
    container.appendChild(cafesContainer);

    favoriteCafes.forEach(function(cafe) {
        cafesContainer.appendChild(createFavoriteCafeCard(cafe));
    });

});
