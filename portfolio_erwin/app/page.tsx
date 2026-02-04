import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />
      <Hero />
      <WorkExperience />
      <Projects />
      <TechStack />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2026 Erwin MEHOU-HOUNSOU. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}