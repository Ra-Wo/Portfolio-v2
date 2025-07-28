"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  separator?: string;
  decimals?: number;
  onComplete?: () => void;
}

const CountUp: React.FC<CountUpProps> = ({
  from = 0,
  to,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
  separator = ",",
  decimals = 0,
  onComplete,
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number | null = null;
      const startValue = from;
      const endValue = to;
      const totalDuration = duration * 1000;

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);

        // Easing function for smooth animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount =
          startValue + (endValue - startValue) * easedProgress;

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
          onComplete?.();
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, hasAnimated, from, to, duration, onComplete]);

  const formatNumber = (num: number) => {
    const rounded = Number(num.toFixed(decimals));
    const parts = rounded.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  };

  return (
    <motion.span
      ref={ref}
      className={cn(
        "inline-block font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {formatNumber(count)}
      {suffix}
    </motion.span>
  );
};

export default CountUp;
