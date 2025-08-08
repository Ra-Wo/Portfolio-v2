"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef, useEffect, useState } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam = forwardRef<SVGSVGElement, AnimatedBeamProps>(
  (
    {
      className,
      containerRef,
      fromRef,
      toRef,
      curvature = 0,
      reverse = false,
      duration = Math.random() * 3 + 4,
      delay = 0,
      pathColor = "gray",
      pathWidth = 2,
      pathOpacity = 0.2,
      gradientStartColor = "#ffaa40",
      gradientStopColor = "#9c40ff",
      startXOffset = 0,
      startYOffset = 0,
      endXOffset = 0,
      endYOffset = 0,
    },
    ref
  ) => {
    const id = React.useId();
    const [pathD, setPathD] = useState("");
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

    const updatePath = React.useCallback(() => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        const relativeFromX =
          fromRect.left -
          containerRect.left +
          fromRect.width / 2 +
          startXOffset;
        const relativeFromY =
          fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
        const relativeToX =
          toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
        const relativeToY =
          toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

        const midX = (relativeFromX + relativeToX) / 2;
        const midY = (relativeFromY + relativeToY) / 2;

        const path = `M ${relativeFromX},${relativeFromY} Q ${midX},${
          midY + curvature
        } ${relativeToX},${relativeToY}`;
        setPathD(path);
        setSvgDimensions({
          width: containerRect.width,
          height: containerRect.height,
        });
      }
    }, [
      containerRef,
      fromRef,
      toRef,
      curvature,
      startXOffset,
      startYOffset,
      endXOffset,
      endYOffset,
    ]);

    useEffect(() => {
      updatePath();
      window.addEventListener("resize", updatePath);
      return () => window.removeEventListener("resize", updatePath);
    }, [updatePath]);

    return (
      <svg
        ref={ref}
        className={cn(
          "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
          className
        )}
        width={svgDimensions.width}
        height={svgDimensions.height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      >
        <path
          d={pathD}
          stroke={pathColor}
          strokeWidth={pathWidth}
          strokeOpacity={pathOpacity}
          fill="none"
        />
        <path
          d={pathD}
          strokeWidth={pathWidth}
          stroke={`url(#${id})`}
          strokeOpacity="1"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="20 20"
        >
          <animate
            attributeName="stroke-dashoffset"
            values={reverse ? "0;-40" : "0;40"}
            dur={`${duration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </path>
        <defs>
          <linearGradient
            id={id}
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop stopColor={gradientStartColor} stopOpacity="0" />
            <stop stopColor={gradientStartColor} />
            <stop offset="32.5%" stopColor={gradientStopColor} />
            <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

AnimatedBeam.displayName = "AnimatedBeam";
