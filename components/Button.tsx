'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: disabled 
      ? 'bg-purple/50 text-white/50 cursor-not-allowed' 
      : 'bg-purple text-white hover:bg-lightPurple hover:-translate-y-1 focus:ring-purple shadow-md hover:shadow-lg shadow-purple/50',
    outline: disabled
      ? 'border-2 border-purple/50 text-purple/50 cursor-not-allowed'
      : 'border-2 border-purple text-purple hover:bg-purple hover:text-white focus:ring-purple',
    ghost: disabled
      ? 'text-white/50 cursor-not-allowed'
      : 'text-white hover:bg-purple/10 focus:ring-purple',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { y: 0 }}
    >
      {children}
    </motion.button>
  );
};

