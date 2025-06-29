import React, { useState } from 'react';
import { Search, MapPin, Filter, X, ChevronDown } from 'lucide-react';
import { useProperties } from '../../contexts/PropertyContext';

export default function SearchFilters() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState({
    keyword: '',
    location: '',
    priceMin: '',
    priceMax: '',
    propertyType: '',
    beds: '',
    baths: '',
    status: ''
  });
  
  const { searchFilters, updateSearchFilters } = useProperties();

  const handleFilterChange = (key: string, value: any) => {
    setLocalFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const filters: any = {};

    if (localFilters.keyword) filters.keyword = localFilters.keyword;
    if (localFilters.location) filters.location = localFilters.location;
    
    if (localFilters.priceMin || localFilters.priceMax) {
      filters.priceRange = [
        parseInt(localFilters.priceMin) || 0,
        parseInt(localFilters.priceMax) || 10000000
      ];
    }
    
    if (localFilters.propertyType) {
      filters.propertyType = [localFilters.propertyType];
    }
    
    if (localFilters.beds) filters.beds = parseInt(localFilters.beds);
    if (localFilters.baths) filters.baths = parseInt(localFilters.baths);
    
    if (localFilters.status) {
      filters.status = [localFilters.status];
    }

    updateSearchFilters(filters);
  };

  const clearFilters = () => {
    setLocalFilters({
      keyword: '',
      location: '',
      priceMin: '',
      priceMax: '',
      propertyType: '',
      beds: '',
      baths: '',
      status: ''
    });
    updateSearchFilters({
      keyword: '',
      location: '',
      priceRange: [0, 10000000],
      propertyType: [],
      beds: undefined,
      baths: undefined,
      status: []
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Advanced Search</h3>
        <button
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isAdvancedOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="space-y-4">
        {/* Keyword Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Keyword"
            value={localFilters.keyword}
            onChange={(e) => handleFilterChange('keyword', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Location"
            value={localFilters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Advanced Filters */}
        {isAdvancedOpen && (
          <div className="space-y-4 pt-4 border-t">
            {/* Property Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={localFilters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Status</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
                <option value="featured">Featured</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={localFilters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="condo">Condo</option>
                <option value="penthouse">Penthouse</option>
                <option value="studio">Studio</option>
              </select>
            </div>

            {/* Beds & Baths */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Beds</label>
                <select
                  value={localFilters.beds}
                  onChange={(e) => handleFilterChange('beds', e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Baths</label>
                <select
                  value={localFilters.baths}
                  onChange={(e) => handleFilterChange('baths', e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range ($0 - $50,000)</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="From $0"
                  value={localFilters.priceMin}
                  onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                  className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="To $50,000"
                  value={localFilters.priceMax}
                  onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                  className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={clearFilters}
            className="py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={applyFilters}
            className="py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}