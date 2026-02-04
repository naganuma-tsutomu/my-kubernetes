import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  fileName: string;
}

const ProjectCard = ({ title, description, imageUrl, projectUrl, fileName }: ProjectCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-100 border border-gray-300">
      {/* Simulated Browser Window Header */}
      <div className="flex items-center p-2 bg-gray-200 border-b border-gray-300">
        <div className="flex space-x-1">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <div className="flex-grow text-center text-sm text-gray-700 font-mono">
          {fileName}
        </div>
      </div>

      {/* Project Image */}
      <div className="relative w-full h-48 bg-gray-300">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      {/* Project Content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#1C1C1C]">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={projectUrl}>
          <button className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold py-2 px-4 rounded transition-colors">
            View project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
