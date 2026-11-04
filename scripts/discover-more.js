// GET HTML ELEMENTS
const discoverMoreContainer = document.getElementById("discover-more-container");
const discoverMoreTitle = document.getElementById("discover-more-title");

// GET CAFES IN THE SAME BARANGAY
const discoverMoreCafes = cafes.filter(function(cafe) {

    return cafe.barangay === selectedCafe.barangay
        && cafe.id !== selectedCafe.id;

});

// UPDATE SECTION TITLE
discoverMoreTitle.textContent =
    "Discover More Cafes in " + selectedCafe.barangay;

    // DISPLAY DISCOVER MORE CAFES
if (discoverMoreCafes.length > 0) {

    discoverMoreCafes.forEach(function(cafe) {

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

        discoverMoreContainer.appendChild(cafeCard);

    });

} else {

    discoverMoreContainer.textContent =
        "No other cafes available in this barangay yet.";

}

/* OLD
// Change the heading
document.getElementById("discover-more-title").textContent =
    "Discover More Cafes in " + selectedCafe.barangay;

// GET CAFES IN THE SAME BARANGAY
// filter ang gamit
const nearbyCafes = cafes.filter(function(cafe) {
    return cafe.barangay === selectedCafe.barangay
        && cafe.id !== selectedCafe.id;
});

/* cafe.barangay === selectedCafe.barangay: Only get cafes in the same barangay.
cafe.id !== selectedCafe.id: Exclude the cafe currently being viewed. */

// If no other cafes in that barangay

/* OLD KADUGTONG 
if (nearbyCafes.length === 0) {

    discoverMoreContainer.textContent =
        "No other cafes in this barangay yet.";
}

const discoverMoreContainer = document.querySelector(".discover-more-container");

nearbyCafes.forEach(function(cafe) {

    const cafeCard = document.createElement("div");

    cafeCard.className = "cafe-item";

    cafeCard.innerHTML = `
        <a href="current-cafe-info.html?id=${cafe.id}">
            <img src="${cafe.coverImage}" alt="${cafe.name}">
        </a>

        <h4>${cafe.name}</h4>
        <p>${cafe.location}</p>
    `;

    discoverMoreContainer.appendChild(cafeCard);

}); */
