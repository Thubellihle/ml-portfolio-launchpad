import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["JavaScript", "HTML", "CSS", "React", "TypeScript"],
    },
    {
      category: "Tools & Platforms",
      skills: ["GitHub", "Visual Studio Code", "Microsoft Office", "Azure"],
    },
    {
      category: "Cybersecurity",
      skills: ["Threat Detection", "IoT Security", "Cyber Hygiene", "Network Security"],
    },
    {
      category: "Cloud & Data",
      skills: ["Cloud Computing", "Data Analytics", "AI Ethics", "IoT Fundamentals"],
    },
  ];

  const certifications = [
    "Microsoft Office Specialist (Word, Excel, PowerPoint)",
    "Cisco: Introduction to Cybersecurity",
    "Cisco: Networking Essentials",
    "Cisco: Introduction to IoT",
    "IBM SkillsBuild: Fundamentals of Cybersecurity",
    "Microsoft Azure Fundamentals (AZ900)",
    "Full Stack Development (FNB App Academy)",
    "Microsoft Explore AI: Responsive AI Concepts",
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Skills & Certifications
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-secondary">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-foreground border-primary/30 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-accent">
            Certifications
          </h3>
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
