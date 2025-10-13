import React from 'react';

interface FlexedArmIconProps {
 className?: string;
}

const FlexedArmIcon: React.FC<FlexedArmIconProps> = ({ className }) => {
 return (
 <svg
 viewBox="0 0 64 64"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className={className}
 >
 {/* Fist/Hand */}
 <ellipse cx="20" cy="26" rx="5" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" />

 {/* Forearm */}
 <path
 d="M 25 26 Q 32 28 36 36"
 stroke="currentColor"
 strokeWidth="3"
 strokeLinecap="round"
 fill="none"
 />

 {/* Upper arm */}
 <path
 d="M 36 36 Q 38 42 34 48"
 stroke="currentColor"
 strokeWidth="3"
 strokeLinecap="round"
 fill="none"
 />

 {/* Bicep muscle bulge */}
 <ellipse
 cx="34"
 cy="32"
 rx="6"
 ry="8"
 stroke="currentColor"
 strokeWidth="1.5"
 fill="none"
 transform="rotate(-25 34 32)"
 />

 {/* Muscle definition lines */}
 <path
 d="M 30 30 Q 32 32 32 35"
 stroke="currentColor"
 strokeWidth="1"
 strokeLinecap="round"
 fill="none"
 opacity="0.6"
 />
 <path
 d="M 36 34 Q 38 36 38 39"
 stroke="currentColor"
 strokeWidth="1"
 strokeLinecap="round"
 fill="none"
 opacity="0.6"
 />
 </svg>
 );
};

export default FlexedArmIcon;
