'use client';

import React from 'react';
import { 
  Palette, 
  TrendingUp, 
  Code, 
  ShoppingCart, 
  Smartphone, 
  Search 
} from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'We create compelling brand identities that resonate with your audience and differentiate you in the market. From logo design to brand guidelines, we craft cohesive visual systems.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that drive growth. We leverage SEO, content marketing, social media, and paid advertising to amplify your brand presence.',
  },
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Bespoke web solutions built with modern technologies. We create fast, scalable, and user-friendly websites that convert visitors into customers.',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Solutions',
    description: 'Complete ecommerce platforms that drive sales. From product catalogs to checkout optimization, we build seamless shopping experiences.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users. We build apps that perform flawlessly on iOS and Android devices.',
  },
  {
    icon: Search,
    title: 'SEO & Growth',
    description: 'Comprehensive SEO strategies that improve your search rankings and organic traffic. We combine technical optimization with content excellence.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-forest mb-4">
            Our Services
          </h2>
          <p className="text-lg text-earth max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

