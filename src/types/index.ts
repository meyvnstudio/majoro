export interface Property {
  id: string;
  title: string;
  price: number;
  priceType: 'sale' | 'rent';
  type: 'apartment' | 'house' | 'villa' | 'condo' | 'penthouse' | 'studio';
  status: 'for-sale' | 'for-rent' | 'featured' | 'sold' | 'rented';
  beds: number;
  baths: number;
  sqft: number;
  location: {
    address: string;
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  description: string;
  features: string[];
  agent: Agent;
  createdAt: string;
  updatedAt: string;
  isBookmarked?: boolean;
  rating?: number;
  reviews?: Review[];
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  role: 'agent' | 'agency';
  agency?: string;
  rating: number;
  reviewCount: number;
  properties: number;
  isVerified: boolean;
}

export interface IUser {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  roles: string[];
  photo: string;
  phoneNumber?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'client' | 'agent' | 'admin';
  agency?: string;
  isVerified: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  user: User;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface SearchFilters {
  keyword?: string;
  location?: string;
  priceRange: [number, number];
  propertyType?: string[];
  beds?: number;
  baths?: number;
  sqftRange?: [number, number];
  status?: string[];
  features?: string[];
  radius?: number;
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  agentId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  message?: string;
  createdAt: string;
}


export type UserRole = 'CLIENT' | 'ADMIN' | 'AGENT' | 'AGENCY';

export type Language = 'en' | 'rw' | 'fr';

export type Theme = 'light' | 'dark';
