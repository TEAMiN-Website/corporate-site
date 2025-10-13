import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Network, Users, Target, Quote } from 'lucide-react';

const SpAss: React.FC = () => {
  const { t } = useTranslation();
  const [timelineExpanded, setTimelineExpanded] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaqItems, setActiveFaqItems] = useState<Set<string>>(new Set());

  const stories = t('spassNew.stories.testimonials', { returnObjects: true }) as Array<{ quote: string; name: string }>;

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [stories.length]);

  console.log('SpAss hero section rendered with 30% opacity overlay DEBUG');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/athlete 7-min-min copy.jpg")',
            backgroundPosition: '40% center'
          }}
        ></div>

        {/* Beige overlay covering whole background - 60% opacity */}
        <div className="absolute inset-0" style={{
          backgroundColor: 'rgba(247, 236, 213, 0.6)'
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
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight uppercase">
              <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">SpAss</span><br />
              <span className="text-[#3F3E34]">INKLUSION DURCH SPORT-ASSISTENZ</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed" style={{ color: '#3F3E34' }}>
              {t('spassNew.hero.subtitle')}
            </p>
            <div className="flex justify-center">
              <button className="bg-white px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl uppercase tracking-wide">
                <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">Das ist SpAss</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Pattern Image */}
        <div className="absolute inset-0">
          <img
            src="/Slide1.jpg"
            alt="Pattern background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('spassNew.approach.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('spassNew.approach.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {(t('spassNew.approach.items', { returnObjects: true }) as Array<{ title: string; description: string; icon: string }>).map((item, index) => (
              <div
                key={index}
                className="bg-[#F7ECD5] dark:bg-gray-800 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D86D55] to-[#71B554] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#D86D55] to-[#71B554] rounded-full flex items-center justify-center text-4xl text-white">
                  {index === 0 && <Network className="w-10 h-10" />}
                  {index === 1 && <Users className="w-10 h-10" />}
                  {index === 2 && <Target className="w-10 h-10" />}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55] opacity-30" />

      {/* How It Works Timeline Section */}
      <section className="py-24 px-6 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assistant picture 3.jpg")',
            backgroundPosition: 'center 20%'
          }}
        />
        {/* Base Overlay */}
        <div className="absolute inset-0 bg-[#3F3E34]/20 dark:bg-[#3F3E34]/40" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              {t('spassNew.timeline.title')}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setTimelineExpanded(!timelineExpanded)}
              className="w-full px-8 py-5 bg-gradient-to-r from-[#D86D55] to-[#71B554] text-white border-none rounded-2xl text-lg font-semibold cursor-pointer mb-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl uppercase tracking-wider flex items-center justify-center gap-3"
            >
              {t('spassNew.timeline.toggleButton')}
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${timelineExpanded ? '' : '-rotate-90'}`} />
            </button>

            <div
              className={`grid md:grid-cols-2 gap-16 relative bg-[#F7ECD5]/85 dark:bg-gray-900/85 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-500 ${
                timelineExpanded ? 'max-h-[1000px] p-10 opacity-100' : 'max-h-0 p-0 opacity-0'
              }`}
            >
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#71B554] to-[#D86D55] -translate-x-1/2" />

              <div className="px-5">
                <div className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center p-4 bg-white/90 dark:bg-gray-800/90 rounded-xl">
                  {t('spassNew.timeline.assistantJourney.title')}
                </div>
                {(t('spassNew.timeline.assistantJourney.steps', { returnObjects: true }) as Array<{ title: string; description: string }>).map((step, index) => (
                  <div key={index} className="mb-10 relative pl-14">
                    <span className="absolute left-0 top-0 w-9 h-9 bg-gradient-to-br from-[#D86D55] to-[#71B554] text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-5">
                <div className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center p-4 bg-white/90 dark:bg-gray-800/90 rounded-xl">
                  {t('spassNew.timeline.athleteJourney.title')}
                </div>
                {(t('spassNew.timeline.athleteJourney.steps', { returnObjects: true }) as Array<{ title: string; description: string }>).map((step, index) => (
                  <div key={index} className="mb-10 relative pl-14">
                    <span className="absolute left-0 top-0 w-9 h-9 bg-gradient-to-br from-[#D86D55] to-[#71B554] text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
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

          <div className="max-w-3xl mx-auto bg-[#F7ECD5]/85 rounded-[30px] p-16 shadow-2xl overflow-hidden">
            <div className="relative">
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
                      : 'bg-gray-400 dark:bg-gray-600 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
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
      <section className="py-24 px-6 bg-[#F7ECD5]/50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {t('spassNew.pathways.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Assistant Card */}
            <div className="relative rounded-[25px] p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
              <img src="/assistant picture 2 crop copy.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
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
              <img src="/athlete 1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
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
              <img src="/partner picture-min.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
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
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {t('spassNew.faq.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {(t('spassNew.faq.categories', { returnObjects: true }) as Array<{ title: string; items: Array<{ question: string; answer: string }> }>).map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-[#F7ECD5] dark:bg-gray-800 rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white pb-4 border-b-4 border-transparent" style={{ borderImage: 'linear-gradient(90deg, #D86D55, #71B554) 1' }}>
                  {category.title}
                </h3>

                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isActive = activeFaqItems.has(key);

                  return (
                    <div key={itemIndex} className="mb-5 border-b border-gray-300/20 dark:border-gray-600/20 pb-5">
                      <div
                        onClick={() => toggleFaq(categoryIndex, itemIndex)}
                        className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center hover:text-[#D86D55] transition-colors duration-300"
                      >
                        <span>{item.question}</span>
                        <span className={`w-8 h-8 bg-gradient-to-br from-[#D86D55] to-[#71B554] text-white rounded-full flex items-center justify-center text-xl transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </div>
                      {isActive && (
                        <div className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
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
