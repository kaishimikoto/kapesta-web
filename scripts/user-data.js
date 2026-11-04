// ========================================
// KAPESTA USER DATA (ONE DEMO ACCOUNT)
// ========================================

const demoUser = {
    username: "alexsantos",
    email: "alex@example.com",
    profilePicture: "pictures/coffee1.jpg"
};

// Save the single demo account.
// Passwords in localStorage are NOT secure.
// Use fictional credentials for this school project only.

function registerUser(username, email, password) {
    const user = {
        username,
        email,
        password,
        profilePicture: "pictures/coffee1.jpg"
    };

    localStorage.setItem("kapestaUser", JSON.stringify(user));
    localStorage.setItem("kapestaLoggedIn", "false");

    return true;
}


// Check login credentials
function loginUser(usernameOrEmail, password) {
    const savedUser = JSON.parse(localStorage.getItem("kapestaUser"));

    if (!savedUser) {
        return false;
    }

    const usernameMatches =
        usernameOrEmail === savedUser.username ||
        usernameOrEmail === savedUser.email;

    if (usernameMatches && password === savedUser.password) {
        localStorage.setItem("kapestaLoggedIn", "true");
        return true;
    }

    return false;
}


// Return the account only when the demo user is logged in
function getCurrentUser() {
    if (!isLoggedIn()) {
        return null;
    }

    const user = localStorage.getItem("kapestaUser");

    return user ? JSON.parse(user) : demoUser;
}


// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem("kapestaLoggedIn") === "true";
}


// Log out
function logoutUser() {
    localStorage.setItem("kapestaLoggedIn", "false");
}

// Update profile details without replacing the password
function updateUserProfile(updatedDetails) {
    const savedUser = localStorage.getItem("kapestaUser");

    const currentUser = savedUser
        ? JSON.parse(savedUser)
        : { ...demoUser };

    const oldUsername = currentUser.username;
    const updatedUser = { ...currentUser, ...updatedDetails };

    // Update usernames in saved reviews
    if (updatedDetails.username) {
        const allReviews = getAllSavedReviews();

        allReviews.forEach(review => {
            if (review.userName === oldUsername) {
                review.userName = updatedDetails.username;
            }
        });

        localStorage.setItem("kapestaReviews", JSON.stringify(allReviews));
    }

    localStorage.setItem("kapestaUser", JSON.stringify(updatedUser));

    return true;
}

// ========================================
// FAVORITE CAFES
// Store café IDs, not complete café objects.
// ========================================

function getFavoriteCafeIds() {
    return JSON.parse(localStorage.getItem("favoriteCafes")) || [];
}


function toggleFavoriteCafe(cafeId) {
    const favoriteIds = getFavoriteCafeIds();
    const id = Number(cafeId);

    const alreadyFavorited = favoriteIds.includes(id);

    const updatedIds = alreadyFavorited
        ? favoriteIds.filter(savedId => savedId !== id)
        : [...favoriteIds, id];

    localStorage.setItem("favoriteCafes", JSON.stringify(updatedIds));

    return !alreadyFavorited;
}

// GET ALL SAVED REVIEWS
function getAllSavedReviews() {
    return JSON.parse(localStorage.getItem("kapestaReviews")) || [];
}

// SAVE A NEW REVIEW
function saveReview(cafeId, review) {
    const allReviews = getAllSavedReviews();

    const reviewData = {
        id: Date.now(),
        cafeId: Number(cafeId),
        userName: review.userName,
        date: review.date,
        reviewMessage: review.reviewMessage,
        photos: review.photos,
        reviewRating: review.reviewRating
    };

    allReviews.unshift(reviewData);

    localStorage.setItem("kapestaReviews", JSON.stringify(allReviews));
}

// GET REVIEWS FOR A SPECIFIC CAFE
function getReviewsForCafe(cafeId) {
    return getAllSavedReviews().filter(
        review => Number(review.cafeId) === Number(cafeId)
    );
}
