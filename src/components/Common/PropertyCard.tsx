import React from 'react';
import { Heart, MapPin, Bed, Bath, Square, Eye, Camera, Calendar } from 'lucide-react';
import { Property } from '../../types';
import { useProperties } from '../../contexts/PropertyContext';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'list';
}

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const { bookmarkProperty } = useProperties();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'featured':
        return 'bg-primary-500';
      case 'for-sale':
        return 'bg-green-500';
      case 'for-rent':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'featured':
        return 'Featured';
      case 'for-sale':
        return 'For Sale';
      case 'for-rent':
        return 'For Rent';
      default:
        return status;
    }
  };

  if (variant === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-80 h-64 md:h-auto">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              <span className={`${getStatusColor(property.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                {getStatusText(property.status)}
              </span>
            </div>
            <button
              onClick={() => bookmarkProperty(property.id)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                property.isBookmarked
                  ? 'bg-red-500 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4" fill={property.isBookmarked ? 'currentColor' : 'none'} />
            </button>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <div className="bg-white/90 rounded-full p-2">
                <Camera className="w-4 h-4 text-gray-700" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link 
                    to={`/property/${property.id}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {property.title}
                  </Link>
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location.address}, {property.location.city}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">
                  {formatPrice(property.price)}
                  {property.priceType === 'rent' && <span className="text-sm font-normal text-gray-500">/mo</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>Beds: {property.beds}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>Baths: {property.baths}</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>Sqft: {property.sqft.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {property.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-3">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{property.agent.name}</p>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-500">5 years ago</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`${getStatusColor(property.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {getStatusText(property.status)}
          </span>
        </div>
        <button
          onClick={() => bookmarkProperty(property.id)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            property.isBookmarked
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className="w-4 h-4" fill={property.isBookmarked ? 'currentColor' : 'none'} />
        </button>
        <div className="absolute bottom-4 left-4">
          <div className="text-2xl font-bold text-white drop-shadow-lg">
            {formatPrice(property.price)}
            {property.priceType === 'rent' && <span className="text-lg font-normal">/mo</span>}
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <div className="bg-white/90 rounded-full p-2">
            <Camera className="w-4 h-4 text-gray-700" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            <Link 
              to={`/property/${property.id}`}
              className="hover:text-primary-600 transition-colors"
            >
              {property.title}
            </Link>
          </h3>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.location.address}, {property.location.city}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>Beds: {property.beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>Baths: {property.baths}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>Sqft: {property.sqft.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-3">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{property.agent.name}</p>
              <div className="flex items-center space-x-1">
                <span className="text-xs text-gray-500">5 years ago</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 text-gray-500 hover:text-primary-600 transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-1 text-gray-500 hover:text-primary-600 transition-colors">
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}