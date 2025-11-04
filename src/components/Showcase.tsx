import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, FileText, Github, ExternalLink, Video } from "lucide-react";

const Showcase = () => {
  const capstoneHighlights = [
    {
      title: "Technical Architecture",
      points: [
        "Machine learning pipeline with NLP preprocessing",
        "RESTful API design with scalable backend architecture",
        "Responsive React frontend with TypeScript",
        "Cloud deployment on Azure with CI/CD integration",
      ],
    },
    {
      title: "Key Achievements",
      points: [
        "90%+ accuracy in sentiment classification across multiple datasets",
        "Real-time processing with <200ms response time",
        "Comprehensive data visualization dashboard",
        "Secure authentication and user management system",
      ],
    },
    {
      title: "Technologies Used",
      points: [
        "Python (scikit-learn, NLTK, pandas)",
        "React, TypeScript, Tailwind CSS",
        "Microsoft Azure (App Services, Functions)",
        "Git, GitHub Actions, RESTful APIs",
      ],
    },
  ];

  return (
    <section id="showcase" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Capstone Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive 10-minute demonstration of my technical expertise, project highlights, and future development roadmap
          </p>
        </div>

        {/* Video Showcase Area */}
        <Card className="p-8 md:p-12 mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center mb-6 border border-primary/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="relative z-10 text-center space-y-4">
              <Video className="h-16 w-16 mx-auto text-primary/60 group-hover:text-primary transition-colors" />
              <div className="space-y-2">
                <p className="text-muted-foreground font-medium">Capstone Presentation Video</p>
                <p className="text-sm text-muted-foreground/70">Coming Soon: 10-Minute Technical Showcase</p>
              </div>
              <Button size="lg" className="gap-2 bg-gradient-primary">
                <Play className="h-5 w-5" />
                Watch Presentation
              </Button>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Full Technical Demonstration</h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              This showcase covers my technical background, project deep-dives, live demonstrations of key functionalities, 
              and my roadmap for future learning and development in AI/ML technologies.
            </p>
          </div>
        </Card>

        {/* Presentation Outline */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {capstoneHighlights.map((section, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold mb-4 text-primary">{section.title}</h4>
              <ul className="space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Supporting Resources */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-xl font-semibold mb-6 text-center">Supporting Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="gap-2 h-auto py-4 flex-col border-primary/30 hover:border-primary"
              onClick={() => window.open('https://github.com/Thubellihle', '_blank')}
            >
              <Github className="h-6 w-6 text-primary" />
              <div className="text-center">
                <p className="font-semibold">GitHub Repository</p>
                <p className="text-xs text-muted-foreground">Full source code & documentation</p>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="gap-2 h-auto py-4 flex-col border-primary/30 hover:border-primary"
              onClick={() => window.open('/docs/Logic_League.docx', '_blank')}
            >
              <FileText className="h-6 w-6 text-secondary" />
              <div className="text-center">
                <p className="font-semibold">Technical Documentation</p>
                <p className="text-xs text-muted-foreground">Detailed project reports</p>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="gap-2 h-auto py-4 flex-col border-primary/30 hover:border-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="h-6 w-6 text-accent" />
              <div className="text-center">
                <p className="font-semibold">Live Demos</p>
                <p className="text-xs text-muted-foreground">Interactive project showcases</p>
              </div>
            </Button>
          </div>
        </Card>

        {/* Future Learning Plans */}
        <Card className="p-8 mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Future Learning & Development</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-primary mb-3">Advanced AI/ML</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>Deep Learning with TensorFlow & PyTorch</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>Large Language Models (LLMs) & Transformers</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>Computer Vision & Image Processing</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>MLOps & Model Deployment Pipelines</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-3">Technical Expansion</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span>Advanced Azure AI Services & Cognitive APIs</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span>Kubernetes & Container Orchestration</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span>Advanced Cybersecurity & Ethical Hacking</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span>Blockchain & Distributed Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Showcase;
