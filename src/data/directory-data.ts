
import { Coffee, Scissors, Utensils, Building, Hotel, Mountain, Camera, Shirt, ShoppingBag, User, Map, Umbrella } from "lucide-react";
import { DirectoryItem, CategoryDefinition } from "@/types";

// Categories definition
export const categories: CategoryDefinition[] = [
  {
    id: "coffee",
    name: "Coffee Shops",
    icon: <Coffee size={18} />,
    description: "Discover the best cafes offering local Vietnamese coffee with unique atmospheres."
  },
  {
    id: "tailors",
    name: "Tailors",
    icon: <Scissors size={18} />,
    description: "Expert tailors creating custom clothing with quality fabrics and attention to detail."
  },
  {
    id: "food",
    name: "Food Adventures",
    icon: <Utensils size={18} />,
    description: "Experience the best local street food and authentic Vietnamese cuisine."
  },
  {
    id: "architecture",
    name: "Architecture",
    icon: <Building size={18} />,
    description: "Explore iconic bridges and contemporary architectural masterpieces."
  },
  {
    id: "resorts",
    name: "Luxury Resorts",
    icon: <Hotel size={18} />,
    description: "Relax in world-class beachfront resorts with stunning views and premium amenities."
  },
  {
    id: "nature",
    name: "Natural Wonders",
    icon: <Mountain size={18} />,
    description: "Discover breathtaking mountains, beaches, and natural attractions in the region."
  },
  {
    id: "photography",
    name: "Photography Spots",
    icon: <Camera size={18} />,
    description: "Perfect locations to capture memorable photos and stunning landscapes."
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: <ShoppingBag size={18} />,
    description: "From traditional markets to modern malls offering unique products and souvenirs."
  }
];

// Directory items
export const directoryItems: DirectoryItem[] = [
  {
    id: 1,
    title: "The Espresso House",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2847&auto=format&fit=crop",
    description: "Artisan coffee shop with a wide variety of Vietnamese coffee and international brews.",
    city: "Hoi An",
    locations: 2,
    tags: ["coffee", "breakfast", "wifi"],
    rating: 4.8
  },
  {
    id: 2,
    title: "Long Cloth Tailors",
    category: "tailors",
    image: "https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?q=80&w=2787&auto=format&fit=crop",
    description: "Family-owned tailor shop known for quality suits and traditional Vietnamese clothing.",
    city: "Hoi An",
    locations: 1,
    tags: ["suits", "dresses", "traditional"],
    rating: 4.9
  },
  {
    id: 3,
    title: "Street Food Market",
    category: "food",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=2677&auto=format&fit=crop",
    description: "Bustling market with over 30 food stalls offering authentic Vietnamese cuisine.",
    city: "Da Nang",
    locations: 1,
    tags: ["local", "street food", "affordable"],
    rating: 4.7
  },
  {
    id: 4,
    title: "Dragon Bridge",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1565026057757-0a6439abc98c?q=80&w=2746&auto=format&fit=crop",
    description: "Iconic bridge with light shows every weekend and dragon-shaped design.",
    city: "Da Nang",
    locations: 1,
    tags: ["landmark", "views", "night"],
    rating: 4.9
  },
  {
    id: 5,
    title: "Beachfront Resort & Spa",
    category: "resorts",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
    description: "Five-star resort with private beach access, infinity pool, and full-service spa.",
    city: "Da Nang",
    locations: 1,
    tags: ["luxury", "beach", "spa"],
    rating: 4.8
  },
  {
    id: 6,
    title: "Marble Mountains",
    category: "nature",
    image: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=2074&auto=format&fit=crop",
    description: "Cluster of five marble and limestone hills with temples, tunnels, and caves to explore.",
    city: "Da Nang",
    locations: 1,
    tags: ["hiking", "temples", "views"],
    rating: 4.6
  },
  {
    id: 7,
    title: "Ancient Town Sunset",
    category: "photography",
    image: "https://images.unsplash.com/photo-1560680680-7363783c462a?q=80&w=2070&auto=format&fit=crop",
    description: "Prime location to capture the golden hour light over Hoi An's historic buildings and canals.",
    city: "Hoi An",
    locations: 3,
    tags: ["sunset", "heritage", "lanterns"],
    rating: 4.9
  },
  {
    id: 8,
    title: "Central Market",
    category: "shopping",
    image: "https://images.unsplash.com/photo-1578833569707-8ab9f7ec3417?q=80&w=2348&auto=format&fit=crop",
    description: "Historic market selling everything from souvenirs to spices and custom clothing.",
    city: "Hoi An",
    locations: 1,
    tags: ["market", "souvenirs", "food"],
    rating: 4.5
  }
];
