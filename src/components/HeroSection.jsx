import { Sparkles, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-blush/40 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-brand-gold/20 rounded-full blur-[70px] -z-10 mix-blend-multiply opacity-70"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-blush/30 px-4 py-2 rounded-full border border-brand-blush/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-brand-caramel" />
            <span className="text-sm font-medium text-brand-dark/80 tracking-wide uppercase">
              Digital marketing, events, strategy & storytelling
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-tight">
            Creative strategy <br className="hidden md:block" />
            <span className="italic font-light text-brand-caramel">
              with an eye for detail
            </span>
          </h1>

          <p className="text-lg text-brand-dark/70 max-w-lg leading-relaxed">
            Blending content, campaigns, events, and analytics to create
            experiences that are thoughtful, effective, and memorable.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href="#experience"
              className="px-8 py-3.5 bg-brand-dark text-brand-blush rounded-full font-medium hover:bg-brand-caramel hover:text-white transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Explore My Work
            </a>
            <a
              href="#presentations"
              className="px-8 py-3.5 bg-transparent text-brand-dark border border-brand-dark/20 rounded-full font-medium hover:border-brand-dark hover:bg-brand-dark/5 transition-all w-full sm:w-auto text-center"
            >
              View Presentations
            </a>
          </div>
        </div>

        {/* Visual Content - Phone Mockup */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center h-[640px] md:h-[680px] w-full z-10">
          {/* Floating Cards */}
          <div className="absolute top-10 lg:top-20 -left-6 lg:-left-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 max-w-[220px] transform -rotate-3 hover:rotate-0 transition-transform hidden md:block animate-float">
            <h3 className="font-bold text-brand-dark text-sm bg-brand-blush/30 inline-block px-2 py-1 rounded mb-1">
              B.Com (Hons)
            </h3>
            <p className="text-xs text-brand-dark/70 font-medium">
              Narsee Monjee Institute of Management Studies, Mumbai
            </p>
            <p className="text-[10px] text-brand-caramel mt-1">
              Specialisation in Accounts & Finance
            </p>
          </div>

          <div className="absolute bottom-16 lg:bottom-20 -right-4 lg:-right-16 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 max-w-[200px] transform rotate-3 hover:rotate-0 transition-transform hidden md:block animate-float-delayed z-10">
            <h3 className="font-bold text-brand-dark text-sm bg-brand-gold/30 inline-block px-2 py-1 rounded mb-1">
              Digital Marketing
            </h3>
            <p className="text-xs text-brand-dark/70 font-medium">
              with Applied AI
            </p>
            <p className="text-[10px] text-brand-caramel mt-1">IIM Trichy</p>
          </div>

          <div className="absolute top-1/3 -translate-y-1/2 -right-8 lg:-right-24 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 max-w-[220px] transform -rotate-2 hover:rotate-0 transition-transform hidden lg:block animate-float z-20">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-3 h-3 text-brand-gold fill-current"
                />
              ))}
            </div>
            <p className="text-xs text-brand-dark/80 italic">
              "Learned social media strategy, paid ads, analytics, and how to
              build data-driven campaigns."
            </p>
          </div>

          {/* The Phone */}
          <div className="relative w-[320px] h-[640px] bg-white rounded-[45px] shadow-2xl overflow-hidden border-[10px] border-white ring-1 ring-brand-dark/10 group">
            {/* Phone Top Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
              <div className="w-32 h-6 bg-white rounded-b-2xl"></div>
            </div>

            {/* Phone App UI Header */}
            <div className="absolute top-0 inset-x-0 pt-8 pb-3 px-4 bg-gradient-to-b from-white/90 to-transparent z-10 flex items-center justify-center">
              <span className="font-serif font-bold text-lg text-brand-dark drop-shadow-sm">
                Vaani Gupta
              </span>
            </div>

            {/* Phone Main Image area */}
            <div className="absolute inset-0 bg-brand-blush/20">
              <img
                src="/images/vaani.JPG"
                alt="Vaani Profile Picture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Phone Bottom UI elements */}
            <div className="absolute bottom-6 left-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-white font-bold text-sm">
                Social Media Posts & Strategy
              </h4>
              <p className="text-white/80 text-[10px] mt-1 line-clamp-2">
                Creative digital portfolio meets elegant social-media interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
