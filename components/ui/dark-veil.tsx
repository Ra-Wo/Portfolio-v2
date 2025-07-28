"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DarkVeilProps {
  children?: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  pattern?: "grid" | "dots" | "none";
}

export function DarkVeil({
  children,
  className,
  intensity = "medium",
  pattern = "grid",
}: DarkVeilProps) {
  const intensityClasses = {
    light: "bg-black/20",
    medium: "bg-black/40",
    heavy: "bg-black/60",
  };

  const patternClasses = {
    grid: "bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]",
    dots: "bg-[radial-gradient(#8080800a_1px,transparent_1px)] bg-[size:16px_16px]",
    none: "",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20" />

      {/* Purple aurora effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-500/30 via-purple-600/20 to-transparent blur-3xl opacity-60" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[300px] bg-gradient-to-bl from-blue-500/20 via-purple-500/15 to-transparent blur-3xl opacity-40" />

      {/* Pattern overlay */}
      {pattern !== "none" && (
        <div className={cn("absolute inset-0", patternClasses[pattern])} />
      )}

      {/* Dark veil overlay */}
      <div className={cn("absolute inset-0", intensityClasses[intensity])} />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
