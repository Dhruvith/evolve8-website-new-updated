'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle2, Phone } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    founderName: '',
    background: '',
    problemStatement: '',
    targetMarket: '',
    ideaStage: '',
    budgetRange: '',
    timeline: '',
    equityOpenness: '',
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

  const whoShouldApply = [
    'You are an early-stage founder',
    'You have an idea you want to convert to MVP',
    'You are serious about execution',
    'You want a partner, not a vendor',
    'You aim to build for India, UAE, or global markets',
  ];

  const steps = [
    {
      number: 1,
      title: 'Share Your Idea',
      description: 'Fill out the application form below',
    },
    {
      number: 2,
      title: 'Evaluation',
      description: 'Your startup is scored on founder quality, market opportunity, tech feasibility, and strategic alignment',
    },
    {
      number: 3,
      title: 'Strategy Call',
      description: 'If selected, we finalize MVP roadmap, decide engagement tier, and begin onboarding',
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
              Apply to Build With Evolve8 Studio
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-20 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">Who Should Apply</h2>
            <div className="space-y-4 mb-12">
              {whoShouldApply.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-darkPurple/80 border border-purple/30 rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Application Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-darkPurple/80 border border-purple/30 p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple text-white flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-purple/50">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-darkPurple/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FileText className="w-8 h-8 text-purple" />
                <h2 className="text-3xl font-display font-bold text-white">Step 1: Share Your Idea</h2>
              </div>

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
                <input type="hidden" name="_subject" value="New Application from Evolve8 Website" />
                <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/apply?success=true`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for your application to Evolve8 Studio! We'll review it and get back to you within 2-3 business days." />
                <div>
                  <label htmlFor="founderName" className="block text-sm font-medium text-white mb-2">
                    Founder Name *
                  </label>
                  <input
                    type="text"
                    id="founderName"
                    name="founderName"
                    required
                    value={formData.founderName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-darkPurple/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="background" className="block text-sm font-medium text-white mb-2">
                    Background *
                  </label>
                  <textarea
                    id="background"
                    name="background"
                    required
                    rows={4}
                    value={formData.background}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-darkPurple/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                    placeholder="Tell us about your background and experience..."
                  />
                </div>

                <div>
                  <label htmlFor="problemStatement" className="block text-sm font-medium text-white mb-2">
                    Problem Statement *
                  </label>
                  <textarea
                    id="problemStatement"
                    name="problemStatement"
                    required
                    rows={4}
                    value={formData.problemStatement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-darkPurple/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                    placeholder="What problem are you solving?"
                  />
                </div>

                <div>
                  <label htmlFor="targetMarket" className="block text-sm font-medium text-white mb-2">
                    Target Market *
                  </label>
                  <input
                    type="text"
                    id="targetMarket"
                    name="targetMarket"
                    required
                    value={formData.targetMarket}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-darkPurple/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                    placeholder="Who is your target audience?"
                  />
                </div>

                <div>
                  <label htmlFor="ideaStage" className="block text-sm font-medium text-white mb-2">
                    Idea Stage *
                  </label>
                  <select
                    id="ideaStage"
                    name="ideaStage"
                    required
                    value={formData.ideaStage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-darkPurple/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                  >
                    <option value="">Select stage...</option>
                    <option value="idea">Just an idea</option>
                    <option value="validation">Validating concept</option>
                    <option value="mvp">Building MVP</option>
                    <option value="launched">Already launched</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-white mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    required
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-darkPurple/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                  >
                    <option value="">Select range...</option>
                    <option value="under-10k">Under $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-plus">$100k+</option>
                    <option value="equity">Equity-based</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-darkPurple/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months-plus">6+ months</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="equityOpenness" className="block text-sm font-medium text-white mb-2">
                    Equity Openness *
                  </label>
                  <select
                    id="equityOpenness"
                    name="equityOpenness"
                    required
                    value={formData.equityOpenness}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-darkPurple/80 border border-purple/30 text-white placeholder-gray/50 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                  >
                    <option value="">Select option...</option>
                    <option value="yes">Yes, open to equity partnership</option>
                    <option value="maybe">Maybe, depending on terms</option>
                    <option value="no">No, cash only</option>
                  </select>
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
                        Start Your Application
                        <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
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
              <h2 className="text-3xl font-display font-bold text-white mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray mb-8">
                Thank you for your application. We'll review it and get back to you within 2-3 business days.
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

