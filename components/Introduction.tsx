'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, TrendingUp } from 'lucide-react';

export const Introduction = () => {
  const features = [
    {
      icon: Target,
      title: 'Shape raw ideas into product roadmaps',
    },
    {
      icon: Zap,
      title: 'Build MVPs in weeks, not months',
    },
    {
      icon: Shield,
      title: 'Reduce early execution risks',
    },
    {
      icon: TrendingUp,
      title: 'Prepare startups for fundraising and scale',
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            More Than Tech Builders. Long-Term Startup Partners.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray leading-relaxed">
              <strong className="text-white">Evolve8 is not a traditional software agency.</strong>
            </p>
            <p className="text-lg text-gray leading-relaxed">
              We are a venture studio that works deeply with early-stage founders to:
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.li
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 rounded-lg bg-purple/20">
                        <IconComponent className="w-5 h-5 text-purple" />
                      </div>
                    </div>
                    <span className="text-lg text-gray">{feature.title}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray leading-relaxed">
              Whether you're a first-time entrepreneur in India or a global founder in the US or Canada, Evolve8 becomes your end-to-end execution partner.
            </p>
            <p className="text-lg text-white font-semibold leading-relaxed">
              We don't just deliver code—we deliver progress.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-darkPurple/80 border border-purple/30 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white text-center">
              At Evolve8, we believe that every successful startup begins with two things:
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-purple/20 border border-purple/30 rounded-2xl">
                <p className="text-xl font-display font-semibold text-white">
                  A founder with ambition
                </p>
              </div>
              <div className="text-center p-6 bg-purple/20 border border-purple/30 rounded-2xl">
                <p className="text-xl font-display font-semibold text-white">
                  A partner with execution ability
                </p>
              </div>
            </div>
            <p className="text-lg text-gray text-center mt-6">
              We exist to bridge that gap.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 space-y-8"
        >
          <h3 className="text-3xl font-display font-bold text-white text-center">
            Most early-stage founders struggle to:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Convert ideas into real products',
              'Decide what to build first',
              'Launch an MVP quickly',
              'Scale technology properly',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-darkPurple/60 border border-purple/20 rounded-xl text-center"
              >
                <p className="text-gray">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-display font-bold text-white mb-4">
              Evolve8 solves this—by combining:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {['Product strategy', 'UX/UI design', 'Full-stack engineering', 'Startup advisory'].map((item) => (
                <span
                  key={item}
                  className="px-6 py-3 bg-purple text-white rounded-full font-medium shadow-lg shadow-purple/50"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-lg text-gray mt-6">
              under one collaborative studio model.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

