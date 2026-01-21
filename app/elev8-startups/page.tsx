'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Elev8AlarmLogo } from '@/components/Elev8AlarmLogo';
import { Button } from '@/components/Button';
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
  Lightbulb,
  Rocket,
  DollarSign
} from 'lucide-react';

export default function Elev8StartupsPage() {
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
      description: 'Convert early-stage concepts into functional, market-ready products'
    },
    {
      icon: Globe,
      title: 'Cross-Border Growth',
      description: 'Foster expansion between India and UAE markets'
    },
    {
      icon: Briefcase,
      title: 'Resource Access',
      description: 'Provide comprehensive startup resources and infrastructure'
    },
    {
      icon: Target,
      title: 'Product-Market Fit',
      description: 'Build strong alignment between products and target markets'
    },
    {
      icon: Building2,
      title: 'Sustainable Business Models',
      description: 'Establish viable, scalable business foundations'
    },
    {
      icon: DollarSign,
      title: 'Early-Stage Funding',
      description: 'Secure initial investment and funding opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Market Expansion',
      description: 'Expand into new markets and customer segments'
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
      ]
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
      ]
    },
    {
      number: '03',
      title: 'Growth & Funding Prep',
      weeks: 'Week 7-10',
      items: [
        'Go-to-market strategy',
        'Investor deck preparation',
        'MVP refinement'
      ]
    },
    {
      number: '04',
      title: 'Demo Day & Launch',
      weeks: 'Week 11-12',
      items: [
        'Investor pitching',
        'Demo Day with panel',
        'Legal, branding, and marketing support'
      ]
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-white via-purple/5 to-violet/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333EA' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Elev8AlarmLogo size={56} />
              <div className="text-left">
                <h1 className="text-6xl md:text-8xl font-display font-bold text-gray-900 mb-2">
                  Elev8 Alpha
                </h1>
                <div className="bg-gradient-to-r from-purple via-violet to-pink-400 px-6 py-3 rounded-full inline-block">
                  <p className="text-2xl md:text-3xl font-display font-bold text-white">
                    Startup Accelerator by Evolve8 Studio
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Evolve8 Studio */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6 mb-8"
          >
            <Elev8AlarmLogo size={40} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              About Evolve8 Studio
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Evolve8 Studio is a Dubai-based Venture Studio focused on empowering startups. 
              We provide comprehensive support in MVP development, business modeling, branding, 
              funding, and market expansion, with a strong focus on India and UAE markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Program Overview
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl leading-relaxed mb-8">
              Elev8 Alpha is a <strong>12-week hybrid accelerator program</strong> designed for 
              tech startups. With a physical presence in Dubai/UAE and digital reach across UAE, 
              we provide full startup transformation—from idea to Alpha.
            </p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple to-violet text-white rounded-full font-semibold shadow-lg"
                >
                  {sector}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6 mb-12"
          >
            <Elev8AlarmLogo size={40} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Objectives
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Target and objectives"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {objectives.map((obj, index) => (
                <motion.div
                  key={obj.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-purple/5 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple to-violet flex items-center justify-center">
                    <obj.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-1">
                      {obj.title}
                    </h3>
                    <p className="text-gray-600">{obj.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elev8 Alpha Structure */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple/10 via-violet/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6 mb-16"
          >
            <Elev8AlarmLogo size={40} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Elev8 Alpha Structure
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="text-6xl font-display font-bold text-purple/20 mb-4">
                  {phase.number}
                </div>
                <div className="text-sm font-semibold text-purple mb-2">{phase.weeks}</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Masterclass Sessions */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6 mb-12"
          >
            <Elev8AlarmLogo size={40} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              10 Masterclass Sessions
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Masterclass sessions"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {masterclasses.map((session, index) => (
                <motion.div
                  key={session.week}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl hover:bg-purple/5 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple to-violet flex items-center justify-center text-white font-display font-bold text-xl">
                    {session.week}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-gray-900">
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
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6 mb-12"
          >
            <Elev8AlarmLogo size={40} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Startup Support & Deliverables
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Deliverables
              </h3>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                alt="Mentorship and support"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Mentorship & Network Access
              </h3>
              <ul className="space-y-4 mb-8">
                {mentorshipBenefits.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Users className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-purple to-violet p-6 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6" />
                  <h4 className="font-display font-bold text-xl">Demo Day</h4>
                </div>
                <p className="text-2xl font-display font-bold mb-2">December 15, 2025</p>
                <p className="text-purple-100">
                  Present your startup to a panel of investors and industry leaders
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Startups Join Us */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6 mb-12"
          >
            <Elev8AlarmLogo size={40} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Why Startups Join Us?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Cross-Border Expansion Opportunity
              </h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <Building2 className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Assistance with UAE incorporation</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Users className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mentor matching with industry experts</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <Globe className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Introductions to UAE Startup Ecosystem</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <Award className="w-6 h-6 text-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">3-month post-program support for Dubai operations</span>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Startup presentation"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Quote */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple via-violet to-pink-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              WE'RE NOT JUST ACCELERATING IDEAS, WE'RE SHAPING FUTURE FOUNDERS, PRODUCTS, AND ECOSYSTEMS ACROSS INDIA AND THE UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Timelines */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6 mb-12"
          >
            <Elev8AlarmLogo size={40} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Key Timelines
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {timelines.map((timeline, index) => (
                  <motion.div
                    key={timeline.milestone}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-6 bg-white rounded-xl border-l-4 border-purple hover:shadow-md transition-shadow"
                  >
                    <span className="text-xl font-display font-semibold text-gray-900">
                      {timeline.milestone}
                    </span>
                    <span className="text-lg font-semibold text-purple">
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
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
              Contact
            </h2>
            <div className="flex justify-center mb-8">
              <Elev8AlarmLogo size={80} />
            </div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Ready to transform your startup idea into reality? Get in touch with us to learn more about Elev8 Alpha.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="tel:+916353764766"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-900 font-semibold"
              >
                <Phone className="w-5 h-5 text-purple" />
                <span>+91 6353764766</span>
              </motion.a>
              <motion.a
                href="mailto:elev8alpha@evolve8studio.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-900 font-semibold"
              >
                <Mail className="w-5 h-5 text-purple" />
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
