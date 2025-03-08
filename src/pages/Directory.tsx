
import { NavBar } from "@/components/NavBar";
import { DirectorySection } from "@/components/directory/DirectorySection";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

const Directory = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
      <NavBar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Da Nang & Hoi An Directory</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the best of both cities with our comprehensive listings
            </p>
          </div>
        </div>
        
        <DirectorySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Directory;
