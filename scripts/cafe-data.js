const placeholderImg = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=";

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
      barangay = "",
      coverImage = "",
      photos = [],

      // Cafe Other Details
      averagePrice = "",
      seatCapacity = 0,
      isPetFriendly = false,
      isRestroomAvailable = false,
      restroomCount = 0,
      menu = "",

      // Cafe Location and Contact
      phone = "",
      website = "",

      // Cafe Social Links
      socialLinks = [],
      /*socialLinks = {},*/

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
      this.barangay = barangay;
      this.coverImage = coverImage;
      this.photos = photos;

      // Cafe First Details
      this.averagePrice = averagePrice;
      this.seatCapacity = seatCapacity;
      this.isPetFriendly = isPetFriendly;
      this.isRestroomAvailable = isRestroomAvailable;
      this.restroomCount = restroomCount;
      this.menu = menu;

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

      this.listOfReviews.unshift(review); // unshift() adds the new review to the beginning of the array.
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



/* =========================================
   SAMPLE CAFE DATA
   Requires your existing Cafe and Review classes
   ========================================= */

const cafe1 = new Cafe({
  id: 1,
  name: "3rd Space",
  description: "A cozy and modern café perfect for studying, working, and spending time with friends. Enjoy coffee, snacks, and a relaxing atmosphere.",
  location: "H. Concepcion",
  barangay: "Sumacab Este",
  coverImage: "images/3rdspace/3rdspace-photo16.jpg",

  //possible options: 3, 5..? 6, 11, 12, 13, 15, 16

  photos: [
      "images/3rdspace/3rdspace-photo1.jpg",
      "images/3rdspace/3rdspace-photo2.jpg",
      "images/3rdspace/3rdspace-photo3.jpg",
      "images/3rdspace/3rdspace-photo4.jpg",
      "images/3rdspace/3rdspace-photo5.jpg",
      "images/3rdspace/3rdspace-photo6.jpg",
      "images/3rdspace/3rdspace-photo7.jpg",
      "images/3rdspace/3rdspace-photo8.jpg",
      "images/3rdspace/3rdspace-photo9.jpg",
      "images/3rdspace/3rdspace-photo10.jpg",
      "images/3rdspace/3rdspace-photo11.jpg",
      "images/3rdspace/3rdspace-photo12.jpg",
      "images/3rdspace/3rdspace-photo13.jpg",
      "images/3rdspace/3rdspace-photo14.jpg",
      "images/3rdspace/3rdspace-photo15.jpg",
      "images/3rdspace/3rdspace-photo16.jpg",
      "images/3rdspace/3rdspace-photo17.jpg",
      "images/3rdspace/3rdspace-photo18.jpg",
      "images/3rdspace/3rdspace-photo19.jpg",
      "images/3rdspace/3rdspace-photo20.jpg",
      "images/3rdspace/3rdspace-photo21.jpg",
      "images/3rdspace/3rdspace-photo22.jpg",
      "images/3rdspace/3rdspace-photo23.jpg",
      "images/3rdspace/3rdspace-photo24.jpg",
      "images/3rdspace/3rdspace-photo25.jpg",
      "images/3rdspace/3rdspace-photo26.jpg",
      "images/3rdspace/3rdspace-photo27.jpg"
         /*
        "pictures/cafe3.jpg",
        "pictures/coffee1.jpg",
        "pictures/chincafe.JPG",
        "pictures/blckcoffee.PNG",
        "pictures/cafe-background.jpg",
        "pictures/blckcoffee.PNG",
        "pictures/coffee2.jpg",
        "pictures/kate-laine-wtwP4tI0R08-unsplash.jpg",
        "pictures/pexels-intitupac-5373242.jpg",
        "pictures/cafe3.jpg"*/
    ],

  averagePrice: "₱100 - ₱150",
  seatCapacity: 20,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,
  menu: "https://www.3rdspace.shop/menu",

  phone: "0912 345 6789",
  website: "https://example.com/3rd-space",

  socialLinks: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/example"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/example"
        },
        {
            platform: "Telegram",
            url: "https://www.telegram.com"
        }
    ],
  /*socialLinks: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    twitter: ""
  },*/

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
});

const cafe2 = new Cafe({
  id: 2,
  name: "Bean & Bloom Café",
  description: "A charming café surrounded by plants and warm wooden interiors. Ideal for casual dates, conversations, and enjoying specialty coffee.",
  location: "Downtown",
  barangay: "Sumacab Este",
  coverImage: placeholderImg,
  photos: [
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I="
    ],

  averagePrice: "₱120 - ₱220",
  seatCapacity: 35,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,

  phone: "0917 222 3344",
  website: "https://example.com/bean-and-bloom",

  socialLinks: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/example"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/example"
        }
    ],

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

const cafe3 = new Cafe({
  id: 3,
  name: "Study Grounds",
  description: "A study-focused café with reliable Wi-Fi, plenty of power outlets, comfortable seating, and a quiet environment for students and remote workers.",
  location: "University District",
  barangay: "Kapitan Pepe",
  coverImage: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
  photos: [
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I="
    ],

  averagePrice: "₱80 - ₱160",
  seatCapacity: 50,
  isPetFriendly: false,
  isRestroomAvailable: true,
  restroomCount: 3,

  phone: "0920 555 6677",
  website: "https://example.com/study-grounds",

  socialLinks: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/example"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/example"
        }
    ],

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
  barangay: "Sumacab Este",
  coverImage: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
  photos: [
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I="
    ],

  averagePrice: "₱100 - ₱200",
  seatCapacity: 28,
  isPetFriendly: false,
  isRestroomAvailable: true,
  restroomCount: 1,

  phone: "0933 444 5566",
  website: "https://example.com/midnight-brew",

  socialLinks: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/example"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/example"
        }
    ],

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
  barangay: "Sumacab Este",
  coverImage: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
  photos: [
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I="
    ],

  averagePrice: "₱90 - ₱180",
  seatCapacity: 40,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,

  phone: "0945 111 2233",
  website: "https://example.com/sunny-side",

  socialLinks: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/example"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/example"
        }
    ],

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

const cafe7 = new Cafe({
  id: 7,
  name: "oooffff",
  description: "A bright s.",
  location: "Residenct",
  barangay: "Mabini Homesite",
  coverImage: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
  photos: [
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I="
    ],

  averagePrice: "₱90 - ₱180",
  seatCapacity: 40,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,

  phone: "0945 111 2233",
  website: "https://example.com/sunny-side",

  socialLinks: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/example"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/example"
        }
    ],

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

const cafe8 = new Cafe({
  id: 8,
  name: "Sunny Side Coffee",
  description: "A bright and airy café serving coffee, refreshing drinks, and light meals. Its spacious interior and natural lighting make it great for relaxed mornings.",
  location: "Residential District",
  barangay: "Sumacab Este",
  coverImage: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
  photos: [
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I="
    ],

  averagePrice: "₱90 - ₱180",
  seatCapacity: 40,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,

  phone: "0945 111 2233",
  website: "https://example.com/sunny-side",

  socialLinks: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/example"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/example"
        }
    ],

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

const cafe9 = new Cafe({
  id: 9,
  name: "eeeeeeeeeee",
  description: "A bright and airy café serving coffee, refreshing drinks, and light meals. Its spacious interior and natural lighting make it great for relaxed mornings.",
  location: "Residential District",
  barangay: "Sumacab Este",
  coverImage: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
  photos: [
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I=",
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I="
    ],

  averagePrice: "₱90 - ₱180",
  seatCapacity: 40,
  isPetFriendly: true,
  isRestroomAvailable: true,
  restroomCount: 2,

  phone: "0945 111 2233",
  website: "https://example.com/sunny-side",

  socialLinks: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/example"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/example"
        }
    ],

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
    "cri",
    ["pictures/blckcoffee.PNG", "pictures/coffee1.jpg", "pictures/cafe2.jpg", "pictures/chincafe.JPG", "pictures/pexels-intitupac-5373242.jpg", "pictures/coffee1.jpg"],
    2
);

const review5 = new Review(
    "Alex",
    "10/24/2026",
    "The coffee was delicious!",
    [],
    5
);

const review6 = new Review(
    "Jamie",
    "10/24/2026",
    "Nice atmosphere and friendly staff.",
    [],
    4
);

/* =====================================================
   PLACEHOLDER CAFES — DEMO PURPOSES ONLY
   All café names, descriptions, contact details,
   amenities, and other information are fictional.
   ===================================================== */

// =====================================================
// DEMO CAFES — PLACEHOLDER DATA ONLY
// Café names and addresses are fictional demo entries.
// =====================================================

const cafe10 = new Cafe({
    id: 10,
    name: "The Daily Grind",
    description: "A cozy café serving freshly brewed coffee and affordable pastries. A nice spot for casual meetups and study sessions.",
    location: "Demo Street 1",
    barangay: "Kapitan Pepe",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱100 - ₱150",
    seatCapacity: 25,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Coffee, Iced Drinks, Pastries, Sandwiches",
    phone: "09171230010",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "8:00 AM - 8:00 PM",
        tuesday: "8:00 AM - 8:00 PM",
        wednesday: "8:00 AM - 8:00 PM",
        thursday: "8:00 AM - 8:00 PM",
        friday: "8:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "9:00 AM - 7:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 8,
    airConditioningLevel: 2,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 5,
    allowedVehicles: ["Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: false }
});

const cafe11 = new Cafe({
    id: 11,
    name: "Bean There Café",
    description: "A small neighborhood café offering classic espresso drinks and homemade snacks in a relaxed setting.",
    location: "A. Valino Street",
    barangay: "Aduas Centro",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱80 - ₱150",
    seatCapacity: 18,
    isPetFriendly: true,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Espresso, Latte, Tea, Cookies",
    phone: "09171230011",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "7:00 AM - 7:00 PM",
        tuesday: "7:00 AM - 7:00 PM",
        wednesday: "7:00 AM - 7:00 PM",
        thursday: "7:00 AM - 7:00 PM",
        friday: "7:00 AM - 8:00 PM",
        saturday: "8:00 AM - 8:00 PM",
        sunday: "Closed"
    },
    wifiStrength: 2,
    powerOutletsNumber: 4,
    airConditioningLevel: 2,
    noiseLevel: 1,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 3,
    allowedVehicles: ["Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: false,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: false }
});

const cafe12 = new Cafe({
    id: 12,
    name: "Little Cup Corner",
    description: "A laid-back café with budget-friendly drinks, sweet treats, and comfortable seating.",
    location: "Demo Street 2",
    barangay: "Aduas Centro",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱70 - ₱130",
    seatCapacity: 20,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Milk Tea, Coffee, Waffles, Cakes",
    phone: "09171230012",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "10:00 AM - 7:00 PM"
    },
    wifiStrength: 2,
    powerOutletsNumber: 5,
    airConditioningLevel: 3,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: false,
    parkingCapacity: 0,
    allowedVehicles: [],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: false,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: false }
});

const cafe13 = new Cafe({
    id: 13,
    name: "Morning Muse",
    description: "A bright café serving breakfast meals, coffee, and refreshing drinks for early risers.",
    location: "Demo Street 3",
    barangay: "Mabini Homesite",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱120 - ₱200",
    seatCapacity: 30,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 2,
    menu: "Breakfast Meals, Coffee, Pasta, Sandwiches",
    phone: "09171230013",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "6:30 AM - 8:00 PM",
        tuesday: "6:30 AM - 8:00 PM",
        wednesday: "6:30 AM - 8:00 PM",
        thursday: "6:30 AM - 8:00 PM",
        friday: "6:30 AM - 9:00 PM",
        saturday: "7:00 AM - 9:00 PM",
        sunday: "7:00 AM - 7:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 10,
    airConditioningLevel: 3,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 8,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: true }
});

const cafe14 = new Cafe({
    id: 14,
    name: "Café Solace",
    description: "A peaceful café with soft lighting, comfortable chairs, and drinks perfect for a quiet afternoon.",
    location: "Demo Street 4",
    barangay: "Mabini Homesite",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱100 - ₱180",
    seatCapacity: 22,
    isPetFriendly: true,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Coffee, Matcha, Cakes, Pasta",
    phone: "09171230014",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "9:00 AM - 7:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 7,
    airConditioningLevel: 2,
    noiseLevel: 1,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 4,
    allowedVehicles: ["Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: false }
});

const cafe15 = new Cafe({
    id: 15,
    name: "Study Sip",
    description: "A student-friendly café with reliable Wi-Fi, plenty of outlets, and affordable drinks.",
    location: "Demo Street 5",
    barangay: "Bitas",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱80 - ₱140",
    seatCapacity: 35,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 2,
    menu: "Coffee, Iced Tea, Rice Meals, Sandwiches",
    phone: "09171230015",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "8:00 AM - 10:00 PM",
        tuesday: "8:00 AM - 10:00 PM",
        wednesday: "8:00 AM - 10:00 PM",
        thursday: "8:00 AM - 10:00 PM",
        friday: "8:00 AM - 10:00 PM",
        saturday: "9:00 AM - 10:00 PM",
        sunday: "9:00 AM - 8:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 18,
    airConditioningLevel: 3,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 10,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: true }
});

const cafe16 = new Cafe({
    id: 16,
    name: "Sugar & Steam",
    description: "A dessert café known for sweet drinks, freshly baked goods, and cozy corners.",
    location: "Demo Street 6",
    barangay: "Bitas",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱100 - ₱170",
    seatCapacity: 24,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Frappes, Coffee, Donuts, Waffles",
    phone: "09171230016",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "10:00 AM - 9:00 PM",
        tuesday: "10:00 AM - 9:00 PM",
        wednesday: "10:00 AM - 9:00 PM",
        thursday: "10:00 AM - 9:00 PM",
        friday: "10:00 AM - 10:00 PM",
        saturday: "10:00 AM - 10:00 PM",
        sunday: "10:00 AM - 8:00 PM"
    },
    wifiStrength: 2,
    powerOutletsNumber: 6,
    airConditioningLevel: 3,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 5,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: false,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: false }
});

const cafe17 = new Cafe({
    id: 17,
    name: "The Cozy Mug",
    description: "A welcoming café offering comfort food, warm beverages, and a relaxed atmosphere.",
    location: "Demo Street 7",
    barangay: "Kapitan Pepe",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱100 - ₱180",
    seatCapacity: 28,
    isPetFriendly: true,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Coffee, Hot Chocolate, Pasta, Pastries",
    phone: "09171230017",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "8:00 AM - 8:00 PM",
        tuesday: "8:00 AM - 8:00 PM",
        wednesday: "8:00 AM - 8:00 PM",
        thursday: "8:00 AM - 8:00 PM",
        friday: "8:00 AM - 9:00 PM",
        saturday: "8:00 AM - 9:00 PM",
        sunday: "9:00 AM - 7:00 PM"
    },
    wifiStrength: 2,
    powerOutletsNumber: 8,
    airConditioningLevel: 2,
    noiseLevel: 1,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 6,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: true }
});

const cafe18 = new Cafe({
    id: 18,
    name: "Brew Haven",
    description: "A modern coffee shop with specialty drinks, comfortable seating, and a welcoming interior.",
    location: "Demo Street 8",
    barangay: "Kapitan Pepe",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱120 - ₱220",
    seatCapacity: 40,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 2,
    menu: "Specialty Coffee, Matcha, Cakes, Pasta",
    phone: "09171230018",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "8:00 AM - 10:00 PM",
        tuesday: "8:00 AM - 10:00 PM",
        wednesday: "8:00 AM - 10:00 PM",
        thursday: "8:00 AM - 10:00 PM",
        friday: "8:00 AM - 10:00 PM",
        saturday: "8:00 AM - 10:00 PM",
        sunday: "9:00 AM - 9:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 12,
    airConditioningLevel: 3,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 12,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: true }
});

const cafe19 = new Cafe({
    id: 19,
    name: "Cloud Nine Coffee",
    description: "A casual café serving iced coffee, refreshing beverages, and light meals in a friendly space.",
    location: "Demo Street 9",
    barangay: "Kapitan Pepe",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱90 - ₱160",
    seatCapacity: 26,
    isPetFriendly: true,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Iced Coffee, Milk Tea, Fries, Sandwiches",
    phone: "09171230019",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "10:00 AM - 9:00 PM",
        tuesday: "10:00 AM - 9:00 PM",
        wednesday: "10:00 AM - 9:00 PM",
        thursday: "10:00 AM - 9:00 PM",
        friday: "10:00 AM - 10:00 PM",
        saturday: "10:00 AM - 10:00 PM",
        sunday: "10:00 AM - 8:00 PM"
    },
    wifiStrength: 2,
    powerOutletsNumber: 5,
    airConditioningLevel: 2,
    noiseLevel: 3,
    isOpenSpace: true,
    isParkingAvailable: true,
    parkingCapacity: 5,
    allowedVehicles: ["Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: false,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: false }
});

const cafe20 = new Cafe({
    id: 20,
    name: "Espresso Express",
    description: "A convenient coffee stop serving quick espresso drinks, pastries, and grab-and-go snacks.",
    location: "Demo Street 10",
    barangay: "Mabini Homesite",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱80 - ₱150",
    seatCapacity: 16,
    isPetFriendly: false,
    isRestroomAvailable: false,
    restroomCount: 0,
    menu: "Espresso, Americano, Iced Coffee, Muffins",
    phone: "09171230020",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "7:00 AM - 7:00 PM",
        tuesday: "7:00 AM - 7:00 PM",
        wednesday: "7:00 AM - 7:00 PM",
        thursday: "7:00 AM - 7:00 PM",
        friday: "7:00 AM - 8:00 PM",
        saturday: "8:00 AM - 8:00 PM",
        sunday: "8:00 AM - 6:00 PM"
    },
    wifiStrength: 2,
    powerOutletsNumber: 3,
    airConditioningLevel: 2,
    noiseLevel: 2,
    isOpenSpace: true,
    isParkingAvailable: false,
    parkingCapacity: 0,
    allowedVehicles: [],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: false,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: false }
});

const cafe21 = new Cafe({
    id: 21,
    name: "Brew & Bloom",
    description: "A plant-inspired café with refreshing drinks, light meals, and a relaxing atmosphere.",
    location: "Demo Street 11",
    barangay: "Mabini Homesite",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱110 - ₱190",
    seatCapacity: 32,
    isPetFriendly: true,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Coffee, Fruit Tea, Pasta, Cakes",
    phone: "09171230021",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "9:00 AM - 7:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 7,
    airConditioningLevel: 2,
    noiseLevel: 1,
    isOpenSpace: true,
    isParkingAvailable: true,
    parkingCapacity: 6,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: false }
});

const cafe22 = new Cafe({
    id: 22,
    name: "Cup of Calm",
    description: "A quiet café offering handcrafted drinks and simple meals for customers looking to unwind.",
    location: "Demo Street 12",
    barangay: "Magsaysay District",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱100 - ₱170",
    seatCapacity: 20,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Latte, Tea, Cookies, Sandwiches",
    phone: "09171230022",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "10:00 AM - 7:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 6,
    airConditioningLevel: 3,
    noiseLevel: 1,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 4,
    allowedVehicles: ["Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: false }
});

const cafe23 = new Cafe({
    id: 23,
    name: "Roast Republic",
    description: "A contemporary café serving strong coffee, filling meals, and freshly baked desserts.",
    location: "Demo Street 13",
    barangay: "Magsaysay District",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱130 - ₱230",
    seatCapacity: 38,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 2,
    menu: "Pour-over Coffee, Pasta, Rice Meals, Cakes",
    phone: "09171230023",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "8:00 AM - 9:00 PM",
        tuesday: "8:00 AM - 9:00 PM",
        wednesday: "8:00 AM - 9:00 PM",
        thursday: "8:00 AM - 9:00 PM",
        friday: "8:00 AM - 10:00 PM",
        saturday: "8:00 AM - 10:00 PM",
        sunday: "9:00 AM - 8:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 14,
    airConditioningLevel: 3,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 10,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: true }
});

const cafe24 = new Cafe({
    id: 24,
    name: "Daily Dose",
    description: "A neighborhood coffee shop with affordable drinks and quick snacks for everyday coffee lovers.",
    location: "Demo Street 14",
    barangay: "Sumacab Este",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱70 - ₱140",
    seatCapacity: 18,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Coffee, Milk Tea, Toast, Pastries",
    phone: "09171230024",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "7:00 AM - 8:00 PM",
        tuesday: "7:00 AM - 8:00 PM",
        wednesday: "7:00 AM - 8:00 PM",
        thursday: "7:00 AM - 8:00 PM",
        friday: "7:00 AM - 9:00 PM",
        saturday: "8:00 AM - 9:00 PM",
        sunday: "8:00 AM - 7:00 PM"
    },
    wifiStrength: 2,
    powerOutletsNumber: 5,
    airConditioningLevel: 2,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 3,
    allowedVehicles: ["Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: false,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: false }
});

const cafe25 = new Cafe({
    id: 25,
    name: "The Reading Room Café",
    description: "A book-inspired café with quiet seating, warm drinks, and a comfortable environment for reading.",
    location: "Demo Street 15",
    barangay: "Sumacab Este",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱100 - ₱180",
    seatCapacity: 28,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Coffee, Tea, Pancakes, Cakes",
    phone: "09171230025",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "8:00 AM - 9:00 PM",
        tuesday: "8:00 AM - 9:00 PM",
        wednesday: "8:00 AM - 9:00 PM",
        thursday: "8:00 AM - 9:00 PM",
        friday: "8:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "9:00 AM - 8:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 12,
    airConditioningLevel: 3,
    noiseLevel: 1,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 5,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: false }
});

const cafe26 = new Cafe({
    id: 26,
    name: "Honeycomb Café",
    description: "A cheerful café offering sweet treats, refreshing drinks, and a bright, welcoming space.",
    location: "Demo Street 16",
    barangay: "Sumacab Norte",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱90 - ₱160",
    seatCapacity: 24,
    isPetFriendly: true,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Waffles, Coffee, Milk Tea, Cheesecake",
    phone: "09171230026",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "10:00 AM - 7:00 PM"
    },
    wifiStrength: 2,
    powerOutletsNumber: 6,
    airConditioningLevel: 2,
    noiseLevel: 2,
    isOpenSpace: true,
    isParkingAvailable: true,
    parkingCapacity: 7,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: false,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: false }
});

const cafe27 = new Cafe({
    id: 27,
    name: "Kapehan sa Kanto",
    description: "A casual local café serving familiar Filipino snacks, affordable coffee, and refreshing drinks.",
    location: "Demo Street 17",
    barangay: "Sumacab Norte",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱60 - ₱130",
    seatCapacity: 20,
    isPetFriendly: true,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Filipino Snacks, Coffee, Iced Drinks, Rice Meals",
    phone: "09171230027",
    website: "",
    socialLinks: [],
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
    powerOutletsNumber: 4,
    airConditioningLevel: 1,
    noiseLevel: 3,
    isOpenSpace: true,
    isParkingAvailable: true,
    parkingCapacity: 4,
    allowedVehicles: ["Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: false,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: false, card: false }
});

const cafe28 = new Cafe({
    id: 28,
    name: "Velvet Bean",
    description: "A stylish café serving specialty coffee, blended drinks, and desserts in a modern setting.",
    location: "Demo Street 18",
    barangay: "Aduas Centro",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱120 - ₱220",
    seatCapacity: 34,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 2,
    menu: "Specialty Coffee, Frappes, Cakes, Pasta",
    phone: "09171230028",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "9:00 AM - 9:00 PM",
        tuesday: "9:00 AM - 9:00 PM",
        wednesday: "9:00 AM - 9:00 PM",
        thursday: "9:00 AM - 9:00 PM",
        friday: "9:00 AM - 10:00 PM",
        saturday: "9:00 AM - 10:00 PM",
        sunday: "9:00 AM - 8:00 PM"
    },
    wifiStrength: 3,
    powerOutletsNumber: 10,
    airConditioningLevel: 3,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 8,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: true,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: true }
});

const cafe29 = new Cafe({
    id: 29,
    name: "Sunrise Coffee House",
    description: "A relaxed café serving morning coffee, hearty snacks, and refreshing drinks throughout the day.",
    location: "Demo Street 19",
    barangay: "Kapitan Pepe",
    coverImage: placeholderImg,
    photos: [placeholderImg],
    averagePrice: "₱90 - ₱170",
    seatCapacity: 26,
    isPetFriendly: false,
    isRestroomAvailable: true,
    restroomCount: 1,
    menu: "Coffee, Hot Chocolate, Sandwiches, Pastries",
    phone: "09171230029",
    website: "",
    socialLinks: [],
    workingHours: {
        monday: "6:30 AM - 8:00 PM",
        tuesday: "6:30 AM - 8:00 PM",
        wednesday: "6:30 AM - 8:00 PM",
        thursday: "6:30 AM - 8:00 PM",
        friday: "6:30 AM - 9:00 PM",
        saturday: "7:00 AM - 9:00 PM",
        sunday: "7:00 AM - 7:00 PM"
    },
    wifiStrength: 2,
    powerOutletsNumber: 7,
    airConditioningLevel: 2,
    noiseLevel: 2,
    isOpenSpace: false,
    isParkingAvailable: true,
    parkingCapacity: 5,
    allowedVehicles: ["Cars", "Motorcycles"],
    isHouseDeliveryAvailable: false,
    isGrabDeliveryAvailable: true,
    isTakeOutAvailable: true,
    paymentMethods: { cash: true, gcash: true, maya: true, card: false }
});

// Add Reviews to the 3rd Space Cafe Object
cafe1.addReview(review1);
cafe1.addReview(review2);
cafe1.addReview(review3);
cafe1.addReview(review4);
cafe1.addReview(review5);
cafe1.addReview(review6);


/* =========================================
   STORE ALL CAFES IN ONE ARRAY
   ========================================= */

const cafes = [
    cafe1,
    cafe2,
    cafe3,
    cafe4,
    cafe5,
    cafe7,
    cafe8,
    cafe9,
    cafe10,
    cafe11,
    cafe12,
    cafe13,
    cafe14,
    cafe15,
    cafe16,
    cafe17,
    cafe18,
    cafe19,
    cafe20,
    cafe21,
    cafe22,
    cafe23,
    cafe24,
    cafe25,
    cafe26,
    cafe27,
    cafe28,
    cafe29
];

/* =========================================
   WIFI DESCRIPTION
   ========================================= */

function getWifiDescription(level) {
    if (level === 1) {
        return "Weak";
    } else if (level === 2) {
        return "Moderate";
    } else if (level === 3) {
        return "Strong";
    } else {
        return "Unavailable";
    }
}


/* =========================================
   AIR CONDITIONING DESCRIPTION
   ========================================= */

function getAirconDescription(level) {
    if (level === 1) {
        return "Low";
    } else if (level === 2) {
        return "Moderate";
    } else if (level === 3) {
        return "Strong";
    } else {
        return "Unavailable";
    }
}


/* =========================================
   NOISE LEVEL DESCRIPTION
   ========================================= */

function getNoiseDescription(level) {
    if (level === 1) {
        return "Quiet";
    } else if (level === 2) {
        return "Moderate";
    } else if (level === 3) {
        return "Loud";
    } else {
        return "Not specified";
    }
}




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
