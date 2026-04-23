import { Heart, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-brand-dark relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-caramel/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-blush/20 rounded-full blur-[80px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-6">
          Let's Connect
        </h2>
        <p className="text-brand-cream/80 text-lg md:text-xl font-light mb-12 max-w-xl">
          Let's build ideas that connect, perform, and inspire. Always open to
          discussing new projects and creative opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <a
            href="mailto:guptavaani2003@gmail.com"
            className="flex items-center justify-center gap-3 bg-[#f2a65a] hover:bg-[#e0964d] text-brand-dark font-medium px-6 py-3 rounded-full transition-colors"
          >
            <Mail size={20} />
            {/* We changed "Say Hello" to actually show your email! */}
            <span>guptavaani2003@gmail.com</span>
          </a>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/vaani-gupta15?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              className="flex items-center justify-center w-14 h-14 rounded-full border border-brand-cream/30 text-brand-cream hover:bg-brand-cream hover:text-brand-dark transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-cream/10 pt-8 mt-12 text-center flex flex-col items-center">
        <p className="text-brand-cream/50 text-sm flex items-center justify-center gap-1">
          Designed with <Heart size={14} className="text-brand-blush" />
        </p>
        {/* <p className="text-brand-cream/60 text-sm mt-3 font-light">
          Created by{" "}
          <a
            href="https://kartik-verma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:text-brand-cream transition-colors font-medium"
          >
            Kartik Verma
          </a>
        </p> */}
        <p className="text-brand-cream/30 text-xs mt-3">
          © {new Date().getFullYear()} Vaani Gupta. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
