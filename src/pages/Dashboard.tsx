import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Building, 
  TrendingUp, 
  Calendar, 
  MessageSquare, 
  Settings,
  Plus,
  Eye,
  Edit,
  Trash2,
  Star,
  DollarSign,
  CheckCircle,
  Clock,
  XCircle,
  BarChart3,
  PieChart,
  Activity,
  Filter,
  Search,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Info
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useProperties } from '../contexts/PropertyContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();
  const { properties } = useProperties();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');

  const userProperties = properties.filter(p => p.agent.id === user?.id);
  
  const stats = [
    {
      title: 'Total Properties',
      value: 268,
      change: '+16.8%',
      trend: 'up',
      description: 'Properties coming increased by 16% in last 7 days',
      color: 'purple'
    },
    {
      title: 'Total Income',
      value: '$163,848',
      change: '+12.8%',
      trend: 'up',
      description: 'Properties coming increased by 16% in last 7 days',
      color: 'green'
    },
    {
      title: 'Total Sales',
      value: '$848,848',
      change: '+16.8%',
      trend: 'up',
      description: 'Properties coming increased by 16% in last 7 days',
      color: 'orange'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      name: 'Jane Cooper',
      message: 'I need a property',
      time: '12 min ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      unread: true
    },
    {
      id: 2,
      name: 'Brooklyn Simmons',
      message: 'My budget is $300,000',
      time: '1 day ago',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      unread: false
    },
    {
      id: 3,
      name: 'Esther Howard',
      message: 'Thank you so much.😊',
      time: '8 hrs ago',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
      unread: true
    },
    {
      id: 4,
      name: 'Guy Hawkins',
      message: 'Nice property',
      time: '3 day ago',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      unread: false
    }
  ];

  const activeProperties = [
    {
      id: 1,
      name: 'Opulence Oasis',
      beds: 3,
      baths: 2,
      sqft: '1200sqft',
      location: 'Paris, France',
      contact: '(406) 555-0120',
      date: '6 Jul 2024',
      views: '1,747 Views',
      price: '$85,858.69',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Regal Retreat',
      beds: 3,
      baths: 2,
      sqft: '1400sqft',
      location: 'Paris, France',
      contact: '(480) 555-0103',
      date: '7 Jul 2024',
      views: '1,656 Views',
      price: '$94,346.48',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const chartData = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    expense: [12, 14, 16, 18, 20, 18, 22, 20, 18, 16],
    income: [8, 10, 12, 15, 18, 16, 20, 18, 16, 14]
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                See Details
              </button>
            </div>
            
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500">{stat.description}</p>
            
            {/* Mini Chart */}
            <div className="mt-4 h-16 flex items-end space-x-1">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${
                    stat.color === 'purple' ? 'bg-purple-200' :
                    stat.color === 'green' ? 'bg-green-200' : 'bg-orange-200'
                  }`}
                  style={{ height: `${Math.random() * 60 + 20}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Property revenue overview</h3>
              <p className="text-sm text-gray-500">Overview of July 15- July 22</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
          
          {/* Chart */}
          <div className="relative h-64">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map(i => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 40}
                  x2="400"
                  y2={i * 40}
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />
              ))}
              
              {/* Expense line */}
              <polyline
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
                points="0,120 40,100 80,80 120,60 160,40 200,60 240,20 280,40 320,60 360,80 400,100"
              />
              
              {/* Income line */}
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="5,5"
                points="0,160 40,140 80,120 120,100 160,80 200,100 240,60 280,80 320,100 360,120 400,140"
              />
              
              {/* Data point */}
              <circle cx="240" cy="20" r="4" fill="#6366f1" />
              <rect x="200" y="5" width="80" height="30" fill="#1f2937" rx="4" />
              <text x="240" y="16" textAnchor="middle" fill="white" fontSize="10">
                Expense: $568K
              </text>
              <text x="240" y="26" textAnchor="middle" fill="white" fontSize="10">
                Income: $847K
              </text>
            </svg>
            
            {/* Legend */}
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Expense</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Income</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Message</h3>
              <p className="text-sm text-gray-500">All conversations</p>
            </div>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3">
                <div className="relative">
                  <img
                    src={message.avatar}
                    alt={message.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {message.unread && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">1</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">{message.name}</p>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
            View all messages →
          </button>
        </div>
      </div>

      {/* Active Properties */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Active Property</h3>
            <p className="text-sm text-gray-500">Overview of July 15- July 31</p>
          </div>
          <button className="flex items-center space-x-2 text-sm border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-3 font-medium">Property</th>
                <th className="pb-3 font-medium">Location</th>
                <th className="pb-3 font-medium">Contact</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Engagement</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeProperties.map((property) => (
                <tr key={property.id} className="text-sm">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{property.name}</p>
                        <p className="text-gray-500">{property.beds} beds • {property.baths} bath • {property.sqft}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600">{property.location}</td>
                  <td className="py-4 text-gray-600">{property.contact}</td>
                  <td className="py-4 text-gray-600">{property.date}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Eye className="w-4 h-4" />
                      <span>{property.views}</span>
                    </div>
                  </td>
                  <td className="py-4 font-medium text-gray-900">{property.price}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Properties</h2>
        <Link
          to="/submit-property"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Property</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userProperties.map((property) => (
                <tr key={property.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-lg object-cover"
                        src={property.images[0]}
                        alt={property.title}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {property.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {property.location.city}, {property.location.state}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      property.status === 'featured' 
                        ? 'bg-purple-100 text-purple-800'
                        : property.status === 'for-sale'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {property.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${property.price.toLocaleString()}
                    {property.priceType === 'rent' && '/mo'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {Math.floor(Math.random() * 500) + 100}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        to={`/property/${property.id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAdminPanel = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
      
      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <Building className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Properties</p>
              <p className="text-2xl font-bold text-gray-900">{properties.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Approval</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$125,430</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Properties */}
      <div className="bg-white rounded-xl border border-gray-100">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Properties Pending Approval</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.slice(0, 3).map((property) => (
                <tr key={property.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-lg object-cover"
                        src={property.images[0]}
                        alt={property.title}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {property.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          ${property.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{property.agent.name}</div>
                    <div className="text-sm text-gray-500">{property.agent.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2 days ago
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Approve</span>
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 flex items-center space-x-1">
                        <XCircle className="w-3 h-3" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = user?.role === 'admin' ? [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'properties', name: 'Properties', icon: Building },
    { id: 'admin', name: 'Admin Panel', icon: Settings },
    { id: 'bookings', name: 'Bookings', icon: Calendar },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'settings', name: 'Settings', icon: Settings }
  ] : [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'properties', name: 'Properties', icon: Building },
    { id: 'bookings', name: 'Bookings', icon: Calendar },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your {user?.role === 'admin' ? 'platform' : 'properties'} today.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'properties' && renderProperties()}
        {activeTab === 'admin' && user?.role === 'admin' && renderAdminPanel()}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-500">Property viewings and appointments will appear here.</p>
          </div>
        )}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No messages</h3>
            <p className="text-gray-500">Client inquiries and messages will appear here.</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Account Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue={user?.phone}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}