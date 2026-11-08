    // Display logged-in user's username in the profile header
    const currentUser = getCurrentUser();

    if (currentUser) {
        document.getElementById("profile-username").textContent =
            `@${currentUser.username}`;
    }

    // Create one favorite café card using the same structure as Explore
    function createFavoriteCafeCard(cafe) {

        const cafeCard = document.createElement("div");

        cafeCard.className = "cafe-item";

        cafeCard.innerHTML = `
            <div class="cafe-photo-container">
                <a href="current-cafe-info.html?id=${cafe.id}" class="cafe-card">
                    <img src="${cafe.coverImage || "pictures/cafe-background.jpg"}"
                        alt="${cafe.name}" class="cafe-photo">
                </a>
            </div>

            <div class="cafe-information">

                <div class="rating-location-container">

                    <div class="cafe-rating">
                        <img src="images/icons/star.svg" alt="" class="icons">
                        <h5>${Number(cafe.rating || 0).toFixed(1)}</h5>
                    </div>

                    <div class="cafe-location">
                        <img src="images/icons/location.svg" alt="" class="icons">
                        <h5>${cafe.location}</h5>
                    </div>

                </div>

                <div>
                    <h4>${cafe.name}</h4>
                    <p>${cafe.description}</p>
                </div>

            </div>
        `;

        // Make the entire card clickable
        cafeCard.addEventListener("click", function() {
            window.location.href = `current-cafe-info.html?id=${cafe.id}`;
        });

        return cafeCard;
    }
