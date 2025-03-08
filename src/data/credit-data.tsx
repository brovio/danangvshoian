
import {
  Award,
  Camera,
  MessageSquare,
  Share2,
  Star,
  Trophy,
  Upload,
  Gift,
  Zap,
  BarChart,
  Unlock,
  User,
  Calendar,
  Store,
  Tag,
  Heart,
  ShoppingBag,
  FileText,
  ThumbsUp,
  MapPin,
  ArrowRightLeft,
  Video
} from "lucide-react";
import { CreditAction } from "@/types";

export const earnCreditActions: CreditAction[] = [
  {
    id: "submit-photo",
    title: "Submit Photos",
    description: "Upload high-quality photos of places in Da Nang or Hoi An",
    creditAmount: 5,
    type: "earn",
    category: "content",
    icon: <Camera className="w-5 h-5" />
  },
  {
    id: "write-review",
    title: "Write a Review",
    description: "Share your experience with a detailed, helpful review",
    creditAmount: 10,
    type: "earn",
    category: "content",
    icon: <Star className="w-5 h-5" />
  },
  {
    id: "share-listing",
    title: "Share on Social Media",
    description: "Share a listing on your social networks",
    creditAmount: 3,
    type: "earn",
    category: "social",
    icon: <Share2 className="w-5 h-5" />
  },
  {
    id: "daily-check-in",
    title: "Daily Check-in",
    description: "Check in to the site every day for bonus credits",
    creditAmount: 2,
    type: "earn",
    category: "engagement",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    id: "create-listing",
    title: "Create a Listing",
    description: "Add a new business or attraction to our directory",
    creditAmount: 20,
    type: "earn",
    category: "business",
    icon: <Store className="w-5 h-5" />
  },
  {
    id: "tag-location",
    title: "Tag Locations",
    description: "Add accurate location tags to listings",
    creditAmount: 3,
    type: "earn",
    category: "content",
    icon: <MapPin className="w-5 h-5" />
  },
  {
    id: "refer-friend",
    title: "Refer a Friend",
    description: "Invite friends to join the platform",
    creditAmount: 15,
    type: "earn",
    category: "social",
    icon: <User className="w-5 h-5" />
  },
  {
    id: "moderate-content",
    title: "Moderate Content",
    description: "Help improve the quality of our listings by correcting information",
    creditAmount: 8,
    type: "earn",
    category: "engagement",
    icon: <FileText className="w-5 h-5" />
  },
  {
    id: "achievement-unlock",
    title: "Unlock Achievements",
    description: "Complete special challenges for bonus credits",
    creditAmount: 25,
    type: "earn",
    category: "special",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    id: "lucky-spin",
    title: "Lucky 25th User",
    description: "Every 25th visitor gets a chance to spin the wheel",
    creditAmount: 50,
    type: "earn",
    category: "special",
    icon: <Gift className="w-5 h-5" />
  }
];

export const spendCreditActions: CreditAction[] = [
  {
    id: "feature-message",
    title: "Featured Message",
    description: "Display your message on the homepage for 15 minutes",
    creditAmount: 100,
    type: "spend",
    category: "premium",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    id: "swipe-listing",
    title: "Swipe Listings",
    description: "Use the Tinder-like interface to discover new places",
    creditAmount: 1,
    type: "spend",
    category: "engagement",
    icon: <ArrowRightLeft className="w-5 h-5" />
  },
  {
    id: "remove-review",
    title: "Review Redemption",
    description: "Remove one negative review after receiving 5 positive ones",
    creditAmount: 75,
    type: "spend",
    category: "business",
    icon: <ThumbsUp className="w-5 h-5" />
  },
  {
    id: "feature-business",
    title: "Featured Business",
    description: "Have your business featured in the homepage carousel",
    creditAmount: 150,
    type: "spend",
    category: "business",
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: "advanced-analytics",
    title: "Advanced Analytics",
    description: "Access detailed performance insights for your listings",
    creditAmount: 80,
    type: "spend",
    category: "business",
    icon: <BarChart className="w-5 h-5" />
  },
  {
    id: "unlock-video",
    title: "Video Content",
    description: "Add video content to your business listing",
    creditAmount: 60,
    type: "spend",
    category: "unlock",
    icon: <Video className="w-5 h-5" />
  },
  {
    id: "special-offer",
    title: "Promote Special Offer",
    description: "Highlight a special offer on your listing",
    creditAmount: 40,
    type: "spend",
    category: "business",
    icon: <Tag className="w-5 h-5" />
  },
  {
    id: "enter-contest",
    title: "Contest Entry",
    description: "Use credits to enter prize drawings for dinner vouchers",
    creditAmount: 30,
    type: "spend",
    category: "special",
    icon: <Award className="w-5 h-5" />
  },
  {
    id: "unlock-chatroom",
    title: "VIP Chat Access",
    description: "Unlock exclusive chat rooms and discussion forums",
    creditAmount: 50,
    type: "spend",
    category: "unlock",
    icon: <Unlock className="w-5 h-5" />
  },
  {
    id: "custom-category",
    title: "Create Custom Category",
    description: "Establish a new category and be featured as the first listing",
    creditAmount: 200,
    type: "spend",
    category: "business",
    icon: <ShoppingBag className="w-5 h-5" />
  }
];

export const creditPackages = [
  {
    id: "starter",
    name: "Starter Pack",
    credits: 100,
    price: "$5",
    popular: false,
    features: ["Basic listing access", "Up to 3 photos", "Standard engagement"]
  },
  {
    id: "premium",
    name: "Premium Pack",
    credits: 300,
    price: "$12",
    popular: true,
    features: ["Featured listing for 1 week", "Up to 10 photos", "1 promoted special offer", "Basic analytics"]
  },
  {
    id: "business",
    name: "Business Pack",
    credits: 750,
    price: "$25",
    popular: false,
    features: ["Featured listing for 1 month", "Unlimited photos", "3 promoted special offers", "Full analytics", "Video content"]
  }
];
