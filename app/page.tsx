import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../app/data/projects";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <section className="relative py-24 px-4">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1C1C1C] mb-16 font-['Oswald'] uppercase tracking-wide">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} item={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
