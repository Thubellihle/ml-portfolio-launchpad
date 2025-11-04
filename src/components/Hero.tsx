import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Personal Branding Statement */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Available for AI/ML & Full-Stack Opportunities</span>
        </div>

        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Thubelihle Titi
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
            AI/ML Developer | Full-Stack Engineer | Cybersecurity Enthusiast
          </h2>
        </div>

        {/* Enhanced Personal Branding Statement */}
        <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Transforming complex challenges into intelligent solutions through machine learning, 
            full-stack development, and cloud architecture. ICT Honours graduate with proven expertise 
            in sentiment analysis, AI-powered applications, and scalable web platforms.
          </p>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <Badge variant="secondary" className="text-sm">Machine Learning</Badge>
            <Badge variant="secondary" className="text-sm">React & TypeScript</Badge>
            <Badge variant="secondary" className="text-sm">Azure Certified</Badge>
            <Badge variant="secondary" className="text-sm">Cybersecurity</Badge>
            <Badge variant="secondary" className="text-sm">NLP & Sentiment Analysis</Badge>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 hover:bg-card hover:border-primary transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <a 
            href="https://github.com/Thubellihle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/thubelihle-titi-a62992287" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:titithubelihle@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
