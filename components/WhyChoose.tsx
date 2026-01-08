'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const WhyChoose = () => {
  const benefits = [
    'Outcome-focused execution',
    'Founder-first collaboration',
    'Transparent pricing',
    'Strategic guidance',
    'Fast delivery cycles',
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-darkPurple via-purple/20 to-darkPurple text-white border-t border-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why Choose Evolve8
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 bg-purple/20 border border-purple/30 rounded-xl backdrop-blur-sm hover:bg-purple/30 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0" />
              <span className="text-lg">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-display font-bold">
            We win only when your startup wins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

