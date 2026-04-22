import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from "lucide-react";
import { useState } from "react";

const PostCard = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1,
    );
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-brand-dark/5 flex flex-col hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-brand-dark/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-blush/50 p-0.5">
            <img
              src={project.avatar}
              alt={project.title}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-brand-dark leading-tight">
              {project.title}
            </span>
            <span className="text-xs text-brand-dark/50">
              {project.location}
            </span>
          </div>
        </div>
        <button className="text-brand-dark/50 hover:text-brand-dark transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Media Carousel */}
      <div className="relative aspect-square w-full bg-brand-cream/30 overflow-hidden group">
        {project.media.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {item.type === "video" ? (
              <video
                src={item.url}
                className="w-full h-full object-contain"
                controls={index === currentSlide}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={item.url}
                alt={`${project.title} slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

        {/* Carousel Controls */}
        {project.media.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-brand-dark rounded-full p-1.5 backdrop-blur-sm shadow-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-brand-dark rounded-full p-1.5 backdrop-blur-sm shadow-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
              {project.media.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-4 bg-brand-gold" : "w-1.5 bg-white/60"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Action Bar */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="transition-transform hover:scale-110"
            >
              <Heart
                size={24}
                className={
                  isLiked
                    ? "fill-brand-blush text-brand-blush"
                    : "text-brand-dark"
                }
              />
            </button>
            <button className="transition-transform hover:scale-110">
              <MessageCircle size={24} className="text-brand-dark" />
            </button>
            <button className="transition-transform hover:scale-110">
              <Send size={24} className="text-brand-dark" />
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="transition-transform hover:scale-110"
          >
            <Bookmark
              size={24}
              className={
                isSaved ? "fill-brand-dark text-brand-dark" : "text-brand-dark"
              }
            />
          </button>
        </div>
        <div className="font-bold text-sm text-brand-dark mb-1">
          {project.likes} likes
        </div>
      </div>

      {/* Caption & Meta */}
      <div className="px-4 pb-5 flex-1">
        <p className="text-sm text-brand-dark leading-relaxed">
          <span className="font-bold mr-2">{project.title}</span>
          {project.caption}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-2 text-brand-caramel text-sm flex flex-wrap gap-x-1">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="hover:text-brand-gold cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="text-[10px] text-brand-dark/40 uppercase tracking-wide mt-3">
          {project.date}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Whimsoutsav",
      location: "Chandigarh, India",
      avatar: "/images/post-pic-1.jpg",
      media: [
        { type: "image", url: "/images/post-pic-1.jpg" },
        { type: "video", url: "/images/campaign-video.mp4" },
        { type: "video", url: "/images/campaign-video-1.mp4" },
        { type: "video", url: "/images/campaign-video-2.mp4" },
      ],
      likes: "1,245",
      captionTitle: "The Summer Gala",
      caption:
        "From concept to content, this is how I’ve shaped the digital voice of Whimsoutsav. Because good design catches attention, but great strategy keeps it. ✨",
      tags: ["#SocialMediaMarketing #ContentStrategy #BrandBuilding"],
      date: "August 14",
    },
    {
      id: 2,
      title: "Lattu Box",
      location: "Digital Space",
      avatar: "/images/lattubox.jpeg",
      media: [
        { type: "image", url: "/images/post-pic-4.png" },
        { type: "image", url: "/images/post-pic-3.png" },
        { type: "video", url: "/images/campaign-video-3.mp4" },
      ],
      likes: "892",
      captionTitle: "Gen-Z Brand Refresh",
      caption:
        "Crafting social media that didn’t just display the product, but educated the audience on why DIY belongs in their lifestyle.✨",
      tags: [
        "#SocialMediaMarketing#DIYKit #DIYIndia #CreativeLiving #MindfulActivities #ArtTherapy",
      ],
      date: "September 22",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white/50 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Creative Work
          </h2>
          <p className="text-brand-dark/70 text-base max-w-lg mx-auto italic">
            A closer look at projects brought to life through design, strategy,
            and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pl-0 pr-0 md:pl-4 md:pr-4">
          {projects.map((project) => (
            <PostCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
