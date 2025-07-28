"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  identifier?: string;
}

export const GlowCard = ({
  children,
  className,
  glowColor = "blue",
  identifier,
}: GlowCardProps) => {
  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "absolute -inset-0.5 rounded-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt",
          {
            "bg-gradient-to-r from-blue-600 to-cyan-600": glowColor === "blue",
            "bg-gradient-to-r from-purple-600 to-pink-600":
              glowColor === "purple",
            "bg-gradient-to-r from-green-600 to-emerald-600":
              glowColor === "green",
            "bg-gradient-to-r from-orange-600 to-yellow-600":
              glowColor === "orange",
          }
        )}
      />
      <div className="relative bg-white dark:bg-gray-900 rounded-lg">
        {children}
      </div>
    </div>
  );
};
