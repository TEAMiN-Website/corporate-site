import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const Athletes: React.FC = () => {
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
      <section className="min-h-screen relative overflow-hidden hero-section athletes-hero-parallax">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0" style={{
          backgroundColor: 'rgba(113, 181, 84, 0.6)'
        }}></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-4xl text-center px-8 pb-32 pt-20 md:pt-32 lg:pt-24 xl:pt-0 flex flex-col items-center">
            <img
              src="/TEAMiN Logo short copy.png"
              alt="TEAMiN Logo"
              className="w-36 h-36 md:w-48 md:h-48 object-contain mb-16 opacity-30 mt-12 md:mt-16 lg:mt-12 xl:mt-0"
            />
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight uppercase">
              {t('athletes.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
              {t('athletes.description')}
            </p>
            <div className="flex justify-center mb-8">
              <button
                onClick={scrollToNextSection}
                className="bg-white text-[#71B554] px-10 py-4 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t('athletes.getConnected')}
              </button>
            </div>
            <div className="flex justify-center">
              <ChevronDown
                className="w-12 h-12 text-white animate-bounce cursor-pointer"
                onClick={scrollToNextSection}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Athletes;
