
import { Code, Figma, Lightbulb, Columns, FileText } from "lucide-react";

const About = () => {
  // Designer data object
  const designer = {
    name: "Great Emman-Wori",
    skills: ["WordPress", "UI/UX", "Product Design"],
    passion: "Creating amazing digital experiences"
  };
  
  // Skills array with icons
  const skillsWithIcons = [
    { name: "WordPress", icon: <Code className="w-5 h-5" /> },
    { name: "Figma", icon: <Figma className="w-5 h-5" /> },
    { name: "UI Design", icon: <FileText className="w-5 h-5" /> },
    { name: "UX Strategy", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "HTML", icon: <Code className="w-5 h-5" /> },
    { name: "CSS", icon: <Columns className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="section-padding bg-portfolioTheme-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Left column - Bio text */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg mb-6 text-portfolioTheme-textAccent">
              {designer.name} is a 19-year-old Nigerian WordPress Developer and Junior Product Designer 
              with over two years of practical experience in the digital space.
            </p>
            
            <p className="text-lg mb-6 text-portfolioTheme-textAccent">
              Combining technical knowledge with creative design skills, {designer.name.split(' ')[0]} helps businesses establish 
              strong online presences through custom WordPress solutions and intuitive user interfaces.
            </p>
            
            <p className="text-lg mb-6 text-portfolioTheme-textAccent">
              His approach focuses on creating websites that not only look professional but also deliver 
              seamless user experiences that drive engagement and conversions.
            </p>
            
            <p className="text-lg mb-6 text-portfolioTheme-textAccent">
              <span className="font-bold">Passion:</span> {designer.passion}
            </p>
            
            {/* Skills section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skillsWithIcons.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-portfolioTheme-cardBg py-2 px-4 rounded-full"
                  >
                    <span className="text-portfolioTheme-primary">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Stack Visualization */}
          <div className="animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="relative h-full flex items-center justify-center">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-portfolioTheme-primary opacity-10 rounded-full -z-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-portfolioTheme-primary opacity-5 rounded-full -z-10"></div>
              
              {/* Central icon with stack visualization */}
              <div className="relative w-full max-w-md aspect-square">
                {/* Central logo/icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-700 to-portfolioTheme-primary w-24 h-24 flex items-center justify-center z-20">
                  <div className="text-white text-4xl font-bold">Σ</div>
                  <div className="absolute w-full h-full rounded-full bg-yellow-500/20 animate-pulse"></div>
                </div>

                {/* Stack icons */}
                <div className="absolute left-1/2 top-[15%] -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.238 0-9.5-4.262-9.5-9.5S6.762 3 12 3s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm.499-14.75c-1.933 0-3.5 1.567-3.5 3.5 0 1.457.94 2.703 2.25 3.156V10h2.5v3.406A3.488 3.488 0 0 0 16 10c0-1.933-1.567-3.5-3.5-3.5zm-1.25 3.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" fill="#21759b" />
                  </svg>
                </div>
                
                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664h6.664a3.334 3.334 0 0 0 0-6.664 3.334 3.334 0 0 0 0-6.665zM8.668 3.333h6.664a1.666 1.666 0 1 1 0 3.334H8.668a1.666 1.666 0 0 1 0-3.334zm0 10h6.664a1.666 1.666 0 1 1 0 3.334H8.668a1.666 1.666 0 0 1 0-3.334z" fill="#0ACF83" />
                  </svg>
                </div>
                
                <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 22.714c-5.918 0-10.714-4.796-10.714-10.714S6.082 1.286 12 1.286 22.714 6.082 22.714 12 17.918 22.714 12 22.714zm2.357-12.857H9.643c-1.302 0-2.357 1.055-2.357 2.357v2.357c0 1.302 1.055 2.357 2.357 2.357h4.714c1.302 0 2.357-1.055 2.357-2.357v-2.357c0-1.302-1.055-2.357-2.357-2.357z" fill="#4353FF" />
                  </svg>
                </div>

                {/* Stack titles */}
                <div className="absolute left-0 top-[25%] -translate-y-1/2 text-portfolioTheme-primary font-bold text-xl">
                  PRODUCT DESIGNER
                </div>
                
                <div className="absolute right-0 top-[75%] -translate-y-1/2 text-portfolioTheme-primary font-bold text-xl">
                  WORDPRESS DEVELOPER
                </div>

                {/* Connecting lines (subtle) */}
                <div className="absolute w-full h-full rounded-full border-2 border-gray-700/30"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-2 border-gray-700/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
