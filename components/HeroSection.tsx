"use client";

import { useState, useEffect } from "react";
import TypewriterEffect from "./TypewriterEffect";

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let rafId: number;
        const handleMouseMove = (e: MouseEvent) => {
            rafId = requestAnimationFrame(() => {
                // Calculate mouse position relative to center of screen (subtle movement)
                const x = (e.clientX / window.innerWidth - 0.5) * 500;
                const y = (e.clientY / window.innerHeight - 0.5) * 500;
                setMousePosition({ x, y });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center py-32 px-4 overflow-hidden">
            {/* Grid Background & Geometric Shape */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div
                className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none transition-transform duration-75 ease-out"
                style={{
                    transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
                }}
            ></div>
            <div className="max-w-4xl mx-auto text-center z-10">
                <TypewriterEffect
                    text="Welcome to My Site."
                    className="text-6xl md:text-8xl font-bold text-[#1C1C1C] mb-6 tracking-tight font-['Oswald'] min-h-[180px] flex items-center justify-center uppercase"
                />
                <p className="text-xl md:text-2xl text-[#3a3a3a] font-['Shippori_Mincho'] tracking-wide">
                    This is a showcase of my projects and skills.
                </p>
            </div>
        </section>
    );
}
