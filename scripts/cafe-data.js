/* =========================================
   Reusable Review Class Template
   ========================================= */

class Review {
   constructor(userName, date, reviewMessage, photos, reviewRating) {
      // Reviewer Information
      this.userName = userName;
      this.date = date;

      // Review Content
      this.reviewMessage = reviewMessage;
      this.photos = photos;
      this.reviewRating = reviewRating;
   }
}

/* =========================================
   Reusable Cafe Class Template
   ========================================= */
class Cafe {
   constructor({
      // Cafe Header Information
      id = "",
      name = "",
      description = "",
      rating = 0,
      location = "",
      coverImage = "",

      // Cafe Other Details
      averagePrice = "",
      seatCapacity = 0,
      isPetFriendly = false,
      isRestroomAvailable = false,
      restroomCount = 0,

      // Cafe Location and Contact
      phone = "",
      website = "",

      // Cafe Social Links
      socialLinks = {},

      // Working Hours
      workingHours = {},

      // Amenities
      // 3 = Strong, 2 = Moderate, 1 = Low, 0 = Unavailable

      // Connectivity & Work Facilities
      wifiStrength = 0,
      powerOutletsNumber = 0,

      // Comfort & Environment
      airConditioningLevel = 0,
      noiseLevel = 0,
      isOpenSpace = false,

      // Accessibility & Parking
      isParkingAvailable = false,
      parkingCapacity = 0,
      allowedVehicles = [],

      // Service & Ordering
      isHouseDeliveryAvailable = false,
      isGrabDeliveryAvailable = false,
      isTakeOutAvailable = false,

      // Payment Methods
      paymentMethods = {}
   }) {
      // Cafe Header Information
      this.id = id;
      this.name = name;
      this.description = description;
      this.location = location;
      this.coverImage = coverImage;

      // Cafe First Details
      this.averagePrice = averagePrice;
      this.seatCapacity = seatCapacity;
      this.isPetFriendly = isPetFriendly;
      this.isRestroomAvailable = isRestroomAvailable;
      this.restroomCount = restroomCount;

      // Cafe Location and Contact
      this.phone = phone;
      this.website = website;

      // Social Links
      this.socialLinks = socialLinks;

      // Working Hours
      this.workingHours = workingHours;

      // Amenities
      // Connectivity & Work Facilities
      this.wifiStrength = wifiStrength;
      this.powerOutletsNumber = powerOutletsNumber;

      // Comfort & Environment
      this.airConditioningLevel = airConditioningLevel;
      this.noiseLevel = noiseLevel;
      this.isOpenSpace = isOpenSpace;

      // Accessibility & Parking
      this.isParkingAvailable = isParkingAvailable;
      this.parkingCapacity = parkingCapacity;
      this.allowedVehicles = allowedVehicles;

      // Service & Ordering
      this.isHouseDeliveryAvailable = isHouseDeliveryAvailable;
      this.isGrabDeliveryAvailable = isGrabDeliveryAvailable;
      this.isTakeOutAvailable = isTakeOutAvailable;

      // Payment Methods
      this.paymentMethods = paymentMethods;

      // Array of Cafe Reviews
      // Each cafe instance have its own independent array
      this.listOfReviews = [];
   }

   // Add a Review to the Cafe's Review List
   addReview(review) {
      if (!(review instanceof Review)) {
         throw new TypeError("Review must be a Review object.");
      }

      this.listOfReviews.push(review);
   }

   // Calculate Average Rating Based on Submitted Reviews
   getAverageRating() {
      if (this.listOfReviews.length === 0) {
         return 0;
      }

      const totalRating = this.listOfReviews.map(review => review.reviewRating).reduce((sum, rating) => sum + rating, 0);

      return totalRating / this.listOfReviews.length;
   }

   get rating() {
      return Math.round(this.getAverageRating() * 10) / 10;
   }
}

// Sample Cafe Object: 3rd Space
const cafe6 = new Cafe({
   // Cafe header Information
   id: 6,
   name: "3rd Space",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   location: "Brgy. H Concepcion",

   // Cafe First Details
   averagePrice: "₱100 - ₱150",
   seatCapacity: 20,
   isPetFriendly: true,
   isRestroomAvailable: true,
   restroomCount: 2,

   // Cafe Location and Contact
   phone: "0912 345 6789",
   website: "https://www.3rdspace.shop/",

   // Social Links
   socialLinks: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/"
   },

   // Working Hours
   workingHours: {
      monday: "8:00 AM - 12:00 AM",
      tuesday: "8:00 AM - 12:00 AM",
      wednesday: "8:00 AM - 12:00 AM",
      thursday: "8:00 AM - 12:00 AM",
      friday: "8:00 AM - 12:00 AM",
      saturday: "8:00 AM - 12:00 AM",
      sunday: "1:00 PM - 12:00 AM"
   },

   // Amenities

   // Connectivity & Work Facilities
   wifiStrength: 3,
   powerOutletsNumber: 12,

   // Comfort & Environment
   airConditioningLevel: 2,
   noiseLevel: 1,
   isOpenSpace: true,

   // Accessibility & Parking
   isParkingAvailable: true,
   parkingCapacity: 8,
   allowedVehicles: ["Cars", "Motorcycles"],

   // Service & Ordering
   isHouseDeliveryAvailable: true,
   isGrabDeliveryAvailable: true,
   isTakeOutAvailable: true,

   // Payment Methods
   paymentMethods: {
      cash: true,
      gcash: true,
      maya: true,
      card: true
   }
});

// Demo Reviews for 3rd Space
// Review 1
const review1 = new Review(
   "haewon17",
   "2026-10-15",
   "The coffee was great, and the atmosphere was cozy. A nice place to relax with friends!",
   ["pictures/chncafe.PNG", "pictures/coffee1.jpg"],
   5
);

// Review 2
const review2 = new Review(
   "coffeeFan",
   "2026-10-17",
   "Good drinks and friendly staff. The seating area could be a little quieter during busy hours.",
   [],
   4
);

// Review 3
const review3 = new Review(
   "studyBuddy",
   "2026-10-20",
   "A comfortable place to study because of the Wi-Fi and power outlets. I would love more available seats.",
   [],
   4
);

const review4 = new Review(
    "newUser",
    "2026-10-24",
    "Nice coffee and good air conditioning. Perfect place to cram our case study.",
    ["pictures/coffee1.jpg"],
    5
);
const review7 = new Review(
    "newUser",
    "2026-10-24",
    "Ang bait ng owner nilibre po kami ng fries at coffee nung nag interview kami.",
    ["pictures/coffee1.jpg"],
    5
);
const review6 = new Review(
    "newUser",
    "2026-10-24",
    "Bakit lasang damo po yung matcha?",
    ["pictures/coffee1.jpg"],
    1
);
const review5 = new Review(
    "newUser",
    "2026-10-24",
    "My friend Raven came here last time and the fries were served frozen. Hindi man lang dinouble check ng staff bago i-serve.",
    ["pictures/blckcoffee.PNG", "pictures/coffee1.jpg", "pictures/cafe2.jpg", "pictures/chincafe.JPG", "pictures/pexels-intitupac-5373242.jpg", "pictures/coffee1.jpg"],
    2
);

/* =========================================
   SAMPLE CAFE DATA
   Requires your existing Cafe and Review classes
   ========================================= */

const cafe1 = new Cafe({
  id: 1,
  name: "3rd Space",
  description: "A cozy and modern café perfect for studying, working, and spending time with friends. Enjoy coffee, snacks, and a relaxing atmosphere.",
  location: "H. Concepcion",
  coverImage: "pictures/coffee2.jpg",

  averagePrice: "₱100 - ₱150",
  seatCapacity: 20,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,

  phone: "0912 345 6789",
  website: "https://example.com/3rd-space",

  socialLinks: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    twitter: ""
  },

  workingHours: {
    monday: "8:00 AM - 12:00 AM",
    tuesday: "8:00 AM - 12:00 AM",
    wednesday: "8:00 AM - 12:00 AM",
    thursday: "8:00 AM - 12:00 AM",
    friday: "8:00 AM - 12:00 AM",
    saturday: "8:00 AM - 12:00 AM",
    sunday: "1:00 PM - 12:00 AM"
  },

  wifiStrength: 3,
  powerOutletsNumber: 12,

  airConditioningLevel: 2,
  noiseLevel: 1,
  isOpenSpace: true,

  isParkingAvailable: true,
  parkingCapacity: 8,
  allowedVehicles: ["Cars", "Motorcycles"],

  isHouseDeliveryAvailable: true,
  isGrabDeliveryAvailable: true,
  isTakeOutAvailable: true,

  paymentMethods: {
    cash: true,
    gcash: true,
    maya: false,
    card: true
  }
});''

cafe1.addReview(review4);
cafe1.addReview(review5);
cafe1.addReview(review6);
cafe1.addReview(review7);

// Add Reviews to the 3rd Space Cafe Object
cafe1.addReview(review1);
cafe1.addReview(review2);
cafe1.addReview(review3);

const review8 = new Review(
    "Alex",
    "10/24/2026",
    "The coffee was delicious!",
    [],
    5
);

const review9 = new Review(
    "Jamie",
    "10/24/2026",
    "Nice atmosphere and friendly staff.",
    [],
    4
);

const cafe2 = new Cafe({
  id: 2,
  name: "Bean & Bloom Café",
  description: "A charming café surrounded by plants and warm wooden interiors. Ideal for casual dates, conversations, and enjoying specialty coffee.",
  location: "Downtown",
  coverImage: "pictures/bean-and-bloom.jpg",

  averagePrice: "₱120 - ₱220",
  seatCapacity: 35,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,

  phone: "0917 222 3344",
  website: "https://example.com/bean-and-bloom",

  socialLinks: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    twitter: ""
  },

  workingHours: {
    monday: "9:00 AM - 9:00 PM",
    tuesday: "9:00 AM - 9:00 PM",
    wednesday: "9:00 AM - 9:00 PM",
    thursday: "9:00 AM - 9:00 PM",
    friday: "9:00 AM - 10:00 PM",
    saturday: "9:00 AM - 10:00 PM",
    sunday: "9:00 AM - 8:00 PM"
  },

  wifiStrength: 2,
  powerOutletsNumber: 6,

  airConditioningLevel: 3,
  noiseLevel: 2,
  isOpenSpace: true,

  isParkingAvailable: true,
  parkingCapacity: 10,
  allowedVehicles: ["Cars", "Motorcycles", "Bicycles"],

  isHouseDeliveryAvailable: false,
  isGrabDeliveryAvailable: true,
  isTakeOutAvailable: true,

  paymentMethods: {
    cash: true,
    gcash: true,
    maya: true,
    card: true
  }
});

cafe2.addReview(review8);
cafe2.addReview(review9);

const cafe3 = new Cafe({
  id: 3,
  name: "Study Grounds",
  description: "A study-focused café with reliable Wi-Fi, plenty of power outlets, comfortable seating, and a quiet environment for students and remote workers.",
  location: "University District",
  coverImage: "pictures/study-grounds.jpg",

  averagePrice: "₱80 - ₱160",
  seatCapacity: 50,
  isPetFriendly: false,
  isRestroomAvailable: true,
  restroomCount: 3,

  phone: "0920 555 6677",
  website: "https://example.com/study-grounds",

  socialLinks: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    twitter: ""
  },

  workingHours: {
    monday: "7:00 AM - 11:00 PM",
    tuesday: "7:00 AM - 11:00 PM",
    wednesday: "7:00 AM - 11:00 PM",
    thursday: "7:00 AM - 11:00 PM",
    friday: "7:00 AM - 11:00 PM",
    saturday: "8:00 AM - 10:00 PM",
    sunday: "8:00 AM - 9:00 PM"
  },

  wifiStrength: 3,
  powerOutletsNumber: 30,

  airConditioningLevel: 3,
  noiseLevel: 1,
  isOpenSpace: false,

  isParkingAvailable: true,
  parkingCapacity: 15,
  allowedVehicles: ["Cars", "Motorcycles", "Bicycles"],

  isHouseDeliveryAvailable: true,
  isGrabDeliveryAvailable: true,
  isTakeOutAvailable: true,

  paymentMethods: {
    cash: true,
    gcash: true,
    maya: true,
    card: true
  }
});

const cafe4 = new Cafe({
  id: 4,
  name: "Midnight Brew",
  description: "A late-night coffee spot with moody lighting, comfortable couches, and a relaxed atmosphere for night owls and friends catching up after dark.",
  location: "City Center",
  coverImage: "pictures/midnight-brew.jpg",

  averagePrice: "₱100 - ₱200",
  seatCapacity: 28,
  isPetFriendly: false,
  isRestroomAvailable: true,
  restroomCount: 1,

  phone: "0933 444 5566",
  website: "https://example.com/midnight-brew",

  socialLinks: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    twitter: ""
  },

  workingHours: {
    monday: "2:00 PM - 2:00 AM",
    tuesday: "2:00 PM - 2:00 AM",
    wednesday: "2:00 PM - 2:00 AM",
    thursday: "2:00 PM - 2:00 AM",
    friday: "2:00 PM - 3:00 AM",
    saturday: "2:00 PM - 3:00 AM",
    sunday: "2:00 PM - 12:00 AM"
  },

  wifiStrength: 2,
  powerOutletsNumber: 8,

  airConditioningLevel: 3,
  noiseLevel: 2,
  isOpenSpace: false,

  isParkingAvailable: true,
  parkingCapacity: 6,
  allowedVehicles: ["Cars", "Motorcycles"],

  isHouseDeliveryAvailable: false,
  isGrabDeliveryAvailable: true,
  isTakeOutAvailable: true,

  paymentMethods: {
    cash: true,
    gcash: true,
    maya: false,
    card: true
  }
});

const cafe5 = new Cafe({
  id: 5,
  name: "Sunny Side Coffee",
  description: "A bright and airy café serving coffee, refreshing drinks, and light meals. Its spacious interior and natural lighting make it great for relaxed mornings.",
  location: "Residential District",
  coverImage: "pictures/sunny-side.jpg",

  averagePrice: "₱90 - ₱180",
  seatCapacity: 40,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,

  phone: "0945 111 2233",
  website: "https://example.com/sunny-side",

  socialLinks: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    twitter: ""
  },

  workingHours: {
    monday: "7:00 AM - 8:00 PM",
    tuesday: "7:00 AM - 8:00 PM",
    wednesday: "7:00 AM - 8:00 PM",
    thursday: "7:00 AM - 8:00 PM",
    friday: "7:00 AM - 9:00 PM",
    saturday: "7:00 AM - 9:00 PM",
    sunday: "8:00 AM - 7:00 PM"
  },

  wifiStrength: 2,
  powerOutletsNumber: 5,

  airConditioningLevel: 2,
  noiseLevel: 3,
  isOpenSpace: true,

  isParkingAvailable: true,
  parkingCapacity: 12,
  allowedVehicles: ["Cars", "Motorcycles", "Bicycles"],

  isHouseDeliveryAvailable: true,
  isGrabDeliveryAvailable: false,
  isTakeOutAvailable: true,

  paymentMethods: {
    cash: true,
    gcash: true,
    maya: true,
    card: false
  }
});


/* =========================================
   STORE ALL CAFES IN ONE ARRAY
   ========================================= */

const cafes = [
  cafe1,
  cafe2,
  cafe3,
  cafe4,
  cafe5
];

/* =========================================
   FIND A CAFE BY ITS ID
   ========================================= */

function findCafeById(id) {
  return cafes.find(cafe => cafe.id === Number(id));
}

/* =========================================
   yie
   ========================================= */
// Get the ID from the URL
/*
const params = new URLSearchParams(window.location.search);
const cafeId = Number(params.get("id"));

// Find the selected café
const selectedCafe = cafes.find(cafe => cafe.id === cafeId);

// Display its information
if (selectedCafe) {
    document.getElementById("cafeName").textContent =
        selectedCafe.name;

    document.getElementById("cafeImage").src =
        selectedCafe.coverImage;

    document.getElementById("cafeImage").alt =
        selectedCafe.name;

    document.getElementById("cafeLocation").textContent =
        selectedCafe.location;

    document.getElementById("cafeDescription").textContent =
        selectedCafe.description;

    document.getElementById("cafePrice").textContent =
        selectedCafe.averagePrice;

    document.getElementById("cafeRating").textContent =
        selectedCafe.rating;
} else {
    document.getElementById("cafeName").textContent =
        "Café not found";
}

console.log(selectedCafe);

// output?
document.getElementById("cafe-name").textContent = selectedCafe.name;

document.getElementById("cafe-desc").textContent =
    selectedCafe.description;

document.getElementById("location").textContent =
    selectedCafe.location;

document.getElementById("average-price").textContent =
    selectedCafe.averagePrice;

document.getElementById("rating").textContent =
    selectedCafe.rating;

document.getElementById("cafeImage").src =
    selectedCafe.coverImage;

document.getElementById("cafeImage").alt =
    selectedCafe.name;*/














/* =========================================
   TESTING
   ========================================= */
/*
console.log("All Cafes:", cafes);

console.log("Selected Cafe:", findCafeById(3));

console.log("Selected Cafe Name:", findCafeById(3)?.name);

console.log("Selected Cafe Rating:", findCafeById(3)?.rating);


// Testing
// Cafe Header Information
console.log(`[Name]: ${cafe1.name}`);
console.log(`[Description]: ${cafe1.description}`);
console.log(`[rating]: ${cafe1.rating}`);
console.log(`[Location]: ${cafe1.location}`);

// Cafe First Details
console.log(`[Average Price]: ${cafe1.averagePrice}`);
console.log(`[Seat Capacity]: ${cafe1.seatCapacity}`);
console.log(`[Is Pet Friendly]: ${cafe1.isPetFriendly}`);
console.log(`[Is Restroom Available]: ${cafe1.isRestroomAvailable}`);
console.log(`[Restroom Count]: ${cafe1.restroomCount}`);

// Cafe Location and Contact
console.log(`[Phone]: ${cafe1.phone}`);
console.log(`[Website]: ${cafe1.website}`);

// Social Links
console.log(`[Facebook]: ${cafe1.socialLinks.facebook}`);
console.log(`[Instagram]: ${cafe1.socialLinks.instagram}`);
console.log(`[Twitter]: ${cafe1.socialLinks.twitter}`);

// Working Hours
console.log(`[Monday]: ${cafe1.workingHours.monday}`);
console.log(`[Tuesday]: ${cafe1.workingHours.tuesday}`);
console.log(`[Wednesday]: ${cafe1.workingHours.wednesday}`);
console.log(`[Thursday]: ${cafe1.workingHours.thursday}`);
console.log(`[Friday]: ${cafe1.workingHours.friday}`);
console.log(`[Saturday]: ${cafe1.workingHours.saturday}`);
console.log(`[Sunday]: ${cafe1.workingHours.sunday}`);

// Connectivity & Work Facilities
console.log(`[WiFi Strength]: ${cafe1.wifiStrength}`);
console.log(`[Power Outlets Number]: ${cafe1.powerOutletsNumber}`);

// Comfort & Environment
console.log(`[Air Conditioning Level]: ${cafe1.airConditioningLevel}`);
console.log(`[Noise Level]: ${cafe1.noiseLevel}`);
console.log(`[Is Open Space]: ${cafe1.isOpenSpace}`);

// Accessibility & Parking
console.log(`[Is Parking Available]: ${cafe1.isParkingAvailable}`);
console.log(`[Parking Capacity]: ${cafe1.parkingCapacity}`);
console.log(`[Allowed Vehicles]: ${cafe1.allowedVehicles}`);

// Service & Ordering
console.log(`[Is House Delivery Available]: ${cafe1.isHouseDeliveryAvailable}`);
console.log(`[Is Grab Delivery Available]: ${cafe1.isGrabDeliveryAvailable}`);
console.log(`[Is Take Out Available]: ${cafe1.isTakeOutAvailable}`);

// Payment Methods
console.log(`[Cash]: ${cafe1.paymentMethods.cash}`);
console.log(`[GCash]: ${cafe1.paymentMethods.gcash}`);
console.log(`[Maya]: ${cafe1.paymentMethods.maya}`);
console.log(`[Card]: ${cafe1.paymentMethods.card}`);*/
