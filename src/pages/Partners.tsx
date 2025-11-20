import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

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

      {/* Message Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F7ECD5]"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <p className="text-2xl lg:text-3xl text-[#3F3E34] text-center leading-relaxed">
            {t('partners.message')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partners;