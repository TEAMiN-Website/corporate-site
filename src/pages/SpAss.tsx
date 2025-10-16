import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
 const navigate = useNavigate();
 const [currentSlide, setCurrentSlide] = useState(0);
 const [isPlaying, setIsPlaying] = useState(true);
 const [activeFaqItems, setActiveFaqItems] = useState<Set<string>>(new Set());
 const [elearningExpanded, setElearningExpanded] = useState(false);
 const [practiceDayExpanded, setPracticeDayExpanded] = useState(false);
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
 {t('spassPage.hero.title')}
 </p>
 <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed" style={{ color: '#3F3E34' }}>
 We leverage the power of communities to support athletes' independent participation in regular sports clubs.
 </p>
 <div className="flex justify-center mb-8">
 <button
 onClick={scrollToNextSection}
 className="bg-white px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">{t('spassPage.hero.explore')}</span>
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
 {t('spassPage.origins.title')}
 </h2>
 <p className="text-xl text-white">
 {t('spassPage.origins.subtitle')}
 </p>
 </div>

 <div className="max-w-4xl mx-auto">
 <div className="bg-[#F7ECD5]/80  p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative overflow-hidden group">
 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D86D55] to-[#71B554] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
 <div className="text-gray-700 leading-relaxed space-y-3">
 <p>
 {t('spassPage.origins.description1')}
 </p>
 <p>
 {t('spassPage.origins.description2')}
 </p>
 <p>
 {t('spassPage.origins.description3')}
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
 {t('spassPage.howItWorks.title')}
 </h2>
 <p className="text-xl text-white italic">
 {t('spassPage.howItWorks.subtitle')}
 </p>
 </div>

 <div className="relative">
 <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2 hidden lg:block"></div>

 <div className="grid lg:grid-cols-4 gap-8">
 {(t('spassPage.howItWorks.steps', { returnObjects: true }) as Array<{number: string, title: string, description: string}>).map((step, index) => (
 <div key={index} className="text-center relative h-full">
 <div className="backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mb-8 lg:mb-0 h-full flex flex-col" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
 <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10 shrink-0" style={{ background: 'linear-gradient(135deg, #71B554, #D86D55)' }}>
 {step.number}
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

 {/* Section Divider */}
 <div className="h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55] opacity-30" />

 {/* Qualification Section */}
 <section className="py-24 px-6 bg-[#F7ECD5]/50">
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
 State-of-the-Art Sport Assistant Qualification
 </h2>
 <p className="text-xl text-gray-700 italic">
 Making <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent" style={{ textTransform: 'none' }}>SpAss</span> safe and effective through online and in-person training
 </p>
 </div>

 {/* E-Learning Modules Accordion */}
 <div className="mb-8">
 <button
 onClick={() => setElearningExpanded(!elearningExpanded)}
 className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white hover:shadow-lg transition-all duration-300"
 aria-expanded={elearningExpanded}
 >
 <span className="text-xl font-semibold">E-Learning Modules (15 hours online)</span>
 <ChevronDown
 className={`w-6 h-6 transition-transform duration-300 ${elearningExpanded ? 'rotate-180' : ''}`}
 />
 </button>

 <div
 className={`overflow-hidden transition-all duration-500 ${elearningExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}
 >
 <div className="mt-6 grid md:grid-cols-2 gap-6">
 {/* Module 1 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 1: Introduction</h4>
 <p className="text-gray-700">
 Understand the course structure, organizational details, and the importance of sport assistance for inclusion.
 </p>
 </div>

 {/* Module 2 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 2: People with Disabilities</h4>
 <p className="text-gray-700">
 Learn about different types of disabilities, the diversity within this community, and the barriers they face in sports participation.
 </p>
 </div>

 {/* Module 3 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 3: Inclusion</h4>
 <p className="text-gray-700">
 Explore what inclusion means, why it matters, and how targeted measures can create meaningful participation in society and sports.
 </p>
 </div>

 {/* Module 4 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 4: Accessibility</h4>
 <p className="text-gray-700">
 Identify barriers to participation and understand how accessible design enables independence and inclusion in sports settings.
 </p>
 </div>

 {/* Module 5 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 5: Sport and Movement</h4>
 <p className="text-gray-700">
 Discover why physical activity matters for health and wellbeing, and the specific challenges people with disabilities face in accessing sports.
 </p>
 </div>

 {/* Module 6 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 6: Sport and Inclusion</h4>
 <p className="text-gray-700">
 Apply practical models and frameworks for creating inclusive sports activities in diverse groups and mainstream club settings.
 </p>
 </div>

 {/* Module 7 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 7: Assistance</h4>
 <p className="text-gray-700">
 Define the role of a sport assistant, understand your responsibilities, and learn how to provide effective, empowering support.
 </p>
 </div>

 {/* Module 8 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 8: Prevention</h4>
 <p className="text-gray-700">
 Recognize risks and warning signs, particularly around safeguarding, and learn how to create safe, respectful sports environments.
 </p>
 </div>

 {/* Module 9 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 9: Essential Competencies</h4>
 <p className="text-gray-700">
 Develop key skills including communication, feedback, empathy, and adaptability that make you an effective assistant.
 </p>
 </div>

 {/* Module 10 */}
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
 <h4 className="text-lg font-bold text-[#71B554] mb-2">Module 10: Knowledge Assessment</h4>
 <p className="text-gray-700">
 Apply and consolidate everything you've learned through practical scenarios and comprehensive testing.
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Practice Day Accordion */}
 <div className="mb-8">
 <button
 onClick={() => setPracticeDayExpanded(!practiceDayExpanded)}
 className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white hover:shadow-lg transition-all duration-300"
 aria-expanded={practiceDayExpanded}
 >
 <span className="text-xl font-semibold">Practice Day (Full-day hands-on workshop)</span>
 <ChevronDown
 className={`w-6 h-6 transition-transform duration-300 ${practiceDayExpanded ? 'rotate-180' : ''}`}
 />
 </button>

 <div
 className={`overflow-hidden transition-all duration-500 ${practiceDayExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}
 >
 <div className="mt-6 bg-white p-8 rounded-xl shadow-md">
 <p className="text-gray-700 text-lg mb-8 leading-relaxed">
 Experience disability perspectives firsthand and build confidence through practical, experiential learning with experienced trainers and fellow aspiring assistants.
 </p>

 <div className="space-y-6">
 {/* Component 1 */}
 <div className="border-l-4 border-[#71B554] pl-6">
 <h4 className="text-xl font-bold text-gray-900 mb-2">Experiencing Different Perspectives</h4>
 <p className="text-gray-700">
 Practice using wheelchairs, blindfolds, and other adaptive equipment to understand the challenges and possibilities of adapted sports firsthand.
 </p>
 </div>

 {/* Component 2 */}
 <div className="border-l-4 border-[#D86D55] pl-6">
 <h4 className="text-xl font-bold text-gray-900 mb-2">Adapted Sports Activities</h4>
 <p className="text-gray-700">
 Learn and play blind football, wheelchair basketball, and other inclusive games. Discover how to modify activities so everyone can participate meaningfully.
 </p>
 </div>

 {/* Component 3 */}
 <div className="border-l-4 border-[#71B554] pl-6">
 <h4 className="text-xl font-bold text-gray-900 mb-2">Your Role as Assistant</h4>
 <p className="text-gray-700">
 Explore what it means to support "with" someone rather than doing things "for" them. Practice empowering approaches through group exercises and role-plays.
 </p>
 </div>

 {/* Component 4 */}
 <div className="border-l-4 border-[#D86D55] pl-6">
 <h4 className="text-xl font-bold text-gray-900 mb-2">Prevention & Safety</h4>
 <p className="text-gray-700">
 Understand boundaries, proximity, and how to create safe, respectful environments for all participants.
 </p>
 </div>

 {/* Component 5 */}
 <div className="border-l-4 border-[#71B554] pl-6">
 <h4 className="text-xl font-bold text-gray-900 mb-2">Building Confidence</h4>
 <p className="text-gray-700">
 Work through real scenarios, address fears and questions, and leave feeling prepared to start your journey as a sport assistant.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Section Divider */}
 <div className="h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55] opacity-30" />

 {/* Success Stories Carousel */}
 <section className="py-24 px-6 relative bg-gray-900 hidden">
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
 {t('spassPage.becomePart.assistants.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassPage.becomePart.assistants.description')}
 </p>
 </div>
 <button onClick={() => navigate('/volunteers')} className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider">
 {t('spassPage.becomePart.assistants.cta')}
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
 {t('spassPage.becomePart.athletes.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassPage.becomePart.athletes.description')}
 </p>
 </div>
 <button onClick={() => navigate('/athletes')} className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider">
 {t('spassPage.becomePart.athletes.cta')}
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
 {t('spassPage.becomePart.organizations.title')}
 </h3>
 <p className="text-lg text-white/90 mb-6 leading-relaxed">
 {t('spassPage.becomePart.organizations.description')}
 </p>
 </div>
 <button onClick={() => navigate('/partners')} className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider">
 {t('spassPage.becomePart.organizations.cta')}
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
