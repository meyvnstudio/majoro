import React, { useState } from 'react';
import { Search, Star, Phone, Mail, MapPin, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockAgents } from '../data/mockData';

export default function Agents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filterLocation, setFilterLocation] = useState('');

  const filteredAgents = mockAgents
    .filter(agent => 
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(agent => 
      filterLocation === '' || agent.name.toLowerCase().includes(filterLocation.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'properties':
          return b.properties - a.properties;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Agents</h1>
            <p className="text-gray-600">Meet our professional real estate agents</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="rating">Sort by Rating</option>
              <option value="properties">Sort by Properties</option>
              <option value="name">Sort by Name</option>
            </select>

            <input
              type="text"
              placeholder="Filter by location..."
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />

            <button className="flex items-center justify-center space-x-2 bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Advanced Filter</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAgents.length} of {mockAgents.length} agents
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{agent.rating}</span>
                </div>
                {agent.isVerified && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Verified
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  <Link 
                    to={`/agent/${agent.id}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {agent.name}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 capitalize">{agent.role}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{agent.rating}</span>
                    <span>({agent.reviewCount})</span>
                  </div>
                  <span>{agent.properties} properties</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{agent.email}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center">
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
      </div>
    </div>
  );
}