import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface BarrierTile {
  label: string;
  image: string;
  color: string;
}

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

  const barrierTiles: BarrierTile[] = [
    { label: t('athletes.barriers.tiles.0'), image: '/Angebote-min.jpg', color: 'rgba(113, 181, 84, 0.6)' },
    { label: t('athletes.barriers.tiles.1'), image: '/Transport.jpg', color: 'rgba(63, 62, 52, 0.6)' },
    { label: t('athletes.barriers.tiles.2'), image: '/Vorurteile.jpg', color: 'rgba(63, 62, 52, 0.6)' },
    { label: t('athletes.barriers.tiles.3'), image: '/Selbstvertrauen-min.jpg', color: 'rgba(113, 181, 84, 0.6)' }
  ];

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
              src="/TEAMIN_logo_small.svg"
              style={{ filter: 'brightness(0) invert(1)' }}
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

      {/* Barriers Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Pattern Image */}
        <div className="absolute inset-0">
          <img
            src="/Slide1.jpg"
            alt="Pattern background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#F7ECD5]/60"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6 uppercase">
              {t('athletes.barriers.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {barrierTiles.map((tile, index) => (
              <div key={index} className="relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden min-h-[200px] flex items-center justify-center">
                <img loading="lazy" src={tile.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ backgroundColor: tile.color }}></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white">{tile.label}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#3F3E34] leading-relaxed text-center">
              {t('athletes.barriers.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Athletes;
