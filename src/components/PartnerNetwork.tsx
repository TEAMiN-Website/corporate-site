import React, { useState } from 'react';

interface Partner {
  id: string;
  name: string;
  role: string;
  logo?: string;
  size: 'small' | 'medium' | 'large';
  angle: number;
}

const PartnerNetwork: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const partners: Partner[] = [
    { id: 'bvs', name: 'BVS Bayern', role: 'Infrastruktur', logo: '/BVS Logo.png', size: 'large', angle: 0 },
    { id: 'uni', name: 'Uni Würzburg', role: 'Fachexpertise', logo: '/Universität_Würzburg_Logo.svg.png', size: 'large', angle: 51.4 },
    { id: 'lebenshilfe', name: 'Lebenshilfe', role: 'Administration Ehrenamt', logo: '/Bundesvereinigung_Lebenshilfe_logo.png', size: 'medium', angle: 102.8 },
    { id: 'adidas', name: 'Adidas', role: 'Ehrenamtliche Unterstützung', logo: '/adidas logo.png', size: 'medium', angle: 154.2 },
    { id: 'sportvereine', name: 'Sportvereine', role: 'Sportangebote', size: 'medium', angle: 205.6 },
    { id: 'ava', name: 'ava', role: 'Technologie-\nPartner', size: 'small', angle: 257 },
    { id: 'bmftr', name: 'BMFSFJ', role: 'Finanzierung', logo: '/BMFTR_Logo.svg.png', size: 'small', angle: 308.4 },
  ];

  // Toggle this to use importance-based sizing (true) or uniform sizing (false)
  const useImportanceBasedSizing = false;

  const getSizeInPx = (size: 'small' | 'medium' | 'large'): number => {
    if (!useImportanceBasedSizing) {
      return 132; // Uniform medium size for all circles
    }
    
    // Importance-based sizing (when enabled)
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

  const radius = 220;

  return (
    <div className="relative w-full py-24 px-6 bg-[#F7ECD5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase mb-6">
            HAVING <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent" style={{ textTransform: 'none' }}>SpAss</span> TOGETHER
          </h2>
          <p className="text-gray-900 text-lg leading-relaxed">
            Our sportassistant solution SpAss is made possible by many diverse partners. From the funding we receive from the BMFTR to the deep knowledge and networks shared by BVS Bayern and Uni Würzburg to the strategic support from adidas corporate volunteers.
          </p>
          <p className="text-gray-900 text-lg leading-relaxed mt-4 italic">
            Hover over the circles to discover each partner's contributions to SpAss.
          </p>
        </div>
        <div className="relative mx-auto" style={{ width: '630px', height: '630px', maxWidth: '90vw', maxHeight: '90vw' }}>
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
              className="text-4xl md:text-5xl font-bold text-center whitespace-nowrap"
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
            const size = getSizeInPx(partner.size);
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
                    className="absolute w-full h-full rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-[80%] max-h-[80%] object-contain"
                      />
                    ) : (
                      <span className="text-center font-semibold text-gray-700 text-sm">
                        {partner.name}
                      </span>
                    )}
                  </div>

                  <div
                    className="absolute w-full h-full rounded-full bg-[#3F3E34] shadow-lg flex items-center justify-center p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <span className="text-center font-semibold text-white text-sm leading-tight whitespace-pre-line">
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
