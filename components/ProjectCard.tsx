"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      ref={ref}
      layoutId={`card-container-${project.slug}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer relative h-full"
    >
      {/* Shadow Effect */}
      <div className={`absolute top-2 left-2 w-full h-full bg-black transition-transform duration-300 ${
        isMobile && isInView ? "translate-x-[-2px] translate-y-[-2px]" : "group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
      }`}></div>

      {/* Main Card Content */}
      <motion.div
        layoutId={`card-content-${project.slug}`}
        className={`relative bg-white overflow-hidden border-4 border-black h-full flex flex-col transition-transform duration-300 ${
          isMobile && isInView ? "translate-x-[3px] translate-y-[3px]" : "hover:translate-x-[3px] hover:translate-y-[3px]"
        }`}
      >
        {/* Browser Header */}
        <div className="flex items-center p-2 bg-gray-200 border-b-4">
          <div className="flex space-x-1">
            <span className="w-3 h-3 rounded-full border-2 border-black group-hover:bg-[#1C1C1C] transition-colors"></span>
            <span className="w-3 h-3 rounded-full border-2 border-black group-hover:bg-[#1C1C1C] transition-colors"></span>
            <span className="w-3 h-3 rounded-full border-2 border-black group-hover:bg-[#1C1C1C] transition-colors"></span>
          </div>
          <div className="flex-grow text-center text-sm text-gray-700 font-bold truncate ml-2">
            {project.title}.html
          </div>
        </div>

        {/* Image */}
        <div className="relative h-48 bg-gray-100 border-b-4 shrink-0">
          <Image
            src={imageError ? "/images/no-image.jpg" : project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority={index < 3}
            onError={() => setImageError(true)}
          />
        </div>

        {/* Text Content */}
        <div className="p-6 flex-grow">
          <h3 className="text-2xl font-bold font-oswald text-[#1C1C1C] mb-2 group-hover:text-[#E53935] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#3a3a3a] line-clamp-3">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}