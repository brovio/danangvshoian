
import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Upload, Star } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set a target date for the countdown timer (7 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-muted-foreground">
                Help others discover the best of Hoi An and Da Nang by sharing your experiences, photos, and reviews.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton 
                className="flex items-center justify-center gap-2"
                size="lg"
              >
                <Upload size={18} />
                Submit Photos
              </CTAButton>
              
              <CTAButton 
                variant="outline"
                className="flex items-center justify-center gap-2"
                size="lg"
              >
                <Star size={18} />
                Write a Review
              </CTAButton>
            </div>
          </div>
        </section>
        
        <FeatureSection />
        
        {/* Reviews & Games Placeholder Section */}
        <section id="reviews" className="py-16 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Traveler Reviews</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover authentic experiences through the eyes of fellow travelers
              </p>
            </div>
            
            <div className="flex items-center justify-center h-[300px]">
              <p className="text-muted-foreground">Reviews coming soon...</p>
            </div>
          </div>
        </section>
        
        <section id="games" className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Games & Activities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Participate in our travel challenges and interactive activities
              </p>
            </div>
            
            <div className="flex items-center justify-center h-[300px]">
              <p className="text-muted-foreground">Games coming soon...</p>
            </div>
          </div>
        </section>
      </main>
      
      <CountdownTimer targetDate={targetDate} title="Next Travel Challenge" />
      
      <Footer />
    </div>
  );
};

export default Index;
