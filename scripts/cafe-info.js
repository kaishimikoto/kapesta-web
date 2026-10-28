const params = new URLSearchParams(window.location.search);
const cafeId = params.get("id");

const selectedCafe = findCafeById(cafeId);

// Hero Information
document.getElementById("cafe-name").textContent = selectedCafe.name;
document.getElementById("cafe-desc").textContent = selectedCafe.description;
document.getElementById("cafe-rating").textContent = selectedCafe.rating;
document.getElementById("cafe-loc").textContent = selectedCafe.location;

const cafeHero = document.getElementById("hero");

if (cafeHero) {
    cafeHero.style.backgroundImage =
      `linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent), url("${selectedCafe.coverImage}")`;
}

// Cafe Details
document.getElementById("average-price").textContent = selectedCafe.averagePrice;
document.getElementById("seat-capacity").textContent = selectedCafe.seatCapacity;
document.getElementById("pet-friendly").textContent = selectedCafe.isPetFriendly ? "Yes" : "No";

// Shortcut for
/* if (selectedCafe.isPetFriendly) {
    document.getElementById("pet-friendly").textContent = "Yes";
} else {
    document.getElementById("pet-friendly").textContent = "No";
} */

document.getElementById("restroom").textContent = selectedCafe.restroomCount;

// Socials and Contact
document.getElementById("address").textContent = selectedCafe.location;
document.getElementById("phone-number").textContent = selectedCafe.phone;
document.getElementById("website").textContent = selectedCafe.website;

// Working Hours
document.getElementById("monday").textContent = selectedCafe.workingHours.monday;
document.getElementById("tuesday").textContent = selectedCafe.workingHours.tuesday;
document.getElementById("wednesday").textContent = selectedCafe.workingHours.wednesday;
document.getElementById("thursday").textContent = selectedCafe.workingHours.thursday;
document.getElementById("friday").textContent = selectedCafe.workingHours.friday;
document.getElementById("saturday").textContent = selectedCafe.workingHours.saturday;
document.getElementById("sunday").textContent = selectedCafe.workingHours.sunday;

// Amenities
document.getElementById("wifi").textContent = selectedCafe.wifiStrength;
document.getElementById("aircon").textContent = selectedCafe.airConditioningLevel;
document.getElementById("outlets").textContent = selectedCafe.powerOutletsNumber;
document.getElementById("alfresco").textContent = selectedCafe.isOpenSpace ? "Yes" : "No";
document.getElementById("noise-level").textContent = selectedCafe.noiseLevel;
document.getElementById("parking-availability").textContent = selectedCafe.isParkingAvailable ? "Yes" : "No";
document.getElementById("house-delivery").textContent = selectedCafe.isHouseDeliveryAvailable ? "Yes" : "No";
document.getElementById("parking-capacity").textContent = selectedCafe.parkingCapacity;
document.getElementById("grab-delivery").textContent = selectedCafe.isGrabDeliveryAvailable ? "Yes" : "No";
document.getElementById("allowed-vehicles").textContent = selectedCafe.allowedVehicles.join(", ");
document.getElementById("takeout").textContent = selectedCafe.isTakeOutAvailable ? "Yes" : "No";

// Payment Methods

if (selectedCafe.paymentMethods.cash === false) {
    document.getElementById("cash")
        .classList.add("payment-unavailable"); // .classList.add(" ")   Adds a class to the element
}

if (selectedCafe.paymentMethods.gcash === false) {
    document.getElementById("gcash")
        .classList.add("payment-unavailable"); // .classList.add(" ")   Adds a class to the element
}

if (selectedCafe.paymentMethods.maya === false) {
    document.getElementById("maya")
        .classList.add("payment-unavailable"); // .classList.add(" ")   Adds a class to the element
}

if (selectedCafe.paymentMethods.card === false) {
    document.getElementById("credit-debit")
        .classList.add("payment-unavailable"); // .classList.add(" ")   Adds a class to the element
}

console.log(selectedCafe.paymentMethods.cash)

if (selectedCafe) {
  console.log("Selected cafe:", selectedCafe);

  document.getElementById("cafe-name").textContent = selectedCafe.name;
} else {
  console.error("Cafe not found.");
}
