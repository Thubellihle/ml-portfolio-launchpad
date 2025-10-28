import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Shield, Cloud } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Honours in ICT from Durban University of Technology",
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-stack web development with modern frameworks",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Threat detection and IoT security concepts",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Azure fundamentals and cloud networking",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Profile</h3>
            <p className="text-muted-foreground leading-relaxed">
              Motivated and tech-savvy graduate with a Bachelor of Information and 
              Communications Technology (Honours). Proficient in Cybersecurity, Web 
              Development, and Cloud Computing Concepts. Passionate about lifelong 
              learning, digital transformation, and contributing to South Africa's 
              growing tech ecosystem.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seeking to grow through continuous learning and contribute meaningful 
              solutions to real-world challenges. Committed to excellence in software 
              development, with a focus on creating secure, scalable, and user-friendly 
              applications that make a positive impact.
            </p>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-300 group"
            >
              <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
