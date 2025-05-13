
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-portfolioTheme-secondary">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Text Content */}
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Small decorative element */}
          <div className="mb-8">
            <div className="w-10 h-10 transform rotate-45 bg-portfolioTheme-accent"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I'm <span className="text-portfolioTheme-accent">Creative E.</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-lg uppercase">
            <span>WORDPRESS DEVELOPER</span>
            <span className="text-portfolioTheme-textAccent">|</span>
            <span>UI/UX DESIGNER</span>
            <span className="text-portfolioTheme-textAccent">|</span>
            <span>PRODUCT DESIGNER</span>
          </div>
          
          <p className="text-portfolioTheme-textAccent text-lg mb-8 max-w-xl">
            Hello! I'm a UI/UX designer passionate about turning ideas into meaningful, 
            user-friendly designs. I believe in creating experiences that are not just visually 
            appealing but also intuitive and impactful. Let's <span className="text-portfolioTheme-accent">collaborate</span> to bring something truly 
            exceptional to life.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="bg-portfolioTheme-accent hover:bg-amber-600 text-portfolioTheme-secondary px-6 py-3 rounded-md font-bold uppercase transition-colors duration-300">
              Explore My Work
            </a>
            <a href="#contact" className="bg-portfolioTheme-secondary border-2 border-portfolioTheme-accent text-portfolioTheme-textMain hover:bg-portfolioTheme-accent hover:text-portfolioTheme-secondary px-6 py-3 rounded-md font-bold uppercase transition-colors duration-300">
              Hire Me
            </a>
            <a href="#" className="bg-portfolioTheme-accent hover:bg-amber-600 text-portfolioTheme-secondary px-6 py-3 rounded-md font-bold uppercase transition-colors duration-300 flex items-center gap-2">
              Resume <Download size={18} />
            </a>
          </div>
        </div>
        
        {/* Right Column - Avatar */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            {/* Avatar with orange/gold border */}
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-portfolioTheme-accent overflow-hidden">
              <img 
                src="/lovable-uploads/438ebe74-082c-425d-aaf5-accdda889f3d.png"
                alt="Creative Emman Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-gray-800 -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Small decorative element at bottom right */}
      <div className="absolute bottom-10 right-10">
        <div className="w-10 h-10 transform rotate-45 bg-portfolioTheme-accent"></div>
      </div>
    </section>
  );
};

export default Hero;
