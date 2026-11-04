// Find reviews written by the logged-in demo user
function getReviewsWrittenByUser(user) {
    const possibleNames = [
        user.username,
        "You"
    ]
    .filter(Boolean)
    .map(name => name.toLowerCase());

    const userReviews = [];

    // Get reviews saved in localStorage
    const savedReviews = getAllSavedReviews();

    // Check every café for its saved reviews
    cafes.forEach(cafe => {
        const cafeReviews = [
            ...cafe.listOfReviews,
            ...savedReviews
                .filter(review => Number(review.cafeId) === Number(cafe.id))
                .map(review => new Review(
                    review.userName,
                    review.date,
                    review.reviewMessage,
                    review.photos,
                    review.reviewRating
                ))
        ];

        cafeReviews.forEach(review => {
            if (
                possibleNames.includes(
                    String(review.userName).toLowerCase()
                )
            ) {
                userReviews.push({ cafe, review });
            }
        });
    });

    return userReviews;
}



// Create one review card
function createMyReviewCard(cafe, review) {
    const card = document.createElement("div");
    card.classList.add("review");

    const cafeImage = document.createElement("img");

    cafeImage.src =
        cafe.coverImage ||
        (cafe.photos && cafe.photos[0]) ||
        "pictures/cafe1.jpg";

    cafeImage.alt = cafe.name;
    cafeImage.classList.add("cafe-pic");

    const contents = document.createElement("div");
    contents.classList.add("review-contents");

    const ratingAndDate = document.createElement("div");
    ratingAndDate.classList.add("rating-and-date");

    const cafeNameAndRating = document.createElement("div");
    cafeNameAndRating.classList.add("cafe-name-and-rating");

    const cafeName = document.createElement("h3");
    cafeName.textContent = cafe.name;

    const stars = document.createElement("span");
    stars.classList.add("rating-stars");

    const ratingValue = Number(review.reviewRating) || 0;

    stars.textContent =
        "★".repeat(ratingValue) +
        "☆".repeat(5 - ratingValue);

    const date = document.createElement("h4");
    date.textContent = review.date || "";

    cafeNameAndRating.append(cafeName, stars);
    ratingAndDate.append(cafeNameAndRating, date);

    const message = document.createElement("p");
    message.textContent = review.reviewMessage || "";

    contents.append(ratingAndDate, message);
    card.append(cafeImage, contents);

    // Make the review card clickable
    card.classList.add("clickable-review");

    card.addEventListener("click", function() {
        window.location.href = `current-cafe-info.html?id=${cafe.id}#reviews-section`;
    });

    return card;
}
