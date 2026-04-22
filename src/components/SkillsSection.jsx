import {
  BarChart3,
  Bookmark,
  Camera,
  DollarSign,
  Heart,
  MessageCircle,
  Palette,
  Rocket,
  Send,
  Smartphone,
  X,
} from "lucide-react";
import { useState } from "react";

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  // ADD YOUR IMAGE LINKS HERE:
  const skills = [
    {
      name: "Content Creation",
      subtitle: "Photography · Videography",
      icon: Camera,
      color: "bg-brand-blush",
      // 👇 Add your image path here!
      image: "/images/Content.png",
      caption:
        "Creating high-impact visual content. From reels to photography, I handle the creative direction and execution.",
    },
    {
      name: "Social Media",
      subtitle: "Community Management",
      icon: Smartphone,
      color: "bg-brand-gold",
      // 👇 Add your image path here!
      image: "/images/Social media.png",
      caption:
        "Building communities and managing platforms. I ensure the brand voice is perfectly translated across all channels.",
    },
    {
      name: "Design",
      subtitle: "Canva · Figma",
      icon: Palette,
      color: "bg-brand-caramel",
      // Leave image empty ('') if you don't have a pic for this one yet!
      image: "/images/Design.png",
      caption:
        "Creating aesthetically pleasing, on-brand graphics. My focus is on clean, modern design that captures attention.",
    },
    {
      name: "Analytics",
      subtitle: "Data Tracking · Reporting",
      icon: BarChart3,
      color: "bg-brand-cream",
      image: "/images/Analytics.png",
      caption:
        "Data drives my decisions. I track KPIs, monitor engagement rates, and generate reports to optimize campaigns.",
    },
    {
      name: "Campaigns",
      subtitle: "Ideation · Execution",
      icon: Rocket,
      color: "bg-brand-blush",
      image: "/images/Campaign.png",
      caption:
        "From ideation to launch, I coordinate digital marketing campaigns and ensure all moving parts align.",
    },
    {
      name: "Budgets",
      subtitle: "Ad Spend · ROI Optimization",
      icon: DollarSign,
      color: "bg-brand-gold",
      image: "/images/Budget.png",
      caption:
        "Strategically allocating ad spend to maximize ROI. I ensure every dollar works hard.",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-white/50 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Skills
          </h2>
          <p className="text-brand-dark/70 italic text-sm md:text-base max-w-sm mx-auto">
            A blend of creativity, planning, and performance-focused thinking.
          </p>
        </div>

        {/* The Small Interactive Bubbles */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setActiveSkill(skill)}
              className="flex flex-col items-center group w-[80px] sm:w-[100px] cursor-pointer"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-tr from-brand-caramel via-brand-gold to-brand-blush group-hover:rotate-[30deg] transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:-translate-y-2">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-1">
                  <div
                    className={`w-full h-full rounded-full ${skill.color} flex items-center justify-center overflow-hidden relative`}
                  >
                    <div className="absolute inset-0 bg-white/20"></div>
                    <skill.icon
                      className="w-8 h-8 sm:w-10 sm:h-10 text-brand-dark opacity-80"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
              <span className="mt-3 text-xs sm:text-sm font-medium text-brand-dark text-center group-hover:text-brand-caramel transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* THE INSTAGRAM HIGHLIGHT MODAL */}
      {activeSkill && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-sm"
          onClick={() => setActiveSkill(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-[400px] w-full shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveSkill(null)}
              className="absolute top-4 right-4 z-20 bg-white/60 hover:bg-white rounded-full p-1.5 transition-colors backdrop-blur-md"
            >
              <X size={20} className="text-brand-dark" />
            </button>

            {/* Top Post Image Area (Shows pic if you have one, color block if you don't!) */}
            <div
              className={`w-full aspect-square ${activeSkill.image ? "bg-brand-cream" : activeSkill.color} flex flex-col items-center justify-center relative overflow-hidden`}
            >
              {activeSkill.image ? (
                <img
                  src={activeSkill.image}
                  alt={activeSkill.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-white/20"></div>
                  <activeSkill.icon
                    size={64}
                    className="text-brand-dark mb-6 opacity-80 relative z-10"
                    strokeWidth={1.2}
                  />
                  <h3 className="text-3xl font-serif font-bold text-brand-dark mb-2 relative z-10 text-center px-4">
                    {activeSkill.name}
                  </h3>
                  <p className="text-sm text-brand-dark/70 font-medium relative z-10 text-center px-4">
                    {activeSkill.subtitle}
                  </p>
                </>
              )}
            </div>

            {/* Bottom Post Content Area */}
            <div className="p-4 bg-white">
              <div className="flex justify-between items-center mb-3">
                <div className="flex gap-4">
                  <Heart
                    size={24}
                    className="text-brand-dark hover:text-brand-blush transition-colors cursor-pointer"
                  />
                  <MessageCircle
                    size={24}
                    className="text-brand-dark hover:text-brand-caramel transition-colors cursor-pointer"
                  />
                  <Send
                    size={24}
                    className="text-brand-dark hover:text-brand-gold transition-colors cursor-pointer"
                  />
                </div>
                <Bookmark
                  size={24}
                  className="text-brand-dark hover:text-brand-caramel transition-colors cursor-pointer"
                />
              </div>

              <div className="text-sm text-brand-dark/90 leading-relaxed">
                <span className="font-bold mr-2">vaani.gupta</span>
                {activeSkill.caption}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
