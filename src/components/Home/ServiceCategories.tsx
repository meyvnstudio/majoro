import React from 'react';
import { Home, Users, Building, FileText } from 'lucide-react';

export default function ServiceCategories() {
  const services = [
    {
      icon: Home,
      title: 'Modern Villa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      count: '21 Properties'
    },
    {
      icon: Users,
      title: 'Family House',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      count: '25 Properties'
    },
    {
      icon: Building,
      title: 'Town House',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      count: '15 Properties'
    },
    {
      icon: FileText,
      title: 'Apartment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      count: '34 Properties'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What are you looking for?</h2>
          <p className="text-gray-600">We provide full service at every step</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors">
                  <IconComponent className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-primary-600 font-medium">{service.count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}