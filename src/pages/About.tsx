import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
 const { t } = useTranslation();
 const [flippedPartner, setFlippedPartner] = useState<number | null>(null);

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
 />
 <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white uppercase">
 {t('about.hero.title')}
 </h1>
 <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
 {t('about.hero.subtitle')}
 </p>
 <div className="flex justify-center mb-8">
 <Link
 to="/signup"
 className="bg-white text-[#D86D55] px-10 py-4 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 Lern uns kennen
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Statistics Section with Background Image */}
 <section className="relative min-h-[600px] overflow-hidden">
 <div
 className="absolute inset-0 bg-cover bg-center"
 style={{ backgroundImage: 'url("/Angebote-min copy copy.jpg")' }}
 ></div>
 <div className="absolute inset-0 bg-[#3F3E34]/[0.85]"></div>
 <div className="relative z-10 py-24">
 <div className="max-w-7xl mx-auto px-4">
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
 </div>
 </div>
 </div>
 </section>

 {/* Who We Are, Mission & Vision Section - Three Tiles */}
 <section className="py-24 bg-[#F7ECD5]">
 <div className="max-w-6xl mx-auto px-4">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wide" style={{ color: '#3F3E34' }}>
 WARUM ES UNS GIBT
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

 {/* Inclusion Understanding Section with Diagonal Split */}
 <section className="min-h-[600px] relative overflow-hidden">
 {/* Background Image - Left 50% */}
 <div className="absolute top-0 left-0 bottom-0 w-[50%]">
 <img
 src="Inklusion sign.jpg"
 alt="Inklusion"
 className="w-full h-full object-cover"
 style={{ objectPosition: '30% center' }}
 />
 </div>

 {/* Diagonal Gradient Overlay - Right 50% */}
 <div className="absolute inset-0 bg-gradient-to-br from-[#71B554] to-[#D86D55]" style={{
 clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 30% 100%)'
 }}></div>

 {/* Text Content */}
 <div className="relative z-10 flex items-center justify-end min-h-[600px] px-4 py-16">
 <div className="max-w-xl text-left relative z-10 mr-8 lg:mr-16">
 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
 {t('about.inclusion.heading')}
 </h2>
 <p className="text-lg text-white leading-relaxed opacity-95">
 {t('about.inclusion.description')}
 </p>
 </div>
 </div>
 </section>

 {/* Team Section */}
 <section className="py-24 bg-[#F7ECD5]">
 <div className="max-w-6xl mx-auto px-4">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#3F3E34]">
 {t('about.team.heading')}
 </h2>
 <p className="text-xl text-center text-[#B3ADAA] mb-16 max-w-3xl mx-auto">
 {t('about.team.subtitle')}
 </p>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {teamMembers.map((member, index) => (
 <div key={index} className="p-[2px] bg-gradient-to-br from-red-500 to-green-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
 <div className="bg-white rounded-2xl overflow-hidden">
 {member.photo ? (
 <img
 src={member.photo}
 alt={member.name}
 className="w-full h-64 object-cover"
 />
 ) : (
 <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
 <Users className="w-16 h-16 text-gray-400" />
 </div>
 )}
 <div className="p-4 text-center">
 <h3 className="text-gray-900 text-xl font-semibold mb-1">{member.name}</h3>
 <p className="text-gray-600 text-sm">{member.role}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Partners Section */}
 <section className="py-24 bg-white ">
 <div className="max-w-6xl mx-auto px-4">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34] ">
 {t('about.partners.heading')}
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
 className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 backface-hidden"
 style={{ backfaceVisibility: 'hidden' }}
 >
 <img
 src={partner.logo}
 alt={partner.name}
 className="max-w-full max-h-full object-contain"
 />
 </div>

 {/* Back of card */}
 <div
 className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#D86D55] to-[#71B554] text-white rounded-2xl shadow-lg p-4 flex items-center justify-center backface-hidden"
 style={{
 backfaceVisibility: 'hidden',
 transform: 'rotateY(180deg)'
 }}
 >
 <p className="text-xs leading-relaxed text-center">
 {partner.description}
 </p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section - Three Tiles */}
 <section className="py-24 bg-[#F7ECD5]">
 <div className="max-w-6xl mx-auto px-4">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34]">
 {t('about.cta.heading')}
 </h2>

 <div className="grid md:grid-cols-3 gap-10">
 {/* Volunteering Card - Game Heat */}
 <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
 <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55]"></div>

 <div className="h-48 relative overflow-hidden">
 <img
 src="assistant picture 1.jpg"
 alt="Become a volunteer"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-[#D86D55]/10"></div>
 </div>

 <div className="p-8 text-center">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('about.cta.volunteering.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic">{t('about.cta.volunteering.description')}</p>
 <Link
 to="/volunteers"
 className="inline-block bg-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
 >
 {t('about.cta.volunteering.button')}
 </Link>
 </div>
 </div>

 {/* Athletes & Families Card - Match Green */}
 <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
 <div className="absolute top-0 left-0 right-0 h-1 bg-[#71B554]"></div>

 <div className="h-48 relative overflow-hidden">
 <img
 src="athlete 2.jpg"
 alt="Athletes and families"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-[#71B554]/10"></div>
 </div>

 <div className="p-8 text-center">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('about.cta.athletes.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic">{t('about.cta.athletes.description')}</p>
 <Link
 to="/athletes"
 className="inline-block bg-[#71B554] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#71B554] hover:to-[#D86D55] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
 >
 {t('about.cta.athletes.button')}
 </Link>
 </div>
 </div>

 {/* SpAss Program Card - Gradient */}
 <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55]"></div>

 <div className="h-48 relative overflow-hidden">
 <img
 src="assistant picture 2.jpg"
 alt="SpAss Program"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10"></div>
 </div>

 <div className="p-8 text-center">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('about.cta.spass.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic">{t('about.cta.spass.description')}</p>
 <Link
 to="/spass"
 className="inline-block bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
 >
 {t('about.cta.spass.button')}
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
