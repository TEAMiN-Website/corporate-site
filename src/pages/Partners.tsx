import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Copy } from 'lucide-react';

const ContactButton: React.FC = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = () => {
    if (isHovered) {
      navigator.clipboard.writeText('kontakt@teaminklusion.de');
      setShowCopied(true);
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
          <p className="text-2xl lg:text-3xl text-[#3F3E34] text-center leading-relaxed">
            {t('partners.message')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('partners.types', { returnObjects: true }) as Array<{title: string, image: string, items: string[]}>).map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
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
    </div>
  );
};

export default Partners;