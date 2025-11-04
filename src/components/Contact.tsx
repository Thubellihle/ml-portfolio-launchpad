import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "titithubelihle@gmail.com",
      link: "mailto:titithubelihle@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 72 570 4654",
      link: "tel:+27725704654",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Johannesburg, South Africa",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Thubellihle",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/thubelihle-titi-a62992287",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm actively seeking <strong className="text-foreground">AI/ML Developer, Full-Stack Engineer, or Data Science</strong> opportunities 
              where I can apply my expertise in machine learning, cloud computing, and intelligent application development. 
              Whether you're a recruiter, hiring manager, or fellow developer interested in collaboration, I'd love to connect!
            </p>
          </div>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-primary hover:shadow-glow-primary"
              asChild
            >
              <a href="mailto:titithubelihle@gmail.com">
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-primary/50 hover:bg-card"
              asChild
            >
              <a href="https://www.linkedin.com/in/thubelihle-titi-a62992287" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <div className="space-y-4 mb-8 pt-8 border-t border-primary/20">
            <p className="text-center text-sm text-muted-foreground mb-4">Or reach me through:</p>
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-primary/20">
            <p className="text-center text-sm text-muted-foreground mb-4">Connect with me on:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5 mr-2" />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
