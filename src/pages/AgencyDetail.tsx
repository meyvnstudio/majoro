import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Star, 
  Users, 
  Building,
  Award,
  Calendar,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import PropertyCard from '../components/Common/PropertyCard';
import { mockProperties, mockAgents } from '../data/mockData';

export default function AgencyDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Mock agency data
  const agency = {
    id: '1',
    name: 'Luxury House',
    logo: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200',
    address: '333 NW 26th St, Miami',
    phone: '407 123 ***',
    email: 'luxury.house@agency.com',
    website: 'themeluxury.net',
    description: 'Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.',
    founded: '2010',
    properties: 45,
    agents: 12,
    rating: 4.8,
    reviews: 156,
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  };

  const agencyProperties = mockProperties.slice(0, 6);
  const agencyAgents = mockAgents.slice(0, 4);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
  };

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'properties', name: 'Properties' },
    { id: 'agents', name: 'Agents' },
    { id: 'reviews', name: 'Reviews' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/agencies" className="hover:text-primary-600">Agencies</Link>
            <span>/</span>
            <span className="text-gray-900">{agency.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Agency Header */}
            <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-12 h-12 text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{agency.name}</h1>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      21 Properties
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{agency.address}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{agency.rating}</span>
                      <span>({agency.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{agency.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{agency.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>{agency.website}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4 mt-6 pt-6 border-t">
                <span className="text-sm text-gray-600">Follow us:</span>
                <div className="flex space-x-3">
                  <a href={agency.socialMedia.facebook} className="text-gray-400 hover:text-blue-600">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={agency.socialMedia.twitter} className="text-gray-400 hover:text-blue-400">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={agency.socialMedia.instagram} className="text-gray-400 hover:text-pink-600">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={agency.socialMedia.linkedin} className="text-gray-400 hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About {agency.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{agency.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{agency.founded}</div>
                    <div className="text-sm text-gray-500">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{agency.properties}</div>
                    <div className="text-sm text-gray-500">Properties</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{agency.agents}</div>
                    <div className="text-sm text-gray-500">Agents</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{agency.rating}</div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'properties' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agencyProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
                <div className="text-center">
                  <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
                    View All Properties
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'agents' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agencyAgents.map((agent) => (
                  <div key={agent.id} className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={agent.avatar}
                        alt={agent.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                        <p className="text-gray-600 capitalize">{agent.role}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{agent.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                        Contact
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Reviews</h2>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <img
                          src={`https://images.pexels.com/photos/168109${review}/pexels-photo-168109${review}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                          alt="Reviewer"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-gray-900">John Doe</h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">
                            Excellent service! The team was professional and helped us find our dream home quickly.
                          </p>
                          <span className="text-sm text-gray-500">2 weeks ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Send Message to {agency.name}</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Find Agencies */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Agencies</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Write Agency Name"
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
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Search Agency
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}