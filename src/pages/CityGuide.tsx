
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { useDirectoryData } from "@/hooks/useDirectoryData";
import { DirectoryCard } from "@/components/directory/DirectoryCard";
import { useParams } from "react-router-dom";
import { City } from "@/types";

const CityGuide = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { city } = useParams<{ city: string }>();
  const validCity = (city === "Da Nang" || city === "Hoi An") ? city as City : "Da Nang";
  
  const { getItemsByCity, categories } = useDirectoryData();
  const cityItems = getItemsByCity(validCity);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cityImageMap = {
    "Da Nang": "https://images.unsplash.com/photo-1559592803-7ff5e9fea3fd?q=80&w=2070&auto=format&fit=crop",
    "Hoi An": "https://images.unsplash.com/photo-1583294542222-76a6aa3b57da?q=80&w=2070&auto=format&fit=crop"
  };

  const cityDescriptionMap = {
    "Da Nang": "A vibrant coastal city known for its beautiful beaches, modern architecture, and bustling urban energy. Da Nang offers a perfect blend of natural beauty and contemporary attractions.",
    "Hoi An": "A charming ancient town recognized as a UNESCO World Heritage site, known for its well-preserved architecture, colorful lanterns, and rich cultural heritage."
  };

  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
      <NavBar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={cityImageMap[validCity]} 
            alt={validCity} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{validCity}</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {cityDescriptionMap[validCity]}
            </p>
          </div>
        </div>
        
        {/* Directory Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Explore {validCity}</h2>
          
          {categories.map(category => {
            const categoryItems = cityItems.filter(item => item.category === category.id);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={category.id} className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-2xl font-semibold">{category.name}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryItems.map(item => (
                    <DirectoryCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CityGuide;
