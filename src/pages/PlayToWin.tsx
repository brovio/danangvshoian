
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CategorySection } from "@/components/gamification/CategorySection";
import { CreditProgressBar } from "@/components/gamification/CreditProgressBar";
import { CreditPackageCard } from "@/components/gamification/CreditPackageCard";
import { Zap, Award, Gift, Info, CreditCard } from "lucide-react";
import { earnCreditActions, spendCreditActions, creditPackages } from "@/data/credit-data";
import { CTAButton } from "@/components/ui/CTAButton";
import { toast } from "@/hooks/use-toast";

const PlayToWin = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentCredits] = useState(25); // This would come from user state in a real app
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDailyChallenge = () => {
    toast({
      title: "Daily Challenge Accepted!",
      description: "Complete the challenge to earn 10 credits.",
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Play to Win</h1>
              <p className="text-xl mb-8">
                Earn credits, unlock rewards, and win exciting prizes while exploring the best of Da Nang and Hoi An.
              </p>
              
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl">
                <CreditProgressBar 
                  currentCredits={currentCredits}
                  nextRewardAt={100}
                  nextReward="Premium Badge"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Daily Challenge */}
        <section className="py-10 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-xl shadow-md border border-orange-200">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Gift className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Daily Challenge</h2>
                  <p className="text-muted-foreground">Write a review for a restaurant in Da Nang</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 font-semibold">
                  <span className="text-2xl">10</span>
                  <span className="text-sm text-muted-foreground">credits</span>
                </div>
                <CTAButton
                  className="bg-orange-500 hover:bg-orange-600"
                  onClick={handleDailyChallenge}
                >
                  Accept Challenge
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 space-y-16">
            {/* Ways to Earn Credits */}
            <CategorySection 
              title="Ways to Earn Credits" 
              actions={earnCreditActions} 
            />
            
            {/* Ways to Spend Credits */}
            <CategorySection 
              title="Ways to Spend Credits" 
              actions={spendCreditActions} 
            />
            
            {/* Credit Packages */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  Credit Packages
                </h2>
                <div className="bg-blue-50 p-3 rounded-lg flex items-start gap-2 max-w-xl">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700">
                    Purchase credit packages to unlock premium features, promote your business, or enter special contests with a chance to win real prizes.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {creditPackages.map(pkg => (
                  <CreditPackageCard 
                    key={pkg.id}
                    id={pkg.id}
                    name={pkg.name}
                    credits={pkg.credits}
                    price={pkg.price}
                    popular={pkg.popular}
                    features={pkg.features}
                  />
                ))}
              </div>
            </div>
            
            {/* Major Prizes Section */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-xl space-y-6 border border-purple-100">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-bold">Major Prizes</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg">Dinner for Two</h3>
                    <div className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Monthly Prize
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Win a romantic dinner for two at a top restaurant in Da Nang or Hoi An.
                  </p>
                  <CTAButton 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    size="sm"
                  >
                    Enter Draw (30 Credits)
                  </CTAButton>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg">Website Development</h3>
                    <div className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Quarterly Prize
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Win a free custom website for your business from Broio.
                  </p>
                  <CTAButton 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    size="sm"
                  >
                    Enter Draw (100 Credits)
                  </CTAButton>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg">Marketing Package</h3>
                    <div className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Annual Prize
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Win a comprehensive digital marketing package including SEO and social media.
                  </p>
                  <CTAButton 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    size="sm"
                  >
                    Enter Draw (250 Credits)
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                <Zap className="w-8 h-8 text-yellow-500" />
                Start Earning Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Begin your journey by earning credits through simple actions and unlock exciting rewards along the way.
              </p>
              <CTAButton size="lg">
                Explore the Directory
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlayToWin;
