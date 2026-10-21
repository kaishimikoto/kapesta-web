let isHeaderMenuToggle = false;

function toggleHeaderMenu() {
    if (isHeaderMenuToggle === false) {
        document.querySelector(".header-navigation").style.display = "block";
        isHeaderMenuToggle = true;
    }
        else {
            document.querySelector(".header-navigation").style.display = "none";
            isHeaderMenuToggle = false;
        }
}

function contactSubmitDialog(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name && email && subject && message) {
        document.getElementById("dialog-overlay").style.display = "flex";
    }
}

function reportSubmitDialog(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let attachment = document.getElementById("attachment").value;
    let confirm1 = document.getElementById("confirm1").checked;
    let confirm2 = document.getElementById("confirm2").checked;

    if (email && category && description && confirm1 && confirm2) {
        document.getElementById("dialog-overlay").style.display = "flex";
    }
}

function closeDialog() {
    const overlay = document.getElementById("dialog-overlay");
    const dialog = overlay.querySelector(".success-dialog");

    dialog.classList.add("is-closing");

    dialog.addEventListener("animationend", function handleAnimationEnd() {
        overlay.style.display = "none";
        dialog.classList.remove("is-closing");

        document.querySelector("form").reset();

        dialog.removeEventListener("animationend", handleAnimationEnd);
    });
}

// Explore Page - Filtering System

// Toggle Filter System
function toggleFilterSystem() {
    document.getElementById("overlayFilter").style.display = "flex";
}

// Exit Filter System
function closeFilterSystem() {
    const overlayFilter = document.getElementById("overlayFilter");
    const filterBox = overlayFilter.querySelector(".filter-box");

    filterBox.classList.add("is-closing");

    filterBox.addEventListener("animationend", function handleAnimationEnd() {
        overlayFilter.style.display = "none";
        filterBox.classList.remove("is-closing");

        filterBox.removeEventListener("animationend", handleAnimationEnd);
    });
}

// Default User Selected Filters
let filteredBarangay = "allBrgy"; // Default barangay
let filteredMaxPrice = 0; // Default max price
let filteredAmenity = [false, false, false, false, false, false, false, false]; // Default amenity

// Countering System
let filterCount = 0; // Default total filter
let amenityCount = 0; // Default total amenity

let totalFilter = document.getElementById("totalFilterSelected");

function updateFilterCount() {
    totalFilter.innerText = `${filterCount} Selected`;
}

// Filtering Barangay
function selectBarangay() {
    let selectedBarangay = document.getElementById("barangay").value;
    let selectedBarangayActive = document.getElementById("barangay");

    // Check if Filtered Barangay value is default and Selected Barangay value is not default
    if (filteredBarangay === "allBrgy" && selectedBarangay !== "allBrgy") {
        filterCount++;

        selectedBarangayActive.style.border = "1px solid var(--color-brown)";
    }
        else if (filteredBarangay !== "allBrgy" && selectedBarangay === "allBrgy") {
            filterCount--;

            selectedBarangayActive.style.border = "1px solid var(--color-border)";
        }
    
    // Update Selected Barangay
    filteredBarangay = selectedBarangay;
    updateFilterCount();

    // Testing
    console.log(`Selected Barangay: ${selectedBarangay}`);
    console.log(`Filtered Barangay: ${filteredBarangay}`);
    console.log(`Filter Count: ${filterCount}`);
}

// Filtering Maximum Price Range
function selectMaxPrice() {
    let selectedMaxPrice = Number(document.getElementById("maxPrice").value);

    // Check if Filtered Max Price value is default and Selected Max Price is not default
    if (filteredMaxPrice === 0 && selectedMaxPrice > 0) {
        filterCount++;
    }
        else if (filteredMaxPrice > 0 && selectedMaxPrice === 0) {
            filterCount--;
        }

    // Update Selected Price
    filteredMaxPrice = selectedMaxPrice;
    document.getElementById("selectedPrice").innerText = `₱${filteredMaxPrice}`;
    updateFilterCount();

    // Testing
    console.log(`Selected Price: ${selectedMaxPrice}`);
    console.log(`Filtered Price: ${filteredMaxPrice}`);
    console.log(`Filter Count: ${filterCount}`);
}

// Filtering Amenities
let updateAmenityCount = document.getElementById("totalAmenitySelected");

function selectAmenity(amenityIndex) {
    let amenityButton = document.getElementById("amenity" + (amenityIndex + 1));

    //Check if amenity index is not selected
    if (filteredAmenity[amenityIndex] === false) {
        filteredAmenity[amenityIndex] = true;
        amenityCount++;
        filterCount++;
        
        amenityButton.style.border = "1px solid var(--color-brown)";
        amenityButton.style.backgroundColor = "var(--color-brown)";
        amenityButton.style.color = "var(--color-white)";
    }
        else {
            filteredAmenity[amenityIndex] = false;
            amenityCount--;
            filterCount--;

            amenityButton.style.border = "1px solid var(--color-border)";
            amenityButton.style.backgroundColor = "var(--color-white)";
            amenityButton.style.color = "black";
        }
    
    // Update Selected Amenity Count
    updateAmenityCount.innerText = `${amenityCount} Selected`;

    // Update Total Filter Count
    updateFilterCount();

    // Testing
    console.log(`Selected Amenity (Index ${amenityIndex}): ${filteredAmenity[amenityIndex]}`);
    console.log(`Filtered Amenity: ${filteredAmenity}`);
    console.log(`Filter Count: ${filterCount}`);
}

// Clear All Filter
function clearFilter() {
    // Revert Barangay Select Style
    const resetBarangaySelect = document.getElementById("barangay");

    resetBarangaySelect.style.border = "1px solid var(--color-border)";

    // Revert Amenity Select Styles
    let i = 0; // For traversal
    let resetAmenityButton = document.getElementById("amenity" + i);

    for (i = 1; i <= 8; i++) {
        resetAmenityButton = document.getElementById("amenity" + i);
        resetAmenityButton.style.backgroundColor = "var(--color-white)";
        resetAmenityButton.style.color = "black";
    }

    // Reset User Selected Filter
    filteredBarangay = "allBrgy";
    filteredMaxPrice = 0;
    filteredAmenity = [false, false, false, false, false, false, false, false];

    // Reset Filter and Amenity Count
    filterCount = 0;
    amenityCount = 0;

    // Reset Selected Barangay
    document.getElementById("barangay").value = "allBrgy";

    // Reset Selected Price Range
    document.getElementById("maxPrice").value = 0;
    document.getElementById("selectedPrice").innerText = `₱0`;

    // Reset Amenity Buttons

    // Update Counters
    updateFilterCount();
    updateAmenityCount.innerText = `${amenityCount} Selected`;

    // Testing
    console.log(`Barangay: ${filteredBarangay}`);
    console.log(`Price: ${filteredMaxPrice}`);
    console.log(`Amenity: ${filteredAmenity}`);
    console.log(`Filter Count: ${filterCount}`);
    console.log(`Amenity Count: ${amenityCount}`);
}

// Apply Filter (Object)
let userFilter = {
    userSelectedBarangay: null,
    userSelectedMaxPrice: 0,
    userSelectedAmenity: []
};

function applyFilter() {
    userFilter = {
        userSelectedBarangay: filteredBarangay,
        userSelectedMaxPrice: filteredMaxPrice,
        userSelectedAmenity: [...filteredAmenity]
    }

    // Testing
    let {userSelectedBarangay, userSelectedMaxPrice, userSelectedAmenity} = userFilter;
    console.log(`Chosen Barangay: ${userSelectedBarangay}`);
    console.log(`Chosen Price: ${userSelectedMaxPrice}`);
    console.log(`Chosen Amenity: ${userSelectedAmenity}`);
}