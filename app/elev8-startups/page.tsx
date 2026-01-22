'use client';

import React, { useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion, useReducedMotion } from 'framer-motion';
import { Elev8AlarmLogo } from '@/components/Elev8AlarmLogo';
import { Button } from '@/components/Button';
import { Scene3D } from '@/components/Scene3D';
import { GSAPScrollAnimations } from '@/components/GSAPScrollAnimations';
import Image from 'next/image';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Globe, 
  Briefcase, 
  Zap, 
  Award, 
  Calendar,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Building2,
  Rocket,
  DollarSign,
  Sparkles
} from 'lucide-react';

export default function Elev8StartupsPage() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Dynamic GSAP import
  let gsap: any;
  let ScrollTrigger: any;
  
  if (typeof window !== 'undefined') {
    try {
      gsap = require('gsap');
      ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) {
      // GSAP not installed yet
    }
  }

  useEffect(() => {
    // Hero title animation with GSAP
    if (titleRef.current && !shouldReduceMotion) {
      const chars = titleRef.current.textContent?.split('') || [];
      titleRef.current.innerHTML = chars
        .map((char, i) => `<span class="inline-block" style="opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
      
      const spans = titleRef.current.querySelectorAll('span');
      gsap.to(spans, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.02,
        ease: 'power2.out',
        delay: 0.5,
      });
    }

    // Magnetic effect for buttons
    if (typeof window !== 'undefined' && gsap) {
      const buttons = document.querySelectorAll('[data-magnetic]');
      buttons.forEach((button) => {
        button.addEventListener('mousemove', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = button.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left - rect.width / 2;
          const y = mouseEvent.clientY - rect.top - rect.height / 2;
          
          gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      });
    }

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [shouldReduceMotion]);

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: shouldReduceMotion ? 0 : -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: shouldReduceMotion ? 0 : 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 },
    animate: { opacity: 1, scale: 1 }
  };
  
  const scaleInTransition = { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const viewportOptions = { once: true, margin: '-150px' };

  const sectors = [
    'Robotics',
    'Deep Technology',
    'AI & Machine Learning',
    'Blockchain',
    'SaaS / B2B',
    'Fintech',
    'Health Tech'
  ];

  const objectives = [
    {
      icon: Rocket,
      title: 'Transform Ideas into MVPs',
      description: 'Convert early-stage concepts into functional, market-ready products',
      gradient: 'from-purple to-violet'
    },
    {
      icon: Globe,
      title: 'Cross-Border Growth',
      description: 'Foster expansion between India and UAE markets',
      gradient: 'from-violet to-lightPurple'
    },
    {
      icon: Briefcase,
      title: 'Resource Access',
      description: 'Provide comprehensive startup resources and infrastructure',
      gradient: 'from-lightPurple to-purple'
    },
    {
      icon: Target,
      title: 'Product-Market Fit',
      description: 'Build strong alignment between products and target markets',
      gradient: 'from-purple to-violet'
    },
    {
      icon: Building2,
      title: 'Sustainable Business Models',
      description: 'Establish viable, scalable business foundations',
      gradient: 'from-violet to-lightPurple'
    },
    {
      icon: DollarSign,
      title: 'Early-Stage Funding',
      description: 'Secure initial investment and funding opportunities',
      gradient: 'from-lightPurple to-purple'
    },
    {
      icon: TrendingUp,
      title: 'Market Expansion',
      description: 'Expand into new markets and customer segments',
      gradient: 'from-purple to-violet'
    }
  ];

  const phases = [
    {
      number: '01',
      title: 'Foundation',
      weeks: 'Week 1-2',
      items: [
        'Team onboarding',
        'Understanding solutions',
        'User identification',
        'Goal setting'
      ],
      colorClass: 'text-purple',
      bgClass: 'from-purple/20'
    },
    {
      number: '02',
      title: 'Build & Validate',
      weeks: 'Week 3-6',
      items: [
        'Market research',
        'Competitor benchmarking',
        'Solution overview',
        'MVP development'
      ],
      colorClass: 'text-violet',
      bgClass: 'from-violet/20'
    },
    {
      number: '03',
      title: 'Growth & Funding Prep',
      weeks: 'Week 7-10',
      items: [
        'Go-to-market strategy',
        'Investor deck preparation',
        'MVP refinement'
      ],
      colorClass: 'text-lightPurple',
      bgClass: 'from-lightPurple/20'
    },
    {
      number: '04',
      title: 'Demo Day & Launch',
      weeks: 'Week 11-12',
      items: [
        'Investor pitching',
        'Demo Day with panel',
        'Legal, branding, and marketing support'
      ],
      colorClass: 'text-purple',
      bgClass: 'from-purple/20'
    }
  ];

  const masterclasses = [
    { week: 1, topic: 'Idea Validation' },
    { week: 2, topic: 'Market Research' },
    { week: 3, topic: 'Product Strategy' },
    { week: 4, topic: 'UX/UI Design Principles' },
    { week: 5, topic: 'MVP Development' },
    { week: 6, topic: 'Business Modeling' },
    { week: 7, topic: 'Go-to-Market Strategy' },
    { week: 8, topic: 'Fundraising' },
    { week: 9, topic: 'Growth Hacking' },
    { week: 10, topic: 'Scaling & Operations' }
  ];

  const deliverables = [
    'MVP Development Support',
    'UX/UI Design',
    'Go-to-Market Strategy Template',
    'Weekly 1:1 Mentoring',
    'Branding & Identity Package',
    'Digital Marketing Guidelines',
    'Investor Access & Regional Demo Day',
    'UAE Company Formation Assistance'
  ];

  const mentorshipBenefits = [
    'Direct mentorship from industry experts',
    'Access to extensive founder and investor networks',
    'Introductions to strategic partners',
    'Exclusive workshops and masterclasses'
  ];

  const timelines = [
    { milestone: 'Applications Open', date: 'August 2025' },
    { milestone: 'Application Deadline', date: 'October 15, 2025' },
    { milestone: 'Program Start', date: 'November 2025' },
    { milestone: 'Demo Day', date: 'December 15, 2025' }
  ];

  return (
    <main className="min-h-screen bg-dark overflow-hidden relative">
      <GSAPScrollAnimations />
      <Scene3D />
      <Navbar />

      {/* Hero Section - Premium Design */}
      <section 
        ref={heroRef}
        data-gsap-section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-darkPurple/80 to-dark"></div>
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <Elev8AlarmLogo size={72} />
            </motion.div>
            
            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tight"
            >
              Elev8 Alpha
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block mb-12"
            >
              <div className="relative px-8 py-4 bg-gradient-to-r from-purple/20 via-violet/20 to-lightPurple/20 backdrop-blur-md border border-purple/30 rounded-full">
                <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white">
                  Startup Accelerator by Evolve8 Studio
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple via-violet to-lightPurple opacity-20 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                data-magnetic
                onClick={() => window.location.href = '/elev8-startups#apply-now'}
                variant="primary"
                className="group text-lg px-8 py-4 bg-gradient-to-r from-purple to-violet shadow-2xl shadow-purple/50 hover:shadow-purple/70 hover:scale-105 transition-all duration-300"
              >
                Apply for Elev8 Alpha
                <ArrowRight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" size={24} />
              </Button>
              <Button
                data-magnetic
                onClick={() => window.location.href = '/elev8-startups#contact'}
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-purple/50 hover:border-purple hover:bg-purple/10 transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-purple/50 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-purple rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Evolve8 Studio */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 bg-dark"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darkPurple/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-6 mb-12"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={48} />
            </div>
            <div>
              <h2 
                data-gsap-text
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                About Evolve8 Studio
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
            </div>
          </motion.div>
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="text-xl md:text-2xl text-gray leading-relaxed">
              Evolve8 Studio is a Dubai-based Venture Studio focused on empowering startups. 
              We provide comprehensive support in MVP development, business modeling, branding, 
              funding, and market expansion, with a strong focus on India and UAE markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 bg-darkPurple/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="mb-16"
          >
            <h2 
              data-gsap-text
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Program Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray max-w-4xl leading-relaxed">
              Elev8 Alpha is a <strong className="text-white font-semibold">12-week hybrid accelerator program</strong> designed for 
              tech startups. With a physical presence in Dubai/UAE and digital reach across UAE, 
              we provide full startup transformation—from idea to Alpha.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            className="flex flex-wrap gap-4"
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={sector}
                data-gsap-element
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative px-6 py-4 bg-gradient-to-br from-darkPurple/80 to-darkPurple/40 border border-purple/30 rounded-2xl backdrop-blur-sm hover:border-purple/60 hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple/0 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-white font-semibold text-lg">{sector}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Objectives - Enhanced with GSAP */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 bg-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-6 mb-16"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={48} />
            </div>
            <div>
              <h2 
                data-gsap-text
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                Objectives
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={viewportOptions}
              transition={fadeInLeft.transition}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-purple/20 group"
            >
              <div 
                data-gsap-parallax
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Target and objectives"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darkPurple via-purple/20 to-transparent"></div>
            </motion.div>
            
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={viewportOptions}
              transition={fadeInRight.transition}
              className="space-y-4"
            >
              {objectives.map((obj, index) => (
                <motion.div
                  key={obj.title}
                  data-gsap-element
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={viewportOptions}
                  transition={{ ...fadeInUp.transition, delay: index * 0.06 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group relative p-6 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-2xl hover:border-purple/60 hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${obj.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative flex gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${obj.gradient} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <obj.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl text-white mb-2">
                        {obj.title}
                      </h3>
                      <p className="text-gray leading-relaxed">{obj.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elev8 Alpha Structure */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 bg-darkPurple/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-6 mb-12 md:mb-16"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={48} />
            </div>
            <div>
              <h2 
                data-gsap-text
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                Elev8 Alpha Structure
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                data-gsap-element
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOptions}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-3xl hover:border-purple/60 hover:shadow-2xl hover:shadow-purple/30 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${phase.bgClass} to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`text-7xl font-display font-bold ${phase.colorClass}/20 mb-4 group-hover:${phase.colorClass}/30 transition-colors`}>
                    {phase.number}
                  </div>
                  <div className={`text-sm font-semibold ${phase.colorClass} mb-3`}>{phase.weeks}</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-6">
                    {phase.title}
                  </h3>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray">
                        <CheckCircle2 className={`w-5 h-5 ${phase.colorClass} flex-shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Masterclass Sessions */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 bg-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-6 mb-16"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={48} />
            </div>
            <div>
              <h2 
                data-gsap-text
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                10 Masterclass Sessions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={viewportOptions}
              transition={fadeInLeft.transition}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-purple/20 group order-2 md:order-1"
            >
              <div 
                data-gsap-parallax
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Masterclass sessions"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darkPurple via-purple/20 to-transparent"></div>
            </motion.div>
            
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={viewportOptions}
              transition={fadeInRight.transition}
              className="space-y-3 order-1 md:order-2"
            >
              {masterclasses.map((session, index) => (
                <motion.div
                  key={session.week}
                  data-gsap-element
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={viewportOptions}
                  transition={{ ...fadeInUp.transition, delay: index * 0.04 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group relative flex items-center gap-6 p-6 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-2xl hover:border-purple/60 hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple/0 via-purple/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple to-violet flex items-center justify-center text-white font-display font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {session.week}
                  </div>
                  <div className="relative flex-1">
                    <h3 className="font-display font-semibold text-xl text-white">
                      {session.topic}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Startup Support & Deliverables */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 bg-darkPurple/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-6 mb-16"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={48} />
            </div>
            <div>
              <h2 
                data-gsap-text
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                Startup Support & Deliverables
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={viewportOptions}
              transition={fadeInLeft.transition}
              className="md:col-span-1"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6">Deliverables</h3>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <motion.li
                    key={item}
                    data-gsap-element
                    initial={fadeInLeft.initial}
                    whileInView={fadeInLeft.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInLeft.transition, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-darkPurple/60 border border-purple/20 rounded-xl hover:border-purple/40 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={scaleIn.initial}
              whileInView={scaleIn.animate}
              viewport={viewportOptions}
              transition={scaleInTransition}
              className="md:col-span-1 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-purple/20 group order-3 md:order-2"
            >
              <div 
                data-gsap-parallax
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                  alt="Mentorship and support"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darkPurple via-purple/20 to-transparent"></div>
            </motion.div>
            
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={viewportOptions}
              transition={fadeInRight.transition}
              className="md:col-span-1 order-2 md:order-3"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6">Mentorship & Network</h3>
              <ul className="space-y-4 mb-8">
                {mentorshipBenefits.map((item, index) => (
                  <motion.li
                    key={item}
                    data-gsap-element
                    initial={fadeInRight.initial}
                    whileInView={fadeInRight.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInRight.transition, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-darkPurple/60 border border-purple/20 rounded-xl hover:border-purple/40 transition-colors"
                  >
                    <Users className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative p-6 bg-gradient-to-br from-purple via-violet to-lightPurple rounded-2xl border border-purple/30 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple/50 to-violet/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-white" />
                    <h4 className="font-display font-bold text-xl text-white">Demo Day</h4>
                  </div>
                  <p className="text-3xl font-display font-bold text-white mb-2">December 15, 2025</p>
                  <p className="text-purple-100 leading-relaxed">
                    Present your startup to a panel of investors and industry leaders
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Startups Join Us */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 bg-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-6 mb-16"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={48} />
            </div>
            <div>
              <h2 
                data-gsap-text
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                Why Startups Join Us?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={viewportOptions}
              transition={fadeInLeft.transition}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Cross-Border Expansion Opportunity
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Building2, text: 'Assistance with UAE incorporation' },
                  { icon: Users, text: 'Mentor matching with industry experts' },
                  { icon: Globe, text: 'Introductions to UAE Startup Ecosystem' },
                  { icon: Award, text: '3-month post-program support for Dubai operations' }
                ].map((item, index) => (
                  <motion.li
                    key={item.text}
                    data-gsap-element
                    initial={fadeInLeft.initial}
                    whileInView={fadeInLeft.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInLeft.transition, delay: index * 0.08 }}
                    className="flex items-start gap-4 p-4 bg-darkPurple/60 border border-purple/20 rounded-xl hover:border-purple/40 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={viewportOptions}
              transition={fadeInRight.transition}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-purple/20 group order-first md:order-last"
            >
              <div 
                data-gsap-parallax
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Startup presentation"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darkPurple via-purple/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Quote */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple via-violet to-lightPurple"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={scaleIn.initial}
            whileInView={scaleIn.animate}
            viewport={viewportOptions}
            transition={scaleInTransition}
            className="text-center"
          >
            <Sparkles className="w-16 h-16 text-white/50 mx-auto mb-8" />
            <p 
              data-gsap-text
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
            >
              WE'RE NOT JUST ACCELERATING IDEAS, WE'RE SHAPING FUTURE FOUNDERS, PRODUCTS, AND ECOSYSTEMS ACROSS INDIA AND THE UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Timelines */}
      <section 
        data-gsap-section
        className="relative py-32 md:py-40 bg-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-6 mb-16"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={48} />
            </div>
            <div>
              <h2 
                data-gsap-text
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              >
                Key Timelines
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              <div className="space-y-6">
                {timelines.map((timeline, index) => (
                  <motion.div
                    key={timeline.milestone}
                    data-gsap-element
                    initial={fadeInLeft.initial}
                    whileInView={fadeInLeft.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInLeft.transition, delay: index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-dark border border-purple/30 rounded-2xl hover:border-purple/60 hover:shadow-xl hover:shadow-purple/20 transition-all duration-300"
                  >
                    <span className="text-xl md:text-2xl font-display font-semibold text-white">
                      {timeline.milestone}
                    </span>
                    <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-purple to-violet bg-clip-text text-transparent group-hover:from-violet group-hover:to-lightPurple transition-all">
                      {timeline.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        data-gsap-section
        className="relative py-32 md:py-40 bg-darkPurple/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="text-center mb-12"
          >
            <h2 
              data-gsap-text
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight"
            >
              Contact
            </h2>
            <div className="flex justify-center mb-8">
              <Elev8AlarmLogo size={72} />
            </div>
            <p className="text-xl md:text-2xl text-gray max-w-2xl mx-auto mb-12 leading-relaxed">
              Ready to transform your startup idea into reality? Get in touch with us to learn more about Elev8 Alpha.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="tel:+916353764766"
                data-magnetic
                initial={scaleIn.initial}
                whileInView={scaleIn.animate}
                viewport={viewportOptions}
                transition={scaleInTransition}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-full hover:border-purple/60 hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 text-white font-semibold backdrop-blur-sm"
              >
                <Phone className="w-6 h-6 text-purple" />
                <span>+91 6353764766</span>
              </motion.a>
              <motion.a
                href="mailto:elev8alpha@evolve8studio.com"
                data-magnetic
                initial={scaleIn.initial}
                whileInView={scaleIn.animate}
                viewport={viewportOptions}
                transition={{ ...scaleInTransition, delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-full hover:border-purple/60 hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 text-white font-semibold backdrop-blur-sm"
              >
                <Mail className="w-6 h-6 text-purple" />
                <span>elev8alpha@evolve8studio.com</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
