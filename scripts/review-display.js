// Display logged-in user's username in the profile header
const reviewDisplayUser = getCurrentUser();

if (reviewDisplayUser) {
    document.getElementById("profile-username").textContent =
        `@${reviewDisplayUser.username}`;
}

function createReviewDeleteButton(review, onDelete) {
    const currentUser = getCurrentUser();

    // Only show the button for the logged-in user's saved reviews
    if (
        !isLoggedIn() ||
        !currentUser ||
        review.id == null ||
        review.userName !== currentUser.username
    ) {
        return null;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("review-delete-button");
    button.setAttribute("aria-label", "Delete review");

    const icon = document.createElement("img");
    icon.src = "images/icons/delete.svg";
    icon.alt = "Delete";

    button.appendChild(icon);

    button.addEventListener("click", function(event) {
        // Prevent the review card from navigating
        event.stopPropagation();

        const confirmed = confirm(
            "Are you sure you want to delete this review?"
        );

        if (!confirmed) return;

        const deleted = deleteReview(review.id);

        if (deleted && onDelete) {
            onDelete();
        }
    });

    return button;
}

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
                .map(reviewData => {
                    const review = new Review(
                        reviewData.userName,
                        reviewData.date,
                        reviewData.reviewMessage,
                        reviewData.photos,
                        reviewData.reviewRating
                    );

                    review.id = reviewData.id;

                    return review;
                })
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
    card.classList.add("review", "clickable-review");

    // Review photos
    if (review.photos && review.photos.length > 0) {
        const photosContainer = document.createElement("div");

        photosContainer.classList.add(
            "review-photos-container",
            `photos-${Math.min(review.photos.length, 8)}`
        );

        review.photos.forEach((photo, index) => {
            const photoItem = document.createElement("div");
            photoItem.classList.add("review-photo-item");

            if (index >= 4) {
                photoItem.style.display = "none";
            }

            const img = document.createElement("img");
            img.src = photo;
            img.alt = "Review photo";
            img.classList.add("review-cafe-photo");

            photoItem.appendChild(img);

            // Show the number of remaining photos
            if (index === 3 && review.photos.length > 4) {
                const overlay = document.createElement("div");
                overlay.classList.add("photo-overlay");
                overlay.textContent = `+${review.photos.length - 4}`;

                photoItem.appendChild(overlay);
            }

            photosContainer.appendChild(photoItem);
        });

        card.appendChild(photosContainer);
    }

    // Review contents
    const contents = document.createElement("div");
    contents.classList.add("review-contents");

    // Café name
    const cafeName = document.createElement("h3");
    cafeName.classList.add("my-review-cafe-name");
    cafeName.textContent = cafe.name;

    // Rating information
    const ratingInfo = document.createElement("div");
    ratingInfo.classList.add("rating-info");

    const usernameRatingDate = document.createElement("div");
    usernameRatingDate.classList.add("username-rating-date");

    const profileIcon = document.createElement("img");

    const loggedInUser = getCurrentUser();

    profileIcon.src =
        loggedInUser?.profilePicture || "images/icons/user-profile.svg";

    profileIcon.alt = "User profile image";
    profileIcon.classList.add("user-profile");

    const username = document.createElement("h3");
    username.textContent = review.userName || "";

    const ratingValue = Math.min(
        5,
        Math.max(1, Number(review.reviewRating) || 1)
    );

    const starIcons = {
        1: "images/icons/1-star.svg",
        2: "images/icons/2-stars.svg",
        3: "images/icons/3-stars.svg",
        4: "images/icons/4-stars.svg",
        5: "images/icons/5-stars.svg"
    };

    const stars = document.createElement("img");
    stars.src = starIcons[ratingValue];
    stars.alt = `${ratingValue} stars`;
    stars.classList.add("star-rating");

    const date = document.createElement("h4");
    date.textContent = review.date || "";

    usernameRatingDate.append(profileIcon, username, stars);
    ratingInfo.appendChild(usernameRatingDate);

    const dateAndDelete = document.createElement("div");
    dateAndDelete.classList.add("date-and-delete");

    dateAndDelete.appendChild(date);

    const deleteButton = createReviewDeleteButton(review, function() {
        location.reload();
    });

    if (deleteButton) {
        dateAndDelete.appendChild(deleteButton);
    }

    ratingInfo.appendChild(dateAndDelete);

    // Review message
    const message = document.createElement("p");
    message.textContent = review.reviewMessage || "";

    contents.append(cafeName, ratingInfo, message);
    card.appendChild(contents);

    // Make the card clickable
    // Clicking the card navigates to the café's reviews
    card.addEventListener("click", function() {
        window.location.href =
            `current-cafe-info.html?id=${cafe.id}#reviews-section`;
    });

    return card;
}
