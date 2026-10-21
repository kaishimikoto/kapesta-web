/* =========================================
   Reusable Review Class Template
   ========================================= */

class Review {
   constructor(userName, date, reviewMessage, reviewRating) {
      // Reviewer Information
      this.userName = userName;
      this.date = date;

      // Review Content
      this.reviewMessage = reviewMessage;
      this.reviewRating = reviewRating;
   }
}

/* =========================================
   Reusable Cafe Class Template
   ========================================= */
class Cafe {
   constructor({
      // Cafe Header Information
      name = "",
      description = "",
      rating = 0,
      location = "",

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
      this.name = name;
      this.description = description;
      this.location = location;

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

const cafe1 = new Cafe({
   // Cafe header Information
   name: "3rd Space",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   location: "Brgy. H Concepcion, Cabanatuan City",

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
   5
);

// Review 2
const review2 = new Review(
   "coffeeFan",
   "2026-10-17",
   "Good drinks and friendly staff. The seating area could be a little quieter during busy hours.",
   4
);

// Review 3
const review3 = new Review(
   "studyBuddy",
   "2026-10-20",
   "A comfortable place to study because of the Wi-Fi and power outlets. I would love more available seats.",
   4
);

// Add Reviews to the 3rd Space Cafe Object
cafe1.addReview(review1);
cafe1.addReview(review2);
cafe1.addReview(review3);


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
console.log(`[Card]: ${cafe1.paymentMethods.card}`);