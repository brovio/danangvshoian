
import { useEffect, useRef } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ChevronRight, MapPin, Info } from "lucide-react";
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
  return <div ref={containerRef} className="relative pt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row h-[90vh] min-h-[500px]">
        {/* Da Nang Side - Now on the left */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop')`,
          backgroundPosition: "center"
        }} />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-white text-3xl md:text-5xl font-noto font-semibold mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Da Nang</h2>
              <p className="text-white/90 text-lg mb-6 max-w-md drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Modern coastal city with breathtaking bridges and mountain views.</p>
              <CTAButton variant="primary" className="mb-8 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                <MapPin size={16} className="mr-1" />
                Explore Da Nang <ChevronRight size={16} className="ml-1" />
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Hoi An Side - Now on the right */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop')`,
          backgroundPosition: "center"
        }} />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-white text-3xl md:text-5xl font-noto font-semibold mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Hoi An</h2>
              <p className="text-white/90 text-lg mb-6 max-w-md drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Ancient charm and lantern-lit streets in a UNESCO heritage town.</p>
              <CTAButton variant="primary" className="mb-8 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                <MapPin size={16} className="mr-1" />
                Explore Hoi An <ChevronRight size={16} className="ml-1" />
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Title with VS in center - moved higher up */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
        <div className="bg-background/65 backdrop-blur-md py-6 px-8 rounded-xl inline-block animate-on-scroll opacity-0 shadow-lg">
          <h1 className="text-xl font-noto mb-2 font-semibold md:text-2xl text-zinc-700">INTRODUCING</h1>
          <div className="relative flex items-center justify-center mb-2">
            <div className="relative mx-auto" style={{ width: "700px", height: "80px" }}>
              {/* VS centered as the anchor point */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-6xl md:text-7xl font-black italic text-red-500" style={{
                  textShadow: "0 0 2px #000000e6",
                  animation: "shake 3s ease-in-out infinite", 
                  WebkitTextStroke: "2px #000000e6"
                }}>VS</span>
              </div>
              
              {/* DA NANG - positioned further to the left */}
              <div className="absolute" style={{ 
                left: "75px", 
                top: "50%", 
                transform: "translateY(-50%)"
              }}>
                <span className="text-5xl font-noto md:text-6xl font-extrabold uppercase tracking-tighter" style={{
                  textShadow: "0 0 1px rgba(234, 56, 76, 0.7)",
                }}>DA NANG</span>
              </div>
              
              {/* HOI AN - positioned further to the right */}
              <div className="absolute" style={{
                right: "75px",
                top: "50%",
                transform: "translateY(-50%)"
              }}>
                <span className="text-5xl font-noto font-extrabold md:text-6xl uppercase tracking-tighter" style={{
                  textShadow: "0 0 1px rgba(234, 56, 76, 0.7)",
                }}>HOI AN</span>
              </div>
            </div>
          </div>
          <p className="text-lg mt-3 font-noto text-zinc-600 font-medium md:text-xl">Explore and compare the best of both cities</p>
        </div>
      </div>
    </div>;
};
