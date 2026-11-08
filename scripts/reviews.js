function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);

        reader.readAsDataURL(file);
    });
}

// STAR RATING
const starIcons = {
    1: "images/icons/1-star.svg",
    2: "images/icons/2-stars.svg",
    3: "images/icons/3-stars.svg",
    4: "images/icons/4-stars.svg",
    5: "images/icons/5-stars.svg"
};

// PAGE ELEMENTS
if (!selectedCafe) {
    console.error("Cafe not found. Check the cafe ID in the URL.");
}

const reviewsList = document.getElementById("reviews-list");
const noReviewsMessage = document.getElementById("no-reviews-message");
const ratingFilter = document.getElementById("rating-filter");

console.log("Cafe ID:", cafeId);
console.log("Selected cafe:", selectedCafe);
console.log("Selected cafe reviews:", selectedCafe?.listOfReviews);
// LOAD SAVED REVIEWS FROM LOCAL STORAGE
if (selectedCafe) {
    const savedReviews = getReviewsForCafe(selectedCafe.id);

    savedReviews.reverse().forEach(reviewData => {
        const review =   new Review(
            reviewData.userName,
            reviewData.date,
            reviewData.reviewMessage,
            reviewData.photos,
            reviewData.reviewRating
        );

        // Preserve the saved review ID
        review.id = reviewData.id;

        selectedCafe.addReview(review);
    });
}

const isAllReviewsPage = window.location.pathname.endsWith("all-cafe-reviews.html");

// AVERAGE RATING AND REVIEW COUNT

function updateReviewSummary() {
    const totalReviews = selectedCafe.listOfReviews.length;

    if (totalReviews === 0) {
        const averageElement = document.getElementById("average-rating");
        const countElement = document.getElementById("review-count");

        if (averageElement) averageElement.textContent = "0.0";

        if (countElement) {
            countElement.textContent = "Based on 0 reviews";
        }

        return;
    }

    const totalRating = selectedCafe.listOfReviews.reduce(
        (sum, review) => sum + Number(review.reviewRating),
        0
    );

    const averageElement = document.getElementById("average-rating");
    const countElement = document.getElementById("review-count");

    if (averageElement) {
        averageElement.textContent =
            (totalRating / totalReviews).toFixed(1);
    }

    if (countElement) {
        countElement.textContent =
            `Based on ${totalReviews} ${totalReviews === 1 ? "review" : "reviews"}`;
    }
}

// RATING PERCENTAGE BARS
function updateRatingBars() {
    const total = selectedCafe.listOfReviews.length;
    const ratingRows = document.querySelectorAll(".rating-row");

    ratingRows.forEach(row => {
        const label = row.querySelector(".rating-label");
        const fill = row.querySelector(".rating-fill");
        const countElement = row.querySelector(".rating-count");

        if (!label || !fill || !countElement) return;

        const rating = Number(label.textContent.trim());

        const count = selectedCafe.listOfReviews.filter(
            review => Number(review.reviewRating) === rating
        ).length;

        const percentage =
            total === 0 ? 0 : (count / total) * 100;

        fill.style.width = `${percentage}%`;
        countElement.textContent = count;
    });
}

// RENDER REVIEWS
function renderReviews(reviewsToDisplay) {
    // Remove existing review cards and dividers.
    // Keep the no-reviews message element.
    reviewsList.querySelectorAll(".review, .review-divider").forEach(
        element => element.remove()
    );

    reviewsToDisplay.forEach((review, index) => {
        const reviewCard = document.createElement("div");

        const loggedInUser = getCurrentUser();

        const reviewerPhoto =
            loggedInUser &&
            review.userName?.trim().toLowerCase() ===
            loggedInUser.username?.trim().toLowerCase()
                ? loggedInUser.profilePicture
                : "images/icons/user-profile.svg";

        reviewCard.classList.add("review");
        reviewCard.dataset.stars = review.reviewRating;

        reviewCard.innerHTML = `
            ${review.photos && review.photos.length > 0 ? `
                <div class="review-photos-container photos-${Math.min(review.photos.length, 8)}">
                    ${review.photos.map((photo, photoIndex) => `
                        <div class="review-photo-item" ${photoIndex >= 4 ? 'style="display: none;"' : ""}>
                            <img
                                src="${photo}"
                                alt="Review photo"
                                class="review-cafe-photo"
                            >
                            ${photoIndex === 3 && review.photos.length > 4
                                ? `<div class="photo-overlay">+${review.photos.length - 4}</div>`
                                : ""}
                        </div>
                    `).join("")}
                </div>
            ` : ""}

            <div class="review-contents">
                <div class="rating-info">
                    <div class="username-rating-date">
                        <img
                            src="${reviewerPhoto || "images/icons/user-profile.svg"}"
                            alt="User profile image"
                            class="user-profile"
                        >
                        <h3>${review.userName}</h3>
                        <img
                            src="${starIcons[review.reviewRating]}"
                            alt="${review.reviewRating} stars"
                            class="star-rating"
                        >
                    </div>

                    <div class="date-and-delete">
                        <h4>${review.date}</h4>
                    </div>
                </div>
                <p>${review.reviewMessage}</p>
            </div>
        `;

        // Add delete button only if this review belongs to the logged-in user
        const ratingInfo = reviewCard.querySelector(".rating-info");

        const deleteButton = createReviewDeleteButton(review, function() {

            // Remove the deleted review from the café's in-memory list
            selectedCafe.listOfReviews = selectedCafe.listOfReviews.filter(
                savedReview => Number(savedReview.id) !== Number(review.id)
            );

            // Update the café's rating and rating bars
            updateReviewSummary();
            updateRatingBars();

            // Keep the currently selected rating filter
            const currentFilter = ratingFilter ? ratingFilter.value : "all";

            let reviewsToDisplay = selectedCafe.listOfReviews;

            if (currentFilter !== "all") {
                reviewsToDisplay = reviewsToDisplay.filter(
                    savedReview =>
                        String(savedReview.reviewRating) === currentFilter
                );
            }

            // Keep the 3-review limit on the Café Info page
            if (!isAllReviewsPage) {
                reviewsToDisplay = reviewsToDisplay.slice(0, 3);
            }

            renderReviews(reviewsToDisplay);
        });

        const dateAndDelete = reviewCard.querySelector(".date-and-delete");

        if (deleteButton && dateAndDelete) {
            dateAndDelete.appendChild(deleteButton);
        }

        reviewsList.appendChild(reviewCard);

        // Add dividers only between the reviews currently displayed.
        if (index < reviewsToDisplay.length - 1) {
            const divider = document.createElement("hr");
            divider.classList.add("review-divider");
            reviewsList.appendChild(divider);
        }
    });

    if (noReviewsMessage) {
        noReviewsMessage.style.display =
            reviewsToDisplay.length === 0 ? "block" : "none";
    }
}

// INITIAL DISPLAY

updateReviewSummary();
updateRatingBars();

renderReviews(
    isAllReviewsPage
        ? selectedCafe.listOfReviews
        : selectedCafe.listOfReviews.slice(0, 3)
);

// RATING FILTER

if (ratingFilter) {
    ratingFilter.addEventListener("change", function() {
        const selectedRating = ratingFilter.value;

        let filteredReviews;

        if (selectedRating === "all") {
            filteredReviews = selectedCafe.listOfReviews;
        } else {
            filteredReviews = selectedCafe.listOfReviews.filter(
                review =>
                    String(review.reviewRating) === selectedRating
            );
        }

        // Limit to 3 reviews ONLY on the cafe details page.
        if (!isAllReviewsPage) {
            filteredReviews = filteredReviews.slice(0, 3);
        }

        renderReviews(filteredReviews);
    });
}

// REVIEW FORM SUBMISSION
const reviewForm = document.getElementById("review-form");

// Hide View All button on the All Reviews page
if (isAllReviewsPage && reviewsButtons) {
    reviewsButtons.style.display = "none";
}

const reviewPhotoInput = document.getElementById("review-photos");
const successMessage = document.getElementById("review-success-message");

const photoCount = document.getElementById("photo-count");
const photoPreviewContainer = document.getElementById("photo-preview-container");

if (reviewPhotoInput) {
    reviewPhotoInput.addEventListener("change", function() {

        // Check photo limit
        if (this.files.length > 8) {
            alert("You can upload a maximum of 8 photos.");
            this.value = "";
        }

        // Update photo count
        photoCount.textContent = `${this.files.length}/8 photos selected`;

        // Clear previous previews
        photoPreviewContainer.innerHTML = "";

        // Show selected photo previews
        Array.from(this.files).forEach(file => {
            const img = document.createElement("img");

            img.src = URL.createObjectURL(file);
            img.classList.add("photo-preview");

            photoPreviewContainer.appendChild(img);
        });
    });
}

if (reviewForm) {
    reviewForm.addEventListener("submit", async function(event) { // We add async because converting images takes a little time.
        event.preventDefault();

        if (!isLoggedIn()) {
            window.location.href = "login.html";
            return;
        }

        const message = document.getElementById("review-message").value.trim();
        const files = Array.from(reviewPhotoInput.files);

        // Check if a rating was selected
        if (selectedRating === 0) {
            alert("Please select a star rating.");
            return;
        }

        // Check photo limit
        if (files.length > 8) {
            alert("You can upload a maximum of 8 photos.");
            return;
        }

        // Get uploaded photos
        const photoPaths = await Promise.all(
            files.map(file => convertImageToBase64(file))
        ); // That's the important change! Your existing new Review(...) can still use photoPaths without changing its structure.

        // Create the new review
        const newReview = new Review(
            getCurrentUser().username,
            new Date().toLocaleDateString(),
            message,    
            photoPaths,
            selectedRating
        );

        // Add review to the selected cafe
        selectedCafe.addReview(newReview);

        // Save review permanently in localStorage
        saveReview(selectedCafe.id, newReview);

        // Update review summary and rating bars
        updateReviewSummary();
        updateRatingBars();

        // Refresh the displayed reviews
        const currentFilter = ratingFilter ? ratingFilter.value : "all";

        let reviewsToDisplay = selectedCafe.listOfReviews;

        if (currentFilter !== "all") {
            reviewsToDisplay = reviewsToDisplay.filter(
                review => String(review.reviewRating) === currentFilter
            );
        }

        if (!isAllReviewsPage) {
            reviewsToDisplay = reviewsToDisplay.slice(0, 3);
        }

        renderReviews(reviewsToDisplay);

        // Clear the form
        reviewForm.reset();

        // Reset the clickable stars
        selectedRating = 0;

        document.querySelectorAll(".review-star-rating .star").forEach(star => {
            star.textContent = "☆";
            star.classList.remove("active");
        });

        // Show success message
        successModal.style.display = "flex";

    });
}

// SUCCESS POPUP
const successModal = document.getElementById("success-modal");
const successOkButton = document.getElementById("success-ok-button");

successOkButton.addEventListener("click", function() {
    successModal.style.display = "none";
});

// Star rating
const stars = document.querySelectorAll(".star");

let selectedRating = 0;

stars.forEach(function(star) {
    star.addEventListener("click", function() {
        selectedRating = Number(star.dataset.value);

        stars.forEach(function(s) {
            const starValue = Number(s.dataset.value);

            if (starValue <= selectedRating) {
                s.textContent = "★";
                s.classList.add("active");
            } else {
                s.textContent = "☆";
                s.classList.remove("active");
            }
        });

        console.log("Selected rating:", selectedRating);
    });
});
