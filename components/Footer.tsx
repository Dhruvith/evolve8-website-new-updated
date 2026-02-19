'use client';

import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Products', href: '/products' },
      { name: 'Apply', href: '/apply' },
    ],
    services: [
      { name: 'MVP Sprint Program', href: '/services' },
      { name: 'Custom App Development', href: '/services' },
      { name: 'Web Development', href: '/services' },
      { name: 'Scaling Support', href: '/services' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/evolve8studio/posts/?feedView=all', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/evolve8studio/', label: 'Instagram' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-darkPurple border-t border-purple/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo isFooter={true} />
            <p className="text-white/80 text-sm leading-relaxed">
              Partnering With Founders From Idea to Impact
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple/20 hover:bg-purple transition-colors flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-white/80 hover:text-purple transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-white/80 hover:text-purple transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Locations</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={16} className="text-purple" />
                <span className="text-sm">India</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={16} className="text-purple" />
                <span className="text-sm">Dubai</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={16} className="text-purple" />
                <span className="text-sm">USA</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <a
                href="mailto:hello@evolve8studio.in"
                className="flex items-center gap-2 text-white/80 hover:text-purple transition-colors text-sm"
              >
                <Mail size={16} />
                hello@evolve8studio.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="text-center mb-6">
            <p className="text-white/90 text-lg font-display font-semibold">
              Evolve8 Studio — Partnering With Founders From Idea to Impact
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Evolve8 Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-purple transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

