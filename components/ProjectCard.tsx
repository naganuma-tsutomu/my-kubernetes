"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  slug: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is typically 768px
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInView(entry.isIntersecting);
        },
        {
          root: null, // viewport
          rootMargin: "0px",
          threshold: 1.0, // Entire item visible
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    } else {
      setInView(true);
    }
  }, [ref, isMobile]);

  return (
    <div ref={ref} className={`relative group`}>
      <div
        className={`absolute top-2 left-2 w-full h-full bg-black transform transition-transform duration-300 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] ${
          inView && isMobile ? "translate-x-[-2px] translate-y-[-2px]" : "translate-x-0 translate-y-0"
        }`}
      ></div>
      <div
        className={`relative bg-white overflow-hidden border-4 border-black hover:translate-x-[3px] hover:translate-y-[3px] transition-transform duration-300 ${
          inView && isMobile ? "translate-x-[3px] translate-y-[3px]" : "translate-x-0 translate-y-0"
        }`}
      >
        <Link href={`/projects/${project.slug}`}>
          <div className="flex items-center p-2 bg-gray-200 border-b-4">
            <div className="flex space-x-1">
              <span className={`w-3 h-3 rounded-full border-3 group-hover:bg-[#1C1C1C] transition-colors ${inView && isMobile ? "bg-[#1C1C1C]" : ""}`}></span>
              <span className={`w-3 h-3 rounded-full border-3 group-hover:bg-[#1C1C1C] transition-colors ${inView && isMobile ? "bg-[#1C1C1C]" : ""}`}></span>
              <span className={`w-3 h-3 rounded-full border-3 group-hover:bg-[#1C1C1C] transition-colors ${inView && isMobile ? "bg-[#1C1C1C]" : ""}`}></span>
            </div>
            <div className="flex-grow text-center text-sm text-gray-700 font-bold">{project.title}.html</div>
          </div>
          <div className="relative h-48 bg-gray-100 border-b-4">
            <Image
              src={imageError ? "/images/no-image.jpg" : `/images/${project.slug}.jpg`}
              alt={project.title}
              fill
              className="object-cover"
              priority={index < 3}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
              onError={() => setImageError(true)}
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold font-oswald text-[#1C1C1C] mb-2 group-hover:text-[#E53935] transition-colors">{project.title}</h3>
            <p className="text-[#3a3a3a]">{project.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}