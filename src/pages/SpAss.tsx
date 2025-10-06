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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Diagonal Split */}
      <section className="grid md:grid-cols-[45%_55%] min-h-[80vh] relative overflow-hidden">
        {/* Image Panel */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-900 dark:to-gray-700 flex items-center justify-center p-10 order-2 md:order-1">
          <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-lg text-white text-xs uppercase tracking-wider">
            {t('spassNew.hero.imageNote')}
          </div>
          <img
            src="/assistant picture 1.jpg"
            alt={t('spassNew.hero.imageAlt')}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Text Panel with Diagonal Edge */}
        <div className="relative bg-[#F7ECD5] dark:bg-gray-800 flex items-center p-10 md:p-16 order-1 md:order-2">
          <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-24 bg-[#F7ECD5] dark:bg-gray-800 transform skew-x-[-5deg]" />
          <div className="max-w-2xl w-full relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {t('spassNew.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 text-gray-700 dark:text-gray-300">
              {t('spassNew.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#D86D55] to-[#71B554] rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 uppercase tracking-wide">
                {t('spassNew.hero.cta1')}
              </button>
              <button className="px-10 py-4 text-lg font-semibold text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-full hover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:text-white hover:border-transparent transition-all duration-300 uppercase tracking-wide">
                {t('spassNew.hero.cta2')} ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
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
      <section className="py-24 px-6 bg-[#F7ECD5]/50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
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
              className={`grid md:grid-cols-2 gap-16 relative bg-[#F7ECD5] dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 ${
                timelineExpanded ? 'max-h-[1000px] p-10 opacity-100' : 'max-h-0 p-0 opacity-0'
              }`}
            >
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#71B554] to-[#D86D55] -translate-x-1/2" />

              <div className="px-5">
                <div className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
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

              <div className="px-5">
                <div className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55] opacity-30" />

      {/* Success Stories Carousel */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {t('spassNew.stories.title')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-[#F7ECD5] dark:bg-gray-800 rounded-[30px] p-16 shadow-2xl relative overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {stories.map((story, index) => (
                <div key={index} className="min-w-full text-center px-5">
                  <Quote className="w-16 h-16 mx-auto mb-8 text-[#71B554]" />
                  <p className="text-2xl italic leading-relaxed text-gray-900 dark:text-white mb-8 relative">
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
            <div className="relative rounded-[25px] p-12 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
              <img src="/assistant picture 2 crop copy.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D86D55]/90 to-[#D86D55]/80" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl mb-8" />
                <h3 className="text-3xl font-bold mb-5 text-white">
                  {t('spassNew.pathways.assistant.title')}
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {t('spassNew.pathways.assistant.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white text-gray-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 uppercase tracking-wider">
                    {t('spassNew.pathways.assistant.cta1')}
                  </button>
                  <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-wider">
                    {t('spassNew.pathways.assistant.cta2')}
                  </button>
                </div>
              </div>
            </div>

            {/* Athlete Card */}
            <div className="relative rounded-[25px] p-12 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
              <img src="/athlete 1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/90 to-[#71B554]/80" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl mb-8" />
                <h3 className="text-3xl font-bold mb-5 text-white">
                  {t('spassNew.pathways.athlete.title')}
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {t('spassNew.pathways.athlete.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white text-gray-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 uppercase tracking-wider">
                    {t('spassNew.pathways.athlete.cta1')}
                  </button>
                  <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-wider">
                    {t('spassNew.pathways.athlete.cta2')}
                  </button>
                </div>
              </div>
            </div>

            {/* Organization Card */}
            <div className="relative rounded-[25px] p-12 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl cursor-pointer overflow-hidden group">
              <img src="/partner picture-min.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F3E34]/90 to-[#3F3E34]/85" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl mb-8" />
                <h3 className="text-3xl font-bold mb-5 text-white">
                  {t('spassNew.pathways.organization.title')}
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {t('spassNew.pathways.organization.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-[25px] text-base font-semibold bg-white text-gray-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 uppercase tracking-wider">
                    {t('spassNew.pathways.organization.cta')}
                  </button>
                </div>
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
