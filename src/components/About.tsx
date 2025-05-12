
import { Code, Figma, FileText, Columns, Lightbulb } from "lucide-react";

const About = () => {
  // Skills array
  const skills = [
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
              Great Emman-Wori is a 19-year-old Nigerian WordPress Developer and Junior Product Designer 
              with over two years of practical experience in the digital space.
            </p>
            
            <p className="text-lg mb-6 text-portfolioTheme-textAccent">
              Combining technical knowledge with creative design skills, Great helps businesses establish 
              strong online presences through custom WordPress solutions and intuitive user interfaces.
            </p>
            
            <p className="text-lg mb-6 text-portfolioTheme-textAccent">
              His approach focuses on creating websites that not only look professional but also deliver 
              seamless user experiences that drive engagement and conversions.
            </p>
            
            {/* Skills section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
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
          
          {/* Right column - Image or animation */}
          <div className="animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="relative h-full min-h-[300px] flex items-center justify-center">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-portfolioTheme-primary opacity-10 rounded-full -z-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-portfolioTheme-primary opacity-5 rounded-full -z-10"></div>
              
              {/* Placeholder for design image or code snippets - replace with actual image */}
              <div className="w-full max-w-md p-2 bg-portfolioTheme-cardBg rounded-lg shadow-lg">
                <div className="rounded overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Design Work" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Code snippet overlay */}
                <div className="mt-4 p-3 bg-portfolioTheme-secondary rounded text-left text-sm opacity-80 font-mono">
                  <span className="text-portfolioTheme-primary">const</span>{" "}
                  <span className="text-green-400">designer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;name: <span className="text-amber-300">"Great Emman-Wori"</span>,
                  <br />
                  &nbsp;&nbsp;skills: [<span className="text-amber-300">"WordPress"</span>, <span className="text-amber-300">"UI/UX"</span>, <span className="text-amber-300">"Product Design"</span>],
                  <br />
                  &nbsp;&nbsp;passion: <span className="text-amber-300">"Creating amazing digital experiences"</span>
                  <br />
                  {"}"};
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
