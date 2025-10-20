"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircularTextProps {
  text?: string;
  className?: string;
  radius?: number;
  fontSize?: number;
  onHover?: "pause" | "speedUp" | "reverse" | "none";
  spinDuration?: number;
  direction?: "clockwise" | "counterclockwise";
}

const CircularText: React.FC<CircularTextProps> = ({
  text = "REACT • DEVELOPER • PORTFOLIO • CREATIVE • ",
  className = "",
  radius = 80,
  fontSize = 14,
  onHover = "speedUp",
  spinDuration = 20,
  direction = "clockwise",
}) => {
  const textRef = useRef<SVGTextElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!textRef.current || !pathRef.current) return;

    const circumference = 2 * Math.PI * radius;
    const charCount = text.length;
    const charSpacing = circumference / charCount;

    // Adjust the text spacing
    textRef.current.style.letterSpacing = `${charSpacing - fontSize * 0.7}px`;
  }, [text, radius, fontSize]);

  const svgSize = (radius + 20) * 2;
  const pathD = `M ${svgSize / 2} ${
    svgSize / 2
  } m -${radius} 0 a ${radius} ${radius} 0 1 1 ${
    radius * 2
  } 0 a ${radius} ${radius} 0 1 1 -${radius * 2} 0`;

  const getAnimationDuration = () => {
    switch (onHover) {
      case "speedUp":
        return { normal: spinDuration, hover: spinDuration / 3 };
      case "pause":
        return { normal: spinDuration, hover: 999999 };
      case "reverse":
        return { normal: spinDuration, hover: -spinDuration };
      default:
        return { normal: spinDuration, hover: spinDuration };
    }
  };

  const animationDuration = getAnimationDuration();
  const rotateDirection = direction === "clockwise" ? "360deg" : "-360deg";

  return (
    <div className={cn("relative inline-block", className)}>
      <motion.svg
        width={svgSize}
        height={svgSize}
        className="overflow-visible"
        whileHover={{
          rotateZ:
            onHover === "reverse" ? -360 : onHover === "speedUp" ? 360 : 0,
        }}
        transition={{
          duration:
            onHover === "speedUp"
              ? animationDuration.hover
              : animationDuration.normal,
          ease: "linear",
          repeat: Infinity,
        }}
        animate={{
          rotateZ: direction === "clockwise" ? 360 : -360,
        }}
        style={{
          animation: `spin ${animationDuration.normal}s linear infinite`,
        }}
      >
        <defs>
          <path
            id="circlePath"
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="none"
          />
        </defs>

        <text
          ref={textRef}
          className="fill-zinc-600 dark:fill-zinc-400 font-medium select-none"
          fontSize={fontSize}
          style={{
            fontFamily: "inherit",
          }}
        >
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(${rotateDirection});
          }
        }
      `}</style>
    </div>
  );
};

export default CircularText;
