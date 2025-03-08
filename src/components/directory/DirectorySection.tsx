
import { useDirectoryData } from "@/hooks/useDirectoryData";
import { DirectoryFilters } from "./DirectoryFilters";
import { DirectoryCard } from "./DirectoryCard";
import { useEffect, useRef } from "react";

export const DirectorySection = () => {
  const { 
    filteredItems, 
    filters, 
    filterByCity, 
    filterByCategory, 
    setSearchTerm 
  } = useDirectoryData();
  
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
      const cards = section.querySelectorAll('.directory-card');
      cards.forEach((card, i) => {
        observer.observe(card);
        (card as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      });
    }

    return () => {
      if (section) {
        const cards = section.querySelectorAll('.directory-card');
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, [filteredItems]);

  return (
    <section id="directory" className="py-20 px-4 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12 opacity-0 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Da Nang & Hoi An</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the best each city has to offer, from cultural heritage to modern attractions
          </p>
        </div>

        <DirectoryFilters
          selectedCity={filters.city}
          selectedCategory={filters.category}
          searchTerm={filters.searchTerm || ''}
          onCityChange={filterByCity}
          onCategoryChange={filterByCategory}
          onSearchChange={setSearchTerm}
        />

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="directory-card opacity-0">
                <DirectoryCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No listings found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search term</p>
          </div>
        )}
      </div>
    </section>
  );
};
