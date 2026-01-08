'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Evolve8 transformed our outdated site into a high-performance platform. The design feels fresh and grounded, exactly what our eco-friendly brand needed.",
    author: "Sarah Jenkins",
    role: "CEO of GreenLeaf Tech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    quote: "Professional, reliable, and incredibly creative. They didn't just build a website; they evolved our entire brand identity.",
    author: "David Al-Fayed",
    role: "Founder, Horizon Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    quote: "The team understands the balance between aesthetics and functionality. Our leads increased by 150% within three months of launch.",
    author: "Priya Mehta",
    role: "Marketing Director, FinCore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="work" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Trusted by innovative companies worldwide
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-darkPurple/80 border border-purple/30 p-8 md:p-12 rounded-2xl shadow-lg backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-purple" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-white mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple/30">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-gray">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-darkPurple/80 border border-purple/30 shadow-lg flex items-center justify-center text-white hover:text-purple hover:bg-purple/20 transition-colors backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-darkPurple/80 border border-purple/30 shadow-lg flex items-center justify-center text-white hover:text-purple hover:bg-purple/20 transition-colors backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-purple w-8'
                    : 'bg-purple/30 hover:bg-purple/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

