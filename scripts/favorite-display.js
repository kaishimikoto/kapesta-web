// Create one favorite café card
function createFavoriteCafeCard(cafe) {
    const card = document.createElement("div");
    card.classList.add("cafe");

    const image = document.createElement("img");

    // redirects to cafe info on click
    card.addEventListener("click", function () {
    window.location.href = `current-cafe-info.html?id=${cafe.id}`;
    });

    image.src =
        cafe.coverImage ||
        (cafe.photos && cafe.photos[0]) ||
        "pictures/cafe1.jpg";

    image.alt = cafe.name;
    image.classList.add("cafe-pic");

    const info = document.createElement("div");
    info.classList.add("cafe-info");

    const rating = document.createElement("div");
    rating.classList.add("favorite-cafe-rating");

    const starIcon = document.createElement("img");
    starIcon.src = "images/icons/star.svg";
    starIcon.alt = "Rating";
    starIcon.classList.add("icons");

    const ratingText = document.createElement("h5");
    ratingText.textContent = Number(cafe.rating || 0).toFixed(1);

    rating.append(starIcon, ratingText);

    const location = document.createElement("div");
    location.classList.add("favorite-cafe-location");

    const locationIcon = document.createElement("img");
    locationIcon.src = "images/icons/location.svg";
    locationIcon.alt = "Location";
    locationIcon.classList.add("icons");

    const locationText = document.createElement("h5");
    locationText.textContent =
        cafe.barangay || cafe.location || "Location unavailable";

    location.append(locationIcon, locationText);

    info.append(rating, location);

    const name = document.createElement("h4");
    name.textContent = cafe.name;

    card.append(image, info, name);

    return card;
}
