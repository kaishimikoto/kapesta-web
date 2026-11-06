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

    // Hide arrows if there's only one photo
    if (currentPhotos.length <= 1) {
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    } else {
        prevButton.style.display = "flex";
        nextButton.style.display = "flex";
    }

    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

document.addEventListener("click", function(event) {

    // Detect clicked review or gallery photo
    const photo = event.target.closest(
        ".review-photo-item img, .review-photo-wrapper img, .gallery-item img"
    );

    // Detect review photo overlay
    const overlay = event.target.closest(
        ".photo-overlay, .review-photo-more"
    );

    if (!photo && !overlay) return;
    event.stopPropagation();

    const clickedElement = photo || overlay;

    // Find the group containing the clicked photo
    const container = clickedElement.closest(
        ".review-photos-container, .gallery-photos"
    );

    if (!container) return;

    // Get all photos from that group only
    const photos = Array.from(container.querySelectorAll("img"));

    if (!photos.length) return;

    // Open the lightbox
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
