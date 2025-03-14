
import { useEffect, useRef } from "react";
import { Card, CardMedia, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { CategoryTag } from "@/components/ui/CategoryTag";
import { CTAButton } from "@/components/ui/CTAButton";
import { Coffee, Scissors, Utensils, Building, Hotel, Mountain } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Top Coffee Shops",
    icon: <Coffee size={18} />,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2847&auto=format&fit=crop",
    description: "Discover the best cafes offering local Vietnamese coffee with unique atmospheres.",
    city: "Hoi An"
  },
  {
    id: 2,
    title: "Best Tailors",
    icon: <Scissors size={18} />,
    image: "https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?q=80&w=2787&auto=format&fit=crop",
    description: "Expert tailors creating custom clothing with quality fabrics and attention to detail.",
    city: "Hoi An"
  },
  {
    id: 3,
    title: "Food Adventures",
    icon: <Utensils size={18} />,
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=2677&auto=format&fit=crop",
    description: "Experience the best local street food and authentic Vietnamese cuisine.",
    city: "Da Nang"
  },
  {
    id: 4,
    title: "Modern Architecture",
    icon: <Building size={18} />,
    image: "https://images.unsplash.com/photo-1565026057757-0a6439abc98c?q=80&w=2746&auto=format&fit=crop",
    description: "Explore Da Nang's iconic bridges and contemporary architectural masterpieces.",
    city: "Da Nang"
  },
  {
    id: 5,
    title: "Luxury Resorts",
    icon: <Hotel size={18} />,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
    description: "Relax in world-class beachfront resorts with stunning views and premium amenities.",
    city: "Da Nang"
  },
  {
    id: 6,
    title: "Natural Wonders",
    icon: <Mountain size={18} />,
    image: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=2074&auto=format&fit=crop",
    description: "Discover breathtaking mountains, beaches, and natural attractions in the region.",
    city: "Both"
  }
];

export const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    const section = sectionRef.current;
    if (section) {
      const cards = section.querySelectorAll('.feature-card');
      cards.forEach((card, i) => {
        observer.observe(card);
        (card as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      });
    }

    return () => {
      if (section) {
        const cards = section.querySelectorAll('.feature-card');
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="listings" className="py-20 px-4 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Top Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the best each city has to offer, from cultural heritage to modern attractions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card opacity-0">
              <Card>
                <CardMedia>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </CardMedia>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CategoryTag className="flex items-center gap-1">
                      {feature.icon}
                      {feature.title}
                    </CategoryTag>
                    <CategoryTag className={`${
                      feature.city === "Hoi An" 
                        ? "bg-amber-100 text-amber-800" 
                        : feature.city === "Da Nang" 
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                    }`}>
                      {feature.city}
                    </CategoryTag>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">12 locations</span>
                  <CTAButton variant="outline" size="sm">View All</CTAButton>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
