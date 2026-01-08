'use client';

import React from 'react';

export const Logo = ({ className = '', isFooter = false, showTagline = false }: { className?: string; isFooter?: boolean; showTagline?: boolean }) => {
  const textColor = isFooter ? 'text-white' : 'text-forest';
  
  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Main Logo - EV8LVE */}
      <div className="flex items-baseline">
        <span className={`text-2xl md:text-3xl font-display font-bold ${textColor}`}>EV</span>
        <span className="text-2xl md:text-3xl font-display font-bold text-[#9333EA] leading-none">8</span>
        <span className={`text-2xl md:text-3xl font-display font-bold ${textColor}`}>LVE</span>
      </div>
      
      {/* STUDIO - aligned with LVE by using margin-left to match EV8 width */}
      <div className="flex items-baseline">
        <span className="inline-block w-[2.5rem] md:w-[3rem]"></span>
        <span className={`text-[10px] md:text-xs font-display font-semibold ${textColor} tracking-wider uppercase`}>
          STUDIO
        </span>
      </div>
      
      {/* Optional Tagline */}
      {showTagline && (
        <div className={`text-[8px] md:text-[10px] font-display font-medium ${textColor} mt-2 tracking-widest uppercase`}>
          BRANDING • WEB • MARKETING
        </div>
      )}
    </div>
  );
};

