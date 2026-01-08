'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, Code, Rocket, TrendingUp } from 'lucide-react';

export const OurApproach = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Apply & Get Evaluated',
      description: [
        'Share your idea with us',
        'We analyze market and feasibility',
      ],
    },
    {
      icon: Target,
      title: 'Strategy Sprint',
      description: [
        'Finalize MVP roadmap',
        'Define milestones and timelines',
      ],
    },
    {
      icon: Code,
      title: 'Build Phase',
      description: [
        'Rapid MVP development',
        'Design + Engineering together',
      ],
    },
    {
      icon: Rocket,
      title: 'Launch & Iterate',
      description: [
        'Real users',
        'Real feedback',
        'Real progress',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Scale Phase',
      description: [
        'Long-term partnership',
        'Growth support',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-darkPurple/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            How Evolve8 Works With Founders
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-purple/30" style={{ top: '6rem' }}></div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-darkPurple/80 border border-purple/30 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 rounded-2xl bg-purple/20 relative z-10">
                        <IconComponent className="w-8 h-8 text-purple" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-white">
                        {step.title}
                      </h3>
                      <ul className="space-y-2 text-sm text-gray">
                        {step.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
