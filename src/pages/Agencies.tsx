import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, Globe, Star, Building, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Agency {
  id: string;
  name: string;
  logo: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  properties: number;
  agents: number;
  rating: number;
  reviews: number;
  description: string;
}

export default function Agencies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const agencies: Agency[] = [
    {
      id: '1',
      name: 'High Rise Real',
      logo: '',
      address: '168 Bedford Ave Brooklyn',
      phone: '081 845 ***',
      email: 'highrise@agency.com',
      website: 'themeforest.net',
      properties: 21,
      agents: 8,
      rating: 4.8,
      reviews: 156,
      description: 'Family House'
    },
    {
      id: '2',
      name: 'Estate Experts',
      logo: '',
      address: '204 Wythe Ave Brooklyn',
      phone: '081 123 ***',
      email: 'estateexperts@agency.com',
      website: 'agentthemes.com',
      properties: 15,
      agents: 5,
      rating: 4.7,
      reviews: 89,
      description: 'Town House'
    },
    {
      id: '3',
      name: 'Luxury House',
      logo: '',
      address: '333 NW 26th St, Miami',
      phone: '407 123 ***',
      email: 'luxury.house@agency.com',
      website: 'themeforest.net',
      properties: 28,
      agents: 12,
      rating: 4.9,
      reviews: 203,
      description: 'Modern Villa'
    },
    {
      id: '4',
      name: 'James Estate',
      logo: '',
      address: '94 Wythe Ave Brooklyn, NY',
      phone: '081 123 ***',
      email: 'james@agency.com',
      website: 'envato.com',
      properties: 19,
      agents: 7,
      rating: 4.6,
      reviews: 124,
      description: 'Modern Villa'
    }
  ];

  const filteredAgencies = agencies.filter(agency =>
    agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agency.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Agencies - List</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                <Link to="/" className="hover:text-primary-600">Home</Link>
                <span>•</span>
                <span>Agencies</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Building className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Users className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Agencies</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Write Agency Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>Real Estate</option>
                  <option>Property Management</option>
                  <option>Investment</option>
                </select>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>All Location</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Miami</option>
                </select>
                <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                  Search Agencies
                </button>
              </div>
            </div>

            {/* Latest Properties */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Properties</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Diamond Manor...',
                    price: '$6500',
                    beds: 4,
                    baths: 2,
                    sqft: 140,
                    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150'
                  },
                  {
                    title: 'Eaton Garth Penthouse',
                    price: '$7500',
                    beds: 4,
                    baths: 1,
                    sqft: 220,
                    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=150'
                  },
                  {
                    title: 'Skyper Pool Apartment',
                    price: '$1200/mo',
                    beds: 3,
                    baths: 2,
                    sqft: 110,
                    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=150'
                  },
                  {
                    title: 'North Dillard Street',
                    price: '$5500',
                    beds: 4,
                    baths: 1,
                    sqft: 120,
                    image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=150'
                  }
                ].map((property, index) => (
                  <div key={index} className="flex space-x-3">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{property.title}</h4>
                      <p className="text-sm text-primary-600 font-semibold mb-1">{property.price}</p>
                      <p className="text-xs text-gray-500">
                        Beds: {property.beds} Baths: {property.baths} Sqft: {property.sqft} sqft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing 1 - 4 of 6 results
              </p>
            </div>

            <div className="space-y-6">
              {filteredAgencies.map((agency) => (
                <div key={agency.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-10 h-10 text-primary-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{agency.name}</h3>
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {agency.properties} Properties
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{agency.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{agency.address}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{agency.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Link
                          to={`/agency/${agency.id}`}
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          View More →
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Phone: {agency.phone}</span>
                          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Show</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Email: {agency.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Website: {agency.website}</span>
                        </div>
                      </div>

                      {/* Social Media */}
                      <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
                        <div className="flex space-x-2">
                          <a href="#" className="text-gray-400 hover:text-blue-600">
                            <span className="sr-only">Facebook</span>
                            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">f</div>
                          </a>
                          <a href="#" className="text-gray-400 hover:text-blue-400">
                            <span className="sr-only">Twitter</span>
                            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">t</div>
                          </a>
                          <a href="#" className="text-gray-400 hover:text-blue-700">
                            <span className="sr-only">LinkedIn</span>
                            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">in</div>
                          </a>
                          <a href="#" className="text-gray-400 hover:text-pink-600">
                            <span className="sr-only">Instagram</span>
                            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">ig</div>
                          </a>
                        </div>
                      </div>
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
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}