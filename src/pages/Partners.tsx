import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Copy } from 'lucide-react';
import { trackPartnerCardFlipped, trackEmailCopyClick } from '../utils/analytics';
import useScrollDepthTracking from '../hooks/useScrollDepthTracking';

interface Partner {
  id: string;
  logo?: string;
  customIcon?: boolean;
  size: 'small' | 'medium' | 'large';
  angle: number;
}

const PartnerNetworkSection: React.FC = () => {
  const { t } = useTranslation();
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const partners: Partner[] = [
    { id: 'bvs', logo: '/BVS Logo.png', size: 'large', angle: 0 },
    { id: 'uni', logo: '/Universität_Würzburg_Logo.svg.png', size: 'large', angle: 51.4 },
    { id: 'lebenshilfe', logo: '/Bundesvereinigung_Lebenshilfe_logo.png', size: 'medium', angle: 102.8 },
    { id: 'adidas', logo: '/adidas logo.png', size: 'medium', angle: 154.2 },
    { id: 'sportvereine', customIcon: true, size: 'medium', angle: 205.6 },
    { id: 'ava', logo: '/ava_logo.png', size: 'small', angle: 257 },
    { id: 'bmftr', logo: '/BMFTR_Logo.svg.png', size: 'small', angle: 308.4 },
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSizeInPx = (size: 'small' | 'medium' | 'large', isMobile: boolean, isTablet: boolean): number => {
    if (isMobile) return 70;
    if (isTablet) return 100;
    return 132;
  };

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
        // Track when a partner card is flipped to view details
        trackPartnerCardFlipped(id);
      }
      return newSet;
    });
  };

  const radius = isMobile ? 110 : isTablet ? 165 : 220;
  const containerSize = isMobile ? 315 : isTablet ? 470 : 630;

  return (
    <div className="relative w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#3F3E34] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7ECD5] uppercase mb-4 sm:mb-6">
            {t('partners.networkTitle') || 'UNSERE PARTNER'}
          </h2>
          <p className="text-[#F7ECD5] text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 italic px-2">
            {isMobile ? t('spassPage.partners.instruction.mobile') : t('spassPage.partners.instruction.desktop')}
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
            <div className="w-full h-full rounded-full bg-[#3F3E34]" />
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
                    className="absolute w-full h-full rounded-full bg-[#F7ECD5] backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center p-2 sm:p-3 md:p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    {partner.customIcon ? (
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="text-3xl sm:text-4xl mb-1 flex gap-0.5">
                          <span>🏃</span>
                          <span>🏃</span>
                        </div>
                        <span className={`text-center font-semibold text-gray-700 ${isMobile ? 'text-[0.6rem]' : 'text-xs'} leading-tight`}>
                          {t(`spassPage.partners.names.${partner.id}`)}
                        </span>
                      </div>
                    ) : partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={t(`spassPage.partners.names.${partner.id}`)}
                        className="max-w-[75%] max-h-[75%] sm:max-w-[80%] sm:max-h-[80%] object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className={`text-center font-semibold text-gray-700 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                        {t(`spassPage.partners.names.${partner.id}`)}
                      </span>
                    )}
                  </div>

                  <div
                    className="absolute w-full h-full rounded-full shadow-lg flex items-center justify-center p-2 sm:p-3 md:p-4"
                    style={{
                      background: 'linear-gradient(135deg, #71B554, #D86D55)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <span
                      className={`text-center font-semibold text-white px-1 ${
                        partner.size === 'large'
                          ? (isMobile ? 'text-[15px]' : 'text-[16px]')
                          : partner.size === 'medium'
                          ? (isMobile ? 'text-[13px]' : 'text-[14px]')
                          : (isMobile ? 'text-[12px]' : 'text-[13px]')
                      }`}
                      style={{
                        hyphens: 'manual',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        lineHeight: '1.2',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {t(`spassPage.partners.roles.${partner.id}`)}
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

const ContactButton: React.FC = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = () => {
    if (isHovered) {
      navigator.clipboard.writeText('kontakt@teaminklusion.de');
      setShowCopied(true);
      trackEmailCopyClick('partners_page');
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="bg-[#3F3E34] text-[#F7ECD5] px-8 py-4 rounded-full font-semibold hover:bg-[#2A2928] transition-all duration-300 flex items-center space-x-2 group"
      >
        {isHovered ? (
          <>
            <span>kontakt@teaminklusion.de</span>
            <Copy className="w-5 h-5" />
          </>
        ) : (
          <span>{t('partners.cta')}</span>
        )}
      </button>
      {showCopied && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#71B554] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          {t('partners.copied')}
        </div>
      )}
    </div>
  );
};

const Partners: React.FC = () => {
  const { t } = useTranslation();
  
  // Track scroll depth
  useScrollDepthTracking();

  const scrollToNextSection = () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden hero-section partners-hero-parallax">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0" style={{
          backgroundColor: 'rgba(63, 62, 52, 0.6)'
        }}></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-4xl text-center px-8 pb-32 pt-20 md:pt-32 lg:pt-24 xl:pt-0 flex flex-col items-center">
            <img
              src="/TEAMIN_logo_small.svg"
              style={{ filter: 'brightness(0) invert(1)' }}
              alt="TEAMiN Logo"
              className="w-36 h-36 md:w-48 md:h-48 object-contain mb-16 opacity-30 mt-12 md:mt-16 lg:mt-12 xl:mt-0"
              fetchpriority="high"
            />
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight uppercase">
              {t('partners.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
              {t('partners.hero.subtitle')}
            </p>
            <div className="flex justify-center">
              <ChevronDown
                className="w-12 h-12 text-white animate-bounce cursor-pointer"
                onClick={scrollToNextSection}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Message and Partner Types Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F7ECD5] dark:bg-[#F7ECD5]"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 mb-16">
          <p className="text-2xl lg:text-3xl text-[#3F3E34] text-center leading-relaxed whitespace-pre-line">
            {t('partners.message')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('partners.types', { returnObjects: true }) as Array<{title: string, image: string, items: string[]}>).map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">{type.title}</h3>
                </div>
                <div className="p-6 flex-grow bg-[#3F3E34]">
                  <ul className="space-y-3">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-[#F7ECD5] leading-relaxed flex items-start">
                        <span className="text-[#F7ECD5] mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <ContactButton />
          </div>
        </div>
      </section>

      {/* Partner Network Section */}
      <PartnerNetworkSection />
    </div>
  );
};

export default Partners;
