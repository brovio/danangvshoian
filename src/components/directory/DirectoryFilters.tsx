
import { useState } from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { City } from "@/types";
import { categories } from "@/data/directory-data";

interface DirectoryFiltersProps {
  onCityChange: (city: City | null) => void;
  onCategoryChange: (category: string | null) => void;
  onSearchChange: (search: string) => void;
  selectedCity: City | null;
  selectedCategory: string | null;
  searchTerm: string;
}

export const DirectoryFilters = ({ 
  onCityChange, 
  onCategoryChange, 
  onSearchChange,
  selectedCity,
  selectedCategory,
  searchTerm
}: DirectoryFiltersProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  return (
    <div className="bg-card shadow-sm rounded-lg p-4 mb-6 border border-border/50">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 py-2 pr-4 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        
        {/* City Filter */}
        <div className="flex-shrink-0 w-full lg:w-[180px]">
          <select
            value={selectedCity || ""}
            onChange={(e) => onCityChange(e.target.value as City || null)}
            className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">All Cities</option>
            <option value="Da Nang">Da Nang</option>
            <option value="Hoi An">Hoi An</option>
            <option value="Both">Both Cities</option>
          </select>
        </div>
        
        {/* Category Filter */}
        <div className="flex-shrink-0 w-full lg:w-[220px]">
          <select
            value={selectedCategory || ""}
            onChange={(e) => onCategoryChange(e.target.value || null)}
            className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        
        {/* Mobile Filters Toggle */}
        <button 
          className="lg:hidden w-full py-2 px-4 border border-border rounded-md flex items-center justify-center gap-2"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <span>Filters</span>
          <ChevronsUpDown size={16} className={`transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      {/* Additional Filters (Mobile only) */}
      {isFiltersOpen && (
        <div className="mt-4 p-4 border-t border-border lg:hidden">
          <h4 className="font-semibold mb-2">Categories</h4>
          <div className="grid grid-cols-2 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(selectedCategory === category.id ? null : category.id)}
                className={`p-2 rounded-md text-left flex items-center gap-2 text-sm ${
                  selectedCategory === category.id 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-secondary'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                {selectedCategory === category.id && <Check size={16} className="ml-auto" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
