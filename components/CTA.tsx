'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Mail } from 'lucide-react';

export const CTA = () => {
  const handleGetStarted = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-darkPurple via-purple/20 to-darkPurple text-white relative overflow-hidden border-t border-purple/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Ready to Evolve Your Digital Presence?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can transform your ideas into bold digital realities. 
            Get a free consultation and proposal today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={handleGetStarted}
              variant="primary"
              className="bg-purple hover:bg-lightPurple text-white border-none group shadow-lg shadow-purple/50"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              href="mailto:evolve8studio@gmail.com"
              variant="outline"
              className="border-purple text-purple hover:bg-purple hover:text-white"
            >
              <Mail className="inline-block mr-2" size={20} />
              evolve8studio@gmail.com
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

