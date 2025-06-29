import React, { useState, useEffect } from 'react';
import { Search, Trash2, Calendar, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProperties } from '../contexts/PropertyContext';

interface SavedSearch {
  filters: any;
  timestamp: string;
  name: string;
}

export default function SavedSearches() {
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const { updateSearchFilters } = useProperties();

  useEffect(() => {
    const searches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
    setSavedSearches(searches);
  }, []);

  const deleteSavedSearch = (index: number) => {
    const updatedSearches = savedSearches.filter((_, i) => i !== index);
    setSavedSearches(updatedSearches);
    localStorage.setItem('savedSearches', JSON.stringify(updatedSearches));
  };

  const applySavedSearch = (search: SavedSearch) => {
    updateSearchFilters(search.filters);
    // Navigate to properties page
    window.location.href = '/properties';
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFilterSummary = (filters: any) => {
    const summary = [];
    
    if (filters.keyword) summary.push(`Keyword: "${filters.keyword}"`);
    if (filters.location) summary.push(`Location: ${filters.location}`);
    if (filters.propertyType && filters.propertyType.length > 0) {
      summary.push(`Type: ${filters.propertyType.join(', ')}`);
    }
    if (filters.priceRange) {
      summary.push(`Price: $${filters.priceRange[0].toLocaleString()} - $${filters.priceRange[1].toLocaleString()}`);
    }
    if (filters.beds) summary.push(`Beds: ${filters.beds}+`);
    if (filters.baths) summary.push(`Baths: ${filters.baths}+`);
    
    return summary.length > 0 ? summary.join(' • ') : 'No specific filters';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Saved Searches</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <span>•</span>
                <span>Saved Searches</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {savedSearches.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Saved Searches</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You haven't saved any searches yet. Start searching for properties and save your favorite search criteria.
            </p>
            <Link
              to="/properties"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Start Searching</span>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                You have {savedSearches.length} saved search{savedSearches.length !== 1 ? 'es' : ''}
              </p>
              <Link
                to="/properties"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Create New Search
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {savedSearches.map((search, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Filter className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{search.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>Saved on {formatDate(search.timestamp)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Search Criteria:</h4>
                        <p className="text-sm text-gray-600">{getFilterSummary(search.filters)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => applySavedSearch(search)}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <span>Apply Search</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteSavedSearch(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}