// GET HTML ELEMENT
const barangayRowsContainer = document.getElementById("barangay-rows-container");

// DISPLAY CAFE ROWS
function displayCafes(cafeList) {
    barangayRowsContainer.innerHTML = "";

    const barangays = [...new Set(
        cafeList.map(function(cafe) {
            return cafe.barangay || "Other Locations";
        })
    )];

    barangays.forEach(function(barangay) {
        const barangayCafes = cafeList.filter(function(cafe) {
            return (cafe.barangay || "Other Locations") === barangay;
        });

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

        const container = cafeRow.querySelector(".cafes-container");

        barangayCafes.forEach(function(cafe) {
            const cafeCard = document.createElement("a");
            cafeCard.className = "cafe-item cafe-card";
            cafeCard.href = `current-cafe-info.html?id=${cafe.id}`;

            cafeCard.innerHTML = `
                <div class="cafe-photo-container">
                    <img src="${cafe.coverImage || "pictures/cafe-background.jpg"}"
                         alt="${cafe.name}" class="cafe-photo">
                </div>

                <div class="cafe-information">
                    <div class="rating-location-container">
                        <div class="cafe-rating">
                            <img src="images/icons/star.svg" alt="" class="icons">
                            <h5>${typeof cafe.rating === 'number' ? cafe.rating.toFixed(1) : "0.0"}</h5>
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

    if (cafeList.length === 0) {
        barangayRowsContainer.innerHTML = `
            <p class="no-cafes-message">
                No cafés found. Try adjusting your filters!
            </p>
        `;
    }

    if (typeof initializeCafeSliders === "function") {
        initializeCafeSliders();
    }
}

// INITIAL DISPLAY
displayCafes(cafes);

// SEARCH SYSTEM (Safeguarded against null)
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

if (searchForm) {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        applyAllFilters();
    });
}

if (searchInput) {
    searchInput.addEventListener("input", applyAllFilters);
}

// COMBINED SEARCH AND FILTER SYSTEM
function applyAllFilters() {
    const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const filteredCafes = cafes.filter(function(cafe) {
        const matchesSearch =
            cafe.name.toLowerCase().includes(searchValue) ||
            cafe.location.toLowerCase().includes(searchValue) ||
            cafe.barangay.toLowerCase().includes(searchValue) ||
            cafe.description.toLowerCase().includes(searchValue);

        if (!matchesSearch) return false;

        if (
            userFilter.userSelectedBarangay !== "allBrgy" &&
            cafe.barangay !== userFilter.userSelectedBarangay
        ) return false;

        if (userFilter.userSelectedMaxPrice > 0) {
            const prices = cafe.averagePrice ? cafe.averagePrice.match(/\d+/g) : null;
            const lowestPrice = prices ? Number(prices[0]) : 0;

            if (lowestPrice > userFilter.userSelectedMaxPrice) {
                return false;
            }
        }

        const amenities = userFilter.userSelectedAmenity;
        if (amenities && amenities.length > 0) {
            if (amenities[0] && cafe.airConditioningLevel <= 0) return false;
            if (amenities[1] && cafe.isOpenSpace !== true) return false;
            if (amenities[2] && cafe.noiseLevel !== 1) return false;
            if (amenities[3] && cafe.isParkingAvailable !== true) return false;
            if (amenities[4] && cafe.isPetFriendly !== true) return false;
            if (amenities[5] && cafe.powerOutletsNumber <= 0) return false;
            if (amenities[6] && cafe.isRestroomAvailable !== true) return false;
            if (amenities[7] && cafe.wifiStrength <= 0) return false;
        }

        return true;
    });

    displayCafes(filteredCafes);
}
