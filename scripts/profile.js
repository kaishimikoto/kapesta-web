// ========================================
// KAPESTA PROFILE PAGE
// Requires cafe-data.js and user-data.js
// ========================================

const profileUser = getCurrentUser();


// Display the saved user's information
function displayUserInformation(user) {
    if (!user) return;

    document.getElementById("username").textContent =
        user.username || "Kapesta User";

    document.getElementById("profile-username").textContent =
        user.username ? `@${user.username}` : "";

    document.getElementById("profile-picture").src =
        user.profilePicture || "pictures/coffee1.jpg";

    document.getElementById("profile-picture").alt =
        user.username
            ? `${user.username}'s profile picture`
            : "Profile picture";

    document.getElementById("email").textContent =
        user.email || "Not provided";
}

// Display up to 3 favorite cafés
function displayFavoriteCafes() {
    const container = document.getElementById("favorite-cafes");
    const favoriteIds = getFavoriteCafeIds();
    const viewAllButton = document.querySelector(".my-favorites-header .view-all-button");

    viewAllButton.style.display = favoriteIds.length >= 5 ? "inline-block" : "none";

    container.replaceChildren();

    const favoriteCafes = cafes.filter(cafe =>
        favoriteIds.includes(Number(cafe.id))
    );

    const cafesToShow = favoriteCafes.slice(0, 4);

    if (cafesToShow.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("profile-empty-message");
        emptyMessage.textContent =
            "You haven't favorited any cafés yet.";

        container.appendChild(emptyMessage);
        return;
    }

    cafesToShow.forEach(cafe => {
        container.appendChild(createFavoriteCafeCard(cafe));
    });
}

// Display up to 3 reviews written by the user
function displayMyReviews(user) {
    const container = document.getElementById("my-reviews");
    const viewAllButton = document.querySelector(
        ".my-reviews-header .view-all-button"
    );

    container.replaceChildren();

    const myReviews = getReviewsWrittenByUser(user);

    // Show View All only when there are 4 or more reviews
    viewAllButton.style.display =
        myReviews.length >= 4 ? "inline-flex" : "none";

    // Show empty message if user has no reviews
    if (myReviews.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("profile-empty-message");
        emptyMessage.textContent =
            "You haven't written any reviews yet.";

        container.appendChild(emptyMessage);
        return;
    }

    // Display only the 3 newest reviews
    const reviewsToShow = myReviews.slice(0, 3);

    reviewsToShow.forEach(({ cafe, review }, index) => {
        container.appendChild(createMyReviewCard(cafe, review));

        if (index < reviewsToShow.length - 1) {
            const divider = document.createElement("hr");
            container.appendChild(divider);
        }
    });
}

// ========================================
// INITIALIZE PROFILE
// ========================================

if (!profileUser) {

    document.getElementById("username").textContent = "Demo User";
    document.getElementById("email").textContent = "Not provided";

    document.getElementById("favorite-cafes").innerHTML =
        '<p class="profile-empty-message">You haven\'t favorited any cafés yet.</p>';

    document.getElementById("my-reviews").innerHTML =
        '<p class="profile-empty-message">You haven\'t written any reviews yet.</p>';

} else {

    displayUserInformation(profileUser);
    displayFavoriteCafes();
    displayMyReviews(profileUser);

}

// ========================================
// EDIT PROFILE INFORMATION
// ========================================

const editProfileButton = document.getElementById("edit-profile-button");
const editProfileModal = document.getElementById("edit-profile-modal");
const closeModalButton = document.getElementById("close-modal-button");
const cancelEditButton = document.getElementById("cancel-edit-button");
const editProfileForm = document.getElementById("edit-profile-form");

const editUsername = document.getElementById("edit-username");
const editEmail = document.getElementById("edit-email");

// Open modal
editProfileButton.addEventListener("click", function () {
    const user = getCurrentUser();

    if (!user) return;

    editUsername.value = user.username || "";
    editEmail.value = user.email || "";

    editProfileModal.hidden = false;
});

// Close modal
function closeEditProfileModal() {
    editProfileModal.hidden = true;
}

closeModalButton.addEventListener("click", closeEditProfileModal);
cancelEditButton.addEventListener("click", closeEditProfileModal);

// Save changes
editProfileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const updatedDetails = {
        username: editUsername.value.trim(),
        email: editEmail.value.trim()
    };

    if (!updatedDetails.username || !updatedDetails.email) {
        alert("Please fill in all fields.");
        return;
    }

    const saved = updateUserProfile(updatedDetails);

    if (saved) {
        displayUserInformation(getCurrentUser());
        closeEditProfileModal();

        alert("Profile updated successfully!");
    } else {
        alert("Unable to update profile. Please log in again.");
    }
});
