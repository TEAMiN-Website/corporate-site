import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Quote, Play, Pause } from 'lucide-react';
import PartnerNetwork from '../components/PartnerNetwork';

interface Testimonial {
  quote: string;
  name: string;
}

interface TimelineStep {
  title: string;
  description: string;
}

interface FaqCategory {
  title: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

const SpAss: React.FC = () => {
 const { t } = useTranslation();
 const [currentSlide, setCurrentSlide] = useState(0);
 const [isPlaying, setIsPlaying] = useState(true);
 const [activeFaqItems, setActiveFaqItems] = useState<Set<string>>(new Set());
 const carouselRef = useRef<HTMLDivElement>(null);

 const stories = t('spassNew.stories.testimonials', { returnObjects: true }) as Testimonial[];

 const toggleFaq = (categoryIndex: number, itemIndex: number) => {
 const key = `${categoryIndex}-${itemIndex}`;
 const newActiveFaqItems = new Set(activeFaqItems);
 if (newActiveFaqItems.has(key)) {
 newActiveFaqItems.delete(key);
 } else {
 newActiveFaqItems.add(key);
 }
 setActiveFaqItems(newActiveFaqItems);
 };

 const scrollToNextSection = () => {
 const heroSection = document.querySelector('.hero-section');
 if (heroSection) {
 const nextSection = heroSection.nextElementSibling;
 if (nextSection) {
 nextSection.scrollIntoView({ behavior: 'smooth' });
 }
 }
 };

 const nextSlide = () => {
 setCurrentSlide((prev) => (prev + 1) % stories.length);
 };

 const prevSlide = () => {
 setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
 };

 const togglePlayPause = () => {
 setIsPlaying((prev) => !prev);
 };

 // Auto-play carousel
 useEffect(() => {
 if (!isPlaying) return;

 const interval = setInterval(() => {
 setCurrentSlide((prev) => (prev + 1) % stories.length);
 }, 5000);

 return () => clearInterval(interval);
 }, [isPlaying, stories.length]);

 // Keyboard navigation
 useEffect(() => {
 const handleKeyDown = (event: KeyboardEvent) => {
 if (carouselRef.current && carouselRef.current.contains(document.activeElement)) {
 if (event.key === 'ArrowLeft') {
 event.preventDefault();
 prevSlide();
 } else if (event.key === 'ArrowRight') {
 event.preventDefault();
 nextSlide();
 } else if (event.key === ' ' || event.key === 'Enter') {
 event.preventDefault();
 togglePlayPause();
 }
 }
 };

 document.addEventListener('keydown', handleKeyDown);
 return () => document.removeEventListener('keydown', handleKeyDown);
 }, []);

 return (
 <div className="min-h-screen bg-white ">
 {/* Hero Section */}
 <section className="min-h-screen relative overflow-hidden hero-section">
 {/* Background Image */}
 <div
 className="absolute inset-0 bg-cover bg-center"
 style={{
 backgroundImage: 'url("/athlete 7-min-min copy.jpg")',
 backgroundPosition: '40% center'
 }}
 ></div>

 {/* Beige overlay covering whole background - 80% opacity */}
 <div className="absolute inset-0" style={{
 backgroundColor: 'rgba(247, 236, 213, 0.8)'
 }}></div>

 {/* Text Content - Centered */}
 <div className="relative z-10 flex items-center justify-center min-h-screen">
 <div className="w-full max-w-4xl text-center px-8 pb-32 pt-20 md:pt-32 lg:pt-24 xl:pt-0 flex flex-col items-center">
 <img
 src="/TEAMiN Logo short copy.png"
 alt="TEAMiN Logo"
 className="w-36 h-36 md:w-48 md:h-48 object-contain mb-16 opacity-30 mt-12 md:mt-16 lg:mt-12 xl:mt-0"
 style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(9%) saturate(480%) hue-rotate(37deg) brightness(96%) contrast(90%)' }}
 />
 <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
 <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">SpAss</span>{' '}
 <span className="text-[#3F3E34] text-2xl lg:text-3xl xl:text-4xl font-normal">by TEAMiN</span>
 </h1>
 <p className="text-4xl lg:text-5xl xl:text-6xl mb-4 opacity-90 leading-relaxed font-bold uppercase" style={{ color: '#3F3E34' }}>
 Inclusive teams through sport assistance
 </p>
 <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed" style={{ color: '#3F3E34' }}>
 We leverage the power of communities to support athletes' independent participation in regular sports clubs.
 </p>
 <div className="flex justify-center mb-8">
 <button
 onClick={scrollToNextSection}
 className="bg-white px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">Explore SpAss</span>
 </button>
 </div>
 <div className="flex justify-center">
 <ChevronDown
 className="w-12 h-12 animate-bounce cursor-pointer"
 style={{ color: '#3F3E34' }}
 onClick={scrollToNextSection}
 />
 </div>
 </div>
 </div>
 </section>

 {/* The Origins of SpAss Section */}
 <section className="py-24 px-6 relative overflow-hidden">
 {/* Background Image */}
 <div className="absolute inset-0">
 <img
 src="/SpAss Datipilot Photo.jpg"
 alt="DATIpilot award ceremony"
 className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
 />
 <div className="absolute inset-0 bg-[#3F3E34]/80"></div>
 </div>
 <div className="max-w-7xl mx-auto relative z-10">
 <div className="text-center max-w-4xl mx-auto mb-20">
 <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
 THE ORIGINS OF <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">SpAss</span>
 </h2>
 <p className="text-xl text-white">
 From sport assistance research to network
 </p>
 </div>

 <div className="max-w-4xl mx-auto">
 <div className="bg-[#F7ECD5]/80  p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative overflow-hidden group">
 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D86D55] to-[#71B554] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
 <div className="text-gray-700 leading-relaxed space-y-3">
 <p>
 SpAss is the sport assistance solution developed in an ongoing 18 months research project funded by the BMFTR program DATIpilot.
 </p>
 <p>
 It will run until March 2026 and is headed by the Universität Würzburg-based researcher Dr. Christiane Reuter and BVS Bayern Vice President Prof. Dr. David Rygl.
 </p>
 <p>
 Based on a pilot in Würzburg by Dr. Reuter in 2023, the ongoing research project focuses on how to integrate our sport assistance solution into existing communities, organizations, and institutions through diverse partnerships.
 </p>
 <p>
 To this end, we use design-based research and state-of-the-art marketing to create attractive, user-centered solutions. Our dual focus—research and design—generates valuable data on inclusive sports participation while building sustainable pathways towards inclusive sports communities.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Partner Network Section */}
 <PartnerNetwork />

 {/* Section Divider */}
 <div className="h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55] opacity-30" />

 {/* How It Works Timeline Section */}
 <section className="py-48 relative overflow-hidden">
 <div className="absolute inset-0">
 <img
 src="assistant picture 3 copy.jpg"
 alt="Inclusive running event with wheelchair participant"
 className="w-full h-full object-cover"
 style={{ objectPosition: 'center 30%' }}
 />
 <div className="absolute inset-0 bg-gray-900/60"></div>
 </div>

 <div className="max-w-6xl mx-auto px-4 relative z-10">
 <div className="text-center mb-16">
 <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
 How <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">Sp<span className="lowercase">A</span>ss</span> Works
 </h2>
 <p className="text-xl text-white italic">
 From qualification to independence—together
 </p>
 </div>

 <div className="relative">
 <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2 hidden lg:block"></div>

 <div className="grid lg:grid-cols-4 gap-8">
 {/* Step 1 */}
 <div className="text-center relative h-full">
 <div className="backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mb-8 lg:mb-0 h-full flex flex-col" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
 <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10 shrink-0" style={{ background: 'linear-gradient(135deg, #71B554, #D86D55)' }}>
 1
 </div>
 <h3 className="text-xl font-bold text-[#3F3E34] mb-3 shrink-0">Assistant Qualification</h3>
 <p className="text-[#3F3E34] text-sm leading-relaxed flex-grow">Aspiring assistants complete comprehensive training: 15 hours of self-paced e-learning and a full-day practical workshop to ensure they're ready to provide meaningful support.</p>
 </div>
 </div>

 {/* Step 2 */}
 <div className="text-center relative h-full">
 <div className="backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mb-8 lg:mb-0 h-full flex flex-col" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
 <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10 shrink-0" style={{ background: 'linear-gradient(135deg, #71B554, #D86D55)' }}>
 2
 </div>
 <h3 className="text-xl font-bold text-[#3F3E34] mb-3 shrink-0">Registration & Matching</h3>
 <p className="text-[#3F3E34] text-sm leading-relaxed flex-grow">Athletes and assistants register with partnering organizations like Lebenshilfe. Based on preferences, skills, schedules, and needs, the right matches are made through the ava platform.</p>
 </div>
 </div>

 {/* Step 3 */}
 <div className="text-center relative h-full">
 <div className="backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mb-8 lg:mb-0 h-full flex flex-col" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
 <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10 shrink-0" style={{ background: 'linear-gradient(135deg, #71B554, #D86D55)' }}>
 3
 </div>
 <h3 className="text-xl font-bold text-[#3F3E34] mb-3 shrink-0">First Steps & Sports Participation</h3>
 <p className="text-[#3F3E34] text-sm leading-relaxed flex-grow">Athletes and assistants get to know each other, choose the sport and club together, and begin regular participation. Support from Lebenshilfe and the TEAMiN community is there for the first sessions and beyond.</p>
 </div>
 </div>

 {/* Step 4 */}
 <div className="text-center relative h-full">
 <div className="backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mb-8 lg:mb-0 h-full flex flex-col" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
 <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10 shrink-0" style={{ background: 'linear-gradient(135deg, #71B554, #D86D55)' }}>
 4
 </div>
 <h3 className="text-xl font-bold text-[#3F3E34] mb-3 shrink-0">Fostering Independence</h3>
 <p className="text-[#3F3E34] text-sm leading-relaxed flex-grow">The goal is always independence through personal growth, strong team relationships, and community integration. Over time, support naturally reduces as athletes become fully part of their teams.</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Section Divider */}
 <div className="h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55] opacity-30" />

 {/* Success Stories Carousel */}
 <section className="py-24 px-6 relative bg-gray-900">
 {/* Background Image */}
 <div
 className="absolute inset-0 opacity-40"
 style={{
 backgroundImage: 'url("/assistant picture 1.jpg")',
 backgroundSize: '145%',
 backgroundPosition: 'center center',
 }}
 ></div>

 {/* Content */}
 <div className="relative z-10">
 <div className="max-w-7xl mx-auto">
 <div className="text-center max-w-4xl mx-auto mb-20">
 <h2 className="text-5xl md:text-6xl font-bold text-white">
 {t('spassNew.stories.title')}
 </h2>
 </div>

         <div className="max-w-3xl mx-auto bg-[#F7ECD5]/85 rounded-[30px] p-16 shadow-2xl overflow-hidden" ref={carouselRef} tabIndex={0} role="region" aria-label="Success stories carousel" aria-live="polite">
 <div className="relative">
 <div className="absolute top-4 right-4">
 <button
 onClick={togglePlayPause}
 className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
 aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
 >
 {isPlaying ? <Pause className="w-5 h-5 text-gray-700" /> : <Play className="w-5 h-5 text-gray-700" />}
 </button>
 </div>
 {stories.map((story, index) => (
 <div key={index} className={`text-center transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
 <Quote className="w-16 h-16 mx-auto mb-8 text-[#71B554]" />
 <p className="text-2xl italic leading-relaxed text-gray-900 mb-8 relative">
 {story.quote}
 </p>
 <p className="text-lg font-semibold text-[#71B554]">
 - {story.name}
 </p>
 </div>
 ))}
 </div>

 <div className="flex justify-center gap-4 mt-10">
 {stories.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentSlide(index)}
 className={`w-3 h-3 rounded-full transition-all duration-300 ${
 currentSlide === index
 ? 'bg-gradient-to-r from-[#D86D55] to-[#71B554] scale-125'
 : 'bg-gray-400 hover:scale-110'
 }`}
 aria-label={`Go to slide ${index + 1}`}
 aria-current={currentSlide === index ? 'true' : 'false'}
 />
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Section Divider */}
 <div className="h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55] opacity-30" />

 {/* Become Part of SpAss Section */}
 <section className="py-24 px-6 bg-[#F7ECD5]/50 ">
 <div className="max-w-7xl mx-auto">
 <div className="text-center max-w-4xl mx-auto mb-20">
 <h2 className="text-5xl md:text-6xl font-bold text-gray-900 ">
 {t('spassNew.pathways.title')}
 </h2>
 </div>

 <div className="grid md:grid-cols-3 gap-10">
 {/* Assistant Card */}
 <div className="relative rounded-[25px] p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
 <img loading="lazy" src="/assistant picture 2 crop copy.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-br from-[#D86D55]/90 to-[#D86D55]/80" />
 <div className="relative z-10 h-full flex flex-col justify-between">
 <div>
 <h3 className="text-3xl font-bold mb-4 text-white">
 {t('spassNew.pathways.assistant.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassNew.pathways.assistant.description')}
 </p>
 </div>
 <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-wider">
 {t('spassNew.pathways.assistant.cta1')}
 </button>
 </div>
 </div>

 {/* Athlete Card */}
 <div className="relative rounded-[25px] p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
 <img loading="lazy" src="/athlete 1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/90 to-[#71B554]/80" />
 <div className="relative z-10 h-full flex flex-col justify-between">
 <div>
 <h3 className="text-3xl font-bold mb-4 text-white">
 {t('spassNew.pathways.athlete.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassNew.pathways.athlete.description')}
 </p>
 </div>
 <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-wider">
 {t('spassNew.pathways.athlete.cta1')}
 </button>
 </div>
 </div>

 {/* Organization Card */}
 <div className="relative rounded-[25px] p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
 <img loading="lazy" src="/partner picture-min.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-br from-[#3F3E34]/90 to-[#3F3E34]/85" />
 <div className="relative z-10 h-full flex flex-col justify-between">
 <div>
 <h3 className="text-3xl font-bold mb-4 text-white">
 {t('spassNew.pathways.organization.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassNew.pathways.organization.description')}
 </p>
 </div>
 <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-wider">
 {t('spassNew.pathways.organization.cta')}
 </button>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Section Divider */}
 <div className="h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55] opacity-30" />

 {/* FAQ Section */}
 <section className="py-24 px-6 bg-white ">
 <div className="max-w-7xl mx-auto">
 <div className="text-center max-w-4xl mx-auto mb-20">
 <h2 className="text-5xl md:text-6xl font-bold text-gray-900 ">
 {t('spassNew.faq.title')}
 </h2>
 </div>

          <div className="grid md:grid-cols-2 gap-10">
 {(t('spassNew.faq.categories', { returnObjects: true }) as FaqCategory[]).map((category, categoryIndex) => (
 <div key={categoryIndex} className="bg-[#F7ECD5] rounded-3xl p-10 shadow-lg">
 <h3 className="text-2xl font-bold mb-8 text-gray-900 pb-4 border-b-4 border-transparent" style={{ borderImage: 'linear-gradient(90deg, #D86D55, #71B554) 1' }}>
 {category.title}
 </h3>

 {category.items.map((item, itemIndex) => {
 const key = `${categoryIndex}-${itemIndex}`;
 const isActive = activeFaqItems.has(key);

 return (
 <div key={itemIndex} className="mb-5 border-b border-gray-300/20  pb-5">
 <div
 onClick={() => toggleFaq(categoryIndex, itemIndex)}
 className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center hover:text-[#D86D55] transition-colors duration-300"
 >
 <span>{item.question}</span>
 <span className={`w-8 h-8 bg-gradient-to-br from-[#D86D55] to-[#71B554] text-white rounded-full flex items-center justify-center text-xl transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
 +
 </span>
 </div>
 {isActive && (
 <div className="mt-4 text-base text-gray-700 leading-relaxed">
 {item.answer}
 </div>
 )}
 </div>
 );
 })}
 </div>
 ))}
 </div>
 </div>
 </section>
 </div>
 );
};

export default SpAss;
