'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, TrendingUp } from 'lucide-react';

export const WhatWeDo = () => {
  const stages = [
    {
      icon: Lightbulb,
      title: 'Idea Validation',
      items: [
        'Refining problem statements',
        'Understanding target users',
        'Mapping product scope',
        'Defining core features',
      ],
    },
    {
      icon: Rocket,
      title: 'MVP Execution',
      items: [
        '6–10 week focused builds',
        'Web and mobile MVPs',
        'Scalable architecture',
        'Launch-ready products',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Iterative Growth',
      items: [
        'Post-launch iterations',
        'Feature enhancements',
        'Performance scaling',
        'Tech team support',
      ],
    },
  ];

  return (
    <section id="what-we-do" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            From Idea Stage to Market Stage
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => {
            const IconComponent = stage.icon;
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-darkPurple/80 border border-purple/30 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-2xl bg-purple/20">
                    <IconComponent className="w-12 h-12 text-purple" />
                  </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {stage.title}
                </h3>
                <ul className="space-y-3 text-left w-full">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-purple mt-1.5">•</span>
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

