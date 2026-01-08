'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Award, Eye, Rocket, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Target, title: 'Transparency', description: 'Clear communication and honest feedback' },
    { icon: Award, title: 'Discipline', description: 'Structured processes and reliable execution' },
    { icon: Heart, title: 'Founder empathy', description: 'Understanding the startup journey' },
    { icon: Eye, title: 'Outcome alignment', description: 'We succeed when you succeed' },
    { icon: Rocket, title: 'Long-term thinking', description: 'Building for sustainable growth' },
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
              The Execution Engine for Early-Stage Startups
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray leading-relaxed">
                <p>
                  <strong className="text-white">Evolve8 was built by founders for founders.</strong>
                </p>
                <p>
                  Harsh Patel started Evolve8 after experiencing firsthand how difficult it is to find a reliable, strategic, and committed technology partner at the early stages of a startup.
                </p>
                <p>
                  The previous company failed due to lack of:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Budget planning</li>
                  <li>Sales discipline</li>
                  <li>Financial visibility</li>
                </ul>
                <p className="text-white font-semibold">
                  Evolve8 is designed the opposite way:
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-purple text-white rounded-full font-medium shadow-lg shadow-purple/50">Structured</span>
                  <span className="px-6 py-3 bg-purple text-white rounded-full font-medium shadow-lg shadow-purple/50">Transparent</span>
                  <span className="px-6 py-3 bg-purple text-white rounded-full font-medium shadow-lg shadow-purple/50">Disciplined</span>
                  <span className="px-6 py-3 bg-purple text-white rounded-full font-medium shadow-lg shadow-purple/50">Founder-aligned</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-6">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray leading-relaxed mb-8">
              <p>
                Evolve8 Studio is a product and technology venture studio focused on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Helping startups build MVPs</li>
                <li>Partnering deeply with founders</li>
                <li>Supporting India and UAE ecosystems</li>
                <li>Building internal high-impact tools</li>
              </ul>
              <p className="text-white font-semibold mt-6">
                We are not freelancers or contractors.
              </p>
              <p className="text-gray">We are:</p>
              <div className="grid md:grid-cols-4 gap-4 mt-4">
                {['Engineers', 'Designers', 'Strategists', 'Startup partners'].map((role) => (
                  <div key={role} className="p-4 bg-darkPurple/80 border border-purple/30 rounded-xl text-center">
                    <p className="font-semibold text-white">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-darkPurple/80 border border-purple/30 rounded-3xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Eye className="w-8 h-8 text-purple" />
                <h3 className="text-2xl font-display font-bold text-white">Vision</h3>
              </div>
              <p className="text-lg text-gray leading-relaxed">
                To help build the next wave of impactful startups and partner with founders to create global category leaders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-darkPurple/80 border border-purple/30 rounded-3xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="w-8 h-8 text-purple" />
                <h3 className="text-2xl font-display font-bold text-white">Mission</h3>
              </div>
              <p className="text-lg text-gray leading-relaxed">
                To convert early ideas into scalable MVPs and products with speed, transparency, and long-term collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-darkPurple via-purple/20 to-darkPurple text-white border-t border-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Core Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-purple/20 border border-purple/30 rounded-2xl backdrop-blur-sm text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-purple/30">
                      <IconComponent className="w-8 h-8 text-purple" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
                  <p className="text-gray text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

