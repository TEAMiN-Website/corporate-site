import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, ChevronDown, Play, Pause } from 'lucide-react';
import { trackHeroCTAClick, trackTestimonialViewed, trackSignupIntent } from '../utils/analytics';
import useScrollDepthTracking from '../hooks/useScrollDepthTracking';
import AvaSlideIn from '../components/AvaSlideIn';

interface Testimonial {
  quote: string;
  name: string;
}

interface BenefitCard {
  title: string;
  description: string;
}

interface JourneyStep {
  title: string;
  description: string;
}

interface GetStartedOption {
  title: string;
  description: string;
  cta: string;
}

const Volunteers: React.FC = () => {
 const { t } = useTranslation();
 const [currentTestimonial, setCurrentTestimonial] = useState(0);
 const [isPlaying, setIsPlaying] = useState(true);
 const carouselRef = useRef<HTMLDivElement>(null);
 const testimonials = t('volunteersNew.stories.testimonials', { returnObjects: true }) as Testimonial[];
 
 // Track scroll depth
 useScrollDepthTracking();
 
 // Track signup intent when page is viewed
 useEffect(() => {
   trackSignupIntent('volunteer');
 }, []);

 const nextTestimonial = () => {
 const newIndex = (currentTestimonial + 1) % testimonials.length;
 setCurrentTestimonial(newIndex);
 trackTestimonialViewed('/volunteers', testimonials[newIndex]?.name);
 };

 const prevTestimonial = () => {
 const newIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
 setCurrentTestimonial(newIndex);
 trackTestimonialViewed('/volunteers', testimonials[newIndex]?.name);
 };

 // Auto-play carousel
 useEffect(() => {
 if (!isPlaying) return;

 const interval = setInterval(() => {
 nextTestimonial();
 }, 5000);

 return () => clearInterval(interval);
 }, [isPlaying, testimonials.length]);

 // Keyboard navigation
 useEffect(() => {
 const handleKeyDown = (event: KeyboardEvent) => {
 if (carouselRef.current && carouselRef.current.contains(document.activeElement)) {
 if (event.key === 'ArrowLeft') {
 event.preventDefault();
 prevTestimonial();
 } else if (event.key === 'ArrowRight') {
 event.preventDefault();
 nextTestimonial();
 } else if (event.key === ' ' || event.key === 'Enter') {
 event.preventDefault();
 setIsPlaying((prev) => !prev);
 }
 }
 };

 document.addEventListener('keydown', handleKeyDown);
 return () => document.removeEventListener('keydown', handleKeyDown);
 }, []);

 const togglePlayPause = () => {
 setIsPlaying((prev) => !prev);
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

 return (
 <div>
 {/* Hero Section */}
 <section className="min-h-screen relative overflow-hidden hero-section volunteers-hero-parallax">
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
 {t('volunteersNew.hero.title')}
 </h1>
 <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
 {t('volunteersNew.hero.subtitle')}
 </p>
 <div className="flex justify-center mb-8">
 <button
 onClick={() => {
   trackHeroCTAClick('/volunteers', t('volunteersNew.hero.joinNow'));
   scrollToNextSection();
 }}
 className="bg-white text-[#D86D55] px-10 py-4 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 {t('volunteersNew.hero.joinNow')}
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

 {/* Why Become Sport Assistant Section */}
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
 {t('volunteersNew.benefits.title')}
 </h2>
 <p className="text-xl text-[#B3ADAA] max-w-3xl mx-auto italic">
 {t('volunteersNew.benefits.subtitle')}
 </p>
 </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
 {(t('volunteersNew.benefits.cards', { returnObjects: true }) as BenefitCard[]).map((card, index) => {
 const backgrounds = [
 { image: '/assistant page tile sharing.jpg', overlay: 'rgba(216, 109, 85, 0.6)' },
 { image: '/assistant page tile flexible.jpg', overlay: 'rgba(63, 62, 52, 0.6)' },
 { image: '/assistant page tile grow.jpg', overlay: 'rgba(63, 62, 52, 0.6)' },
 { image: '/assistant page tile human.jpg', overlay: 'rgba(216, 109, 85, 0.6)' }
 ];
 return (
 <div key={index} className="relative p-8 rounded-2xl shadow-lg overflow-hidden">
 <img loading="lazy" src={backgrounds[index].image} alt="" className="absolute inset-0 w-full h-full object-cover" />
 <div className="absolute inset-0" style={{ backgroundColor: backgrounds[index].overlay }}></div>
 <div className="relative z-10 text-center">
 <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
 <p className="text-white leading-relaxed">{card.description}</p>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* Journey Timeline Section */}
 <section className="py-48 relative overflow-hidden">
 <div className="absolute inset-0">
 <img
 src="assistant picture 3 copy.jpg"
 alt="Inclusive running event with wheelchair participant"
 className="w-full h-full object-cover"
 style={{ objectPosition: 'center 30%' }}
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gray-900/60"></div>
 </div>

 <div className="max-w-6xl mx-auto px-4 relative z-10">
 <div className="text-center mb-16">
 <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
 {t('volunteersNew.journey.title')}
 </h2>
 <p className="text-xl text-white italic">
 {t('volunteersNew.journey.subtitle')}
 </p>
 </div>

 <div className="relative">
 <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2 hidden lg:block"></div>

           <div className="grid lg:grid-cols-4 gap-8">
 {(t('volunteersNew.journey.steps', { returnObjects: true }) as JourneyStep[]).map((step, index) => (
 <div key={index} className="text-center relative h-full">
 <div className="backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8 lg:mb-0 h-full flex flex-col" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
 <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10 shrink-0" style={{ backgroundColor: 'rgba(216, 109, 85, 0.85)' }}>
 {index + 1}
 </div>
 <h3 className="text-xl font-bold text-[#3F3E34] mb-3 shrink-0">{step.title}</h3>
 <p className="text-[#3F3E34] text-sm leading-relaxed flex-grow">{step.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* Your Contribution Section */}
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

 <div className="max-w-7xl mx-auto px-4 relative z-10">
 <div className="text-center mb-16">
 <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6 uppercase">
 {t('contribution.title')}
 </h2>
 </div>

 <div className="grid md:grid-cols-3 gap-8">
 {/* Tile 1: Your Role as an Assistant */}
 <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(216, 109, 85, 0.6)' }}>
 <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('contribution.yourRole.title')}</h3>
 <p className="text-white mb-4 font-semibold">{t('contribution.yourRole.subtitle')}</p>
 <ul className="space-y-3 text-white">
 {(t('contribution.yourRole.points', { returnObjects: true }) as string[]).map((point, idx) => (
 <li key={idx} className="flex items-start gap-2">
 <span>{['🤝', '🔍', '💪', '💬'][idx]}</span>
 <span>{point}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Tile 2: The Commitment */}
 <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(216, 109, 85, 0.6)' }}>
 <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('contribution.commitment.title')}</h3>

 {/* Equation Layout */}
 <div className="flex items-start gap-4 mb-4">
 {/* Initial Training Column */}
 <div className="flex-1">
 <p className="text-white font-semibold mb-2">{t('contribution.commitment.initial.label')}</p>
 <ul className="text-white text-sm space-y-1">
 <li>{t('contribution.commitment.initial.hours')}</li>
 <li>{t('contribution.commitment.initial.workshop')}</li>
 </ul>
 </div>

 {/* Plus Sign */}
 <div className="text-white text-3xl font-bold pt-4">+</div>

 {/* Ongoing Column */}
 <div className="flex-1">
 <p className="text-white font-semibold mb-2">{t('contribution.commitment.ongoing.label')}</p>
 <ul className="text-white text-sm space-y-1">
 <li>{t('contribution.commitment.ongoing.hours')}</li>
 <li>{t('contribution.commitment.ongoing.duration')}</li>
 </ul>
 </div>
 </div>

 {/* Equals and Result */}
 <div className="border-t-2 border-white/30 pt-4 mt-4">
 <p className="text-white text-center font-semibold mb-1">{t('contribution.commitment.timeframe')}</p>
 <p className="text-white text-center text-lg font-bold mb-2">{t('contribution.commitment.comparison')}</p>
 <p className="text-white text-center text-xs opacity-80">{t('contribution.commitment.note')}</p>
 </div>
 </div>

 {/* Tile 3: Our Support */}
 <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(216, 109, 85, 0.6)' }}>
 <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('contribution.support.title')}</h3>
 <ul className="space-y-4 text-white">
 <li className="flex items-start gap-2">
 <span>🎓</span>
 <div>
 <p className="font-semibold">{t('contribution.support.qualification.title')}</p>
 <p className="text-sm">{t('contribution.support.qualification.description')}</p>
 </div>
 </li>
 <li className="flex items-start gap-2">
 <span>👥</span>
 <div>
 <p className="font-semibold">{t('contribution.support.community.title')}</p>
 <p className="text-sm">{t('contribution.support.community.description')}</p>
 </div>
 </li>
 <li className="flex items-start gap-2">
 <span>📚</span>
 <div>
 <p className="font-semibold">{t('contribution.support.resources.title')}</p>
 <p className="text-sm">{t('contribution.support.resources.description')}</p>
 </div>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* Community Stories Section - Testimonials */}
 <section className="py-24 relative overflow-hidden">
 {/* Background Image */}
 <div className="absolute inset-0">
 <img
 src="/assistant picture 2.jpg"
 alt="Background"
 className="absolute inset-0 w-full h-full object-cover opacity-30"
 style={{ transform: 'scale(1.5)' }}
 />
 <div className="absolute inset-0 bg-[#F7ECD5]/60"></div>
 </div>

 <div className="max-w-3xl mx-auto px-4 relative z-10">
         <div className="text-center mb-16">
           <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6 uppercase">
             {t('volunteersNew.stories.title')}
           </h2>
         </div> <div className="relative" ref={carouselRef} tabIndex={0} role="region" aria-label="Testimonials carousel" aria-live="polite">
 {/* Carousel Container */}
 <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-xl">
 <div className="mb-6 flex justify-between items-center">
 <svg className="w-12 h-12 text-[#D86D55] opacity-50" fill="currentColor" viewBox="0 0 24 24">
 <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
 </svg>
 <button
 onClick={togglePlayPause}
 className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
 aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
 >
 {isPlaying ? <Pause className="w-5 h-5 text-gray-700" /> : <Play className="w-5 h-5 text-gray-700" />}
 </button>
 </div>
 <p className="text-xl lg:text-2xl text-[#B3ADAA] italic mb-8 leading-relaxed min-h-[160px]">
 "{testimonials[currentTestimonial]?.quote}"
 </p>
 <p className="font-semibold text-[#D86D55] text-lg">— {testimonials[currentTestimonial]?.name}</p>
 </div>

 {/* Navigation Buttons */}
 <button
 onClick={prevTestimonial}
 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 bg-white text-[#D86D55] p-3 rounded-full shadow-lg hover:bg-[#D86D55] hover:text-white transition-all duration-300 hover:scale-110"
 aria-label="Previous testimonial"
 >
 <ChevronLeft className="w-6 h-6" />
 </button>
 <button
 onClick={nextTestimonial}
 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 bg-white text-[#D86D55] p-3 rounded-full shadow-lg hover:bg-[#D86D55] hover:text-white transition-all duration-300 hover:scale-110"
 aria-label="Next testimonial"
 >
 <ChevronRight className="w-6 h-6" />
 </button>

 {/* Dots Indicator */}
 <div className="flex justify-center gap-2 mt-8">
 {testimonials.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentTestimonial(index)}
 className={`w-3 h-3 rounded-full transition-all duration-300 ${
 index === currentTestimonial
 ? 'bg-[#D86D55] w-8'
 : 'bg-gray-300 hover:bg-gray-400'
 }`}
 aria-label={`Go to testimonial ${index + 1}`}
 aria-current={index === currentTestimonial ? 'true' : 'false'}
 />
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* Get Started Section */}
 <section className="py-24 relative overflow-hidden">
 <div className="absolute inset-0">
 <img
 src="Aurelian 1 copy.jpg"
 alt="Two people having friendly conversation"
 className="w-full h-full object-cover object-top"
 />
 <div className="absolute inset-0" style={{ backgroundColor: 'rgba(216, 109, 85, 0.2)' }}></div>
 </div>

 <div className="max-w-6xl mx-auto px-4 relative z-10">
 <div className="text-center mb-16">
 <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
 {t('volunteersNew.getStarted.title')}
 </h2>
 </div>

         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
 {(t('volunteersNew.getStarted.options', { returnObjects: true }) as GetStartedOption[]).filter((_, index) => index !== 1).map((entry, index) => (
 <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center relative overflow-hidden flex flex-col">
 <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55]"></div>
 <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">{entry.title}</h3>
 <p className="text-[#B3ADAA] mb-6 leading-relaxed flex-grow">{entry.description}</p>
 <Link
 to={index === 0 ? "/volunteers/signup" : "/contact"}
 className="inline-block bg-[#D86D55] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#71B554] transition-colors duration-300"
 >
 {entry.cta}
 </Link>
 </div>
 ))}
 </div>
 </div>
 </section>

 <AvaSlideIn pageType="assistant" />
 </div>
 );
};

export default Volunteers;
