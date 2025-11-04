import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, CheckCircle2, Star, Zap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LinkedInGuide = () => {
  const profileSections = [
    {
      title: "Headline Optimization",
      icon: Star,
      content: "AI/ML Developer | Full-Stack Engineer | Building Intelligent Solutions with Machine Learning & Cloud Technologies | Open to Opportunities",
      tips: [
        "Include primary keywords: AI/ML, Full-Stack, Machine Learning",
        "Add unique value proposition",
        "Signal availability for opportunities",
        "Stay under 220 characters",
      ],
    },
    {
      title: "About Section Strategy",
      icon: Users,
      content: "Opening hook → Core expertise → Key achievements → Technical skills → Call-to-action",
      tips: [
        "Start with compelling problem you solve",
        "Quantify achievements (90%+ accuracy, <200ms response time)",
        "Use bullet points for readability",
        "End with clear CTA for recruiters",
      ],
    },
    {
      title: "Featured Section Setup",
      icon: Zap,
      content: "Showcase projects, certifications, and articles",
      tips: [
        "Pin Logic League Sentiment Analyzer project",
        "Add project documentation as media",
        "Feature key certifications (AWS, DeepLearning.AI)",
        "Link to GitHub repositories and live demos",
      ],
    },
  ];

  const experienceStructure = {
    title: "Project Experience Format",
    examples: [
      {
        role: "AI/ML Developer (Personal Project)",
        project: "Logic League Sentiment Analyzer",
        points: [
          "Engineered machine learning pipeline for real-time sentiment analysis achieving 90%+ classification accuracy",
          "Designed and deployed RESTful API architecture processing 1000+ requests daily with <200ms latency",
          "Implemented NLP preprocessing pipeline using Python (NLTK, scikit-learn) for text normalization and feature extraction",
          "Technologies: Python, Machine Learning, NLP, React, TypeScript, Azure",
        ],
      },
      {
        role: "Full-Stack Developer (Personal Project)",
        project: "Daily Dose Ignite - AI Motivational Platform",
        points: [
          "Built intelligent content recommendation system using collaborative filtering and machine learning algorithms",
          "Developed responsive React application with TypeScript, achieving 95+ Lighthouse performance score",
          "Integrated AI-powered personalization engine increasing user engagement by 40%",
          "Technologies: React, TypeScript, AI APIs, RESTful Architecture, Tailwind CSS",
        ],
      },
    ],
  };

  const skillsEndorsements = [
    "Machine Learning",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Sentiment Analysis",
    "React.js",
    "TypeScript",
    "Python",
    "Microsoft Azure",
    "Full-Stack Development",
    "Cybersecurity",
    "Cloud Computing",
    "Data Analytics",
    "RESTful APIs",
    "Git/GitHub",
    "Problem Solving",
  ];

  const engagementStrategy = [
    {
      activity: "Daily Engagement",
      actions: [
        "Comment on 3-5 posts from AI/ML influencers and companies",
        "Share relevant articles with thoughtful commentary",
        "Like and engage with recruiter posts",
      ],
    },
    {
      activity: "Weekly Content",
      actions: [
        "Post 1-2 times about projects, learnings, or insights",
        "Share project milestones with screenshots/demos",
        "Write short technical posts about AI/ML topics",
      ],
    },
    {
      activity: "Networking",
      actions: [
        "Send 10+ personalized connection requests weekly",
        "Target: Recruiters, AI/ML engineers, hiring managers",
        "Include brief note referencing shared interests/companies",
      ],
    },
  ];

  return (
    <section id="linkedin" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            LinkedIn Profile Optimization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategic guide to building a compelling LinkedIn presence that attracts recruiters and opportunities
          </p>
        </div>

        {/* Profile Sections */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Profile Sections</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {profileSections.map((section, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <section.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
                <div className="p-3 bg-muted/30 rounded-lg mb-4 border border-primary/10">
                  <p className="text-sm text-muted-foreground italic">{section.content}</p>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Structure */}
        <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-primary">{experienceStructure.title}</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Frame personal projects as professional experience using action verbs and quantifiable achievements
          </p>
          <div className="space-y-8">
            {experienceStructure.examples.map((example, index) => (
              <div key={index} className="p-6 bg-muted/20 rounded-lg border border-primary/10">
                <div className="mb-3">
                  <p className="font-semibold text-lg">{example.role}</p>
                  <p className="text-sm text-primary">{example.project}</p>
                </div>
                <ul className="space-y-2">
                  {example.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills & Endorsements */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Skills Priority List</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Add these skills in order of priority. Top 3 skills appear on profile preview.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsEndorsements.map((skill, index) => (
              <Badge 
                key={index} 
                variant={index < 3 ? "default" : "secondary"}
                className="text-sm"
              >
                {skill}
                {index < 3 && <Star className="ml-1 h-3 w-3 fill-current" />}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            ⭐ Starred skills should be your top 3 for maximum visibility
          </p>
        </Card>

        {/* Engagement Strategy */}
        <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Engagement Strategy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementStrategy.map((strategy, index) => (
              <div key={index} className="p-6 bg-muted/20 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary mb-4">{strategy.activity}</h4>
                <ul className="space-y-2">
                  {strategy.actions.map((action, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Profile Optimization Checklist */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-6">Profile Optimization Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Professional headshot photo with good lighting",
              "Custom background banner showcasing your work",
              "Keyword-rich headline (220 characters max)",
              "Compelling About section with CTA",
              "All education entries with descriptions",
              "Project experience with quantifiable results",
              "50+ skills added and prioritized",
              "Featured section with 3+ projects",
              "Recommendations from peers/mentors",
              "Custom LinkedIn URL (linkedin.com/in/thubelihle-titi)",
              "Creator mode enabled for content visibility",
              "Open to work badge activated",
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-2 p-3 bg-muted/20 rounded-lg border border-primary/10"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="gap-2 bg-gradient-primary hover:shadow-glow-primary"
            onClick={() => window.open('https://www.linkedin.com/in/thubelihle-titi-a62992287', '_blank')}
          >
            <Linkedin className="h-5 w-5" />
            Visit My LinkedIn Profile
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Let's connect and grow our professional networks together
          </p>
        </div>
      </div>
    </section>
  );
};

export default LinkedInGuide;
