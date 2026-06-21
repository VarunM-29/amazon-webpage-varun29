export const categories = ["all", "electronics", "home", "fashion", "books", "prime"];

export const products = [
  {
    id: 1,
    title: "Echo Dot smart speaker with Alexa",
    category: "electronics",
    price: 4499,
    oldPrice: 6999,
    rating: 4.7,
    reviews: 12841,
    prime: true,
    badge: "Deal",
    brand: "Amazon",
    description: [
      "Crisp room-filling sound",
      "Voice control for music and smart home devices",
      "Compact design for bedrooms, desks, and kitchens"
    ],
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80",
    stock: 78
  },
  {
    id: 2,
    title: "UltraBook Air 14-inch laptop, 16GB RAM",
    category: "electronics",
    price: 74990,
    oldPrice: 92990,
    rating: 4.6,
    reviews: 5342,
    prime: true,
    badge: "Limited time",
    brand: "AeroBook",
    description: [
      "Fast everyday performance",
      "Thin aluminum body with all-day battery life",
      "Backlit keyboard and vivid display"
    ],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    stock: 45
  },
  {
    id: 3,
    title: "Noise cancelling wireless headphones",
    category: "electronics",
    price: 10999,
    oldPrice: 15999,
    rating: 4.5,
    reviews: 9213,
    prime: true,
    badge: "Best seller",
    brand: "QuietBeat",
    description: [
      "Active noise cancellation",
      "Up to 35 hours of playback",
      "Soft ear cushions for long listening sessions"
    ],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    stock: 32
  },
  {
    id: 4,
    title: "Modern ceramic dinnerware set, 16 pieces",
    category: "home",
    price: 3499,
    oldPrice: 4999,
    rating: 4.4,
    reviews: 2867,
    prime: false,
    badge: "Save 22%",
    brand: "Casa Vale",
    description: [
      "Service for four",
      "Microwave and dishwasher safe",
      "Matte finish for everyday dining"
    ],
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    stock: 16
  },
  {
    id: 5,
    title: "Ergonomic office chair with lumbar support",
    category: "home",
    price: 12999,
    oldPrice: 17999,
    rating: 4.3,
    reviews: 4188,
    prime: true,
    badge: "Deal",
    brand: "WorkEase",
    description: [
      "Adjustable height and recline",
      "Breathable mesh back",
      "Designed for work-from-home comfort"
    ],
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80",
    stock: 24
  },
  {
    id: 6,
    title: "Classic denim jacket",
    category: "fashion",
    price: 2499,
    oldPrice: 3999,
    rating: 4.4,
    reviews: 1694,
    prime: false,
    badge: "Trending",
    brand: "BlueThread",
    description: [
      "Relaxed everyday fit",
      "Durable cotton denim",
      "Pairs easily with casual outfits"
    ],
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
    stock: 12
  },
  {
    id: 7,
    title: "Running shoes with responsive cushioning",
    category: "fashion",
    price: 4999,
    oldPrice: 7499,
    rating: 4.6,
    reviews: 7821,
    prime: true,
    badge: "Top rated",
    brand: "SprintPro",
    description: [
      "Lightweight breathable upper",
      "Cushioned sole for city runs",
      "Durable grip for daily training"
    ],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    stock: 39
  },
  {
    id: 8,
    title: "Crime and Punishment",
    category: "books",
    price: 299,
    oldPrice: 499,
    rating: 4.8,
    reviews: 8421,
    prime: true,
    badge: "Classic",
    brand: "Penguin Classics",
    description: [
      "Fyodor Dostoevsky's psychological masterpiece",
      "Paperback edition",
      "A powerful story of guilt, morality, and redemption"
    ],
    image: "https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg",
    stock: 57
  },
  {
    id: 9,
    title: "1984",
    category: "books",
    price: 249,
    oldPrice: 399,
    rating: 4.9,
    reviews: 12786,
    prime: true,
    badge: "Best seller",
    brand: "Signet Classics",
    description: [
      "George Orwell's iconic dystopian novel",
      "Essential modern classic",
      "A gripping look at surveillance, power, and truth"
    ],
    image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    stock: 48
  },
  {
    id: 10,
    title: "The Metamorphosis",
    category: "books",
    price: 199,
    oldPrice: 349,
    rating: 4.6,
    reviews: 5312,
    prime: true,
    badge: "Reader pick",
    brand: "Vintage Classics",
    description: [
      "Franz Kafka's unforgettable novella",
      "Short classic for literary readers",
      "A surreal story of identity and isolation"
    ],
    image: "https://covers.openlibrary.org/b/isbn/9780553213690-L.jpg",
    stock: 17
  },
  {
    id: 11,
    title: "White Nights",
    category: "books",
    price: 179,
    oldPrice: 299,
    rating: 4.7,
    reviews: 4628,
    prime: false,
    badge: "Popular",
    brand: "Vintage Classics",
    description: [
      "Fyodor Dostoevsky's tender romantic novella",
      "Perfect for a quick classic read",
      "A dreamy story of loneliness and longing"
    ],
    image: "https://m.media-amazon.com/images/I/41y8H3QmVqL._AC_UF1000,1000_QL80_.jpg",
    stock: 21
  },
  {
    id: 12,
    title: "Animal Farm",
    category: "books",
    price: 229,
    oldPrice: 399,
    rating: 4.8,
    reviews: 11204,
    prime: true,
    badge: "Classic",
    brand: "Signet Classics",
    description: [
      "George Orwell's sharp political allegory",
      "Compact paperback edition",
      "A timeless tale about power and rebellion"
    ],
    image: "https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg",
    stock: 39
  },
  {
    id: 13,
    title: "The Brothers Karamazov",
    category: "books",
    price: 499,
    oldPrice: 799,
    rating: 4.9,
    reviews: 6897,
    prime: true,
    badge: "Premium pick",
    brand: "Vintage Classics",
    description: [
      "Fyodor Dostoevsky's final great novel",
      "Deep philosophical family drama",
      "A landmark classic about faith, doubt, and morality"
    ],
    image: "https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg",
    stock: 10
  },
  {
    id: 14,
    title: "Galaxy Ultra 7 Pro smartphone, 256GB",
    category: "electronics",
    price: 72999,
    oldPrice: 84999,
    rating: 4.8,
    reviews: 19023,
    prime: true,
    badge: "New arrival",
    brand: "Galaxy",
    description: [
      "Stunning 6.8-inch AMOLED display",
      "200MP quad camera system",
      "All-day battery with super-fast charging"
    ],
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgeZl8J-ZJumKL0RpLPitsLGpOTFjbdxGrw5r6GHADenGU-aSYp2k-DTYl-w1i4ZZTmpzOXbKy5r6M36EBusTCjHLGRbumapqBOYKNxsq7l_ml1U5keZJTi8tBCkcS-kzXcg5w2g&usqp=CAc",
    stock: 11
  },
  {
    id: 15,
    title: "AeroBook X15 laptop, 16GB RAM",
    category: "electronics",
    price: 89999,
    oldPrice: 109999,
    rating: 4.7,
    reviews: 8245,
    prime: true,
    badge: "Best seller",
    brand: "AeroBook",
    description: [
      "Lightweight magnesium alloy chassis",
      "12th Gen processor for smooth multitasking",
      "16-hour battery life for portable work"
    ],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    stock: 22
  },
  {
    id: 16,
    title: "Smartwatch Pro 3",
    category: "electronics",
    price: 14999,
    oldPrice: 19999,
    rating: 4.5,
    reviews: 4321,
    prime: true,
    badge: "Deal",
    brand: "WristTech",
    description: [
      "Heart-rate monitoring and GPS",
      "Up to 10 days battery life",
      "Swim-proof design"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-XD6D-Kj1tGhY0rCB2S8dTkXK8_NKGp0WQ&s",
    stock: 54
  },
  {
    id: 17,
    title: "4K Smart TV 55-inch",
    category: "electronics",
    price: 54999,
    oldPrice: 69999,
    rating: 4.6,
    reviews: 6521,
    prime: true,
    badge: "Limited time",
    brand: "VisionMax",
    description: [
      "Crisp 4K HDR panel",
      "Smart platform with apps",
      "Dolby Atmos compatible"
    ],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    stock: 18
  },
  {
    id: 18,
    title: "Portable Bluetooth Speaker X",
    category: "electronics",
    price: 2999,
    oldPrice: 3999,
    rating: 4.4,
    reviews: 3210,
    prime: true,
    badge: "Top rated",
    brand: "SoundWave",
    description: [
      "Big sound in a small package",
      "12-hour battery",
      "Rugged, water-resistant shell"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9VuzMVwHKoh0QsZYJbgNoKcOP-x321PUsw&s",
    stock: 30
  },
  {
    id: 19,
    title: "Wireless Earbuds Plus",
    category: "electronics",
    price: 3999,
    oldPrice: 6999,
    rating: 4.3,
    reviews: 11234,
    prime: true,
    badge: "Best seller",
    brand: "TuneBeat",
    description: [
      "Clear calls and strong bass",
      "Compact charging case",
      "Fast pairing"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFY75qi-SFO6fzlVhR7b0qyI7K4Vk7RXeBqg&s",
    stock: 60
  },
  {
    id: 20,
    title: "Gaming Mouse RGB",
    category: "electronics",
    price: 2499,
    oldPrice: 3499,
    rating: 4.5,
    reviews: 2211,
    prime: true,
    badge: "Deal",
    brand: "HyperGrip",
    description: [
      "High-precision sensor",
      "Customizable RGB lighting",
      "Ergonomic shape"
    ],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    stock: 41
  },
  {
    id: 21,
    title: "Mechanical Keyboard TKL",
    category: "electronics",
    price: 5999,
    oldPrice: 7999,
    rating: 4.6,
    reviews: 1889,
    prime: true,
    badge: "Hot",
    brand: "KeyForce",
    description: [
      "Tactile switches",
      "Compact tenkeyless layout",
      "Durable PBT keycaps"
    ],
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZ9DHr9MnhOGbJVBOi57uy2b9NmA5IDgZGd85VvCnjsX0vbu8Iwwyrh8iQvfd82EyWV-141Y8ix3Cm_13c5CY_onKQdN_6TD7wjRWHTDYZqztC5xeQRMCQ66PH-qAoS0tzbgLZ7u0&usqp=CAc",
    stock: 27
  },
  {
    id: 22,
    title: "Action Camera 4K",
    category: "electronics",
    price: 12999,
    oldPrice: 15999,
    rating: 4.4,
    reviews: 764,
    prime: true,
    badge: "New arrival",
    brand: "AdventureCam",
    description: [
      "Rugged 4K action footage",
      "Waterproof to 30m",
      "Image stabilization"
    ],
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRF5EM7zGrZXmcAxLcCvoO98PbbGMi-vQYip0FVacPzE9X13EhAAhktjdLr81j5gPWPSO9FnuKFC2IzcXIm7dYOu-OB6l-iBQ1lGH8VHcyPKfHkMf2C7TElIaAjnHvoSCPmUT7Dcg&usqp=CAc",
    stock: 14
  },
  {
    id: 23,
    title: "Smart Home Hub",
    category: "electronics",
    price: 3499,
    oldPrice: 4999,
    rating: 4.2,
    reviews: 544,
    prime: true,
    badge: "Smart",
    brand: "HomeSync",
    description: [
      "Control lights, locks, and speakers",
      "Built-in voice assistant",
      "Works with popular smart devices"
    ],
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4a3Xtugien2wwPL94REMDOaHzhGNLVknroIOvFkn80uT7j76NfZQd1dJLrIBKEPLW32h1-F86p5k6do8A4VrR5ZoQv-yMEhX-saZT_hwHey8ol_e-1mYNlLfYQwm0yPNBv4jq0w&usqp=CAc",
    stock: 29
  },
  {
    id: 24,
    title: "External SSD 1TB",
    category: "electronics",
    price: 7999,
    oldPrice: 10999,
    rating: 4.7,
    reviews: 4123,
    prime: true,
    badge: "Fast storage",
    brand: "DataDrive",
    description: [
      "USB-C NVMe speeds",
      "Durable pocket-sized design",
      "1TB for photos and backups"
    ],
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrigv-HvKk5JKdGE2uk92_3ePXj5aUpGdeMIFHLmOlHSZzugWUbvgYf9iPI3StSqwtY6auOOCNpPp62UDUHtli0MtGjlUH2yPj2hzhhEHNGH7XJf3mPtJJAD9Hw-svJRNzsmHayQ&usqp=CAc",
    stock: 88
  },
  {
    id: 25,
    title: "Wireless Charging Pad",
    category: "electronics",
    price: 1299,
    oldPrice: 1999,
    rating: 4.1,
    reviews: 987,
    prime: false,
    badge: "Compact",
    brand: "ChargeWave",
    description: [
      "Slim Qi charging pad",
      "Fast charging for compatible devices",
      "Non-slip surface"
    ],
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    stock: 73
  },
  {
    id: 26,
    title: "Yoga Mat with Alignment Lines",
    category: "home",
    price: 1699,
    oldPrice: 2499,
    rating: 4.6,
    reviews: 1288,
    prime: true,
    badge: "Healthy",
    brand: "FlexFlow",
    description: [
      "Non-slip surface",
      "Comfortable cushion for joints",
      "Alignment lines for better posture"
    ],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    stock: 38
  },
  {
    id: 27,
    title: "Premium satin pillowcase",
    category: "home",
    price: 1999,
    oldPrice: 2999,
    rating: 4.5,
    reviews: 904,
    prime: false,
    badge: "Lux",
    brand: "DreamSilk",
    description: [
      "Smooth satin finish",
      "Protects hair and skin overnight",
      "Fits queen and king pillows"
    ],
    image: "https://images.unsplash.com/photo-1617196032744-60e1f8d3d51d?auto=format&fit=crop&w=800&q=80",
    stock: 27
  }
];
