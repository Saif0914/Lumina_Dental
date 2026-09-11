import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = false,
}) => {
  const isLight = variant === 'light';

  // Dimension scaling
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const textClass =
    size === 'sm'
      ? 'text-lg'
      : size === 'lg'
      ? 'text-2xl sm:text-3xl'
      : 'text-xl sm:text-2xl';

  return (
    <div className="flex items-center space-x-2.5 select-none group">
      {/* Bespoke Sculpted Tooth & Radiance Emblem */}
      <div className={`relative ${iconSize} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            {/* Primary gradient: cyan to rich ocean blue */}
            <linearGradient id="luminaGrad1" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Accent gradient: teal radiance */}
            <linearGradient id="luminaGrad2" x1="12" y1="8" x2="40" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>

          {/* Stylized Left Cusp / Curved Enamel Ribbon */}
          <path
            d="M24 6C17.5 6 12 10.8 11.2 17.2C10.5 22.8 13.8 28.5 16.5 34.2C18.2 37.8 19.5 42 22 42C23.2 42 23.8 40.5 24 38.8C24.4 35.5 24.8 32 26 32"
            stroke="url(#luminaGrad1)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stylized Right Cusp / Sweeping Modern Arch */}
          <path
            d="M24 6C30.5 6 36 10.8 36.8 17.2C37.5 22.8 34.2 28.5 31.5 34.2C29.8 37.8 28.5 42 26 42C24.8 42 24.2 40.5 24 38.8"
            stroke="url(#luminaGrad2)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dynamic Enamel Bridge / Smile Contour */}
          <path
            d="M17 19C21 23 27 23 31 19"
            stroke="url(#luminaGrad1)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Radiant Diamond Sparkle on top-right cusp */}
          <path
            d="M38 9L39.2 12.8L43 14L39.2 15.2L38 19L36.8 15.2L33 14L36.8 12.8L38 9Z"
            fill="#38bdf8"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <span className={`${textClass} font-extrabold tracking-tight font-heading leading-none`}>
          <span className={isLight ? 'text-white' : 'text-[#0f172a]'}>Lumina</span>
          <span className="text-[#4fa8be] ml-0.5">Dental</span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] font-semibold tracking-[0.2em] uppercase mt-0.5 ${
              isLight ? 'text-gray-400' : 'text-gray-400'
            }`}
          >
            Studio & Aesthetics
          </span>
        )}
      </div>
    </div>
  );
};
