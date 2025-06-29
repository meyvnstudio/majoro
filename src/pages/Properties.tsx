import React, { useState } from 'react';
import { Grid, List, Map, Filter, Eye, SortAsc, Bookmark } from 'lucide-react';
import { useProperties } from '../contexts/PropertyContext';
import PropertyCard from '../components/Common/PropertyCard';
import SearchFilters from '../components/Properties/SearchFilters';
import PropertyMap from '../components/Properties/PropertyMap';
import { Property } from '../types';

export default function Properties() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'half-map'>('half-map');
  const [sortBy, setSortBy] = useState('default');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [hoveredProperty, setHoveredProperty] = useState<Property | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const { filteredProperties, isLoading, searchFilters } = useProperties();

  const handlePropertyHover = (property: Property | null) => {
    setHoveredProperty(property);
  };

  const handleMapMarkerHover = (property: Property | null) => {
    setHoveredProperty(property);
  };

  const saveCurrentSearch = () => {
    const searchData = {
      filters: searchFilters,
      timestamp: new Date().toISOString(),
      name: `Search ${new Date().toLocaleDateString()}`
    };

    const savedSearches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
    savedSearches.push(searchData);
    localStorage.setItem('savedSearches', JSON.stringify(savedSearches));

    alert('Search saved successfully!');
  };

  const sortProperties = (properties: Property[]) => {
    switch (sortBy) {
      case 'price-low':
        return [...properties].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...properties].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...properties].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      default:
        return properties;
    }
  };

  const sortedProperties = sortProperties(filteredProperties);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm">
                  <div className="h-64 bg-gray-300 rounded-t-lg"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Properties</h1>
          <p className="text-gray-600">
            Showing 1 - 8 of {sortedProperties.length} results
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            {/* View Mode */}
            <div className="flex items-center space-x-2 bg-white rounded-lg border p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('half-map')}
                className={`p-2 rounded ${viewMode === 'half-map' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Map className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center space-x-2 bg-white border rounded-lg px-4 py-2 text-gray-700 hover:text-blue-600"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Save Search */}
            <button 
              onClick={saveCurrentSearch}
              className="flex items-center space-x-2 bg-white border rounded-lg px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Bookmark className="w-4 h-4" />
              <span>Save Search</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          {(viewMode !== 'half-map' || showFilters) && (
            <div className={`${viewMode === 'half-map' ? 'hidden md:block' : ''} w-full md:w-80 flex-shrink-0`}>
              <SearchFilters />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {viewMode === 'half-map' ? (
              <div className="flex gap-6 h-[800px]">
                {/* Properties List */}
                <div className="w-1/2 overflow-y-auto space-y-6">
                  <div className="md:hidden mb-4">
                    <SearchFilters />
                  </div>
                  {sortedProperties.map((property) => (
                    <div
                      key={property.id}
                      onMouseEnter={() => handlePropertyHover(property)}
                      onMouseLeave={() => handlePropertyHover(null)}
                      className={`transition-all duration-200 ${
                        hoveredProperty?.id === property.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                      }`}
                    >
                      <PropertyCard property={property} variant="list" />
                    </div>
                  ))}
                  
                  {sortedProperties.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-500">No properties found matching your criteria.</p>
                    </div>
                  )}
                </div>

                {/* Map */}
                <div className="w-1/2 bg-white rounded-lg overflow-hidden shadow-sm border">
                  <PropertyMap
                    properties={sortedProperties}
                    selectedProperty={hoveredProperty}
                    onPropertyHover={handleMapMarkerHover}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className={`${
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                    : 'space-y-6'
                }`}>
                  {sortedProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      variant={viewMode === 'list' ? 'list' : 'default'}
                    />
                  ))}
                </div>
                
                {sortedProperties.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No properties found matching your criteria.</p>
                  </div>
                )}

                {/* Pagination */}
                {sortedProperties.length > 0 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center space-x-2">
                      <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        1
                      </button>
                      <button className="w-10 h-10 bg-white border text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-50">
                        2
                      </button>
                      <button className="w-10 h-10 bg-white border text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-50">
                        3
                      </button>
                      <span className="text-gray-500">...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}