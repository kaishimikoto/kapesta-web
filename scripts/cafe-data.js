// GET HTML ELEMENTS
const galleryPhotosContainer = document.getElementById("gallery-photos");
const galleryPrevButton = document.getElementById("gallery-prev");
const galleryNextButton = document.getElementById("gallery-next");

let galleryCurrentIndex = 0;


// DISPLAY PHOTOS
function displayGallery() {

    galleryPhotosContainer.innerHTML = "";

    selectedCafe.photos.forEach(function(photo) {

        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";

        galleryItem.innerHTML = `
            <img src="${photo}" alt="Cafe photo" class="cafe-picture">
        `;

        galleryPhotosContainer.appendChild(galleryItem);

    });

    updateGallery();
}


// UPDATE SLIDER POSITION
function updateGallery() {

    const photos = galleryPhotosContainer.children;
    const maxIndex = Math.max(0, photos.length - 4);

    galleryCurrentIndex = Math.min(galleryCurrentIndex, maxIndex);

    if (photos.length === 0) return;

    // Get the exact distance between the first photo
    // and the photo that should appear at the left edge
    const firstPhotoPosition = photos[0].getBoundingClientRect().left;
    const targetPhotoPosition = photos[galleryCurrentIndex].getBoundingClientRect().left;

    const movement = targetPhotoPosition - firstPhotoPosition;

    galleryPhotosContainer.style.transform =
        `translateX(-${movement}px)`;

    galleryPrevButton.disabled = galleryCurrentIndex === 0;
    galleryNextButton.disabled = galleryCurrentIndex >= maxIndex;
}   


// NEXT PHOTO
galleryNextButton.addEventListener("click", function() {

    if (galleryCurrentIndex < selectedCafe.photos.length - 4) {
        galleryCurrentIndex++;
        updateGallery();
    }

});


// PREVIOUS PHOTO
galleryPrevButton.addEventListener("click", function() {

    if (galleryCurrentIndex > 0) {
        galleryCurrentIndex--;
        updateGallery();
    }

});


// LOAD SELECTED CAFE PHOTOS
if (selectedCafe && selectedCafe.photos && selectedCafe.photos.length > 0) {
    displayGallery();
}
