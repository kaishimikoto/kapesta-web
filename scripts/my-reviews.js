const currentUser = getCurrentUser();

if (currentUser) {
    document.getElementById("profile-picture").src =
        currentUser.profilePicture || "pictures/coffee1.jpg";

    document.getElementById("profile-username").textContent =
        currentUser.username ? `@${currentUser.username}` : "";
}

document.addEventListener("DOMContentLoaded", function () {

    // Check if user is logged in
    if (!isLoggedIn()) {
        window.location.href = "login.html";
        return;
    }

    const user = getCurrentUser();
    const container = document.getElementById("all-my-reviews");

    container.replaceChildren();

    const myReviews = getReviewsWrittenByUser(user);

    // Show empty message
    if (myReviews.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("profile-empty-message");
        emptyMessage.textContent =
            "You haven't written any reviews yet.";

        container.appendChild(emptyMessage);
        return;
    }

    // Display all reviews
    myReviews.forEach(({ cafe, review }, index) => {
        container.appendChild(createMyReviewCard(cafe, review));

        if (index < myReviews.length - 1) {
            const divider = document.createElement("hr");
            container.appendChild(divider);
        }
    });

});
