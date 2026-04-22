import { ExternalLink, FileText } from "lucide-react";

const PresentationsSection = () => {
  const presentations = [
    {
      id: 1,
      title: "Mix & Sip - Event Pitch",
      description:
        "From concept to execution,this pitch reflects the approach to building immersive, people-first events.",
      thumbnail: "/images/cover-1.png",
      // Change the line below:
      link: "/pdfs/marketing.pdf",
    },
    {
      id: 2,
      title: "Lattu box- A DIY Kit Brand",
      description:
        "This project highlights the approach to branding, storytelling, and digital strategy.",
      thumbnail: "/images/cover-2.png",
      link: "/pdfs/event.pdf",
    },
    {
      id: 3,
      title: "Stulancer - Part Time Job Platform",
      description:
        "This projects showcases structured thinking, oppurtunity mapping, and solution-driven planning.",
      thumbnail: "/images/cover-3.png",
      link: "/pdfs/brand.pdf",
    },
  ];

  return (
    <section id="presentations" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Presentations
          </h2>
          <p className="text-brand-dark/70 text-base max-w-lg mx-auto">
            A selection of presentations that reflect strategy, creativity, and
            clear communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {presentations.map((deck) => (
            <a
              key={deck.id}
              href={deck.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden border border-brand-dark/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Thumbnail Area */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-brand-cream">
                <img
                  src={deck.thumbnail}
                  alt={deck.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-brand-dark px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
                    View Deck <ExternalLink size={16} />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-blush/30 rounded-lg text-brand-caramel mt-0.5">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-caramel transition-colors">
                      {deck.title}
                    </h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">
                      {deck.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationsSection;
