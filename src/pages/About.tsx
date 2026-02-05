import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, CheckCircle, ChevronDown } from 'lucide-react';
import { trackHeroCTAClick, trackTeamMemberViewed, trackAudiencePathSelected } from '../utils/analytics';
import useScrollDepthTracking from '../hooks/useScrollDepthTracking';

const About: React.FC = () => {
 const { t } = useTranslation();
 const [flippedPartner, setFlippedPartner] = useState<number | null>(null);
 
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

 const partners = [
 {
 name: 'BVS',
 logo: 'BVS Logo.png',
 description: t('about.partners.bvs')
 },
 {
 name: 'Universität Würzburg',
 logo: 'Universität_Würzburg_Logo.svg.png',
 description: t('about.partners.uniWuerzburg')
 },
 {
 name: 'BMFTR',
 logo: 'BMFTR_Logo.svg.png',
 description: t('about.partners.bmftr')
 },
 {
 name: 'Lebenshilfe',
 logo: 'Bundesvereinigung_Lebenshilfe_logo.png',
 description: t('about.partners.lebenshilfe')
 },
 {
 name: 'Adidas',
 logo: 'adidas logo.png',
 description: t('about.partners.adidas')
 },
 {
 name: 'avaAssist',
 logo: 'ava_logo.png',
 description: t('about.partners.ava')
 }
 ];

 const teamMembers = t('about.team.members', { returnObjects: true }) as Array<{name: string, role: string, photo?: string}>;

 return (
 <div>
 {/* Hero Section with Diagonal Split - Image on Left, Overlay on Right */}
 <section className="min-h-screen relative overflow-hidden hero-section about-hero-parallax hero-overlay">
 {/* Subtle overlay for better text readability */}
 <div className="absolute inset-0 bg-black/10"></div>

 <div className="absolute inset-0" style={{
 backgroundColor: 'rgba(216, 109, 85, 0.42)'
 }}></div>

 {/* Text Content on Gradient Overlay */}
 <div className="relative z-10 flex items-center justify-center min-h-screen">
 <div className="w-full max-w-4xl text-center px-8 pb-32 pt-20 md:pt-32 lg:pt-24 xl:pt-0 flex flex-col items-center">
 <img
 src="/TEAMIN_logo_small.svg"
 style={{ filter: 'brightness(0) invert(1)' }}
 alt="TEAMiN Logo"
 className="w-36 h-36 md:w-48 md:h-48 object-contain mb-16 opacity-30 mt-12 md:mt-16 lg:mt-12 xl:mt-0"
 fetchpriority="high"
 />
 <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white uppercase">
 {t('about.hero.title')}
 </h1>
 <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
 {t('about.hero.subtitle')}
 </p>
 <div className="flex justify-center mb-8">
 <button
 onClick={() => {
   trackHeroCTAClick('/about', 'Lern uns kennen');
   scrollToNextSection();
 }}
 className="bg-white text-[#D86D55] px-10 py-4 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 Lern uns kennen
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

 {/* Statistics Section with Background Image */}
 <section className="relative min-h-[600px] overflow-hidden">
 <div
 className="absolute inset-0 bg-cover bg-center"
 style={{ backgroundImage: 'url("/Angebote-min.jpg")' }}
 ></div>
 <div className="absolute inset-0 bg-[#3F3E34]/[0.85]"></div>
 <div className="relative z-10 py-24">
 <div className="max-w-7xl mx-auto px-4">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wide text-white">
 {t('about.statistics.heading')}
 </h2>
 <div className="grid md:grid-cols-3 gap-12 mb-16">
 <div className="text-center">
 <div className="text-7xl md:text-8xl font-bold mb-4" style={{ color: '#D86D55' }}>
 {t('about.statistics.stat1.number')}
 </div>
 <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold">
 {t('about.statistics.stat1.text')}
 </p>
 </div>
 <div className="text-center">
 <div className="text-7xl md:text-8xl font-bold mb-4" style={{ color: '#F7ECD5' }}>
 {t('about.statistics.stat2.number')}
 </div>
 <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold">
 {t('about.statistics.stat2.text')}
 </p>
 </div>
 <div className="text-center">
 <div className="text-7xl md:text-8xl font-bold mb-4" style={{ color: '#71B554' }}>
 {t('about.statistics.stat3.number')}
 </div>
 <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold">
 {t('about.statistics.stat3.text')}
 </p>
 </div>
 </div>
 <div className="max-w-5xl mx-auto space-y-6">
 <p className="text-xl text-white leading-relaxed">
 {t('about.statistics.paragraph1')}
 </p>
 <p className="text-xl text-white leading-relaxed">
 {t('about.statistics.paragraph2')}
 </p>
 <p className="text-xl text-white leading-relaxed">
 {t('about.statistics.paragraph3.part1')}
 <a href="#partner-section" className="underline hover:text-[#71B554] transition-colors">
 {t('about.statistics.paragraph3.linkText')}
 </a>
 {t('about.statistics.paragraph3.part2')}
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Who We Are, Mission & Vision Section - Three Tiles */}
 <section className="py-24 bg-[#F7ECD5]">
 <div className="max-w-6xl mx-auto px-4">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wide" style={{ color: '#3F3E34' }}>
 {t('about.missionVision.heading')}
 </h2>

 <div className="grid md:grid-cols-3 gap-8">
 {/* Who We Are Tile */}
 <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
 <div className="absolute inset-0 bg-gradient-to-b from-[#71B554]/70 to-[#D86D55]/70"></div>
 <div className="relative z-10 p-10 flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">{t('about.missionVision.whoWeAre.title')}</h3>
 <p className="text-lg text-white leading-relaxed flex-grow">
 {t('about.missionVision.whoWeAre.description')}
 </p>
 </div>
 </div>

 {/* Mission Tile */}
 <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
 <div className="absolute inset-0 bg-gradient-to-b from-[#71B554]/70 to-[#D86D55]/70"></div>
 <div className="relative z-10 p-10 flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">{t('about.missionVision.mission.title')}</h3>
 <p className="text-lg text-white leading-relaxed flex-grow">
 {t('about.missionVision.mission.description')}
 </p>
 </div>
 </div>

 {/* Vision Tile */}
 <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
 <div className="absolute inset-0 bg-gradient-to-b from-[#71B554]/70 to-[#D86D55]/70"></div>
 <div className="relative z-10 p-10 flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">{t('about.missionVision.vision.title')}</h3>
 <p className="text-lg text-white leading-relaxed flex-grow mb-6">
 {t('about.missionVision.vision.description')}
 </p>
 <Link
 to="/spass"
 className="inline-block text-center px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
 style={{ backgroundColor: '#F7ECD5', color: '#D86D55' }}
 >
 Erkunde SpAss
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Team Section */}
 <section className="py-24 bg-[#3F3E34]">
 <div className="max-w-6xl mx-auto px-4">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white uppercase tracking-wide">
 {t('about.team.heading')}
 </h2>
 <p className="text-xl text-center text-white/80 mb-16 max-w-3xl mx-auto">
 {t('about.team.subtitle')}
 </p>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {teamMembers.map((member, index) => (
 <div 
   key={index} 
   className="flex flex-col items-center"
   onMouseEnter={() => trackTeamMemberViewed(member.name)}
 >
 <div className="relative mb-6">
 <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#71B554] to-[#D86D55] p-[3px]">
 <div className="w-full h-full rounded-full bg-[#F7ECD5] flex items-center justify-center overflow-hidden">
 {member.photo ? (
 <img
 src={member.photo}
 alt={member.name}
 className="w-full h-full object-cover"
 loading="lazy"
 />
 ) : (
 <Users className="w-16 h-16 text-gray-400" />
 )}
 </div>
 </div>
 <div className="w-56 h-56 rounded-full"></div>
 </div>
 <div className="text-center">
 <h3 className="text-white text-xl font-semibold mb-2">{member.name}</h3>
 <p className="text-white/70 text-sm">{member.role}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Partners Section */}
 <section id="partner-section" className="py-24 bg-gradient-to-b from-[#71B554] to-[#D86D55]">
 <div className="max-w-6xl mx-auto px-4">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wide">
 UNSERE PARTNER
 </h2>

 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
 {partners.map((partner, index) => (
 <div
 key={index}
 className="relative h-64 perspective-1000"
 onMouseEnter={() => setFlippedPartner(index)}
 onMouseLeave={() => setFlippedPartner(null)}
 >
 <div
 className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
 flippedPartner === index ? 'rotate-y-180' : ''
 }`}
 style={{
 transformStyle: 'preserve-3d',
 transform: flippedPartner === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
 }}
 >
 {/* Front of card */}
 <div
 className="absolute inset-0 w-full h-full bg-[#F7ECD5] rounded-2xl shadow-lg flex items-center justify-center p-6 backface-hidden"
 style={{ backfaceVisibility: 'hidden' }}
 >
 <img
 src={partner.logo}
 alt={partner.name}
 className={`max-w-full max-h-full object-contain ${index === 2 ? 'scale-130' : ''}`}
 style={index === 2 ? { transform: 'scale(1.3)' } : {}}
 loading="lazy"
 />
 </div>

 {/* Back of card */}
 <div
 className="absolute inset-0 w-full h-full bg-transparent text-white rounded-2xl shadow-lg p-4 flex items-center justify-center backface-hidden border-2 border-white"
 style={{
 backfaceVisibility: 'hidden',
 transform: 'rotateY(180deg)'
 }}
 >
 <p className="text-sm leading-relaxed text-center">
 {partner.description}
 </p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section - Erkunde SpAss */}
 <section className="py-24 px-6 bg-[#F7ECD5]/50">
 <div className="max-w-7xl mx-auto">
 <div className="text-center max-w-4xl mx-auto mb-20">
 <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
 ERKUNDE <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">SpAss</span>
 </h2>
 </div>

 <div className="grid md:grid-cols-3 gap-10">
 <div className="relative rounded-[25px] p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
 <img loading="lazy" src="/assistant picture 2 crop copy.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-br from-[#D86D55]/90 to-[#D86D55]/80" />
 <div className="relative z-10 h-full flex flex-col justify-between">
 <div>
 <h3 className="text-3xl font-bold mb-4 text-white">
 {t('spassPage.becomePart.assistants.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassPage.becomePart.assistants.description')}
 </p>
 </div>
 <Link 
   to="/volunteers" 
   onClick={() => trackAudiencePathSelected('volunteer')}
   className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider"
 >
 {t('spassPage.becomePart.assistants.cta')}
 </Link>
 </div>
 </div>

 <div className="relative rounded-[25px] p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
 <img loading="lazy" src="/athlete 1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/90 to-[#71B554]/80" />
 <div className="relative z-10 h-full flex flex-col justify-between">
 <div>
 <h3 className="text-3xl font-bold mb-4 text-white">
 {t('spassPage.becomePart.athletes.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassPage.becomePart.athletes.description')}
 </p>
 </div>
 <Link 
   to="/athletes" 
   onClick={() => trackAudiencePathSelected('athlete')}
   className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider"
 >
 {t('spassPage.becomePart.athletes.cta')}
 </Link>
 </div>
 </div>

 <div className="relative rounded-[25px] p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
 <img loading="lazy" src="/partner picture-min.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-br from-[#3F3E34]/90 to-[#3F3E34]/85" />
 <div className="relative z-10 h-full flex flex-col justify-between">
 <div>
 <h3 className="text-3xl font-bold mb-4 text-white">
 {t('spassPage.becomePart.organizations.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassPage.becomePart.organizations.description')}
 </p>
 </div>
 <Link 
   to="/partners" 
   onClick={() => trackAudiencePathSelected('organization')}
   className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider"
 >
 {t('spassPage.becomePart.organizations.cta')}
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default About;
