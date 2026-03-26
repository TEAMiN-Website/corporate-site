import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Search, MessageCircle, Car, Users, Mail, Copy } from 'lucide-react';
import { trackHeroCTAClick, trackExternalSignup, trackEmailCopyClick, trackSignupIntent } from '../utils/analytics';
import useScrollDepthTracking from '../hooks/useScrollDepthTracking';
import AvaSlideIn from '../components/AvaSlideIn';

interface BarrierTile {
  label: string;
  image: string;
  color: string;
}

const Athletes: React.FC = () => {
  const { t } = useTranslation();
  
  // Track scroll depth
  useScrollDepthTracking();
  
  // Track signup intent when page is viewed
  React.useEffect(() => {
    trackSignupIntent('athlete');
  }, []);

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
              fetchpriority="high"
            />
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight uppercase">
              {t('athletes.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
              {t('athletes.description')}
            </p>
            <div className="flex justify-center mb-8">
              <button
                onClick={() => {
                  trackHeroCTAClick('/athletes', t('athletes.getConnected'));
                  scrollToNextSection();
                }}
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
            loading="lazy"
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
              <div key={index} className="relative p-8 rounded-2xl shadow-lg overflow-hidden min-h-[200px] flex items-center justify-center">
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

      {/* Sports Assistant Support Section */}
      <section className="bg-white dark:bg-gray-900">
        {/* Green Title Section */}
        <div className="bg-[#71B554] py-16 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
              {t('athletes.assistantSupport.title')}
            </h2>
          </div>
        </div>

        {/* Full-width Image - Breaking out of container */}
        <div className="w-full mb-12 overflow-hidden">
          <img
            src="/assistant picture 2.jpg"
            alt="Sports assistant meeting with athlete"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            style={{ objectPosition: 'center 25%' }}
            loading="lazy"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-24">
          {/* Introduction Paragraph */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-xl lg:text-2xl text-[#3F3E34] dark:text-gray-300 leading-relaxed">
              {t('athletes.assistantSupport.intro')}
            </p>
          </div>

          {/* Support Items with Icons */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Search className="w-16 h-16 text-[#71B554]" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-[#3F3E34] dark:text-gray-300 leading-relaxed">
                {(t('athletes.assistantSupport.items', { returnObjects: true }) as string[])[0]}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <MessageCircle className="w-16 h-16 text-[#71B554]" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-[#3F3E34] dark:text-gray-300 leading-relaxed">
                {(t('athletes.assistantSupport.items', { returnObjects: true }) as string[])[1]}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Car className="w-16 h-16 text-[#71B554]" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-[#3F3E34] dark:text-gray-300 leading-relaxed">
                {(t('athletes.assistantSupport.items', { returnObjects: true }) as string[])[2]}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Users className="w-16 h-16 text-[#71B554]" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-[#3F3E34] dark:text-gray-300 leading-relaxed">
                {(t('athletes.assistantSupport.items', { returnObjects: true }) as string[])[3]}
              </p>
            </div>
          </div>

          {/* Insurance Coverage Statement */}
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-[#71B554] uppercase leading-tight">
              {t('athletes.assistantSupport.insurance')}
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Aurelian 1-min.jpg"
            alt="Two people having friendly conversation"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(113, 181, 84, 0.2)' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
              {t('athletes.getStarted.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {(t('athletes.getStarted.options', { returnObjects: true }) as Array<{title: string, description: string, cta?: string, email?: string, link?: string}>).map((entry, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#71B554]"></div>
                <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">{entry.title}</h3>
                <p className="text-[#B3ADAA] mb-6 leading-relaxed flex-grow">{entry.description}</p>
                {entry.email ? (
                  <div className="flex items-center justify-center space-x-2 group">
                    <Mail className="w-5 h-5 text-[#71B554]" />
                    <span className="text-[#3F3E34] font-medium">{entry.email}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(entry.email || '');
                        trackEmailCopyClick('contact_section');
                      }}
                      className="p-1.5 hover:bg-gray-100 rounded-md transition-colors duration-200 opacity-0 group-hover:opacity-100"
                      aria-label="Copy email address"
                    >
                      <Copy className="w-4 h-4 text-[#71B554]" />
                    </button>
                  </div>
                ) : (
                  <a
                    href={entry.link || "https://www.lebenshilfe.de/informieren/familie/offene-hilfen"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackExternalSignup(entry.link?.includes('lebenshilfe') ? 'lebenshilfe' : entry.link?.includes('ava') ? 'ava_platform' : 'external')}
                    className="inline-block bg-[#71B554] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a9443] transition-colors duration-300"
                  >
                    {entry.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AvaSlideIn pageType="athlete" />
    </div>
  );
};

export default Athletes;
