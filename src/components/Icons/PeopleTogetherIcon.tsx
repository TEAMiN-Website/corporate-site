import React from 'react';

interface PeopleTogetherIconProps {
 className?: string;
}

const PeopleTogetherIcon: React.FC<PeopleTogetherIconProps> = ({ className }) => {
 return (
 <svg
 viewBox="0 0 64 64"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className={className}
 >
 {/* Left person - Head */}
 <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
 {/* Left person - Body */}
 <line x1="16" y1="24" x2="16" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 {/* Left person - Legs */}
 <line x1="16" y1="38" x2="12" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 <line x1="16" y1="38" x2="20" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 {/* Left person - Right arm reaching to center */}
 <path d="M 16 28 L 24 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

 {/* Center person - Head */}
 <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
 {/* Center person - Body */}
 <line x1="32" y1="22" x2="32" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 {/* Center person - Legs */}
 <line x1="32" y1="38" x2="28" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 <line x1="32" y1="38" x2="36" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 {/* Center person - Left arm to left person */}
 <path d="M 32 26 L 24 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 {/* Center person - Right arm to right person */}
 <path d="M 32 26 L 40 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

 {/* Right person - Head */}
 <circle cx="48" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
 {/* Right person - Body */}
 <line x1="48" y1="24" x2="48" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 {/* Right person - Legs */}
 <line x1="48" y1="38" x2="44" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 <line x1="48" y1="38" x2="52" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 {/* Right person - Left arm reaching to center */}
 <path d="M 48 28 L 40 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 </svg>
 );
};

export default PeopleTogetherIcon;
