"use client"; // Convert to Client Component

import TypewriterEffect from "../components/TypewriterEffect";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A short description of Project Alpha.",
      slug: "project-alpha",
    },
    {
      title: "Project Beta",
      description: "A short description of Project Beta.",
      slug: "project-beta",
    },
    {
      title: "Project Gamma",
      description: "A short description of Project Gamma.",
      slug: "project-gamma",
    },
    {
      title: "Project Delta",
      description: "A short description of Project Delta.",
      slug: "project-delta",
    },
    {
      title: "Project Epsilon",
      description: "A short description of Project Epsilon.",
      slug: "project-epsilon",
    },
    {
      title: "Project Zeta",
      description: "A short description of Project Zeta.",
      slug: "project-zeta",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <TypewriterEffect
          text="Welcome to My Kubernetes Portfolio."
          className="text-6xl font-bold text-[#1C1C1C] mb-4 min-h-[180px] flex items-center justify-center"
        />
        <p className="text-xl text-[#3a3a3a]">
          This is a showcase of my projects and skills.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1C1C1C] mb-12">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
