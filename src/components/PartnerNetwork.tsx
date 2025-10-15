import React, { useState } from 'react';
import RunningPeopleIcon from './Icons/RunningPeopleIcon';

interface Partner {
  id: string;
  name: string;
  role: string;
  logo?: string;
  customIcon?: boolean;
  size: 'small' | 'medium' | 'large';
  angle: number;
}

const PartnerNetwork: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const partners: Partner[] = [
    { id: 'bvs', name: 'BVS Bayern', role: 'Infra­struktur', logo: '/BVS Logo.png', size: 'large', angle: 0 },
    { id: 'uni', name: 'Uni Würzburg', role: 'Fach­expertise', logo: '/Universität_Würzburg_Logo.svg.png', size: 'large', angle: 51.4 },
    { id: 'lebenshilfe', name: 'Lebenshilfe', role: 'Admini­stration Ehren­amt', logo: '/Bundesvereinigung_Lebenshilfe_logo.png', size: 'medium', angle: 102.8 },
    { id: 'adidas', name: 'Adidas', role: 'Ehren­amtliche Unter­stützung', logo: '/adidas logo.png', size: 'medium', angle: 154.2 },
    { id: 'sportvereine', name: 'Sportvereine', role: 'Sport­angebote', customIcon: true, size: 'medium', angle: 205.6 },
    { id: 'ava', name: 'ava', role: 'Techno­logie-Partner', logo: '/ava_logo.png', size: 'small', angle: 257 },
    { id: 'bmftr', name: 'BMFSFJ', role: 'Finan­zierung', logo: '/BMFTR_Logo.svg.png', size: 'small', angle: 308.4 },
  ];

  // Toggle this to use importance-based sizing (true) or uniform sizing (false)
  const useImportanceBasedSizing = false;

  const getSizeInPx = (size: 'small' | 'medium' | 'large', isMobile: boolean, isTablet: boolean): number => {
    if (!useImportanceBasedSizing) {
      // Uniform sizing with responsive scaling
      if (isMobile) return 70; // 50% reduction for mobile
      if (isTablet) return 100; // 25% reduction for tablet
      return 132; // Desktop size
    }

    // Importance-based sizing (when enabled) with responsive scaling
    if (isMobile) {
      switch (size) {
        case 'small': return 55; // ~45% reduction
        case 'medium': return 70; // ~47% reduction
        case 'large': return 85; // ~49% reduction
      }
    }

    if (isTablet) {
      switch (size) {
        case 'small': return 75; // ~26% reduction
        case 'medium': return 100; // ~24% reduction
        case 'large': return 125; // ~26% reduction
      }
    }

    // Desktop sizes
    switch (size) {
      case 'small': return 102;
      case 'medium': return 132;
      case 'large': return 168;
    }
  };

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Responsive radius based on screen size
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const radius = isMobile ? 110 : isTablet ? 165 : 220; // 50% for mobile, 75% for tablet
  const containerSize = isMobile ? 315 : isTablet ? 470 : 630; // Matches radius scaling

  return (
    <div className="relative w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#F7ECD5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 uppercase mb-4 sm:mb-6">
            HAVING <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent" style={{ textTransform: 'none' }}>SpAss</span> TOGETHER
          </h2>
          <p className="text-gray-900 text-base sm:text-lg leading-relaxed px-2">
            Our sportassistant solution SpAss is made possible by many diverse partners. From the funding we receive from the BMFTR to the deep knowledge and networks shared by BVS Bayern and Uni Würzburg to the strategic support from adidas corporate volunteers.
          </p>
          <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 italic px-2">
            {isMobile ? 'Tap the circles to discover each partner\'s contributions to SpAss.' : 'Hover over the circles to discover each partner\'s contributions to SpAss.'}
          </p>
        </div>
        <div className="relative mx-auto" style={{ width: `${containerSize}px`, height: `${containerSize}px`, maxWidth: '90vw', maxHeight: '90vw' }}>
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #71B554, #D86D55)',
              padding: '3px',
            }}
          >
            <div className="w-full h-full rounded-full bg-[#F7ECD5]" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #D86D55, #71B554)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SpAss
            </h3>
          </div>

          {partners.map((partner) => {
            const size = getSizeInPx(partner.size, isMobile, isTablet);
            const angleRad = (partner.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            const isFlipped = flippedCards.has(partner.id);

            return (
              <div
                key={partner.id}
                className="absolute top-1/2 left-1/2 cursor-pointer"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  perspective: '1000px',
                }}
                onClick={() => toggleFlip(partner.id)}
                onMouseEnter={() => {
                  if (window.innerWidth > 1024) {
                    setFlippedCards(prev => new Set(prev).add(partner.id));
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 1024) {
                    setFlippedCards(prev => {
                      const newSet = new Set(prev);
                      newSet.delete(partner.id);
                      return newSet;
                    });
                  }
                }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-600"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  <div
                    className="absolute w-full h-full rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center p-2 sm:p-3 md:p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    {partner.customIcon ? (
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="text-4xl sm:text-5xl mb-1">🏃🏃</div>
                        <span className={`text-center font-semibold text-gray-700 ${isMobile ? 'text-[0.6rem]' : 'text-xs'} leading-tight`}>
                          {partner.name}
                        </span>
                      </div>
                    ) : partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-[75%] max-h-[75%] sm:max-w-[80%] sm:max-h-[80%] object-contain"
                      />
                    ) : (
                      <span className={`text-center font-semibold text-gray-700 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                        {partner.name}
                      </span>
                    )}
                  </div>

                  <div
                    className="absolute w-full h-full rounded-full bg-[#3F3E34] shadow-lg flex items-center justify-center p-2 sm:p-3 md:p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <span
                      className={`text-center font-semibold text-white leading-tight px-1 ${isMobile ? 'text-sm' : 'text-sm md:text-base'}`}
                      style={{
                        hyphens: 'manual',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        lineHeight: '1.25',
                      }}
                    >
                      {partner.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnerNetwork;
