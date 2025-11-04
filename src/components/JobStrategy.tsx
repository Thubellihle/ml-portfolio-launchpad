import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, FileText, Network, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";

const JobStrategy = () => {
  const targetRoles = [
    "AI/Machine Learning Engineer",
    "Full-Stack Developer (AI Focus)",
    "Data Scientist",
    "ML Operations Engineer",
    "Junior AI Developer",
    "Software Engineer (ML/AI)",
  ];

  const applicationStrategy = [
    {
      phase: "Research & Targeting",
      icon: Target,
      actions: [
        "Identify 20-30 companies actively hiring AI/ML or Full-Stack developers in South Africa",
        "Research company culture, tech stack, and recent AI/ML initiatives",
        "Follow target companies and hiring managers on LinkedIn",
        "Set up job alerts on LinkedIn, Indeed, OfferZen, and WeWorkRemotely",
      ],
    },
    {
      phase: "Application Materials",
      icon: FileText,
      actions: [
        "Customize resume for each application with relevant keywords from job description",
        "Write compelling cover letters highlighting specific projects matching their needs",
        "Ensure ATS optimization with proper formatting and keyword density",
        "Prepare 3 versions of resume: AI/ML focused, Full-Stack focused, and Generalist",
      ],
    },
    {
      phase: "Networking & Outreach",
      icon: Network,
      actions: [
        "Connect with 5-10 professionals in target companies weekly",
        "Engage with AI/ML content on LinkedIn (comment, share, create)",
        "Attend virtual tech meetups and AI/ML webinars",
        "Reach out to recruiters specializing in tech placements",
      ],
    },
    {
      phase: "Interview Preparation",
      icon: TrendingUp,
      actions: [
        "Practice coding challenges on LeetCode (focus on algorithms & data structures)",
        "Prepare ML interview questions (model selection, evaluation metrics, deployment)",
        "Rehearse STAR method responses for behavioral questions",
        "Create a 2-minute elevator pitch highlighting key projects and unique value",
      ],
    },
  ];

  const keyCompanies = [
    { name: "South African Tech Companies", examples: "Takealot, Mr D Food, Luno, Yoco" },
    { name: "Global Tech Companies (SA Offices)", examples: "Amazon, Microsoft, Google, Meta" },
    { name: "AI-Focused Startups", examples: "Aerobotics, DataProphet, Cortex Logic" },
    { name: "Financial Services & Fintech", examples: "Standard Bank, Capitec, TymeBank, OzowÓ" },
    { name: "Remote-First Companies", examples: "GitLab, Automattic, Toptal, Andela" },
  ];

  const weeklyGoals = [
    { goal: "Submit 5-7 quality applications", icon: CheckCircle2 },
    { goal: "Connect with 10+ professionals", icon: Network },
    { goal: "Complete 3 coding challenges", icon: Target },
    { goal: "Publish 1 technical article/post", icon: FileText },
  ];

  return (
    <section id="strategy" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Job Application Strategy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive, data-driven approach to landing AI/ML and Full-Stack developer roles
          </p>
        </div>

        {/* Target Roles */}
        <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-primary">Target Roles</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {targetRoles.map((role, index) => (
              <div 
                key={index}
                className="p-4 bg-muted/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
              >
                <p className="font-medium text-center">{role}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Application Strategy */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">4-Phase Application Strategy</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {applicationStrategy.map((phase, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <phase.icon className="h-8 w-8 text-primary" />
                  <h4 className="text-xl font-semibold">{phase.phase}</h4>
                </div>
                <ul className="space-y-2">
                  {phase.actions.map((action, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Companies */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Target Company Categories</h3>
          <div className="space-y-4">
            {keyCompanies.map((category, index) => (
              <div 
                key={index}
                className="p-4 bg-card/50 rounded-lg border border-primary/10"
              >
                <h4 className="font-semibold text-primary mb-2">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.examples}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Weekly Goals */}
        <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Weekly Activity Goals</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {weeklyGoals.map((item, index) => (
              <div 
                key={index}
                className="p-4 bg-muted/30 rounded-lg text-center border border-primary/10 hover:border-primary/30 transition-all"
              >
                <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{item.goal}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Success Metrics */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-6">Success Metrics & Timeline</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Key Metrics to Track
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>Application-to-interview conversion rate (target: 20%+)</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>Number of networking connections made per week</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>Technical assessment completion rate</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>LinkedIn profile views and engagement rate</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Expected Timeline
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span><strong>Weeks 1-2:</strong> Portfolio optimization, resume tailoring, company research</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span><strong>Weeks 3-6:</strong> High-volume applications (25-30 applications)</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span><strong>Weeks 7-10:</strong> Interview rounds and technical assessments</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span><strong>Weeks 10-12:</strong> Offer negotiation and decision making</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="gap-2 bg-gradient-primary hover:shadow-glow-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
            <Network className="h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Open to discussing opportunities, collaborations, and career growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobStrategy;
