'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Lock, Sparkles } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      title: 'Chat App',
      status: 'Stealth Mode',
      description: 'An innovative communication platform in development.',
    },
    {
      title: 'Startup AI Based Tool',
      status: 'Stealth Mode',
      description: 'AI-powered solutions for startup founders.',
    },
    {
      title: 'Fintech App',
      status: 'Stealth Mode',
      description: 'Financial technology platform for modern businesses.',
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
              Building Platforms That Empower Founders
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Evolve8 is developing internal tools to strengthen the startup ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              What We Are Building In-House
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-darkPurple/80 border border-purple/30 rounded-2xl hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-purple/20 rounded-full border border-purple/30">
                    <Lock className="w-4 h-4 text-purple" />
                    <span className="text-xs font-semibold text-purple">{product.status}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-6 mt-4">
                  <div className="p-6 rounded-2xl bg-purple/20">
                    <Sparkles className="w-12 h-12 text-purple" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3 text-center">
                  {product.title}
                </h3>
                <p className="text-gray text-center">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray max-w-2xl mx-auto">
              These internal projects help us understand the founder journey better and build tools that solve real problems in the startup ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

