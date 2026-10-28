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

const isAllReviewsPage =
    window.location.pathname.endsWith("all-reviews.html");

// LIGHTBOX CODE //
const lightbox = document.getElementById("photo-lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.getElementById("lightbox-close");
const prevButton = document.getElementById("lightbox-prev");
const nextButton = document.getElementById("lightbox-next");

let currentPhotos = [];
let currentIndex = 0;

function openLightbox(photos, index) {
    if (!photos.length) return;

    currentPhotos = photos;
    currentIndex = index;

    lightboxImage.src = currentPhotos[currentIndex].src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

document.addEventListener("click", function(event) {
    const photo = event.target.closest(
        ".review-photo-item img, .review-photo-wrapper img"
    );

    const overlay = event.target.closest(
        ".photo-overlay, .review-photo-more"
    );

    if (!photo && !overlay) return;

    const clickedElement = photo || overlay;
    const container = clickedElement.closest(".review-photos-container");

    if (!container) return;

    const photos = Array.from(container.querySelectorAll("img"));

    if (photos.length === 0) return;

    if (overlay) {
        openLightbox(photos, Math.min(3, photos.length - 1));
    } else {
        openLightbox(photos, photos.indexOf(photo));
    }
});

if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
}

if (nextButton) {
    nextButton.addEventListener("click", function() {
        if (currentPhotos.length === 0) return;

        currentIndex = (currentIndex + 1) % currentPhotos.length;
        lightboxImage.src = currentPhotos[currentIndex].src;
    });
}

if (prevButton) {
    prevButton.addEventListener("click", function() {
        if (currentPhotos.length === 0) return;

        currentIndex =
            (currentIndex - 1 + currentPhotos.length) %
            currentPhotos.length;

        lightboxImage.src = currentPhotos[currentIndex].src;
    });
}

if (lightbox) {
    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}

document.addEventListener("keydown", function(event) {
    if (!lightbox || lightbox.style.display !== "flex") return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight" && nextButton) nextButton.click();
    if (event.key === "ArrowLeft" && prevButton) prevButton.click();
});

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
                            src="images/icons/user-profile.svg"
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
                    <h4>${review.date}</h4>
                </div>
                <p>${review.reviewMessage}</p>
            </div>
        `;

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
            // Reset to the initial display.
            filteredReviews = isAllReviewsPage
                ? selectedCafe.listOfReviews
                : selectedCafe.listOfReviews.slice(0, 3);
        } else {
            // Search the complete review list, not just visible cards.
            filteredReviews = selectedCafe.listOfReviews.filter(
                review =>
                    String(review.reviewRating) === selectedRating
            );

            // Limit matching reviews to three on the cafe page.
            if (!isAllReviewsPage) {
                filteredReviews = filteredReviews.slice(0, 3);
            }
        }

        renderReviews(filteredReviews);
    });
}

console.log(selectedCafe.listOfReviews);

// WRITE A REVIEW POPUP

const reviewDialog = document.getElementById("review-dialog");
const openReviewButton = document.getElementById("open-review-button");
const closeReviewButton = document.getElementById("close-review-button");

if (reviewDialog && openReviewButton && closeReviewButton) {

    openReviewButton.addEventListener("click", function() {
        reviewDialog.showModal();
    });

    closeReviewButton.addEventListener("click", function() {
        reviewDialog.close();
    });

}

// REVIEW FORM SUBMISSION

const reviewForm = document.getElementById("review-form");
const reviewPhotoInput = document.getElementById("review-photos");

if (reviewPhotoInput) {
    reviewPhotoInput.addEventListener("change", function() {
        if (this.files.length > 8) {
            alert("You can upload a maximum of 8 photos.");
            this.value = "";
        }
    });
}

if (reviewForm) {
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const rating = document.getElementById("review-rating").value;
        const message = document.getElementById("review-message").value.trim();
        const files = Array.from(reviewPhotoInput.files);

        if (!rating) {
            alert("Please select a star rating.");
            return;
        }

        if (files.length > 8) {
            alert("You can upload a maximum of 8 photos.");
            return;
        }

        const photoPaths = files.map(file => URL.createObjectURL(file));

        const newReview = new Review(
            "You",
            new Date().toLocaleDateString(),
            message,
            photoPaths,
            Number(rating)
        );

        selectedCafe.addReview(newReview);

        console.log("Reviews after submission:", selectedCafe.listOfReviews);
        console.log("Updated average:", selectedCafe.rating);
        console.log("Updated review count:", selectedCafe.listOfReviews.length);

        // Update the average rating and total review count
        document.getElementById("average-rating").textContent =
            selectedCafe.rating.toFixed(1);

        const totalReviews = selectedCafe.listOfReviews.length;

        document.getElementById("review-count").textContent =
            `Based on ${totalReviews} ${totalReviews === 1 ? "review" : "reviews"}`;

        // Update the rating distribution bars
        updateRatingBars();

        const selectedRating = ratingFilter ? ratingFilter.value : "all";

        let reviewsToDisplay;

        if (selectedRating === "all") {
            reviewsToDisplay = isAllReviewsPage
                ? selectedCafe.listOfReviews
                : selectedCafe.listOfReviews.slice(0, 3);
        } else {
            reviewsToDisplay = selectedCafe.listOfReviews.filter(
                review => String(review.reviewRating) === selectedRating
            );

            if (!isAllReviewsPage) {
                reviewsToDisplay = reviewsToDisplay.slice(0, 3);
            }
        }

        renderReviews(reviewsToDisplay);

        reviewForm.reset();
        reviewDialog.close();

        alert("Thank you! Your review has been submitted.");
    });
}
