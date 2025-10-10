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
      <section className="min-h-screen relative overflow-hidden hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("assistant picture 5-min copy.jpg")',
            backgroundPosition: '15% center'
          }}
        ></div>

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute inset-0" style={{
          backgroundColor: 'rgba(216, 109, 85, 0.6)'
        }}></div>

        <img
          src="/TEAMiN Logo short copy.png"
          alt="TEAMiN Logo"
          className="absolute bottom-8 right-8 w-24 h-24 md:w-32 md:h-32 object-contain z-20"
        />

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-4xl text-center px-8 pb-32">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight uppercase">
              {t('volunteersNew.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-10 opacity-90 leading-relaxed">
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
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px),
                             repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0,0,0,0.02) 35px, rgba(0,0,0,0.02) 70px)`
          }}></div>
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
            {(t('volunteersNew.benefits.cards', { returnObjects: true }) as any[]).map((card: any, index: number) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">{card.title}</h3>
                <p className="text-[#3F3E34] leading-relaxed">{card.description}</p>
              </div>
            ))}
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

      {/* Community Stories Section - Testimonials */}
      <section className="py-24 bg-[#F7ECD5]/50">
        <div className="max-w-4xl mx-auto px-4">
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

          <div className="grid md:grid-cols-3 gap-8">
            {(t('volunteersNew.getStarted.options', { returnObjects: true }) as any[]).map((entry: any, index: number) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55]"></div>
                <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">{entry.title}</h3>
                <p className="text-[#B3ADAA] mb-6 leading-relaxed flex-grow">{entry.description}</p>
                <Link
                  to={index === 0 ? "/signup" : index === 1 ? "/aurelian" : "/contact"}
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
