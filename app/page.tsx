import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-foreground overflow-hidden">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GitHubStats />
      <Contact />
    </main>
  );
}
