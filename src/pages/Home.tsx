import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../utils/contactService';

const Home: React.FC = () => {
 const { t } = useTranslation();
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 message: ''
 });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState<{
 type: 'success' | 'error' | null;
 message: string;
 }>({ type: null, message: '' });

 const scrollToNextSection = () => {
 const heroSection = document.querySelector('.hero-section');
 if (heroSection) {
 const nextSection = heroSection.nextElementSibling;
 if (nextSection) {
 nextSection.scrollIntoView({ behavior: 'smooth' });
 }
 }
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 setFormData({
 ...formData,
 [e.target.name]: e.target.value
 });
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setIsSubmitting(true);
 setSubmitStatus({ type: null, message: '' });

 const result = await submitContactForm(formData);

 if (result.success) {
 setSubmitStatus({
 type: 'success',
 message: t('contact.form.success') || 'Thank you for contacting us! We will get back to you soon.',
 });
 // Reset form
 setFormData({ name: '', email: '', message: '' });
 } else {
 setSubmitStatus({
 type: 'error',
 message: result.message || t('contact.form.error') || 'Something went wrong. Please try again.',
 });
 }

 setIsSubmitting(false);
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
 src="/TEAMiN Logo short copy.png"
 alt="TEAMiN Logo"
 className="w-36 h-36 md:w-48 md:h-48 object-contain mb-16 opacity-30 mt-12 md:mt-16 lg:mt-12 xl:mt-0"
 />
 <h1 className="text-4xl lghover:text-5xl xlhover:text-6xl font-bold text-white mb-6 leading-tight uppercase">
 {t('homeNew.hero.title')}
 </h1>
 <p className="text-xl lghover:text-2xl text-white mb-8 opacity-90 leading-relaxed">
 {t('homeNew.hero.subtitle')}
 </p>
 <div className="flex justify-center mb-8">
 <button
 onClick={scrollToNextSection}
 className="bg-white text-[#D86D55] px-10 py-4 rounded-full font-semibold text-xl hoverhover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
 />
 <div className="absolute inset-0 bg-[#F7ECD5]/60 "></div>
 </div>

 <div className="max-w-6xl mx-auto px-4 relative z-10">
 <h2 className="text-4xl mdhover:text-5xl font-bold text-center mb-16 text-[#3F3E34] uppercase">
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
 />
 <div className="absolute inset-0 bg-[#D86D55]/10"></div>
 </div>

 <div className="p-8 text-center flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.becomeAssistant.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic flex-grow">{t('homeNew.paths.becomeAssistant.description')}</p>
 <Link
 to="/volunteers"
 className="inline-block bg-[#D86D55] text-white px-8 py-3 rounded-full font-semibold tracking-wider text-sm hoverhover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
 />
 <div className="absolute inset-0 bg-[#71B554]/10"></div>
 </div>

 <div className="p-8 text-center flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('homeNew.paths.athletesFamilies.title')}</h3>
 <p className="text-[#B3ADAA] mb-6 italic flex-grow">{t('homeNew.paths.athletesFamilies.description')}</p>
 <Link
 to="/athletes"
 className="inline-block bg-[#71B554] text-white px-8 py-3 rounded-full font-semibold tracking-wider text-sm hoverhover:bg-gradient-to-r hover:from-[#71B554] hover:to-[#D86D55] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
 <h2 className="text-4xl mdhover:text-5xl font-bold text-center mb-16 text-white">
 {t('homeNew.contact.title')}
 </h2>

 <div className="bg-[#F7ECD5]/95 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden z-10">
 {/* Decorative gradient circle */}
 <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#71B554]/10 to-transparent rounded-full"></div>
 
 {/* Status Messages */}
 {submitStatus.type === 'success' && (
 <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 rounded-xl flex items-start space-x-3 relative z-10">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <p className="text-green-800 font-medium">{submitStatus.message}</p>
 </div>
 )}
 
 {submitStatus.type === 'error' && (
 <div className="mb-6 p-4 bg-red-100 border-2 border-red-500 rounded-xl flex items-start space-x-3 relative z-10">
 <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
 <p className="text-red-800 font-medium">{submitStatus.message}</p>
 </div>
 )}
 
 <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
 <div>
 <label className="block text-sm font-semibold !text-[#3F3E34] mb-2 uppercase tracking-wider">
 {t('homeNew.contact.form.name')}
 </label>
 <input
 type="text"
 name="name"
 value={formData.name}
 onChange={handleChange}
 className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base text-gray-900 transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
 required
 />
 </div>

 <div>
 <label className="block text-sm font-semibold !text-[#3F3E34] mb-2 uppercase tracking-wider">
 {t('homeNew.contact.form.email')}
 </label>
 <input
 type="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base text-gray-900 transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
 required
 />
 </div>

 <div>
 <label className="block text-sm font-semibold !text-[#3F3E34] mb-2 uppercase tracking-wider">
 {t('homeNew.contact.form.message')}
 </label>
 <textarea
 name="message"
 value={formData.message}
 onChange={handleChange}
 rows={4}
 className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base text-gray-900 resize-vertical transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
 required
 ></textarea>
 </div>

 <button
 type="submit"
 disabled={isSubmitting}
 className="w-full bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-4 rounded-full font-semibold text-lg uppercase tracking-wider hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabledhover:translate-y-0 flex items-center justify-center"
 >
 {isSubmitting ? (
 <>
 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
 </svg>
 {t('homeNew.contact.form.submitting') || 'Sending...'}
 </>
 ) : (
 t('homeNew.contact.form.send')
 )}
 </button>
 </form>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Home;