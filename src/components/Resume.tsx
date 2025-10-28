import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // This will trigger a print dialog that can save as PDF
    window.print();
  };

  return (
    <section id="resume" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Resume
          </h2>
          <Button onClick={handleDownload} className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-primary/20 space-y-8 print:shadow-none print:border-0">
          {/* Header */}
          <div className="text-center border-b border-primary/20 pb-6">
            <h1 className="text-3xl font-bold mb-2">Thubelihle Titi</h1>
            <p className="text-lg text-primary mb-4">AI/ML Developer | Full-Stack Engineer | Cybersecurity Enthusiast</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:titithubelihle@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                titithubelihle@gmail.com
              </a>
              <a href="tel:0826192529" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                082 619 2529
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Johannesburg, South Africa
              </span>
              <a href="https://linkedin.com/in/thubelihle-titi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a href="https://github.com/thubelihle-titi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3 border-l-4 border-primary pl-3">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Results-driven ICT Honours graduate with expertise in AI/ML development, full-stack web development, 
              and cybersecurity. Proven track record of building intelligent applications including sentiment analysis 
              systems, AI-powered motivational platforms, and educational management solutions. Strong foundation in 
              cloud computing (Azure), data analytics, and IoT security. Passionate about leveraging machine learning 
              and artificial intelligence to solve real-world problems and drive digital transformation in South Africa's 
              tech ecosystem.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3 border-l-4 border-primary pl-3">
              Education
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Bachelor of Information and Communications Technology (Honours)</p>
                  <p className="text-muted-foreground">Durban University of Technology</p>
                </div>
                <p className="text-muted-foreground">2025</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3 border-l-4 border-primary pl-3">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2">AI/ML & Development:</p>
                <p className="text-muted-foreground text-sm">
                  Machine Learning, Sentiment Analysis, Natural Language Processing, React, TypeScript, 
                  JavaScript, HTML5, CSS3, Full-Stack Development
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Cloud & Security:</p>
                <p className="text-muted-foreground text-sm">
                  Microsoft Azure (AZ-900), Cloud Computing, Cybersecurity, Threat Detection, 
                  IoT Security, Network Security
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Tools & Platforms:</p>
                <p className="text-muted-foreground text-sm">
                  GitHub, Git, Visual Studio Code, Microsoft Office Suite, Azure Portal, 
                  Lovable AI Platform
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Data & Analytics:</p>
                <p className="text-muted-foreground text-sm">
                  Data Analytics, AI Ethics, IoT Fundamentals, Database Management, 
                  API Integration
                </p>
              </div>
            </div>
          </div>

          {/* Projects & Experience */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3 border-l-4 border-primary pl-3">
              Featured AI/ML Projects
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold">Logic League Sentiment Analyzer</p>
                  <p className="text-sm text-muted-foreground">2025</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  AI-Powered Sentiment Analysis Application
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Developed machine learning model for real-time sentiment analysis of text data</li>
                  <li>Implemented natural language processing algorithms to classify emotions and sentiment polarity</li>
                  <li>Built responsive web interface for user interaction and visualization of sentiment insights</li>
                  <li>Integrated AI APIs for enhanced accuracy and performance optimization</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold">Daily Dose Ignite</p>
                  <p className="text-sm text-muted-foreground">2025</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  AI-Powered Motivational Platform
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Created intelligent system delivering personalized motivational quotes using AI algorithms</li>
                  <li>Implemented machine learning for content personalization based on user behavior patterns</li>
                  <li>Designed RESTful API architecture for scalable content delivery</li>
                  <li>Achieved high user engagement through AI-driven content recommendation engine</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold">Educal App</p>
                  <p className="text-sm text-muted-foreground">2025</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Educational Management Platform
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Developed full-stack web application for educational resource management</li>
                  <li>Implemented secure authentication and role-based access control systems</li>
                  <li>Integrated cloud storage solutions for scalable content management</li>
                  <li>Optimized application performance for seamless user experience</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold">Grad Job Application Platform</p>
                  <p className="text-sm text-muted-foreground">2025</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Career Development Application
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Built comprehensive job application tracking and management system</li>
                  <li>Developed dynamic forms and data validation for enhanced user experience</li>
                  <li>Implemented responsive design principles for cross-device compatibility</li>
                  <li>Created intuitive UI/UX for streamlined application workflow</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3 border-l-4 border-primary pl-3">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground">Microsoft Azure Fundamentals (AZ-900)</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground">Full Stack Development (FNB App Academy)</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground">Microsoft Explore AI: Responsible AI Concepts</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground">IBM SkillsBuild: Fundamentals of Cybersecurity</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground">Cisco: Introduction to Cybersecurity</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground">Cisco: Networking Essentials</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground">Cisco: Introduction to IoT</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground">Microsoft Office Specialist (Word, Excel, PowerPoint)</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3 border-l-4 border-primary pl-3">
              Professional Attributes
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-semibold mb-1">Key Strengths:</p>
                <p className="text-muted-foreground">
                  Problem-solving, Continuous Learning, Team Collaboration, Technical Communication
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Languages:</p>
                <p className="text-muted-foreground">
                  English (Fluent), Xhosa (Native)
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume, #resume * {
            visibility: visible;
          }
          #resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          nav, footer, button {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
