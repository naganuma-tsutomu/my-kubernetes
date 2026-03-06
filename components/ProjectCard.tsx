"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CardItem {
  title: string;
  description: string;
  slug: string; // ブログの場合は id を slug として扱う
  imageUrl?: string;
  date?: string;
}

interface ProjectCardProps {
  item: CardItem;
  index: number;
  type?: "project" | "blog";
}

export default function ProjectCard({ item, index, type = "project" }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  const extension = type === "project" ? ".html" : ".md";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer relative h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black dark:focus-visible:ring-white rounded-lg focus-visible:ring-offset-4 dark:focus-visible:ring-offset-zinc-900"
      tabIndex={0}
      role="link"
    >
      {/* Shadow Effect */}
      <div className={`absolute top-2 left-2 w-full h-full bg-black dark:bg-white transition-transform duration-300 md:translate-x-0 md:translate-y-0 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] ${isInView ? "translate-x-[-2px] translate-y-[-2px]" : "translate-x-0 translate-y-0"
        }`}></div>

      {/* Main Card Content */}
      <motion.div
        className={`relative bg-white dark:bg-zinc-800 overflow-hidden border-4 border-black dark:border-white h-full flex flex-col transition-transform duration-300 md:translate-x-0 md:translate-y-0 group-hover:translate-x-[3px] group-hover:translate-y-[3px] ${isInView ? "translate-x-[3px] translate-y-[3px]" : "translate-x-0 translate-y-0"
          }`}
      >
        {/* Browser Header */}
        <div className="flex items-center p-2 bg-gray-200 dark:bg-zinc-700 border-b-4 border-black dark:border-white transition-colors duration-300">
          <div className="flex space-x-1">
            <span className={`w-3 h-3 rounded-full border-2 border-black dark:border-white group-hover:bg-[#1C1C1C] dark:group-hover:bg-white transition-colors md:bg-transparent md:dark:bg-transparent ${isInView ? "bg-[#1C1C1C] dark:bg-white" : "bg-transparent dark:bg-transparent"}`}></span>
            <span className={`w-3 h-3 rounded-full border-2 border-black dark:border-white group-hover:bg-[#1C1C1C] dark:group-hover:bg-white transition-colors md:bg-transparent md:dark:bg-transparent ${isInView ? "bg-[#1C1C1C] dark:bg-white" : "bg-transparent dark:bg-transparent"}`}></span>
            <span className={`w-3 h-3 rounded-full border-2 border-black dark:border-white group-hover:bg-[#1C1C1C] dark:group-hover:bg-white transition-colors md:bg-transparent md:dark:bg-transparent ${isInView ? "bg-[#1C1C1C] dark:bg-white" : "bg-transparent dark:bg-transparent"}`}></span>
          </div>
          <div className="flex-grow text-center text-sm text-gray-700 dark:text-gray-300 font-bold truncate ml-2">
            {item.title}{extension}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-48 bg-gray-100 dark:bg-zinc-900 border-b-4 border-black dark:border-white shrink-0">
          {isLoading && !imageError && (
            <motion.div
              className="absolute inset-0 bg-gray-300 dark:bg-zinc-600 z-10"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <Image
            src={imageError || !item.imageUrl ? "/images/no-image.jpg" : item.imageUrl}
            alt={item.title}
            fill
            className={`object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
            priority={index < 3}
            onLoad={() => setIsLoading(false)}
            onError={() => { setImageError(true); setIsLoading(false); }}
          />
        </div>

        {/* Text Content */}
        <div className="p-6 flex-grow transition-colors duration-300">
          {item.date && (
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1">{item.date}</p>
          )}
          <h3 className={`text-2xl font-bold font-oswald mb-2 group-hover:text-[#E53935] dark:group-hover:text-[#ff6b6b] transition-colors md:text-[#1C1C1C] md:dark:text-white ${isInView ? "text-[#E53935] dark:text-[#ff6b6b]" : "text-[#1C1C1C] dark:text-white"}`}>
            {item.title}
          </h3>
          <p className="text-[#3a3a3a] dark:text-gray-300 line-clamp-3 transition-colors duration-300">{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}