'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-earth/20 group"
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 rounded-xl bg-forest/5 group-hover:bg-clay/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-forest group-hover:text-clay transition-colors duration-300" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-display font-semibold text-forest group-hover:text-clay transition-colors duration-300">
          {title}
        </h3>
        <p className="text-earth leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

