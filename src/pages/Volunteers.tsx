import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Volunteers: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section with Diagonal Split - Reverse */}
      <section className="grid lg:grid-cols-[45%_55%] min-h-[80vh] overflow-hidden">
        {/* Image Panel */}
        <div className="relative bg-gradient-to-br from-black/30 to-black/30 flex items-center justify-center text-white p-10 order-2 lg:order-1">
          <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-white text-xs uppercase tracking-wider z-10">
            [Hero Image/Carousel]
          </div>
          
          <div className="w-full h-full bg-gradient-to-br from-[#B3ADAA]/20 to-[#B3ADAA]/5 border-2 border-dashed border-[#B3ADAA] rounded-2xl flex flex-col items-center justify-center text-[#B3ADAA]">
            <svg className="w-12 h-12 mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7-3.5c0-.28 0-.5-.1-.75l1.6-1.2l-1.5-2.6l-1.85.75A6.8 6.8 0 0 0 15.75 7l-.3-2h-3l-.3 2c-.5.35-1 .7-1.4 1.15L8.9 7.4l-1.5 2.6l1.6 1.2c-.1.25-.1.5-.1.8s0 .5.1.75l-1.6 1.2l1.5 2.6l1.85-.75c.4.45.9.8 1.4 1.15l.3 2h3l.3-2a7 7 0 0 0 1.4-1.15l1.85.75l1.5-2.6l-1.6-1.2c.1-.25.1-.5.1-.75Z"/>
            </svg>
            <div className="text-sm uppercase tracking-wider text-center leading-tight max-w-xs">
              PHOTO: Successful assistant moment. Potentially three people in a sports environment having a conversation with one having a disability
            </div>
          </div>
        </div>

        {/* Text Panel */}
        <div className="bg-[#D86D55] flex items-center p-12 lg:p-16 relative order-1 lg:order-2">
          {/* Diagonal edge effect */}
          <div className="absolute left-0 lg:-left-12 top-0 bottom-0 w-24 bg-[#D86D55] transform -skew-x-3 hidden lg:block"></div>
          
          <div className="max-w-2xl w-full relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lorem Ipsum [Assistants Page]
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed">
              Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-white text-[#D86D55] px-10 py-4 rounded-full font-semibold text-lg uppercase tracking-wider hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                Lorem Ipsum
              </button>
              <button className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-semibold text-lg uppercase tracking-wider hover:bg-white hover:text-[#D86D55] transition-all duration-300">
                Dolor Sit ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#3F3E34]">
              Lorem Ipsum [Benefits]
            </h2>
            <p className="text-xl text-[#B3ADAA] max-w-4xl mx-auto leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-center max-w-5xl mx-auto">
            {/* Left Benefit */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[300px] flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#D86D55] mb-6 text-center">Lorem Ipsum</h3>
              <p className="text-lg text-[#B3ADAA] leading-relaxed text-center">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Versus Divider */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl text-[#D86D55] my-5 transform lg:rotate-0 rotate-90">
                ⟷
              </div>
            </div>

            {/* Right Benefit */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[300px] flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#D86D55] mb-6 text-center">Dolor Sit Amet</h3>
              <p className="text-lg text-[#B3ADAA] leading-relaxed text-center">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>
          </div>

          {/* Additional Benefits Images */}
          <div className="mt-20 space-y-8">
            {/* Two diagonal split images */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="h-48 bg-gradient-to-br from-[#B3ADAA]/15 to-[#B3ADAA]/5 border-2 border-dashed border-[#B3ADAA] rounded-2xl flex flex-col items-center justify-center text-[#B3ADAA]">
                <svg className="w-10 h-10 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7-3.5c0-.28 0-.5-.1-.75l1.6-1.2l-1.5-2.6l-1.85.75A6.8 6.8 0 0 0 15.75 7l-.3-2h-3l-.3 2c-.5.35-1 .7-1.4 1.15L8.9 7.4l-1.5 2.6l1.6 1.2c-.1.25-.1.5-.1.8s0 .5.1.75l-1.6 1.2l1.5 2.6l1.85-.75c.4.45.9.8 1.4 1.15l.3 2h3l.3-2a7 7 0 0 0 1.4-1.15l1.85.75l1.5-2.6l-1.6-1.2c.1-.25.1-.5.1-.75Z"/>
                </svg>
                <div className="text-xs uppercase tracking-wider text-center leading-tight px-4">
                  PHOTO: Potential assistant sitting and watching TV
                </div>
              </div>
              
              <div className="h-48 bg-gradient-to-br from-[#B3ADAA]/15 to-[#B3ADAA]/5 border-2 border-dashed border-[#B3ADAA] rounded-2xl flex flex-col items-center justify-center text-[#B3ADAA]">
                <svg className="w-10 h-10 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7-3.5c0-.28 0-.5-.1-.75l1.6-1.2l-1.5-2.6l-1.85.75A6.8 6.8 0 0 0 15.75 7l-.3-2h-3l-.3 2c-.5.35-1 .7-1.4 1.15L8.9 7.4l-1.5 2.6l1.6 1.2c-.1.25-.1.5-.1.8s0 .5.1.75l-1.6 1.2l1.5 2.6l1.85-.75c.4.45.9.8 1.4 1.15l.3 2h3l.3-2a7 7 0 0 0 1.4-1.15l1.85.75l1.5-2.6l-1.6-1.2c.1-.25.1-.5.1-.75Z"/>
                </svg>
                <div className="text-xs uppercase tracking-wider text-center leading-tight px-4">
                  PHOTO: Person with disability sitting and watching TV
                </div>
              </div>
            </div>

            {/* Full width image */}
            <div className="h-64 bg-gradient-to-br from-[#71B554]/15 to-[#D86D55]/15 border-2 border-dashed border-[#71B554] rounded-2xl flex flex-col items-center justify-center text-[#71B554]">
              <svg className="w-12 h-12 mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7-3.5c0-.28 0-.5-.1-.75l1.6-1.2l-1.5-2.6l-1.85.75A6.8 6.8 0 0 0 15.75 7l-.3-2h-3l-.3 2c-.5.35-1 .7-1.4 1.15L8.9 7.4l-1.5 2.6l1.6 1.2c-.1.25-.1.5-.1.8s0 .5.1.75l-1.6 1.2l1.5 2.6l1.85-.75c.4.45.9.8 1.4 1.15l.3 2h3l.3-2a7 7 0 0 0 1.4-1.15l1.85.75l1.5-2.6l-1.6-1.2c.1-.25.1-.5.1-.75Z"/>
              </svg>
              <div className="text-sm uppercase tracking-wider text-center leading-tight max-w-2xl">
                PHOTO: The two of them together in the sports environment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Stories Section */}
      <section className="py-24 bg-[#F7ECD5]/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#3F3E34]">
              Lorem Ipsum [Volunteer Stories]
            </h2>
            <p className="text-xl text-[#B3ADAA] max-w-4xl mx-auto leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">
            {[
              {
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
                name: "Lorem I., Dolor"
              },
              {
                quote: "Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.",
                name: "Ipsum D., Sit Amet"
              },
              {
                quote: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                name: "Consectetur A., Elit"
              },
              {
                quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
                name: "Adipiscing T., Eiusmod"
              }
            ].map((volunteer, index) => (
              <div key={index} className="min-w-[350px] bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 snap-start">
                <div className="w-20 h-20 bg-[#D86D55] rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-8">
                  👤
                </div>
                <p className="text-lg text-[#B3ADAA] italic mb-6 leading-relaxed">
                  "{volunteer.quote}"
                </p>
                <p className="font-semibold text-[#D86D55]">
                  {volunteer.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#3F3E34]">
              Lorem Ipsum Journey
            </h2>
            <p className="text-xl text-[#B3ADAA] max-w-4xl mx-auto leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
          </div>

          <div className="relative py-16">
            {/* Timeline line */}
            <div className="absolute left-12 right-12 top-1/2 h-1 bg-[#D86D55]/30 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
              {[
                { title: "Lorem Ipsum", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.", number: "1" },
                { title: "Dolor Sit", description: "At vero eos et accusamus et iusto odio dignissimos ducimus.", number: "2" },
                { title: "Consectetur", description: "Nam libero tempore, cum soluta nobis est eligendi optio.", number: "3" },
                { title: "Adipiscing", description: "Temporibus autem quibusdam et aut officiis debitis aut.", number: "4" },
                { title: "Eiusmod", description: "Quis autem vel eum iure reprehenderit qui in ea voluptate.", number: "5" }
              ].map((step, index) => (
                <div key={index} className={`flex flex-col items-center ${index % 2 === 0 ? 'lg:flex-col-reverse' : 'lg:flex-col'}`}>
                  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-xs text-center relative ${index % 2 === 0 ? 'lg:mb-8' : 'lg:mt-8'}`}>
                    <h3 className="text-lg font-bold text-[#3F3E34] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#B3ADAA] leading-relaxed">{step.description}</p>
                    
                    {/* Arrow */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
                      index % 2 === 0 
                        ? 'lg:-bottom-2 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white' 
                        : 'lg:-top-2 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white'
                    } hidden lg:block`}></div>
                  </div>
                  
                  <div className="w-12 h-12 bg-white border-4 border-[#D86D55] text-[#D86D55] rounded-full flex items-center justify-center text-xl font-bold z-10 hover:bg-[#D86D55] hover:text-white hover:scale-110 transition-all duration-300">
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entry Points Section */}
      <section className="py-24 bg-[#F7ECD5]/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#3F3E34]">
              Lorem Ipsum [Get Started]
            </h2>
            <p className="text-xl text-[#B3ADAA] max-w-4xl mx-auto leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: "✏️", title: "Sign Up", description: "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam.", cta: "Start Here →" },
              { icon: "👋", title: "Meet Aurelian", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.", cta: "Learn More →" },
              { icon: "💬", title: "Contact Us", description: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque.", cta: "Get in Touch →" }
            ].map((entry, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="w-20 h-20 bg-[#D86D55] rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-8">
                  {entry.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">{entry.title}</h3>
                <p className="text-[#B3ADAA] mb-8 leading-relaxed">{entry.description}</p>
                <Link 
                  to="/contact"
                  className="inline-block bg-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D86D55]/30 transition-all duration-300"
                >
                  {entry.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#D86D55] rounded-[3rem] p-16 lg:p-24 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                to="/signup"
                className="bg-white text-[#D86D55] px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Lorem Ipsum
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-[#D86D55] transition-all duration-300"
              >
                Dolor Sit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteers;