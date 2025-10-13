import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const Volunteers: React.FC = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = t('volunteersNew.stories.testimonials', { returnObjects: true }) as any[];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
              src="/TEAMiN Logo short copy.png"
              alt="TEAMiN Logo"
              className="w-36 h-36 md:w-48 md:h-48 object-contain mb-16 opacity-30 mt-12 md:mt-16 lg:mt-12 xl:mt-0"
            />
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight uppercase">
              {t('volunteersNew.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 opacity-90 leading-relaxed">
              {t('volunteersNew.hero.subtitle')}
            </p>
            <div className="flex justify-center mb-8">
              <button
                onClick={scrollToNextSection}
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
            {(t('volunteersNew.benefits.cards', { returnObjects: true }) as any[]).map((card: any, index: number) => {
              const backgrounds = [
                { image: '/assistant page tile sharing.jpg', overlay: 'rgba(216, 109, 85, 0.6)' },
                { image: '/assistant page tile flexible.jpg', overlay: 'rgba(63, 62, 52, 0.6)' },
                { image: '/assistant page tile grow.jpg', overlay: 'rgba(63, 62, 52, 0.6)' },
                { image: '/assistant page tile human.jpg', overlay: 'rgba(216, 109, 85, 0.6)' }
              ];
              return (
                <div key={index} className="relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <img src={backgrounds[index].image} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
              {(t('volunteersNew.journey.steps', { returnObjects: true }) as any[]).map((step: any, index: number) => (
                <div key={index} className="text-center relative h-full">
                  <div className="backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mb-8 lg:mb-0 h-full flex flex-col" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
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
          />
          <div className="absolute inset-0 bg-[#F7ECD5]/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6 uppercase">
              Your Contribution
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tile 1: Your Role as an Assistant */}
            <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(216, 109, 85, 0.6)' }}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Role as an Assistant</h3>
              <p className="text-white mb-4 font-semibold">You'll learn to:</p>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <span>🤝</span>
                  <span>Connect athletes with the right sports clubs and opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🔍</span>
                  <span>Coordinate between athletes, families, clubs, and trainers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💪</span>
                  <span>Provide hands-on support during training and competitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💬</span>
                  <span>Enable communication and self-determination for athletes</span>
                </li>
              </ul>
            </div>

            {/* Tile 2: The Commitment */}
            <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(216, 109, 85, 0.6)' }}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">The Commitment</h3>

              {/* Equation Layout */}
              <div className="flex items-start gap-4 mb-4">
                {/* Initial Training Column */}
                <div className="flex-1">
                  <p className="text-white font-semibold mb-2">Initial Training:</p>
                  <ul className="text-white text-sm space-y-1">
                    <li>~15 hours self-paced e-learning</li>
                    <li>1 full-day practical workshop</li>
                  </ul>
                </div>

                {/* Plus Sign */}
                <div className="text-white text-3xl font-bold pt-4">+</div>

                {/* Ongoing Column */}
                <div className="flex-1">
                  <p className="text-white font-semibold mb-2">Ongoing:</p>
                  <ul className="text-white text-sm space-y-1">
                    <li>2-3 hours per week minimum</li>
                    <li>At least 3 months commitment</li>
                  </ul>
                </div>
              </div>

              {/* Equals and Result */}
              <div className="border-t-2 border-white/30 pt-4 mt-4">
                <p className="text-white text-center font-semibold mb-1">~2-4h/week</p>
                <p className="text-white text-center text-lg font-bold mb-2">= 20% of average streaming time</p>
                <p className="text-white text-center text-xs opacity-80">(Average streaming: 21h/week)</p>
              </div>
            </div>

            {/* Tile 3: Our Support */}
            <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(216, 109, 85, 0.6)' }}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Support</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-2">
                  <span>🎓</span>
                  <div>
                    <p className="font-semibold">Modern qualification</p>
                    <p className="text-sm">Flexible online learning + hands-on practice</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span>👥</span>
                  <div>
                    <p className="font-semibold">Dedicated community</p>
                    <p className="text-sm">Connect with fellow assistants</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span>📚</span>
                  <div>
                    <p className="font-semibold">Evolving resources</p>
                    <p className="text-sm">Continuous support and updated materials</p>
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
              Testimonials {t('volunteersNew.stories.title')}
            </h2>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-xl">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#D86D55] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
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
            {(t('volunteersNew.getStarted.options', { returnObjects: true }) as any[]).filter((_: any, index: number) => index !== 1).map((entry: any, index: number) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55]"></div>
                <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">{entry.title}</h3>
                <p className="text-[#B3ADAA] mb-6 leading-relaxed flex-grow">{entry.description}</p>
                <Link
                  to={index === 0 ? "/signup" : "/contact"}
                  className="inline-block bg-[#D86D55] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#71B554] transition-colors duration-300"
                >
                  {entry.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteers;
