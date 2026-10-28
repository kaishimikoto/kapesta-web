const cafesContainer = document.querySelector(
    ".cafe-row .cafes-container"
);

if (cafesContainer && typeof cafes !== "undefined") {
    cafesContainer.innerHTML = "";

    cafes.forEach(cafe => {
        const cafeCard = document.createElement("div");
        cafeCard.className = "cafe-item";

        cafeCard.innerHTML = `
            <div class="cafe-photo-container">
                <a href="current-cafe-info.html?id=${cafe.id}"
                   class="cafe-card">
                    <img
                        src="${cafe.coverImage || "pictures/cafe-background.jpg"}"
                        alt="${cafe.name}"
                        class="cafe-photo"
                    >
                </a>
            </div>

            <div class="cafe-information">
                <div class="rating-location-container">
                    <div class="cafe-rating">
                        <img src="images/icons/star.svg"
                             alt=""
                             class="icons">
                        <h5>${cafe.rating.toFixed(1)}</h5>
                    </div>

                    <div class="cafe-location">
                        <img src="images/icons/location.svg"
                             alt=""
                             class="icons">
                        <h5>${cafe.location}</h5>
                    </div>
                </div>

                <div>
                    <h4>${cafe.name}</h4>
                    <p>${cafe.description}</p>
                </div>
            </div>
        `;

        cafesContainer.appendChild(cafeCard);
    });
}


const photosContainer = document.querySelector(
    ".gallery-container .cafes-container"
);

if (cafesContainer && typeof cafes !== "undefined") {
    cafesContainer.innerHTML = "";

    cafes.forEach(cafe => {
        const cafeCard = document.createElement("div");
        cafeCard.className = "cafe-item";

        cafeCard.innerHTML = `
            <div class="cafe-photo-container">
                <a href="current-cafe-info.html?id=${cafe.id}"
                   class="cafe-card">
                    <img
                        src="${cafe.coverImage || "pictures/cafe-background.jpg"}"
                        alt="${cafe.name}"
                        class="cafe-photo"
                    >
                </a>
            </div>

            <div class="cafe-information">
                <div class="rating-location-container">
                    <div class="cafe-rating">
                        <img src="images/icons/star.svg"
                             alt=""
                             class="icons">
                        <h5>${cafe.rating.toFixed(1)}</h5>
                    </div>

                    <div class="cafe-location">
                        <img src="images/icons/location.svg"
                             alt=""
                             class="icons">
                        <h5>${cafe.location}</h5>
                    </div>
                </div>

                <div>
                    <h4>${cafe.name}</h4>
                    <p>${cafe.description}</p>
                </div>
            </div>
        `;

        cafesContainer.appendChild(cafeCard);
    });
}
