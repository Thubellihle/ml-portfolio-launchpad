import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-primary/10">
        <p>© 2025 Thubelihle Titi. Built with passion and dedication.</p>
      </footer>
    </div>
  );
};

export default Index;
