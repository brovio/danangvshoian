
import { useEffect, useRef } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const container = containerRef.current;
    if (container) {
      const elements = container.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (container) {
        const elements = container.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative pt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row h-[90vh] min-h-[500px]">
        {/* Da Nang Side - Now on the left */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105" 
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop')`,
              backgroundPosition: "center"
            }} 
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">Da Nang</h2>
              <p className="text-white/90 text-lg mb-6 max-w-md">Modern coastal city with breathtaking bridges and mountain views.</p>
              <CTAButton variant="primary" className="mb-8">
                Explore Da Nang <ChevronRight size={16} className="ml-1" />
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Hoi An Side - Now on the right */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105" 
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop')`,
              backgroundPosition: "center"
            }} 
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">Hoi An</h2>
              <p className="text-white/90 text-lg mb-6 max-w-md">Ancient charm and lantern-lit streets in a UNESCO heritage town.</p>
              <CTAButton variant="primary" className="mb-8">
                Explore Hoi An <ChevronRight size={16} className="ml-1" />
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Title with VS in center - moved higher up */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
        <div className="bg-background/80 backdrop-blur-md py-6 px-8 rounded-xl inline-block animate-on-scroll opacity-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Introducing</h1>
          <div className="flex items-center justify-center">
            <span className="text-3xl md:text-5xl font-bold font-bangers">Da Nang</span>
            <span className="text-3xl md:text-5xl font-bold mx-3 font-bangers" style={{ 
              color: "#ea384c", 
              textShadow: "0 0 10px rgba(234, 56, 76, 0.5)",
            }}>VS</span>
            <span className="text-3xl md:text-5xl font-bold font-bangers">Hoi An</span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mt-3">Explore and compare the best of both cities</p>
        </div>
      </div>
    </div>
  );
};
