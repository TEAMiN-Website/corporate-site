import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ChevronDown } from 'lucide-react';

const Signup: React.FC = () => {
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
 <section className="min-h-screen relative overflow-hidden hero-section signup-hero-parallax">
 <div className="absolute inset-0 bg-black/10"></div>

 <div className="absolute inset-0 bg-[#D86D55]/40"></div>

 <div className="relative z-10 flex items-center justify-center min-h-screen">
 <div className="w-full max-w-4xl text-center px-8 pb-32 pt-20 md:pt-32 lg:pt-24 xl:pt-0 flex flex-col items-center">
 <img
 src="/TEAMiN Logo short copy.png"
 alt="TEAMiN Logo"
 className="w-36 h-36 md:w-48 md:h-48 object-contain mb-16 opacity-30 mt-12 md:mt-16 lg:mt-12 xl:mt-0"
 />
 <h1 className="text-4xl lghover:text-5xl xlhover:text-6xl font-bold text-white mb-6 leading-tight uppercase">
 {t('signupNew.hero.title')}
 </h1>
 <p className="text-xl lghover:text-2xl text-white mb-8 opacity-90 leading-relaxed">
 {t('signupNew.hero.subtitle')}
 </p>
 <div className="flex justify-center mb-8">
 <button
 onClick={scrollToNextSection}
 className="bg-white text-[#D86D55] px-10 py-4 rounded-full font-semibold text-xl hoverhover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
 >
 {t('signupNew.hero.cta')}
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

 {/* CTA Cards Section */}
 <section className="py-24 bg-white">
 <div className="max-w-6xl mx-auto px-4">
 <div className="text-center mb-20">
 <h2 className="text-4xl mdhover:text-5xl font-bold text-[#3F3E34] mb-6">
 {t('signupNew.training.title')}
 </h2>
 </div>

 <div className="grid md:grid-cols-3 gap-8">
 {/* E-Learning Card */}
 <div className="bg-[#F7ECD5] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#D86D55]">
 <div className="bg-[#D86D55] p-10 text-center relative overflow-hidden h-48">
 {/* Number 1 in top right corner */}
 <div className="absolute top-4 right-4">
 <span className="text-white font-bold text-2xl">1</span>
 </div>
 
 {/* Background Image with Overlay */}
 <div className="absolute inset-0">
 <img 
 src="elearning-min.jpg"
 alt="E-learning background"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-[#D86D55]/80"></div>
 </div>
 
 <div className="relative z-10 h-full flex items-center justify-center">
 <h3 className="text-white text-2xl font-semibold mb-2">{t('signupNew.training.elearning.title')}</h3>
 </div>
 </div>
 
 <div className="p-8">
 <div className="bg-white p-5 rounded-xl mb-5 min-h-[80px] flex items-center justify-center">
 <p className="text-[#3F3E34] italic text-center">{t('signupNew.training.elearning.description')}</p>
 </div>
 
 <a
 href="https://campus.bvs-bayern.com/login/signup.php"
 target="_blank"
 rel="noopener noreferrer"
 className="w-full bg-[#D86D55] text-white py-4 px-6 rounded-xl font-semibold hoverhover:bg-[#C55A47] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
 >
 {t('signupNew.training.elearning.cta')} <ExternalLink className="w-4 h-4" />
 </a>
 </div>
 </div>

 {/* Praxistag Card */}
 <div className="bg-[#F7ECD5] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#D86D55]">
 <div className="bg-[#D86D55] p-10 text-center relative overflow-hidden h-48">
 {/* Number 2 in top right corner */}
 <div className="absolute top-4 right-4">
 <span className="text-white font-bold text-2xl">2</span>
 </div>
 
 {/* Background Image with Overlay */}
 <div className="absolute inset-0">
 <img 
 src="athlete 7-min-min.jpg"
 alt="Praxistag background"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-[#D86D55]/80"></div>
 </div>
 
 <div className="relative z-10 h-full flex items-center justify-center">
 <h3 className="text-white text-2xl font-semibold mb-2">{t('signupNew.training.practiceDay.title')}</h3>
 </div>
 </div>
 
 <div className="p-8">
 <div className="bg-white p-5 rounded-xl mb-5 min-h-[80px] flex items-center justify-center">
 <p className="text-[#3F3E34] italic text-center">{t('signupNew.training.practiceDay.description')}</p>
 </div>
 
 <a
 href="https://bvs-bayern.com/aus+fortbildung/spass/spass-praesenztag/"
 target="_blank"
 rel="noopener noreferrer"
 className="w-full bg-[#D86D55] text-white py-4 px-6 rounded-xl font-semibold hoverhover:bg-[#C55A47] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
 >
 {t('signupNew.training.practiceDay.cta')} <ExternalLink className="w-4 h-4" />
 </a>
 </div>
 </div>

 {/* SSO Partner Card */}
 <div className="bg-[#F7ECD5] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#3F3E34]">
 <div className="bg-[#3F3E34] p-10 text-center relative overflow-hidden h-48">
 {/* Background Image with Overlay */}
 <div className="absolute inset-0">
 <img 
 src="partner picture-min.jpg"
 alt="Partner background"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-[#3F3E34]/80"></div>
 </div>
 
 <div className="relative z-10 h-full flex items-center justify-center">
 <h3 className="text-white text-2xl font-semibold mb-2">{t('signupNew.training.partner.title')}</h3>
 </div>
 </div>
 
 <div className="p-8">
 <div className="bg-white p-5 rounded-xl mb-5 min-h-[80px] flex items-center justify-center">
 <p className="text-[#3F3E34] italic text-center">{t('signupNew.training.partner.description')}</p>
 </div>
 
 <button className="w-full bg-[#3F3E34] text-white py-4 px-6 rounded-xl font-semibold hoverhover:bg-[#2F2E24] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2">
 {t('signupNew.training.partner.cta')} <ExternalLink className="w-4 h-4" />
 </button>
 </div>
 </div>
 </div>

 <div className="text-center mt-12">
 <p className="text-sm text-[#3F3E34] max-w-4xl mx-auto">
 {t('signupNew.training.note')}
 </p>
 </div>
 </div>
 </section>

 {/* Meet Aurelian Section */}
 <section className="py-24 bg-[#F7ECD5]">
 <div className="max-w-3xl mx-auto px-4">
 <div className="text-center">
 <div className="relative rounded-[25px] p-16 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl overflow-hidden h-96 flex flex-col justify-center items-center">
 {/* Background Image */}
 <img
 src="aurelian 3-min-min.jpg"
 alt="Aurelian smiling in sports jersey"
 className="absolute inset-0 w-full h-full object-cover"
 style={{ objectPosition: 'center 20%' }}
 />
 <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/90 to-[#71B554]/80"></div>

 <div className="relative z-10 text-center">
 <h2 className="text-4xl font-bold text-white mb-6">{t('signupNew.aurelian.title')}</h2>
 <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white/10 text-white border-2 border-white backdrop-blur-sm hoverhover:bg-white hoverhover:text-gray-900 transition-all duration-300 uppercase tracking-wider">
 {t('signupNew.aurelian.cta')}
 </button>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Signup;