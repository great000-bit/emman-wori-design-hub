
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-portfolioTheme-secondary to-portfolioTheme-cardBg">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Text Content */}
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I'm <span className="text-portfolioTheme-primary">Great Emman-Wori.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            WordPress Developer | Product Designer
          </h2>
          
          <p className="text-portfolioTheme-textAccent text-lg mb-8 max-w-xl">
            Hello! I'm a UI/UX designer passionate about turning ideas into meaningful, 
            user-friendly designs that deliver exceptional digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="primary-btn flex items-center gap-2">
              Explore My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="secondary-btn">
              Hire Me
            </a>
            <a href="#" className="secondary-btn">
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Right Column - Avatar */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            {/* Placeholder for actual avatar - replace with real image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolioTheme-cardBg border-4 border-portfolioTheme-primary overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Great Emman-Wori" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-portfolioTheme-primary opacity-30 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-portfolioTheme-primary opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
