import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Daily Dose Ignite",
      description: "A simple AI-powered web app that delivers personalized motivational quotes and goals every morning. Built with Lovable AI to help users start their day with positivity and consistency.",
      tags: ["AI", "Web Development", "Motivational"],
      github: "https://github.com/Thubellihle/daily-dose-ignite",
      live: "#",
    },
    {
      title: "Grad Job Application",
      description: "A comprehensive platform designed to streamline the graduate job application process, helping recent graduates navigate their career journey with ease.",
      tags: ["Web Development", "Career", "Education"],
      github: "https://github.com/Thubellihle/GradJobApplication",
      live: "#",
    },
    {
      title: "Logic League Sentiment Analyzer",
      description: "An intelligent sentiment analysis tool that leverages machine learning to analyze and classify text sentiment, providing valuable insights for data-driven decision making.",
      tags: ["Machine Learning", "NLP", "Data Analysis"],
      github: "https://github.com/Thubellihle/Logic-League-Sentiment-Analyzer",
      live: "#",
    },
    {
      title: "Educal App",
      description: "An educational platform focused on enhancing learning experiences through interactive features and modern web technologies.",
      tags: ["Education", "Web Development", "Interactive"],
      github: "https://github.com/Thubellihle/educal-app",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300 group"
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.live !== "#" && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-secondary/50 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
