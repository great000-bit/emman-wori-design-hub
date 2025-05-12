
import { useState } from "react";
import { ExternalLink } from "lucide-react";

type ProjectCategory = "all" | "design" | "wordpress";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory[];
  image: string;
  description: string;
  tools: string[];
  link: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  
  // Projects array - replace with actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      category: ["design", "wordpress"],
      image: "/placeholder.svg",
      description: "A complete redesign of an e-commerce platform focusing on improved user experience and conversion rate.",
      tools: ["WordPress", "WooCommerce", "Figma", "CSS"],
      link: "#"
    },
    {
      id: 2,
      title: "Corporate Business Website",
      category: ["wordpress"],
      image: "/placeholder.svg",
      description: "A professional website for a corporate client with custom WordPress theme development.",
      tools: ["WordPress", "PHP", "JavaScript", "ACF"],
      link: "#"
    },
    {
      id: 3,
      title: "Mobile App UI Design",
      category: ["design"],
      image: "/placeholder.svg",
      description: "User interface design for a mobile application with focus on accessibility and user experience.",
      tools: ["Figma", "Adobe XD", "Prototype"],
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      category: ["wordpress"],
      image: "/placeholder.svg",
      description: "A WordPress-based restaurant website with integrated booking system and menu management.",
      tools: ["WordPress", "Custom Plugin", "CSS", "JavaScript"],
      link: "#"
    },
    {
      id: 5,
      title: "Portfolio Website Template",
      category: ["design", "wordpress"],
      image: "/placeholder.svg",
      description: "A customizable portfolio template for creative professionals.",
      tools: ["WordPress", "Figma", "CSS Grid", "JavaScript"],
      link: "#"
    },
    {
      id: 6,
      title: "Travel Blog Design System",
      category: ["design"],
      image: "/placeholder.svg",
      description: "A complete design system for a travel blog with reusable components and style guide.",
      tools: ["Figma", "Adobe XD", "Design System"],
      link: "#"
    },
  ];
  
  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => 
    filter === "all" ? true : project.category.includes(filter)
  );

  // Filter tabs
  const filterOptions: { label: string; value: ProjectCategory }[] = [
    { label: "All", value: "all" },
    { label: "Design", value: "design" },
    { label: "WordPress", value: "wordpress" },
  ];

  return (
    <section id="portfolio" className="section-padding bg-portfolioTheme-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <p className="text-portfolioTheme-textAccent mt-4 mb-8 max-w-2xl">
          Here are some of my recent projects showcasing my work in WordPress development and product design.
        </p>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
                filter === option.value 
                ? "bg-portfolioTheme-primary text-portfolioTheme-textMain" 
                : "bg-portfolioTheme-cardBg text-portfolioTheme-textAccent hover:bg-opacity-80"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-portfolioTheme-cardBg rounded-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolioTheme-primary bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-portfolioTheme-secondary text-portfolioTheme-textMain p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-portfolioTheme-textAccent mb-4">{project.description}</p>
                
                {/* Tools used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="bg-portfolioTheme-secondary text-xs px-3 py-1 rounded-full text-portfolioTheme-textAccent"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-portfolioTheme-primary hover:text-amber-500 inline-flex items-center font-medium transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
