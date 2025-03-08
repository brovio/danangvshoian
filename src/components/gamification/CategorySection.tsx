
import { useState } from "react";
import { CreditAction, CreditCategory } from "@/types";
import { CreditActionCard } from "./CreditActionCard";

interface CategorySectionProps {
  title: string;
  actions: CreditAction[];
  filterCategory?: CreditCategory | 'all';
}

export const CategorySection = ({ title, actions, filterCategory = 'all' }: CategorySectionProps) => {
  const [category, setCategory] = useState<CreditCategory | 'all'>(filterCategory);
  
  const filteredActions = category === 'all' 
    ? actions 
    : actions.filter(action => action.category === category);
  
  const categories: Array<{id: CreditCategory | 'all', label: string}> = [
    { id: 'all', label: 'All' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'social', label: 'Social' },
    { id: 'content', label: 'Content' },
    { id: 'business', label: 'Business' },
    { id: 'premium', label: 'Premium' },
    { id: 'special', label: 'Special' },
    { id: 'unlock', label: 'Unlock' }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                category === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActions.map(action => (
          <CreditActionCard key={action.id} action={action} />
        ))}
      </div>
    </div>
  );
};
