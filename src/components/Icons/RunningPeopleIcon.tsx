import React from 'react';

interface RunningPeopleIconProps {
  className?: string;
}

const RunningPeopleIcon: React.FC<RunningPeopleIconProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="runningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D86D55" />
          <stop offset="100%" stopColor="#71B554" />
        </linearGradient>
      </defs>

      {/* Person 1 - Front runner */}
      <g transform="translate(30, 30)">
        <circle cx="25" cy="15" r="12" fill="url(#runningGradient)" />
        <path
          d="M 20 30 L 18 50 L 12 65 L 8 75 M 30 30 L 35 50 L 42 60 L 48 65 M 20 30 L 30 30 L 28 45"
          stroke="url(#runningGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 8 75 L 5 82 L 10 85 M 48 65 L 52 70 L 58 68"
          stroke="url(#runningGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Person 2 - Back runner */}
      <g transform="translate(90, 60)">
        <circle cx="25" cy="15" r="11" fill="url(#runningGradient)" opacity="0.85" />
        <path
          d="M 22 28 L 25 48 L 22 62 L 18 72 M 28 28 L 30 48 L 35 58 L 42 62"
          stroke="url(#runningGradient)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M 18 72 L 15 78 L 20 80 M 42 62 L 46 66 L 50 65"
          stroke="url(#runningGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />
      </g>
    </svg>
  );
};

export default RunningPeopleIcon;
