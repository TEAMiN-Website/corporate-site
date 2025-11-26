import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Aurelian: React.FC = () => {
 const { t } = useTranslation();
 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const carouselImages = ['aurelian 2.jpg', 'Aurelian 5-min.jpg', 'aurelian 3-min copy.jpg'];

 useEffect(() => {
 const interval = setInterval(() => {
 setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
 }, 4000);
 return () => clearInterval(interval);
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

 return (
 <div>
 {/* Hero Section */}
 <section className="min-h-screen relative overflow-hidden hero-section">
 <div className="absolute inset-0">
 <img
 src="Aurelian 1-min.jpg"
 alt="Aurelian playing football"
 className="w-full h-full object-cover"
 style={{ objectPosition: 'center 20%' }}
 fetchpriority="high"
 />
 <div className="absolute inset-0 bg-black/40"></div>
 </div>

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
 {t('aurelian.title')}
 </h1>
 <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
 {t('aurelian.hero.description')}
 </p>
 <div className="flex justify-center mb-8">
 <button
 onClick={scrollToNextSection}
 className="bg-white text-[#71B554] px-10 py-4 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 {t('nav.aurelian')}
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

 {/* Full Width Carousel Section */}
 <section className="bg-white">
 {/* Carousel with Title Overlay */}
 <div className="relative">
 {/* Carousel Images */}
 <div className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
 {carouselImages.map((image, index) => (
 <div
 key={image}
 className={`absolute inset-0 transition-opacity duration-1000 ${
 index === currentImageIndex ? 'opacity-100' : 'opacity-0'
 }`}
 >
 <img
 src={image}
 alt={`Aurelian ${index + 1}`}
 className="w-full h-full object-cover"
 style={{ objectPosition: 'center center' }}
 />
 </div>
 ))}

 {/* Dark overlay for title readability */}
 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>

 {/* Green Content Section Overlay at Bottom */}
 <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#71B554]/75 p-6 lg:p-10 xl:p-12 text-white">
 <div className="max-w-4xl mx-auto">
 <blockquote className="text-lg lg:text-xl xl:text-2xl leading-relaxed mb-4 lg:mb-6 italic font-light text-center">
 "{t('aurelian.quoteShort')}"
 </blockquote>
 <p className="text-base lg:text-lg font-semibold text-center">
 {t('aurelian.attribution')}
 </p>
 </div>
 </div>
 </div>

 {/* Title Overlay at Top */}
 <div className="absolute top-0 left-0 right-0 z-10 pt-8 lg:pt-12 px-6 lg:px-12">
 <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight uppercase text-center">
 {t('about.statistics.heading')}
 </h2>
 </div>

 {/* Carousel Indicators */}
 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
 {carouselImages.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentImageIndex(index)}
 className={`w-3 h-3 rounded-full transition-all duration-300 ${
 index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
 }`}
 aria-label={`Go to image ${index + 1}`}
 />
 ))}
 </div>
 </div>
 </section>


 {/* CTA Section */}
 <section className="py-24 bg-[#F7ECD5]">
 <div className="max-w-4xl mx-auto px-4 text-center">
 <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6">
 {t('about.cta.heading')}
 </h2>
 <p className="text-xl text-[#B3ADAA] mb-12 max-w-2xl mx-auto">
 {t('homeNew.paths.title')}
 </p>

 <div className="flex flex-col sm:flex-row gap-6 justify-center">
 <Link
 to="/athletes"
 className="bg-[#71B554] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#5FA044] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 {t('about.cta.athletes.title')}
 </Link>
 <Link
 to="/volunteers"
 className="bg-[#D86D55] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#C55A47] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 {t('about.cta.volunteering.title')}
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Aurelian;
