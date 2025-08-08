import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "rgb(139, 92, 246)", // violet-500
  speed = "4s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-lg ${className}`}
      {...rest}
      style={{
        padding: `${thickness}px 0`,
        ...((rest as React.ComponentPropsWithoutRef<T>).style || {}),
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `starMovementBottom ${speed} linear infinite alternate`,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `starMovementTop ${speed} linear infinite alternate`,
        }}
      ></div>
      <div className="relative z-10 bg-black border border-violet-500/20 text-violet-300 hover:text-violet-200 text-center text-[16px] py-[16px] px-[26px] rounded-lg transition-colors duration-300">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
