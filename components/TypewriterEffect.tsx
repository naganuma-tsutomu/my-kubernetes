"use client";

import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number; // Delay between characters in milliseconds
  className?: string; // Tailwind CSS classes for styling
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  delay = 100, // Default delay
  className,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]); // text変更時にリセット

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <h1 className={className}>
      {currentText}
      <span className="animate-pulse font-light text-inherit">|</span>
    </h1>
  );
};

export default TypewriterEffect;