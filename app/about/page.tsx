// import Image from "next/image";
import Link from "next/link";

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Kubernetes",
    "Docker",
    "AWS",
  ];

  const experiences = [
    {
      year: "2024 - Present",
      title: "Senior Frontend Engineer",
      company: "Tech Innovation Inc.",
      description:
        "Leading the frontend team in building scalable web applications using Next.js and React.",
    },
    {
      year: "2021 - 2024",
      title: "Web Developer",
      company: "Creative Solutions Ltd.",
      description:
        "Developed responsive websites and e-commerce platforms for various clients.",
    },
    {
      year: "2019 - 2021",
      title: "Junior Developer",
      company: "StartUp Hub",
      description:
        "Collaborated with designers to implement user interfaces and improve UX.",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Page Title */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold text-[#1C1C1C] font-['Oswald'] uppercase tracking-wide mb-4">
            About Me
          </h1>
          <div className="h-2 w-24 bg-[#1C1C1C] mx-auto"></div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          {/* Image Card */}
          <div className="w-full md:w-5/12 relative group">
            <div className="absolute top-4 left-4 w-full h-full bg-black transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative border-4 border-black bg-white p-2 z-10">
              <div className="relative aspect-[3/4] w-full bg-gray-100 border border-gray-200 overflow-hidden">
                {/* Placeholder for profile image - Replace src with your actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-['Oswald'] text-xl bg-gray-50">
                  PROFILE IMAGE
                </div>
                {/* <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" /> */}
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="w-full md:w-7/12">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-[#1C1C1C] uppercase">
              Who I Am
            </h2>
            <div className="font-['Shippori_Mincho'] text-lg text-[#3a3a3a] space-y-6 leading-relaxed">
              <p>
                こんにちは。私はWeb開発に情熱を注ぐソフトウェアエンジニアです。
                シンプルで使いやすく、かつ印象に残るデジタル体験を創造することを目指しています。
              </p>
              <p>
                技術の進化は早いですが、変わらない「良さ」を大切にしながら、
                最新のトレンド（Next.js, Reactなど）を取り入れた開発を行っています。
                このポートフォリオサイトも、レトロモダンなデザインと最新の技術スタックを融合させて作りました。
              </p>
              <p>
                コードを書くこと以外にも、デザイン、写真、そして新しいコーヒーショップを探すことが好きです。
              </p>
            </div>

            <div className="mt-8">
                <Link href="/contact" className="inline-block bg-[#1C1C1C] text-white px-8 py-3 font-bold font-['Oswald'] uppercase tracking-wider hover:bg-[#E53935] transition-colors border-2 border-transparent hover:border-black">
                    Get in Touch
                </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold font-['Oswald'] mb-10 text-[#1C1C1C] uppercase text-center">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 border-2 border-black bg-white font-bold text-[#1C1C1C] font-['Oswald'] tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-['Oswald'] mb-12 text-[#1C1C1C] uppercase text-center">
            Experience
          </h2>
          <div className="relative border-l-4 border-black ml-4 md:ml-0 pl-8 md:pl-12 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[46px] md:-left-[62px] top-1 w-6 h-6 bg-white border-4 border-black rounded-full group-hover:bg-[#E53935] transition-colors"></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-[#1C1C1C] font-['Oswald'] uppercase">{exp.title}</h3>
                    <span className="font-['Oswald'] text-lg font-bold text-[#E53935]">{exp.year}</span>
                </div>
                <h4 className="text-xl font-bold text-[#3a3a3a] mb-2 font-['Shippori_Mincho']">{exp.company}</h4>
                <p className="font-['Shippori_Mincho'] text-[#3a3a3a] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
