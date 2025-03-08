
import { useEffect, useRef } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const container = containerRef.current;
    if (container) {
      const elements = container.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (container) {
        const elements = container.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative pt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row h-[90vh] min-h-[500px]">
        {/* Hoi An Side */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1579330643216-0cf269282a6e?q=80&w=1935&auto=format&fit=crop')`,
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

        {/* Da Nang Side */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2076&auto=format&fit=crop')`,
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
      </div>

      {/* Overlay Title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
        <div className="bg-background/80 backdrop-blur-md py-6 px-8 rounded-xl inline-block animate-on-scroll opacity-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Discover Hoi An vs. Da Nang</h1>
          <p className="text-muted-foreground text-base md:text-lg">Explore and compare the best of both cities</p>
        </div>
      </div>
    </div>
  );
};
