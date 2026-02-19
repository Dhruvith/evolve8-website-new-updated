'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion, useReducedMotion } from 'framer-motion';
import { Elev8AlarmLogo } from '@/components/Elev8AlarmLogo';
import { Button } from '@/components/Button';
import { Scene3D } from '@/components/Scene3D';
import { GSAPScrollAnimations } from '@/components/GSAPScrollAnimations';
import Image from 'next/image';
import {
  Users,
  TrendingUp,
  Globe,
  Briefcase,
  ArrowRight,
  CheckCircle2,
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
    // Hero title - ensure it's visible
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
    }

    // Magnetic effect for buttons (only if GSAP is available)
    if (typeof window !== 'undefined' && gsap) {
      try {
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
      } catch (error) {
        // Ignore magnetic effect errors
      }
    }

    return () => {
      if (ScrollTrigger) {
        try {
          ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, [shouldReduceMotion]);

  // Enhanced animation variants - content visible by default
  const fadeInUp = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const fadeInLeft = {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const fadeInRight = {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const scaleIn = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1 }
  };

  const scaleInTransition = { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] };

  const staggerContainer = {
    initial: { opacity: 1 },
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
    'FinTech',
    'EdTech',
    'SaaS',
    'PaaS',
    'GreenTech & Climate Tech',
    'AgriTech',
    'E-commerce & Marketplaces',
    'Artificial Intelligence (AI)',
    'HealthTech',
    'Software & IT Services'
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'MVP Development at Zero Upfront Cost',
      description: 'We design and develop your MVP from the ground up — focusing on usability, scalability, and speed to market.',
      gradient: 'from-purple to-violet'
    },
    {
      icon: DollarSign,
      title: 'Equity-Based Partnership',
      description: 'Instead of charging heavy development fees, we collaborate on a nominal equity basis, ensuring aligned incentives and long-term commitment.',
      gradient: 'from-violet to-lightPurple'
    },
    {
      icon: Users,
      title: '30+ Hours of Expert Mentorship',
      description: 'Founders receive structured mentorship across product & UX strategy, technology & architecture, market validation, go-to-market planning, and scaling & growth readiness.',
      gradient: 'from-lightPurple to-purple'
    },
    {
      icon: Briefcase,
      title: 'Co-Building With Evolve8 Studio',
      description: 'We don\'t hand off projects. We co-build with founders, working as an extended product and technology team.',
      gradient: 'from-purple to-violet'
    },
    {
      icon: Globe,
      title: 'Investor & Ecosystem Access',
      description: 'Selected startups gain access to Evolve8 Studio\'s investor and partner network, strategic introductions, and guidance on pitch readiness and fundraising pathways.',
      gradient: 'from-violet to-lightPurple'
    }
  ];

  const programSteps = [
    {
      number: '01',
      title: 'Apply & Register',
      description: 'Founders submit their startup details through the Elev8 Startups application.',
      colorClass: 'text-purple',
      bgClass: 'from-purple/20'
    },
    {
      number: '02',
      title: 'Screening & Shortlisting',
      description: 'We carefully evaluate startups based on founder commitment, problem clarity, market potential, execution mindset, and strategic fit with Evolve8 Studio.',
      colorClass: 'text-violet',
      bgClass: 'from-violet/20'
    },
    {
      number: '03',
      title: 'Onboarding to Elev8 Startups',
      description: 'Shortlisted startups are onboarded into the program and aligned on scope, equity, and milestones.',
      colorClass: 'text-lightPurple',
      bgClass: 'from-lightPurple/20'
    },
    {
      number: '04',
      title: 'Build, Launch & Prepare to Scale',
      description: 'We collaboratively build the MVP, launch it to users, and prepare the startup for traction and investor conversations.',
      colorClass: 'text-purple',
      bgClass: 'from-purple/20'
    }
  ];

  // Form State
  const [activeTab, setActiveTab] = useState('section1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    companyName: '',
    companyWebsite: '',
    countryCity: '',
    stage: '',
    duration: '',
    elevatorPitch: '',
    problem: '',
    market: '',
    productDesc: '',
    traction: '',
    monthlyMetrics: '',
    supportType: '',
    techPreference: '',
    equityOpen: '',
    equityAmount: '',
    expectations: ''
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setSubmitted(true);
      window.history.replaceState({}, '', window.location.pathname + '#apply-now');
      // Scroll to form
      const formElement = document.getElementById('apply-now');
      if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
  };


  return (
    <main className="min-h-screen bg-dark overflow-hidden relative">
      <GSAPScrollAnimations />
      <Scene3D />
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section - Premium Design */}
        <section
          ref={heroRef}
          data-gsap-section
          className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden"
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

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
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
                Elev8 Startups
              </h1>

              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block mb-8"
              >
                <div className="relative px-8 py-4 bg-gradient-to-r from-purple/20 via-violet/20 to-lightPurple/20 backdrop-blur-md border border-purple/30 rounded-full">
                  <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white">
                    A Co-Build Program by Evolve8 Studio
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple via-violet to-lightPurple opacity-20 rounded-full blur-xl"></div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl text-gray mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Build, Launch & Scale Your MVP — With Partnership, Not Upfront Cost
              </motion.p>

              <motion.div
                initial={{ opacity: 1, y: 0 }}
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
                  Apply to Elev8 Startups
                  <ArrowRight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" size={24} />
                </Button>
                <Button
                  data-magnetic
                  onClick={() => {
                    const element = document.getElementById('what-is-elev8');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
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
            initial={{ opacity: 1 }}
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

        {/* What Is Elev8 Startups */}
        <section
          id="what-is-elev8"
          data-gsap-section
          className="relative z-10 py-32 md:py-40 bg-dark"
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
                  What Is Elev8 Startups?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
              </div>
            </motion.div>
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportOptions}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="max-w-4xl space-y-6"
            >
              <p className="text-xl md:text-2xl text-gray leading-relaxed">
                Elev8 Startups is a co-build program where Evolve8 Studio works as a venture and technology partner, not a service provider.
              </p>
              <p className="text-xl md:text-2xl text-gray leading-relaxed">
                We collaborate with a small group of selected startups in each cycle, co-building their product, shaping strategy, and supporting them beyond MVP.
              </p>
              <p className="text-xl md:text-2xl text-gray leading-relaxed">
                In each cycle, we select up to 8 startups and partner with them to:
              </p>
              <ul className="space-y-4 ml-6">
                {[
                  'Build a production-ready MVP',
                  'Refine product and technology strategy',
                  'Receive structured mentorship (30+ hours)',
                  'Prepare for growth, traction, and investor conversations'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    data-gsap-element
                    initial={fadeInLeft.initial}
                    whileInView={fadeInLeft.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInLeft.transition, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-xl text-gray"
                  >
                    <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-xl md:text-2xl text-gray leading-relaxed mt-6">
                In return, we collaborate on a nominal equity basis, aligning our success with yours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Startup Sectors We Support */}
        <section
          data-gsap-section
          className="relative z-10 py-32 md:py-40 bg-darkPurple/30"
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
                Startup Sectors We Support
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-gray max-w-4xl leading-relaxed">
                We actively work with startups across the following sectors. If your startup operates at the intersection of technology and scalability, we encourage you to apply.
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

        {/* What Selected Startups Receive */}
        <section
          data-gsap-section
          className="relative z-10 py-32 md:py-40 bg-dark"
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
                  What Selected Startups Receive
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
                    alt="Startup benefits"
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
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    data-gsap-element
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInUp.transition, delay: index * 0.06 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group relative p-6 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-2xl hover:border-purple/60 hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative flex gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-xl text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* How the Program Works */}
        <section
          data-gsap-section
          className="relative z-10 py-32 md:py-40 bg-darkPurple/30"
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
                  How the Program Works
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full"></div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  data-gsap-element
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={viewportOptions}
                  transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-3xl hover:border-purple/60 hover:shadow-2xl hover:shadow-purple/30 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.bgClass} to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`text-7xl font-display font-bold ${step.colorClass}/20 mb-4 group-hover:${step.colorClass}/30 transition-colors`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section
          data-gsap-section
          className="relative z-10 py-32 md:py-40 bg-dark"
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
                  Who Should Apply
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
                <p className="text-xl md:text-2xl text-gray leading-relaxed mb-8">
                  Elev8 Startups is ideal for:
                </p>
                <ul className="space-y-4">
                  {[
                    'Early-stage founders at idea or validation stage',
                    'Non-technical or partially technical founding teams',
                    'Startups looking for a long-term tech & product partner',
                    'Founders who want to build fast without burning capital',
                    'Teams serious about execution, ownership, and scale'
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      data-gsap-element
                      initial={fadeInLeft.initial}
                      whileInView={fadeInLeft.animate}
                      viewport={viewportOptions}
                      transition={{ ...fadeInLeft.transition, delay: index * 0.08 }}
                      className="flex items-start gap-4 p-4 bg-darkPurple/60 border border-purple/20 rounded-xl hover:border-purple/40 transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray leading-relaxed text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-xl text-gray leading-relaxed mt-8 italic">
                  This program is designed for founders seeking a long-term partner, not short-term outsourcing.
                </p>
              </motion.div>

              <motion.div
                initial={fadeInRight.initial}
                whileInView={fadeInRight.animate}
                viewport={viewportOptions}
                transition={fadeInRight.transition}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-purple/20 group"
              >
                <div
                  data-gsap-parallax
                  className="absolute inset-0"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Founders and startups"
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


        {/* Why Startups Choose Evolve8 Studio */}
        <section
          data-gsap-section
          className="relative z-10 py-32 md:py-40 bg-dark"
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
                  Why Startups Choose Evolve8 Studio
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
                {[
                  {
                    icon: Rocket,
                    title: 'Startup-First DNA',
                    text: 'We are built for startups — speed, adaptability, and execution drive everything we do.'
                  },
                  {
                    icon: Users,
                    title: 'We Act as Partners, Not Vendors',
                    text: 'Our success depends on your success. That\'s why we invest our time, expertise, and technology alongside you.'
                  },
                  {
                    icon: Briefcase,
                    title: 'Proven Venture Studio Approach',
                    text: 'Evolve8 Studio combines product building, mentoring, and venture thinking under one roof.'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Long-Term Vision',
                    text: 'We don\'t stop at MVPs. We help startups think long-term — product roadmap, scalability, and funding readiness.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    data-gsap-element
                    initial={fadeInLeft.initial}
                    whileInView={fadeInLeft.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInLeft.transition, delay: index * 0.08 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group p-6 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-2xl hover:border-purple/60 hover:shadow-xl hover:shadow-purple/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-violet p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-xl text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={fadeInRight.initial}
                whileInView={fadeInRight.animate}
                viewport={viewportOptions}
                transition={fadeInRight.transition}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-purple/20 group"
              >
                <div
                  data-gsap-parallax
                  className="absolute inset-0"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Evolve8 Studio partnership"
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

        {/* Selection Is Limited */}
        <section
          data-gsap-section
          className="relative z-10 py-32 md:py-40 bg-darkPurple/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportOptions}
              transition={fadeInUp.transition}
              className="text-center max-w-4xl mx-auto"
            >
              <h2
                data-gsap-text
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight"
              >
                Selection Is Limited
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple to-violet rounded-full mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-gray leading-relaxed mb-8">
                We intentionally limit each cycle to 8 startups to ensure:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  'Deep involvement',
                  'High-quality execution',
                  'Meaningful mentorship',
                  'Strong partnership alignment'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    data-gsap-element
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-darkPurple/90 to-darkPurple/60 border border-purple/30 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0" />
                      <span className="text-gray text-lg">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xl text-gray leading-relaxed italic">
                Only startups that meet our criteria and align with our values are selected.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Manifesto Quote */}
        <section
          data-gsap-section
          className="relative z-10 py-32 md:py-40 overflow-hidden"
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
                We don't just help startups build products. We partner with founders to build companies.
              </p>
            </motion.div>
          </div>
        </section>


        {/* Apply to Elev8 Startups */}
        <section
          id="apply-now"
          data-gsap-section
          className="relative z-10 py-32 md:py-40 bg-darkPurple/30"
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
                Apply to Elev8 Startups
              </h2>
              {/* Intro & Application Form Logic */}
              {!showForm && !submitted && (
                <>
                  <div className="flex justify-center mb-8">
                    <Elev8AlarmLogo size={72} />
                  </div>
                  <p className="text-xl md:text-2xl text-gray max-w-3xl mx-auto mb-8 leading-relaxed">
                    If you are ready to:
                  </p>
                  <ul className="space-y-4 mb-12 max-w-2xl mx-auto text-left">
                    {[
                      'Build your MVP without upfront development costs',
                      'Partner with a committed venture studio',
                      'Receive expert mentorship and ecosystem access',
                      'Take your startup from idea to execution'
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3 text-xl text-gray"
                      >
                        <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Button
                      data-magnetic
                      onClick={() => setShowForm(true)}
                      variant="primary"
                      className="group text-lg px-12 py-6 bg-gradient-to-r from-purple to-violet shadow-2xl shadow-purple/50 hover:shadow-purple/70 hover:scale-105 transition-all duration-300"
                    >
                      Apply to the Elev8 Startups Program today
                      <ArrowRight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" size={24} />
                    </Button>
                  </motion.div>
                </>
              )}

              {(showForm || submitted) && (
                !submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto bg-darkPurple/60 border border-purple/30 rounded-3xl p-6 md:p-10 backdrop-blur-md"
                  >
                    <form
                      action="https://formsubmit.co/startups@evolve8studio.in"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-12 text-left"
                    >
                      <input type="hidden" name="_subject" value="New Elev8 Startups Application" />
                      <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/elev8-startups?success=true`} />
                      <input type="hidden" name="_captcha" value="true" />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_autoresponse" value="Thank you for your application to the Elev8 Startups Program! We will review your submission and get back to you within 24-48 hours." />

                      {/* Section 1: Contact Info */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white border-b border-purple/30 pb-4">
                          Section 1 — Contact Info
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">Full Name *</label>
                            <input
                              type="text"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">Phone / WhatsApp *</label>
                            <input
                              type="text"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">LinkedIn Profile URL *</label>
                            <input
                              type="url"
                              name="linkedin"
                              required
                              value={formData.linkedin}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">Company Name *</label>
                            <input
                              type="text"
                              name="companyName"
                              required
                              value={formData.companyName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">Company Website / Product Link (if any)</label>
                            <input
                              type="url"
                              name="companyWebsite"
                              value={formData.companyWebsite}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray mb-2">Country & City *</label>
                            <input
                              type="text"
                              name="countryCity"
                              required
                              value={formData.countryCity}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Section 2: Startup Stage */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white border-b border-purple/30 pb-4">
                          🚀 Section 2 — Startup Stage
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">What stage are you at? *</label>
                            <select
                              name="stage"
                              required
                              value={formData.stage}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            >
                              <option value="">Select Stage...</option>
                              <option value="Idea">Idea</option>
                              <option value="Validation">Validation</option>
                              <option value="Pre-MVP">Pre-MVP</option>
                              <option value="MVP live">MVP live</option>
                              <option value="Revenue generating">Revenue generating</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">How long have you been working on this startup? *</label>
                            <select
                              name="duration"
                              required
                              value={formData.duration}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            >
                              <option value="">Select Duration...</option>
                              <option value="< 3 months">&lt; 3 months</option>
                              <option value="3–6 months">3–6 months</option>
                              <option value="6–12 months">6–12 months</option>
                              <option value="> 12 months">&gt; 12 months</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Section 3: Problem & Solution */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white border-b border-purple/30 pb-4">
                          🔍 Section 3 — Problem & Solution
                        </h3>

                        <div>
                          <label className="block text-sm font-medium text-gray mb-2">Elevator pitch (2–3 sentences) *</label>
                          <textarea
                            name="elevatorPitch"
                            required
                            rows={3}
                            value={formData.elevatorPitch}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray mb-2">What problem are you solving and for whom?</label>
                          <textarea
                            name="problem"
                            rows={3}
                            value={formData.problem}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray mb-2">Which market / industry are you targeting? *</label>
                          <select
                            name="market"
                            required
                            value={formData.market}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                          >
                            <option value="">Select Market...</option>
                            <option value="FinTech">FinTech</option>
                            <option value="EdTech">EdTech</option>
                            <option value="SaaS">SaaS</option>
                            <option value="PaaS">PaaS</option>
                            <option value="GreenTech / Climate Tech">GreenTech / Climate Tech</option>
                            <option value="AgriTech">AgriTech</option>
                            <option value="E-commerce / Marketplaces">E-commerce / Marketplaces</option>
                            <option value="Artificial Intelligence (AI)">Artificial Intelligence (AI)</option>
                            <option value="HealthTech">HealthTech</option>
                            <option value="Software / IT">Software / IT</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray mb-2">Describe your product / solution *</label>
                          <textarea
                            name="productDesc"
                            required
                            rows={4}
                            placeholder="Brief text..."
                            value={formData.productDesc}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Section 4: Traction & Metrics */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white border-b border-purple/30 pb-4">
                          🎯 Section 4 — Traction & Metrics
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">Do you have users / pilots / revenue? *</label>
                            <select
                              name="traction"
                              required
                              value={formData.traction}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            >
                              <option value="">Select Status...</option>
                              <option value="No users yet">No users yet</option>
                              <option value="Early testers">Early testers</option>
                              <option value="Active users">Active users</option>
                              <option value="Revenue customers">Revenue customers</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">Monthly users or revenue (optional)</label>
                            <input
                              type="text"
                              name="monthlyMetrics"
                              value={formData.monthlyMetrics}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Section 5: Development Needs */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white border-b border-purple/30 pb-4">
                          ⚙️ Section 5 — Development Needs
                        </h3>

                        <div>
                          <label className="block text-sm font-medium text-gray mb-2">What type of support do you need? *</label>
                          <select
                            name="supportType"
                            required
                            value={formData.supportType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                          >
                            <option value="">Select Support Type...</option>
                            <option value="MVP development">MVP development</option>
                            <option value="Product design / UX">Product design / UX</option>
                            <option value="Prototype only">Prototype only</option>
                            <option value="Tech co-founder support">Tech co-founder support</option>
                            <option value="Growth / marketing support">Growth / marketing support</option>
                            <option value="Pitch / investor support">Pitch / investor support</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray mb-2">Describe technology or platform preference (optional)</label>
                          <input
                            type="text"
                            name="techPreference"
                            placeholder="web, mobile, AI, blockchain, etc."
                            value={formData.techPreference}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Section 6: Program Fit & Commitment */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white border-b border-purple/30 pb-4">
                          🤝 Section 6 — Program Fit & Commitment
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">Are you open to equity participation? *</label>
                            <select
                              name="equityOpen"
                              required
                              value={formData.equityOpen}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            >
                              <option value="">Select Option...</option>
                              <option value="Yes">Yes</option>
                              <option value="Maybe">Maybe</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray mb-2">If yes / maybe — how much equity are you comfortable offering?</label>
                            <input
                              type="text"
                              name="equityAmount"
                              value={formData.equityAmount}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray mb-2">What are your expectations from Elev8 Program? *</label>
                          <textarea
                            name="expectations"
                            required
                            rows={3}
                            value={formData.expectations}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-purple/30 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="pt-6">
                        <Button
                          type="submit"
                          variant="primary"
                          className="w-full group text-lg py-4"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            'Submitting Application...'
                          ) : (
                            <>
                              Submit Application
                              <ArrowRight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" size={24} />
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
                    className="max-w-2xl mx-auto text-center py-12 bg-darkPurple/60 border border-purple/30 rounded-3xl p-10 backdrop-blur-md"
                  >
                    <div className="w-24 h-24 rounded-full bg-purple/20 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12 text-purple" />
                    </div>
                    <h2 className="text-4xl font-display font-bold text-white mb-6">Application Submitted!</h2>
                    <p className="text-xl text-gray mb-10 leading-relaxed">
                      Thank you for applying to Elev8 Startups. We have received your application and will review it meticulously. Expect to hear from us within 24-48 hours.
                    </p>
                    <Button
                      onClick={() => window.location.href = '/'}
                      variant="primary"
                      className="px-10 py-4"
                    >
                      Return to Home
                    </Button>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
