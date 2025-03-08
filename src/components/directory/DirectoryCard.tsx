
import { Card, CardMedia, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { CategoryTag } from "@/components/ui/CategoryTag";
import { CTAButton } from "@/components/ui/CTAButton";
import { Star } from "lucide-react";
import { DirectoryItem } from "@/types";
import { categories } from "@/data/directory-data";

interface DirectoryCardProps {
  item: DirectoryItem;
}

export const DirectoryCard = ({ item }: DirectoryCardProps) => {
  const category = categories.find(cat => cat.id === item.category);
  
  return (
    <Card>
      <CardMedia>
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
        />
      </CardMedia>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CategoryTag className="flex items-center gap-1">
            {category?.icon}
            {category?.name}
          </CategoryTag>
          <CategoryTag className={`${
            item.city === "Hoi An" 
              ? "bg-amber-100 text-amber-800" 
              : item.city === "Da Nang" 
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
          }`}>
            {item.city}
          </CategoryTag>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
        {item.rating && (
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">{item.rating.toFixed(1)}</span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
        {item.tags && (
          <div className="flex flex-wrap gap-1 mt-3">
            {item.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {item.locations === 1 ? "1 location" : `${item.locations} locations`}
        </span>
        <CTAButton variant="outline" size="sm">View Details</CTAButton>
      </CardFooter>
    </Card>
  );
};
