
import { ReactNode } from 'react';

// Common types used across the application

export type City = "Da Nang" | "Hoi An" | "Both";

export interface DirectoryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  city: City;
  category: string;
  locations?: number;
  tags?: string[];
  rating?: number;
}

export interface CategoryDefinition {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
}

export interface CreditAction {
  id: string;
  title: string;
  description: string;
  creditAmount: number;
  type: 'earn' | 'spend';
  category: CreditCategory;
  icon: ReactNode;
}

export type CreditCategory = 
  | 'engagement'
  | 'social'
  | 'content'
  | 'business'
  | 'premium'
  | 'special'
  | 'unlock';
