import Link from "next/link";

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
        <h1 className="text-6xl font-bold text-[#1C1C1C] mb-4">
          Welcome to My Kubernetes Portfolio.
        </h1>
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
              <div key={index} className="relative group transform transition-transform duration-300">
                {/* Shadow Element */}
                <div className="absolute top-2 left-2 w-full h-full bg-black transform transition-transform duration-300 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"></div>
                {/* Card Element */}
                <div className="relative bg-white overflow-hidden border-3 border-black hover:translate-x-[3px] hover:translate-y-[3px] transition-transform duration-300">
                  <Link href={`/projects/${project.slug}`}>
                    <div className="h-48 bg-gray-100"></div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold font-oswald text-[#1C1C1C] mb-2 group-hover:text-[#E53935] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#3a3a3a]">{project.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
