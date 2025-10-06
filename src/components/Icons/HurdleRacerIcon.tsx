import React from 'react';

interface HurdleRacerIconProps {
  className?: string;
}

const HurdleRacerIcon: React.FC<HurdleRacerIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hurdle */}
      <rect x="8" y="42" width="48" height="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="10" y="44" width="2" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="52" y="44" width="2" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Athlete - Head */}
      <circle cx="38" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Athlete - Body leaning forward */}
      <line x1="38" y1="20" x2="28" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Athlete - Front arm extended */}
      <line x1="28" y1="26" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Athlete - Back arm */}
      <line x1="30" y1="28" x2="38" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Athlete - Leading leg (jumping over hurdle) */}
      <path d="M 28 32 L 20 36 L 12 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Athlete - Trailing leg */}
      <path d="M 30 32 L 35 28 L 42 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Motion lines for speed */}
      <line x1="44" y1="18" x2="50" y2="16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="44" y1="22" x2="52" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
};

export default HurdleRacerIcon;
