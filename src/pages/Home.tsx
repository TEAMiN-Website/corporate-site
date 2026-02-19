import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Copy } from 'lucide-react';
import { trackEmailCopyClick, trackHeroCTAClick, trackAudiencePathSelected } from '../utils/analytics';
import useScrollDepthTracking from '../hooks/useScrollDepthTracking';

const ContactButton: React.FC = () => {
 const { t } = useTranslation();
 const [isHovered, setIsHovered] = useState(false);
 const [showCopied, setShowCopied] = useState(false);

 const handleClick = () => {
  if (isHovered) {
   navigator.clipboard.writeText('kontakt@teaminklusion.de');
   setShowCopied(true);
   trackEmailCopyClick('footer');
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
     <span>{t('homeNew.contact.cta')}</span>
    )}
   </button>
   {showCopied && (
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#71B554] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
     {t('homeNew.contact.copied')}
    </div>
   )}
  </div>
 );
};

const Home: React.FC = () => {
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
 <section className="min-h-screen relative overflow-hidden hero-section parallax-section hero-overlay">
 <div className="absolute inset-0 bg-black/10"></div>

 <div className="absolute inset-0" style={{
 backgroundColor: 'rgba(216, 109, 85, 0.6)'
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
 {t('homeNew.hero.title')}
 </h1>
 <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
 {t('homeNew.hero.subtitle')}
 </p>
 <div className="flex justify-center mb-8">
 <button
 onClick={() => {
   trackHeroCTAClick('/', t('homeNew.hero.cta'));
   scrollToNextSection();
 }}
 className="bg-white text-[#D86D55] px-10 py-4 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 {t('homeNew.hero.cta')}
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

 {/* Your Path Section */}
 <section className="py-24 relative overflow-hidden">
 {/* Background Pattern Image */}
 <div className="absolute inset-0">
 <img
 src="/Slide1.jpg"
 alt="Pattern background"
 className="absolute inset-0 w-full h-full object-cover opacity-30"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-[#F7ECD5]/60 "></div>
 </div>

 <div className="max-w-6xl mx-auto px-4 relative z-10">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34] uppercase">
 {t('homeNew.paths.title')}
 </h2>

 <div className="grid md:grid-cols-2 gap-10">
 {/* Become Sport Assistant Card */}
 <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative flex flex-col">
 <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55]"></div>

 <div className="h-48 relative overflow-hidden">
 <img
 src="assistant picture 1.jpg"
 alt="People of different ages helping and supporting in sports"
 className="w-full h-full object-cover"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-[#D86D55]/10"></div>
 </div>

 <div className="p-8 text-center flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.becomeAssistant.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic flex-grow">{t('homeNew.paths.becomeAssistant.description')}</p>
 <Link
 to="/volunteers"
 onClick={() => trackAudiencePathSelected('volunteer')}
 className="inline-block bg-[#D86D55] text-white px-8 py-3 rounded-full font-semibold tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
 >
 {t('homeNew.paths.becomeAssistant.cta')}
 </Link>
 </div>
 </div>

 {/* Athletes & Families Card */}
 <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative flex flex-col">
 <div className="absolute top-0 left-0 right-0 h-1 bg-[#71B554]"></div>

 <div className="h-48 relative overflow-hidden">
 <img
 src="athlete 2.jpg"
 alt="Families doing sports together - parents and children actively participating"
 className="w-full h-full object-cover"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-[#71B554]/10"></div>
 </div>

 <div className="p-8 text-center flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.athletesFamilies.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic flex-grow">{t('homeNew.paths.athletesFamilies.description')}</p>
 <Link
 to="/athletes"
 onClick={() => trackAudiencePathSelected('athlete')}
 className="inline-block bg-[#71B554] text-white px-8 py-3 rounded-full font-semibold tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#71B554] hover:to-[#D86D55] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
 >
 {t('homeNew.paths.athletesFamilies.cta')}
 </Link>
 </div>
 </div>

 {/* TEAMiN - The Inclusive Network Card */}
 <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative flex flex-col">
 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55]"></div>

 <div className="h-48 relative overflow-hidden">
 <img
 src="TEAMiN Network.jpg"
 alt="Team network imagery - diverse group, collaborative, inclusive community"
 className="w-full h-full object-cover"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10"></div>
 </div>

 <div className="p-8 text-center flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.teamInNetwork.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic flex-grow">{t('homeNew.paths.teamInNetwork.description')}</p>
 <Link
 to="/about"
 className="inline-block bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-3 rounded-full font-semibold tracking-wider text-sm hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
 >
 {t('homeNew.paths.teamInNetwork.cta')}
 </Link>
 </div>
 </div>

 {/* SpAss Program Card */}
 <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative flex flex-col">
 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55]"></div>

 <div className="h-48 relative overflow-hidden">
 <img
 src="athlete 7-min.jpg"
 alt="Diverse sports and activities - variety of possibilities, welcoming environment"
 className="w-full h-full object-cover"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10"></div>
 </div>

 <div className="p-8 text-center flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.spAssProgram.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic flex-grow">{t('homeNew.paths.spAssProgram.description')}</p>
 <Link
 to="/spass"
 className="inline-block bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-3 rounded-full font-semibold tracking-wider text-sm hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
 >
 {t('homeNew.paths.spAssProgram.cta')}
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Contact Section */}
 <section className="py-24 text-white relative overflow-hidden parallax-section dark-overlay">

 <div className="max-w-4xl mx-auto px-4 relative z-10">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase">
 {t('homeNew.contact.title')}
 </h2>

 <div className="max-w-2xl mx-auto">
 <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
 <div className="relative h-64 overflow-hidden">
 <img
 src="/postkasten.jpg"
 alt="Contact"
 className="w-full h-full object-cover"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
 </div>
 <div className="p-8 flex-grow bg-[#F7ECD5] flex flex-col items-center justify-center text-center">
 <p className="text-[#3F3E34] text-xl md:text-2xl leading-relaxed mb-8">
 {t('homeNew.contact.description')}
 </p>
 <ContactButton />
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Home;