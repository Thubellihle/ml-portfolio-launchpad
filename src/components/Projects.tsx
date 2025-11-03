import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Daily Dose Ignite",
      description: "A simple AI-powered web app that delivers personalized motivational quotes and goals every morning. Built with Lovable AI to help users start their day with positivity and consistency.",
      tags: ["AI", "Web Development", "Motivational"],
      github: "https://github.com/Thubellihle/daily-dose-ignite",
      live: "https://daily-dose-ignite.lovable.app/",
      docs: [],
    },
    {
      title: "AI Predictive Maintenance Tool",
      description: "A Figma-integrated predictive analytics dashboard that analyzes machine sensor data to classify equipment health status. Helps prevent unplanned downtime by predicting machine failures before they occur.",
      tags: ["AI", "Predictive Analytics", "Manufacturing", "Machine Learning"],
      github: "https://github.com/Thubellihle/AI-Predictive-Maintenance-Tool",
      live: "#",
      docs: [
        { name: "Figma Documentation", url: "/docs/Predictive_AI_Figma_Documentation.docx" },
        { name: "Week 2 Documentation", url: "/docs/W2_Documentation.docx" },
      ],
    },
    {
      title: "Logic League Resume Builder",
      description: "A web-based application that helps users create professional, ATS-friendly resumes with multiple templates, complexity levels, and export formats (PDF, DOCX, HTML). Features real-time preview and responsive design.",
      tags: ["Web Development", "Career", "AI-Assisted"],
      github: "https://github.com/Thubellihle/Logic-League-Resume-Builder",
      live: "#",
      docs: [
        { name: "Week 4 Documentation", url: "/docs/Logic_League_W4_Documentation.docx" },
        { name: "Technical Report", url: "/docs/Resume_Builder_Technical_Report.docx" },
      ],
    },
    {
      title: "Grad Job Application",
      description: "A comprehensive platform designed to streamline the graduate job application process, helping recent graduates navigate their career journey with ease.",
      tags: ["Web Development", "Career", "Education"],
      github: "https://github.com/Thubellihle/GradJobApplication",
      live: "https://grad-job-application.vercel.app/",
      docs: [],
    },
    {
      title: "Logic League Sentiment Analyzer",
      description: "An intelligent sentiment analysis tool that leverages machine learning to analyze and classify text sentiment, providing valuable insights for data-driven decision making.",
      tags: ["Machine Learning", "NLP", "Data Analysis"],
      github: "https://github.com/Thubellihle/Logic-League-Sentiment-Analyzer",
      live: "https://logic-league.github.io/Logic-League-Sentiment-Analyzer/",
      docs: [
        { name: "AI Chatbot Documentation", url: "/docs/Logic_League.docx" },
        { name: "Extended Documentation", url: "/docs/Logic_League_2.docx" },
      ],
    },
    {
      title: "Loan Prediction Using Classification ML",
      description: "A machine learning project that uses classification algorithms to predict loan approval outcomes based on applicant data, helping financial institutions make data-driven lending decisions.",
      tags: ["Machine Learning", "Classification", "Finance", "Data Science"],
      github: "https://github.com/Thubellihle/Loan-Prediction-Using-Classification-Machine-Learning-",
      live: "#",
      docs: [],
    },
    {
      title: "Educal App",
      description: "An educational platform focused on enhancing learning experiences through interactive features and modern web technologies.",
      tags: ["Education", "Web Development", "Interactive"],
      github: "https://github.com/Thubellihle/educal-app",
      live: "https://logic-league.vercel.app/",
      docs: [],
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
              <div className="flex flex-col gap-3">
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
                {project.docs && project.docs.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.docs.map((doc, docIndex) => (
                      <Button 
                        key={docIndex}
                        variant="outline" 
                        size="sm"
                        className="border-accent/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        asChild
                      >
                        <a href={doc.url} target="_blank" rel="noopener noreferrer" download>
                          <FileText className="h-4 w-4 mr-2" />
                          {doc.name}
                        </a>
                      </Button>
                    ))}
                  </div>
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
