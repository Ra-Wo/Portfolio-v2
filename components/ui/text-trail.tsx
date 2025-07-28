"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface TextTrailProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function TextTrail({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
}: TextTrailProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  // Convert children to string and split into words
  const text =
    typeof children === "string" ? children : children?.toString() || "";
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            duration,
            delay: index * stagger,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

interface TextTrailCharProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function TextTrailChar({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  stagger = 0.03,
}: TextTrailCharProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  // Convert children to string and split into characters
  const text =
    typeof children === "string" ? children : children?.toString() || "";
  const chars = text.split("");

  return (
    <div className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            duration,
            delay: index * stagger,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
