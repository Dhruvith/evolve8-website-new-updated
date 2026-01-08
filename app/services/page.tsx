'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Rocket, Smartphone, Globe, TrendingUp, Users, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Rocket,
      title: 'Startup MVP Program',
      items: [
        'Idea validation',
        'UX/UI design',
        'Web & mobile MVP builds',
        'Launch support',
      ],
    },
    {
      icon: Smartphone,
      title: 'Custom App Development',
      items: [
        'Tailor-made mobile applications',
        'AI-powered apps',
        'Enterprise-grade platforms',
      ],
    },
    {
      icon: Globe,
      title: 'Web Development',
      items: [
        'Professional websites',
        'Startup landing pages',
        'SaaS dashboards',
        'E-commerce platforms',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Scaling & Retainer Support',
      items: [
        'Dedicated developers',
        'Cloud infrastructure',
        'Feature enhancements',
        'Performance optimization',
      ],
    },
    {
      icon: Users,
      title: 'Strategic Venture Studio Partnerships',
      items: [
        'Cash + Equity hybrid models',
        'Long-term collaboration',
        'Advisory for growth',
      ],
    },
  ];

  const offerings = [
    {
      title: 'MVP Sprint Program',
      description: 'End-to-end product building',
      features: [
        '6–10 week delivery',
        'Web + Mobile MVP',
        'UX/UI included',
        'Tech advisory included',
      ],
      price: 'Contact Us Now',
    },
    {
      title: 'Retainer-Based Scaling',
      description: 'For startups that need long-term support:',
      features: [
        'Dedicated engineers',
        'Monthly iteration cycles',
        'Performance & infrastructure',
        'Feature scaling',
      ],
      price: '$2k–$5k / month',
    },
    {
      title: 'Hybrid Equity Partnerships',
      description: 'Selective collaboration with high-potential founders:',
      features: [
        'Reduced cash cost',
        'Equity-aligned model',
        'Long-term involvement',
      ],
      price: 'Contact Us',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark via-darkPurple to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Startup-Focused Product Services
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              End-to-End Technology & Product Services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              if (!IconComponent) {
                console.error(`Icon component is undefined for service: ${service.title}`);
                return null;
              }
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-darkPurple/80 border border-purple/30 rounded-2xl hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-purple/20">
                      <IconComponent className="w-8 h-8 text-purple" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray">
                        <span className="text-purple mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Offerings with Tabs */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">
            Our Core Offering
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {offerings.map((offering, index) => (
              <button
                key={offering.title}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === index
                    ? 'bg-purple text-white shadow-lg shadow-purple/50'
                    : 'bg-darkPurple/80 border border-purple/30 text-white hover:bg-purple/20'
                }`}
              >
                {offering.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-darkPurple/80 border border-purple/30 p-8 md:p-12 rounded-3xl shadow-xl backdrop-blur-sm">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                {offerings[activeTab].title}
              </h3>
              <p className="text-lg text-gray mb-6">
                {offerings[activeTab].description}
              </p>
              <ul className="space-y-3 mb-8">
                {offerings[activeTab].features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-purple mt-1.5">✓</span>
                    <span className="text-gray text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-purple/20">
                <p className="text-2xl font-display font-bold text-purple mb-4">
                  {offerings[activeTab].price}
                </p>
                <Button
                  onClick={() => window.location.href = '/apply'}
                  variant="primary"
                  className="group"
                >
                  Apply to Build With Evolve8
                  <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray mb-4">
              <strong className="text-white">Important Note:</strong> Every startup is evaluated before engagement to ensure mutual success.
            </p>
            <Button
              onClick={() => window.location.href = '/apply'}
              variant="primary"
              className="group"
            >
              Apply to Build With Evolve8
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

