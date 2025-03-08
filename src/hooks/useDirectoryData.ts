
import { useState, useMemo } from 'react';
import { directoryItems, categories } from '@/data/directory-data';
import { DirectoryItem, City, CategoryDefinition } from '@/types';

interface DirectoryFilters {
  city?: City | null;
  category?: string | null;
  searchTerm?: string;
}

export const useDirectoryData = () => {
  const [filters, setFilters] = useState<DirectoryFilters>({
    city: null,
    category: null,
    searchTerm: '',
  });

  const filteredItems = useMemo(() => {
    return directoryItems.filter(item => {
      // Filter by city
      if (filters.city && filters.city !== 'Both' && item.city !== filters.city) {
        return false;
      }
      
      // Filter by category
      if (filters.category && item.category !== filters.category) {
        return false;
      }
      
      // Filter by search term
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchLower)))
        );
      }
      
      return true;
    });
  }, [filters]);

  const filterByCity = (city: City | null) => {
    setFilters(prev => ({ ...prev, city }));
  };

  const filterByCategory = (category: string | null) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const setSearchTerm = (searchTerm: string) => {
    setFilters(prev => ({ ...prev, searchTerm }));
  };

  const getCategoryById = (categoryId: string): CategoryDefinition | undefined => {
    return categories.find(category => category.id === categoryId);
  };

  const getItemsByCategory = (categoryId: string): DirectoryItem[] => {
    return directoryItems.filter(item => item.category === categoryId);
  };

  const getItemsByCity = (city: City): DirectoryItem[] => {
    return directoryItems.filter(item => item.city === city || item.city === 'Both');
  };

  return {
    allItems: directoryItems,
    filteredItems,
    categories,
    filters,
    filterByCity,
    filterByCategory,
    setSearchTerm,
    getCategoryById,
    getItemsByCategory,
    getItemsByCity
  };
};
