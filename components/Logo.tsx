'use client';

import React from 'react';

export const Logo = ({ className = '', isFooter = false, showTagline = false }: { className?: string; isFooter?: boolean; showTagline?: boolean }) => {
  const textColor = isFooter ? 'text-white' : 'text-white';
  
  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Main Logo - EV8LVE */}
      <div className="flex items-baseline">
        <span className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold ${textColor} tracking-tight`}>EV</span>
        <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-purple leading-none tracking-tight">8</span>
        <span className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold ${textColor} tracking-tight`}>LVE</span>
      </div>
      
      {/* STUDIO - aligned with LVE by using margin-left to match EV8 width */}
      <div className="flex items-baseline">
        <span className="inline-block w-[3.5rem] md:w-[4.5rem] lg:w-[5.5rem]"></span>
        <span className={`text-xs md:text-sm lg:text-base font-display font-semibold ${textColor} tracking-wider uppercase`}>
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

