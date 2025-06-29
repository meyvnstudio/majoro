import { Property, Agent } from '../types';

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Agent Pakura',
    email: 'pakura@homeo.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    role: 'agent',
    rating: 4.8,
    reviewCount: 42,
    properties: 15,
    isVerified: true
  },
  {
    id: '2',
    name: 'Nina Walker',
    email: 'nina@homeo.com',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    role: 'agent',
    rating: 4.9,
    reviewCount: 38,
    properties: 22,
    isVerified: true
  },
  {
    id: '3',
    name: 'John Powell',
    email: 'john@homeo.com',
    phone: '+1 (555) 345-6789',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    role: 'agent',
    rating: 4.7,
    reviewCount: 55,
    properties: 18,
    isVerified: true
  },
  {
    id: '4',
    name: 'Tom Wilson',
    email: 'tom@homeo.com',
    phone: '+1 (555) 456-7890',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    role: 'agent',
    rating: 4.6,
    reviewCount: 29,
    properties: 12,
    isVerified: true
  }
];

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Kanombe Luxury Modern Villa',
    price: 100000,
    priceType: 'sale',
    type: 'villa',
    status: 'featured',
    beds: 4,
    baths: 3,
    sqft: 350,
    location: {
      address: 'Busanza - Kanombe', 
      city: 'Kigali', 
      state: 'KGL', 
      coordinates: { lat: -1.978673272253877, lng: 30.17622605209083 } 
    },
    images: [
      'https://www.dropbox.com/scl/fi/0nq0323a7inyyu1wvacei/MRE02974.jpg?rlkey=f3vn92kt2rpql19i8ol1y8ms4&st=2we5hob7&raw=1',
      'https://www.dropbox.com/scl/fi/f0t84wui4oxb5005ppv4b/MRE02973.JPG?rlkey=lugcfh7trk5tmaxjk7b3wpm1j&st=gse427ji&raw=1',
      ""
    ],
    description: 'Beautiful modern apartment with stunning city views and premium amenities.',
    features: ['Balcony', '3 Car Parking', 'Swimming Pool', 'Gym', 'Air Conditioning'],
    agent: mockAgents[0],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    isBookmarked: false,
    rating: 4.5
  },
  {
    id: '2',
    title: 'Gorgeous Villa Bay',
    price: 8000,
    priceType: 'rent',
    type: 'villa',
    status: 'featured',
    beds: 5,
    baths: 4,
    sqft: 2200,
    location: {
      address: '325 E 84th St, New York',
      city: 'New York',
      state: 'NY',
      coordinates: { lat: -1.978673272253877, lng: 30.17622605209083 }
    },
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Luxurious villa with spacious rooms and modern amenities in prime location.',
    features: ['Garden', 'Garage', 'Fireplace', 'Modern Kitchen', 'Walk-in Closet'],
    agent: mockAgents[1],
    createdAt: '2024-01-14T10:00:00Z',
    updatedAt: '2024-01-14T10:00:00Z',
    isBookmarked: false,
    rating: 4.8
  },
  {
    id: '3',
    title: 'Arlo Apartment',
    price: 2500,
    priceType: 'rent',
    type: 'apartment',
    status: 'for-rent',
    beds: 2,
    baths: 1,
    sqft: 850,
    location: {
      address: '2442 Broadway NY',
      city: 'New York',
      state: 'NY',
      coordinates: { lat: -2.028714321702849, lng: 30.10306608874424 }
    },
    images: [
      'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Cozy apartment perfect for young professionals or couples.',
    features: ['Hardwood Floors', 'Updated Kitchen', 'Natural Light', 'Pet Friendly'],
    agent: mockAgents[2],
    createdAt: '2024-01-13T10:00:00Z',
    updatedAt: '2024-01-13T10:00:00Z',
    isBookmarked: false,
    rating: 4.2
  },
  {
    id: '4',
    title: 'Subway Apartments',
    price: 5150,
    priceType: 'rent',
    type: 'apartment',
    status: 'featured',
    beds: 3,
    baths: 2,
    sqft: 1200,
    location: {
      address: '322 1st Avenue NY',
      city: 'New York',
      state: 'NY',
      coordinates: { lat: -1.995616, lng: 30.041028 }
    },
    images: [
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Modern apartment with excellent subway access and city amenities.',
    features: ['Elevator', 'Laundry', 'Balcony', 'Storage', 'Concierge'],
    agent: mockAgents[3],
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-12T10:00:00Z',
    isBookmarked: false,
    rating: 4.6
  },
  {
    id: '5',
    title: 'House on the Hollywood',
    price: 3500,
    priceType: 'sale',
    type: 'house',
    status: 'featured',
    beds: 4,
    baths: 3,
    sqft: 1800,
    location: {
      address: '19-17 Ditmars Blvd, Astoria',
      city: 'Los Angeles',
      state: 'CA',
      coordinates: { lat: -1.499781, lng: 29.630636 }
    },
    images: [
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454802/pexels-photo-1454802.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Charming house in Hollywood area with great potential and location.',
    features: ['Backyard', 'Driveway', 'Updated Plumbing', 'Near Schools', 'Quiet Street'],
    agent: mockAgents[2],
    createdAt: '2024-01-11T10:00:00Z',
    updatedAt: '2024-01-11T10:00:00Z',
    isBookmarked: false,
    rating: 4.3
  },
  {
    id: '6',
    title: 'Luxury Family Home',
    price: 13500,
    priceType: 'sale',
    type: 'house',
    status: 'for-sale',
    beds: 6,
    baths: 4,
    sqft: 3200,
    location: {
      address: '69-33 Queens Blvd, Astoria',
      city: 'Los Angeles',
      state: 'CA',
      coordinates: { lat: -2.596650, lng: 29.740110 }
    },
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454801/pexels-photo-1454801.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Spacious luxury family home with premium finishes and amenities.',
    features: ['Pool', 'Jacuzzi', 'Wine Cellar', 'Home Theater', 'Smart Home'],
    agent: mockAgents[0],
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
    isBookmarked: false,
    rating: 4.9
  }
];