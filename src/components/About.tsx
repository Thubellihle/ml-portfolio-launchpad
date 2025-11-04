import { Card } from "@/components/ui/card";
import { Target, Rocket, Brain, TrendingUp, Award, Zap } from "lucide-react";

const About = () => {
  const careerObjectives = [
    {
      icon: Target,
      title: "Short-Term Goals",
      description: "Secure a challenging AI/ML or Full-Stack Developer role where I can apply machine learning algorithms, build intelligent applications, and contribute to innovative tech solutions in South Africa's digital transformation.",
    },
    {
      icon: Rocket,
      title: "Long-Term Vision",
      description: "Become a leading AI/ML specialist driving impactful solutions in NLP, predictive analytics, and intelligent automation. Contribute to open-source AI projects and mentor aspiring developers in emerging technologies.",
    },
    {
      icon: Brain,
      title: "Continuous Growth",
      description: "Expand expertise in deep learning frameworks (TensorFlow, PyTorch), advanced cloud architecture (Azure AI services), and cutting-edge technologies like LLMs, transformers, and computer vision applications.",
    },
  ];

  const coreCompetencies = [
    { icon: Award, title: "AI/ML Development", description: "Sentiment analysis, NLP, predictive modeling, and intelligent automation" },
    { icon: Zap, title: "Full-Stack Engineering", description: "React, TypeScript, RESTful APIs, and responsive web applications" },
    { icon: TrendingUp, title: "Cloud & DevOps", description: "Azure certified, cloud architecture, CI/CD, and scalable deployments" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Professional Biography
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Innovative ICT graduate passionate about leveraging AI and machine learning to solve real-world challenges
        </p>
        
        {/* Professional Biography */}
        <Card className="p-8 md:p-12 mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Who I Am</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am <strong className="text-foreground">Thubelihle Titi</strong>, an Honours graduate in Information and Communications Technology 
              from Durban University of Technology with a specialized focus on <strong className="text-foreground">AI/ML development, 
              full-stack engineering, and cybersecurity</strong>. My academic journey, complemented by extensive certifications from 
              industry leaders like DeepLearning.AI, AWS, IBM, and Google Cloud, has equipped me with both theoretical depth 
              and practical expertise in building intelligent, scalable applications.
            </p>
            <p>
              Throughout my career, I have developed a diverse portfolio of projects that showcase my ability to translate 
              complex technical challenges into elegant solutions. From creating <strong className="text-foreground">sentiment analysis systems</strong> that 
              process and classify emotions in real-time, to building <strong className="text-foreground">AI-powered motivational platforms</strong> with 
              personalized content recommendation engines, I have consistently demonstrated my capacity for innovation and 
              technical excellence.
            </p>
            <p>
              My technical arsenal spans <strong className="text-foreground">machine learning frameworks, modern web technologies (React, TypeScript), 
              cloud platforms (Microsoft Azure), and cybersecurity principles</strong>. I am particularly passionate about natural 
              language processing, predictive analytics, and creating AI solutions that drive meaningful impact. With certifications 
              in Generative AI with LLMs, Supervised Machine Learning, and Azure Fundamentals, I bring both breadth and depth to 
              every project I undertake.
            </p>
            <p>
              Beyond technical skills, I pride myself on my <strong className="text-foreground">emotional intelligence, leadership capabilities, and 
              commitment to continuous learning</strong>. I thrive in collaborative environments where I can contribute to innovative 
              solutions while growing alongside talented teams. My goal is to join an organization that values innovation, 
              embraces cutting-edge technologies, and is committed to making a positive impact through technology.
            </p>
          </div>
        </Card>

        {/* Career Objectives */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Career Objectives</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {careerObjectives.map((objective, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
              >
                <objective.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">{objective.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{objective.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {coreCompetencies.map((item, index) => (
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
      </div>
    </section>
  );
};

export default About;
