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
    const viewAllButton = document.querySelector(
        ".my-favorites-header .view-all-button"
    );

    viewAllButton.style.display =
        favoriteIds.length >= 5 ? "inline-flex" : "none";

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

    // Create the same structure used in Explore
    const viewport = document.createElement("div");
    viewport.className = "cafes-viewport";

    const cafesContainer = document.createElement("div");
    cafesContainer.className = "cafes-container";

    viewport.appendChild(cafesContainer);
    container.appendChild(viewport);

    cafesToShow.forEach(cafe => {
        cafesContainer.appendChild(createFavoriteCafeCard(cafe));
    });
}

// Display up to 3 reviews written by the user
function displayMyReviews(user) {

    const container = document.getElementById("my-reviews");

    const viewAllButton = document.querySelector(
        ".my-reviews-header .view-all-button"
    );

    container.replaceChildren();

    // No user means no reviews
    const myReviews = user
        ? getReviewsWrittenByUser(user)
        : [];

    // Show View All only if there are more than 3 reviews
    if (viewAllButton) {
        viewAllButton.style.display =
            myReviews.length > 3 ? "inline-flex" : "none";
    }

    // Show empty message
    if (myReviews.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("profile-empty-message");
        emptyMessage.textContent =
            "You haven't written any reviews yet.";

        container.appendChild(emptyMessage);
        return;
    }

    // Display only the 3 newest reviews
    myReviews.slice(0, 3).forEach(({ cafe, review }, index, reviews) => {

        container.appendChild(createMyReviewCard(cafe, review));

        if (index < reviews.length - 1) {
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

    // Handle empty reviews and hide View All
    displayMyReviews(null);

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
        // Grab the newly updated user
        const freshUser = getCurrentUser();
        localStorage.setItem("currentUser", JSON.stringify(freshUser));

        displayUserInformation(freshUser);
        closeEditProfileModal();

        alert("Profile updated successfully!");
    } else {
        alert("Unable to update profile. Please log in again.");
    }
});

// ========================================
// PROFILE PICTURE
// ========================================

(function initializeProfilePicture() {

    const photoButton = document.getElementById("edit-photo-button");
    const photoInput = document.getElementById("profile-photo-input");
    const profileImage = document.getElementById("profile-picture");

    if (!photoButton || !photoInput || !profileImage) return;

    // Load the user's saved profile picture
    const user = getCurrentUser();

    if (user && user.profilePicture) {
        profileImage.src = user.profilePicture;
    }

    // Open file picker when edit button is clicked
    photoButton.addEventListener("click", function() {
        photoInput.click();
    });

    // Handle selected image
    photoInput.addEventListener("change", function() {

        const file = photoInput.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            photoInput.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = function(event) {

            const image = new Image();

            image.onload = function() {

                // Resize image to reduce localStorage usage
                const canvas = document.createElement("canvas");

                const maxSize = 600;

                let width = image.width;
                let height = image.height;

                if (width > height && width > maxSize) {
                    height = height * (maxSize / width);
                    width = maxSize;
                } else if (height > maxSize) {
                    width = width * (maxSize / height);
                    height = maxSize;
                }

                canvas.width = width;
                canvas.height = height;

                const context = canvas.getContext("2d");

                context.drawImage(image, 0, 0, width, height);

                const imageData = canvas.toDataURL("image/jpeg", 0.8);

                try {

                    // Save updated profile picture
                    const saved = updateUserProfile({
                        profilePicture: imageData
                    });

                    if (saved) {
                        // Refresh active session storage so header gets the new picture too
                        const freshUser = getCurrentUser();
                        localStorage.setItem("currentUser", JSON.stringify(freshUser));

                        profileImage.src = imageData;
                    }

                } catch (error) {
                    alert("Unable to save this image. Please choose a smaller image.");
                }

            };

            image.src = event.target.result;

        };

        reader.readAsDataURL(file);

    });

})();
