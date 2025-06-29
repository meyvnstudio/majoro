import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property, SearchFilters } from '../types';
import { mockProperties } from '../data/mockData';

interface PropertyContextType {
  properties: Property[];
  filteredProperties: Property[];
  searchFilters: SearchFilters;
  updateSearchFilters: (filters: Partial<SearchFilters>) => void;
  bookmarkProperty: (propertyId: string) => void;
  getPropertyById: (id: string) => Property | undefined;
  getFeaturedProperties: () => Property[];
  isLoading: boolean;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function useProperties() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperties must be used within a PropertyProvider');
  }
  return context;
}

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    priceRange: [0, 10000000],
    propertyType: [],
    status: [],
    features: []
  });

  useEffect(() => {
    // Load properties - replace with actual API call
    setTimeout(() => {
      setProperties(mockProperties);
      setFilteredProperties(mockProperties);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = properties;

    if (searchFilters.keyword) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchFilters.keyword!.toLowerCase()) ||
        property.location.address.toLowerCase().includes(searchFilters.keyword!.toLowerCase())
      );
    }

    if (searchFilters.location) {
      filtered = filtered.filter(property =>
        property.location.city.toLowerCase().includes(searchFilters.location!.toLowerCase()) ||
        property.location.state.toLowerCase().includes(searchFilters.location!.toLowerCase())
      );
    }

    if (searchFilters.priceRange) {
      filtered = filtered.filter(property =>
        property.price >= searchFilters.priceRange[0] &&
        property.price <= searchFilters.priceRange[1]
      );
    }

    if (searchFilters.propertyType && searchFilters.propertyType.length > 0) {
      filtered = filtered.filter(property =>
        searchFilters.propertyType!.includes(property.type)
      );
    }

    if (searchFilters.status && searchFilters.status.length > 0) {
      filtered = filtered.filter(property =>
        searchFilters.status!.includes(property.status)
      );
    }

    if (searchFilters.beds) {
      filtered = filtered.filter(property => property.beds >= searchFilters.beds!);
    }

    if (searchFilters.baths) {
      filtered = filtered.filter(property => property.baths >= searchFilters.baths!);
    }

    setFilteredProperties(filtered);
  }, [properties, searchFilters]);

  const updateSearchFilters = (filters: Partial<SearchFilters>) => {
    setSearchFilters(prev => ({ ...prev, ...filters }));
  };

  const bookmarkProperty = (propertyId: string) => {
    setProperties(prev =>
      prev.map(property =>
        property.id === propertyId
          ? { ...property, isBookmarked: !property.isBookmarked }
          : property
      )
    );
  };

  const getPropertyById = (id: string) => {
    return properties.find(property => property.id === id);
  };

  const getFeaturedProperties = () => {
    return properties.filter(property => property.status === 'featured').slice(0, 4);
  };

  return (
    <PropertyContext.Provider value={{
      properties,
      filteredProperties,
      searchFilters,
      updateSearchFilters,
      bookmarkProperty,
      getPropertyById,
      getFeaturedProperties,
      isLoading
    }}>
      {children}
    </PropertyContext.Provider>
  );
}