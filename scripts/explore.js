// GET HTML ELEMENT
const barangayRowsContainer =
    document.getElementById("barangay-rows-container");

// DISPLAY CAFE ROWS
function displayCafes(cafeList) {

    // Remove previous café rows
    barangayRowsContainer.innerHTML = "";

    // GET UNIQUE BARANGAYS
    const barangays = [...new Set(
        cafeList.map(function(cafe) {
            return cafe.barangay || "Other Locations";
        })
    )];

    // DISPLAY EACH BARANGAY
    barangays.forEach(function(barangay) {

        // GET CAFES IN THIS BARANGAY
        const barangayCafes = cafeList.filter(function(cafe) {
            return (cafe.barangay || "Other Locations") === barangay;
        });

        // CREATE CAFE ROW
        const cafeRow = document.createElement("section");

        cafeRow.className = "cafe-row";

        cafeRow.innerHTML = `
            <h2>Available in ${barangay}</h2>

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

    // DISPLAY MESSAGE IF NO CAFES MATCH
    if (cafeList.length === 0) {
        barangayRowsContainer.innerHTML = `
            <p class="no-cafes-message">
                No cafés found. Try adjusting your filters!
            </p>
        `;
    }

    // REINITIALIZE SLIDERS AFTER CAFE ROWS ARE CREATED
    initializeCafeSliders();
}

// DISPLAY ALL CAFES INITIALLY
displayCafes(cafes);

// SEARCH SYSTEM
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    applyAllFilters();
});

// Search while typing
searchInput.addEventListener("input", applyAllFilters);


// COMBINED SEARCH AND FILTER SYSTEM
function applyAllFilters() {
    const searchValue = searchInput.value.trim().toLowerCase();

    const filteredCafes = cafes.filter(function(cafe) {

        // SEARCH
        const matchesSearch =
            cafe.name.toLowerCase().includes(searchValue) ||
            cafe.location.toLowerCase().includes(searchValue) ||
            cafe.barangay.toLowerCase().includes(searchValue) ||
            cafe.description.toLowerCase().includes(searchValue);

        if (!matchesSearch) return false;


        // BARANGAY FILTER
        if (
            userFilter.userSelectedBarangay !== "allBrgy" &&
            cafe.barangay !== userFilter.userSelectedBarangay
        ) return false;


        // PRICE FILTER
        if (userFilter.userSelectedMaxPrice > 0) {
            const prices = cafe.averagePrice.match(/\d+/g);
            const lowestPrice = prices ? Number(prices[0]) : 0;

            if (lowestPrice > userFilter.userSelectedMaxPrice) {
                return false;
            }
        }


        // AMENITY FILTERS
        const amenities = userFilter.userSelectedAmenity;

        if (amenities[0] && cafe.airConditioningLevel <= 0) return false;
        if (amenities[1] && cafe.isOpenSpace !== true) return false;
        if (amenities[2] && cafe.noiseLevel !== 1) return false;
        if (amenities[3] && cafe.isParkingAvailable !== true) return false;
        if (amenities[4] && cafe.isPetFriendly !== true) return false;
        if (amenities[5] && cafe.powerOutletsNumber <= 0) return false;
        if (amenities[6] && cafe.isRestroomAvailable !== true) return false;
        if (amenities[7] && cafe.wifiStrength <= 0) return false;

        return true;
    });

    displayCafes(filteredCafes);
}
