'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ConsultingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    startupIdea: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if redirected from formsubmit.co success
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setSubmitted(true);
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let form submit naturally to formsubmit.co
    setIsSubmitting(true);
    // Form will submit to formsubmit.co and redirect back with success=true
  };

  const countries = [
    'India', 'United States', 'United Arab Emirates', 'United Kingdom', 'Canada', 'Australia',
    'Germany', 'France', 'Singapore', 'Japan', 'South Korea', 'China', 'Brazil', 'Mexico',
    'South Africa', 'Nigeria', 'Kenya', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Other'
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="w-10 h-10 text-purple" />
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white">
                Free Consulting Call
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto">
              Get expert advice on your startup idea. Schedule a free consultation call with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consulting Form */}
      <section className="py-20 bg-darkPurple/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-darkPurple/80 border border-purple/30 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-display font-bold text-white mb-8">Book Your Free Consultation</h2>

                {/* 
                  Form submission handled by formsubmit.co - No API keys or backend required!
                  Form will automatically email evolve8studio@gmail.com and redirect back with success message
                */}
                <form 
                  action="https://formsubmit.co/evolve8studio@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Formsubmit.co configuration */}
                  <input type="hidden" name="_subject" value="New Free Consulting Request from Evolve8 Website" />
                  <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/consulting?success=true`} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_autoresponse" value="Thank you for requesting a free consultation with Evolve8 Studio! We'll contact you within 24 hours to schedule your call." />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number (with Country Code) *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                      placeholder="+91 9876543210 or +1 555-123-4567"
                    />
                    <p className="mt-1 text-xs text-gray/70">Include country code (e.g., +91, +1, +971)</p>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-white mb-2">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark/80 border border-purple/30 text-white focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                    >
                      <option value="">Select your country...</option>
                      {countries.map((country) => (
                        <option key={country} value={country} className="bg-darkPurple">
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="startupIdea" className="block text-sm font-medium text-white mb-2">
                      Startup Idea *
                    </label>
                    <textarea
                      id="startupIdea"
                      name="startupIdea"
                      required
                      rows={4}
                      value={formData.startupIdea}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                      placeholder="Briefly describe your startup idea..."
                    />
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-white mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                      placeholder="Tell us more about your project, goals, timeline, or any specific questions you'd like to discuss..."
                    />
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          Request Free Consultation
                          <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-purple/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-purple" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Consultation Request Submitted!</h2>
              <p className="text-lg text-gray mb-8">
                Thank you for requesting a free consultation. We'll contact you within 24 hours to schedule your call.
              </p>
              <Button
                onClick={() => window.location.href = '/'}
                variant="primary"
              >
                Back to Home
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

