const productData = [
  {
    id: 1,
    brand: "TECHNOSPORT",
    title: "Men Printed Round Neck Polyester Black T-Shirt",
    price: 399,
    discountPrice: 299,
    rating: 4.8,
    reviewCount: 5,
    assured: true,
    mainImage: "/image.jpg",
    images: [
      "/image.jpg",
      "/thumb2.jpg",
      "/thumb3.jpg",
      "/thumb4.jpg",
      "/thumb5.jpg",
      "/thumb6.jpg",
      "/thumb7.jpg",
    ],
    colors: [
      {
        name: "Black",
        image: "/color_black.jpg",
      },
      {
        name: "Grey",
        image: "/color_grey.jpg",
      },
      {
        name: "Maroon",
        image: "/color_maroon.jpg",
      },
      {
        name: "Teal",
        image: "/color_teal.jpg",
      },
      {
        name: "White",
        image: "/color_white.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    offers: [
      {
        type: "Partner Offer",
        description:
          "Buy this & Get 5% off upto ₹750 on furniture, Only for you!",
        link: "Know More",
      },
      {
        type: "Bank Offer",
        description:
          "10% instant discount on SBI Credit Card EMI Transactions, up to 1,500 on orders of ₹5,000 and above",
        link: "T&C",
      },
      {
        type: "Bank Offer",
        description: "5% cashback on Axis Bank Flipkart Debit Card up to ₹750",
        link: "T&C",
      },
      {
        type: "Bank Offer",
        description:
          "5% cashback on Flipkart SBI Credit Card up to ₹4,000 per calendar quarter",
        link: "T&C",
      },
      {
        type: "Other Offers",
        description: "+15 more offers",
        link: null,
      },
    ],
    deliveryLocations: [
      {
        city: "Bangalore",
        pincode: "560007",
      },
      {
        city: "Madanapalle",
        pincode: "517325",
      },
      {
        city: "Hyderabad",
        pincode: "500081",
      },
    ],
    deliveryEstimate: {
      date: "15 Nov, Saturday",
      detailsLink: "View Details",
      codAvailable: true,
    },
    description: [
      "Embrace style and comfort with this TECHNOSPORT men's printed round neck t-shirt.",
      "Crafted from high-quality polyester fabric for a lightweight, moisture-wicking feel, this t-shirt is perfect for workouts, sports, and everyday wear.",
      "The subtle yet modern print adds a fashionable touch while the slim fit and crew neckline provide a flattering silhouette.",
      "Durable stitching ensures lasting quality, and the fabric keeps you cool and dry even on active days.",
      "Pair it with jeans, joggers, or shorts for versatile styling from gym to street.",
    ],
    features: [
      "Material: Premium breathable polyester",
      "Fit: Slim fit for athletic silhouette",
      "Neck: Crew neck, ribbed for comfort",
      "Design: Stylish all-over print",
      "Activity: Ideal for gym, running, sports, or casual outings",
      "Easy care: Machine-washable, wrinkle-resistant",
      "Available sizes: S, M, L, XL, XXL",
    ],
    seller: {
      name: "Technosportofficial",
      rating: 4.8,
      returnPolicyDays: 10,
    },
  },
];
export default productData;
