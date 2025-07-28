"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicBentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  particleCount?: number;
}

const MagicBentoCard: React.FC<MagicBentoCardProps> = ({
  children,
  className = "",
  glowColor = "132, 0, 255",
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  particleCount = 8,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transform, setTransform] = useState("");
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      if (enableTilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        setTransform(
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        );
      }

      if (enableMagnetism) {
        const magnetStrength = 0.3;
        const offsetX = (x - rect.width / 2) * magnetStrength;
        const offsetY = (y - rect.height / 2) * magnetStrength;
        setTransform(
          (prev) => `${prev} translate3d(${offsetX}px, ${offsetY}px, 0)`
        );
      }
    },
    [enableTilt, enableMagnetism]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("");
  }, []);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!clickEffect || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create particles
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: Date.now() + i,
        x: x + (Math.random() - 0.5) * 100,
        y: y + (Math.random() - 0.5) * 100,
      }));

      setParticles(newParticles);

      // Remove particles after animation
      setTimeout(() => {
        setParticles([]);
      }, 1000);
    },
    [clickEffect, particleCount]
  );

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("click", handleClick);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("click", handleClick);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleClick]);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 cursor-pointer",
        className
      )}
      style={{
        transform,
        transition: isHovered ? "none" : "transform 0.3s ease-out",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.6 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColor}, 0.15), transparent 70%)`,
        }}
      />

      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.8 : 0,
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 70%)`,
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: `rgb(${glowColor})`,
            left: particle.x,
            top: particle.y,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>

      {/* Border Glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `linear-gradient(90deg, transparent, rgba(${glowColor}, 0.4), transparent)`,
          backgroundSize: "200% 100%",
          animation: isHovered ? "shimmer 2s infinite" : "none",
        }}
      />
    </motion.div>
  );
};

interface MagicBentoProps {
  children: React.ReactNode;
  className?: string;
}

const MagicBento: React.FC<MagicBentoProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export { MagicBento, MagicBentoCard };
