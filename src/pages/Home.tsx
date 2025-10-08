import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
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
      <section className="min-h-screen relative overflow-hidden parallax-section hero-overlay hero-section">

        {/* Animated diagonal pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `repeating-linear-gradient(
              60deg,
              transparent,
              transparent 100px,
              rgba(255,255,255,0.03) 100px,
              rgba(255,255,255,0.03) 200px
            )`,
            animation: 'slidePattern 20s linear infinite'
          }}></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="text-center text-white max-w-4xl flex-grow flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight italic opacity-90 uppercase" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              {t('homeNew.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-12 opacity-85 max-w-3xl mx-auto leading-relaxed italic">
              {t('homeNew.hero.subtitle')}
            </p>
          </div>

          <div className="pb-16">
            <button
              onClick={scrollToNextSection}
              className="bg-white px-10 py-4 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <span className="bg-gradient-to-r from-[#71B554] to-[#D86D55] bg-clip-text text-transparent">
                Erkunde Deinen Weg
              </span>
            </button>
          </div>
        </div>

        {/* Logo in bottom right corner */}
        <div className="absolute bottom-8 right-8 z-20">
          <img
            src="/TEAMiN Logo short.png"
            alt="TEAMiN Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>
      </section>

      {/* Your Path Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Pattern Image */}
        <div className="absolute inset-0">
          <img
            src="/Slide1.jpg"
            alt="Pattern background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#F7ECD5]/60 dark:bg-gray-900/60"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34]">
            {t('homeNew.paths.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Become Sport Assistant Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55]"></div>
              
              <div className="h-48 relative overflow-hidden">
                <img
                  src="assistant picture 1.jpg"
                  alt="People of different ages helping and supporting in sports"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#D86D55]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.becomeAssistant.title')}</h3>
                <p className="text-[#B3ADAA] mb-6 italic">{t('homeNew.paths.becomeAssistant.description')}</p>
                <Link 
                  to="/volunteers"
                  className="inline-block bg-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {t('homeNew.paths.becomeAssistant.cta')}
                </Link>
              </div>
            </div>

            {/* Athletes & Families Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#71B554]"></div>

              <div className="h-48 relative overflow-hidden">
                <img
                  src="athlete 2.jpg"
                  alt="Families doing sports together - parents and children actively participating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#71B554]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.athletesFamilies.title')}</h3>
                <p className="text-[#B3ADAA] mb-6 italic">{t('homeNew.paths.athletesFamilies.description')}</p>
                <Link 
                  to="/athletes"
                  className="inline-block bg-[#71B554] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#71B554] hover:to-[#D86D55] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {t('homeNew.paths.athletesFamilies.cta')}
                </Link>
              </div>
            </div>

            {/* SpAss Program Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55]"></div>
              
              <div className="h-48 relative overflow-hidden">
                <img
                  src="athlete 7-min.jpg"
                  alt="Diverse sports and activities - variety of possibilities, welcoming environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.spAssProgram.title')}</h3>
                <p className="text-[#B3ADAA] mb-6 italic">{t('homeNew.paths.spAssProgram.description')}</p>
                <Link 
                  to="/spass"
                  className="inline-block bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {t('homeNew.paths.spAssProgram.cta')}
                </Link>
              </div>
            </div>

            {/* TEAMiN - The Inclusive Network Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55]"></div>
              
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="TEAMiN Network.jpg"
                  alt="Team network imagery - diverse group, collaborative, inclusive community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.teamInNetwork.title')}</h3>
                <p className="text-[#B3ADAA] mb-6 italic">{t('homeNew.paths.teamInNetwork.description')}</p>
                <Link 
                  to="/about"
                  className="inline-block bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {t('homeNew.paths.teamInNetwork.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 text-white relative overflow-hidden parallax-section dark-overlay">
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            {t('homeNew.contact.title')}
          </h2>

          <div className="bg-[#F7ECD5]/95 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden z-10">
            {/* Decorative gradient circle */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#71B554]/10 to-transparent rounded-full"></div>
            
            <form className="relative z-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#3F3E34] mb-2 uppercase tracking-wider">
                  {t('homeNew.contact.form.name')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3F3E34] mb-2 uppercase tracking-wider">
                  {t('homeNew.contact.form.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3F3E34] mb-2 uppercase tracking-wider">
                  {t('homeNew.contact.form.message')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base resize-vertical transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-4 rounded-full font-semibold text-lg uppercase tracking-wider hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {t('homeNew.contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;