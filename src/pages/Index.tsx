import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import JobStrategy from "@/components/JobStrategy";
import LinkedInGuide from "@/components/LinkedInGuide";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Projects />
        <Skills />
        <Resume />
        <JobStrategy />
        <LinkedInGuide />
        <Contact />
      </main>
      <footer className="py-12 px-4 text-center text-muted-foreground border-t border-primary/10 bg-card/30">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg font-semibold">Ready to collaborate on innovative AI/ML solutions?</p>
          <p>© 2025 Thubelihle Titi. Built with passion and dedication.</p>
          <p className="text-sm">AI/ML Developer | Full-Stack Engineer | Open to Opportunities</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
