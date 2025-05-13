
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-16 bg-portfolioTheme-secondary">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        {/* Centralized Avatar */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-portfolioTheme-accent overflow-hidden mx-auto">
              <img 
                src="/lovable-uploads/438ebe74-082c-425d-aaf5-accdda889f3d.png"
                alt="Creative Emman Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 rounded-full bg-portfolioTheme-accent opacity-20 animate-pulse -z-10"></div>
          </div>
        </div>
        
        {/* Text Content - Centered Below Avatar */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I'm <span className="text-portfolioTheme-accent">Creative E.</span>
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-lg uppercase">
            <span>WORDPRESS DEVELOPER</span>
            <span className="text-portfolioTheme-textAccent">|</span>
            <span>UI/UX DESIGNER</span>
            <span className="text-portfolioTheme-textAccent">|</span>
            <span>PRODUCT DESIGNER</span>
          </div>
          
          <p className="text-portfolioTheme-textAccent text-lg mb-8 max-w-xl mx-auto">
            Hello! I'm a UI/UX designer passionate about turning ideas into meaningful, 
            user-friendly designs. I believe in creating experiences that are not just visually 
            appealing but also intuitive and impactful. Let's <span className="text-portfolioTheme-accent">collaborate</span> to bring something truly 
            exceptional to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
};

export default Hero;
