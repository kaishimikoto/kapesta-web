
// ========================================
// KAPESTA USER DATA (ONE DEMO ACCOUNT)
// ========================================

// DEMO ACCOUNT CREDENTIALS
const demoUser = {
    username: "demouser",
    email: "demo@kapesta.com",
    password: "kapesta123",
    profilePicture: "pictures/coffee1.jpg"
};

// Automatically create the demo account if it doesn't exist
function initializeDemoUser() {
    const savedUser = localStorage.getItem("kapestaUser");

    if (!savedUser) {
        localStorage.setItem("kapestaUser", JSON.stringify(demoUser));
        localStorage.setItem("kapestaLoggedIn", "false");
    }
}

initializeDemoUser();


// ========================================
// LOGIN
// ========================================

function loginUser(usernameOrEmail, password) {
    const savedUser = JSON.parse(localStorage.getItem("kapestaUser"));

    if (!savedUser) {
        return false;
    }

    const usernameMatches =
        usernameOrEmail.trim().toLowerCase() === savedUser.username.toLowerCase() ||
        usernameOrEmail.trim().toLowerCase() === savedUser.email.toLowerCase();

    if (usernameMatches && password === savedUser.password) {
        localStorage.setItem("kapestaLoggedIn", "true");
        return true;
    }

    return false;
}


// ========================================
// GET CURRENT USER
// ========================================

function getCurrentUser() {
    if (!isLoggedIn()) {
        return null;
    }

    const user = localStorage.getItem("kapestaUser");

    return user ? JSON.parse(user) : null;
}


// ========================================
// CHECK LOGIN STATUS
// ========================================

function isLoggedIn() {
    return localStorage.getItem("kapestaLoggedIn") === "true";
}


// ========================================
// LOGOUT
// ========================================

function logoutUser() {
    localStorage.setItem("kapestaLoggedIn", "false");
    sessionStorage.removeItem("kapestaUser");
}


// ========================================
// UPDATE PROFILE
// ========================================

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


// ========================================
// REVIEWS
// ========================================

function getAllSavedReviews() {
    return JSON.parse(localStorage.getItem("kapestaReviews")) || [];
}


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

    review.id = reviewData.id;

    allReviews.unshift(reviewData);

    localStorage.setItem("kapestaReviews", JSON.stringify(allReviews));
}


function getReviewsForCafe(cafeId) {
    return getAllSavedReviews().filter(
        review => Number(review.cafeId) === Number(cafeId)
    );
}


// ========================================
// DELETE REVIEW
// ========================================

function deleteReview(reviewId) {
    const currentUser = getCurrentUser();

    if (!currentUser || !isLoggedIn()) {
        return false;
    }

    const allReviews = getAllSavedReviews();

    const reviewToDelete = allReviews.find(
        review => Number(review.id) === Number(reviewId)
    );

    if (
        !reviewToDelete ||
        reviewToDelete.userName !== currentUser.username
    ) {
        return false;
    }

    const updatedReviews = allReviews.filter(
        review => Number(review.id) !== Number(reviewId)
    );

    localStorage.setItem(
        "kapestaReviews",
        JSON.stringify(updatedReviews)
    );

    return true;
}
