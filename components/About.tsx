'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, Users, Award } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Globe, value: '3', label: 'Global Locations' },
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Award, value: '200+', label: 'Projects Delivered' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
              alt="Evolve8 Studio team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-forest">
              About Evolve8 Studio
            </h2>
            <p className="text-lg text-earth leading-relaxed">
              We bridge the gap between traditional business and digital excellence. 
              With offices in Dubai, India, and the USA, we bring a global perspective 
              to every project.
            </p>
            <p className="text-lg text-earth leading-relaxed">
              Our team of designers, developers, and strategists work together to create 
              digital experiences that not only look stunning but drive real business results. 
              We believe in the power of evolution—helping brands grow and adapt in an 
              ever-changing digital landscape.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-xl bg-clay/10">
                        <IconComponent className="w-6 h-6 text-clay" />
                      </div>
                    </div>
                  <p className="text-3xl font-display font-bold text-forest mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-earth">{stat.label}</p>
                </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

