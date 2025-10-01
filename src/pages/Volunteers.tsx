import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';

const Volunteers: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section with Diagonal Split */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Image - covers entire section */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("assistant picture 5-min copy.jpg")',
            backgroundPosition: '15% center'
          }}
        ></div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Diagonal cut overlay */}
        <div className="absolute inset-0 bg-[#D86D55]" style={{
          clipPath: 'polygon(70% 0%, 100% 0%, 100% 100%, 50% 100%)'
        }}></div>

        {/* Text Content */}
        <div className="relative z-10 flex items-center justify-end min-h-screen p-2 lg:p-4">
          <div className="max-w-xl text-center lg:text-left relative z-10 mr-1 lg:mr-2">
            <div className="mt-32">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lorem Ipsum [Assistants Page]
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/signup"
                className="bg-white text-[#D86D55] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Lorem Ipsum
              </Link>
              <Link 
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#D86D55] transition-all duration-300"
              >
                Dolor Sit ↓
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison Section */}
      <section className="py-24 bg-[#F7ECD5]/50 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px),
                             repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0,0,0,0.02) 35px, rgba(0,0,0,0.02) 70px)`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6">
              Lorem Ipsum [Benefits]
            </h2>
            <p className="text-xl text-[#B3ADAA] max-w-3xl mx-auto">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Diagonal Split Images */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="athlete 6 copy.jpg"
                alt="Person sitting at home watching TV"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D86D55]/20 to-[#D86D55]/40"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg">
                <h3 className="font-bold text-[#3F3E34]">Lorem Ipsum</h3>
                <p className="text-sm text-[#B3ADAA]">Consectetur adipiscing elit</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="postkasten copy.jpg"
                alt="Person with disability sitting at home watching TV"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/20 to-[#71B554]/40"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg">
                <h3 className="font-bold text-[#3F3E34]">Dolor Sit Amet</h3>
                <p className="text-sm text-[#B3ADAA]">Ut enim ad minim veniam</p>
              </div>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="Aurelian 1 copy.jpg"
              alt="Two people together in sports environment - assistant and person with disability"
              className="w-full h-80 object-cover"
              style={{ objectPosition: '75% top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/30 to-[#D86D55]/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Together in Sports</h3>
                <p className="text-xl opacity-90">Building connections through inclusive activities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6">
              Lorem Ipsum [Volunteer Stories]
            </h2>
            <p className="text-xl text-[#B3ADAA] max-w-3xl mx-auto">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[
              { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.", name: "Lorem I., Dolor" },
              { quote: "Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.", name: "Ipsum D., Sit Amet" },
              { quote: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Consectetur A., Elit" },
              { quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.", name: "Adipiscing T., Eiusmod" }
            ].map((story, index) => (
              <div key={index} className="min-w-80 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 snap-start">
                <div className="w-16 h-16 bg-[#D86D55] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {story.name.charAt(0)}
                </div>
                <p className="text-lg text-[#B3ADAA] italic mb-6 leading-relaxed">"{story.quote}"</p>
                <p className="font-semibold text-[#D86D55]">{story.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="assistant picture 3 copy.jpg"
            alt="Inclusive running event with wheelchair participant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(216, 109, 85, 0.2)' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6">
              Lorem Ipsum Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#D86D55]/30 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {[
                { title: "Lorem Ipsum", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem." },
                { title: "Dolor Sit", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus." },
                { title: "Consectetur", desc: "Nam libero tempore, cum soluta nobis est eligendi optio." },
                { title: "Adipiscing", desc: "Temporibus autem quibusdam et aut officiis debitis aut." },
                { title: "Eiusmod", desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate." }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mb-8 lg:mb-0">
                    <div className="w-12 h-12 bg-[#D86D55] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#3F3E34] mb-3">{step.title}</h3>
                    <p className="text-[#B3ADAA] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entry Points Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="Aurelian 1 copy.jpg"
            alt="Two people having friendly conversation"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Lorem Ipsum [Get Started]
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "✏️", title: "Sign Up", desc: "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam.", cta: "Start Here →" },
              { icon: "👋", title: "Meet Aurelian", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.", cta: "Learn More →" },
              { icon: "💬", title: "Contact Us", desc: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque.", cta: "Get in Touch →" }
            ].map((entry, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-4xl mb-6">{entry.icon}</div>
                <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">{entry.title}</h3>
                <p className="text-[#B3ADAA] mb-6 leading-relaxed">{entry.desc}</p>
                <Link 
                  to="/contact"
                  className="inline-block bg-[#D86D55] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#71B554] transition-colors duration-300"
                >
                  {entry.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#D86D55] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `repeating-linear-gradient(
              60deg,
              transparent,
              transparent 100px,
              rgba(255,255,255,0.03) 100px,
              rgba(255,255,255,0.03) 200px
            )`
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup"
              className="bg-white text-[#D86D55] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Lorem Ipsum
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#D86D55] transition-all duration-300"
            >
              Dolor Sit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteers;