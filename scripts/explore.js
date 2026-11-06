// GET HTML ELEMENT
const barangayRowsContainer =
    document.getElementById("barangay-rows-container");

// GET UNIQUE BARANGAYS
const barangays = [...new Set(
    cafes.map(function(cafe) {
        return cafe.barangay;
    })
)];

// DISPLAY CAFE ROWS
barangays.forEach(function(barangay) {

    // GET CAFES IN THIS BARANGAY
    const barangayCafes = cafes.filter(function(cafe) {
        return cafe.barangay === barangay;
    });

    // CREATE CAFE ROW
    const cafeRow = document.createElement("section");

    cafeRow.className = "cafe-row";

    cafeRow.innerHTML = `
        <h3>Available in ${barangay}</h3>

        <button class="left-btn">&#10094;</button>

        <div class="cafes-viewport">
            <div class="cafes-container"></div>
        </div>

        <button class="right-btn">&#10095;</button>
    `;

    barangayRowsContainer.appendChild(cafeRow);

    // GET THE CAFES CONTAINER FOR THIS ROW
    const container = cafeRow.querySelector(".cafes-container");

    // CREATE CAFE CARDS
    barangayCafes.forEach(function(cafe) {

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
                        <h5>${cafe.rating.toFixed(1)}</h5>
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

        container.appendChild(cafeCard);
    });

});
