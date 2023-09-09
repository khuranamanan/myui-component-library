import React from "react";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
  sx?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  children?: string;
  src?: string;
  alt?: string;
};

function Avatar({ sx = "", size = "md", children, src, alt }: AvatarProps) {
  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    "2xl": "w-20 h-20",
  };

  const defaultClasses = `rounded-full overflow-hidden flex items-center justify-center w-full h-full text-white bg-gray-900 font-medium ${sizeClasses[size]}`;

  const avatarClasses = twMerge(defaultClasses, sx);

  return (
    <div className={avatarClasses}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full rounded-full"
        />
      ) : (
        children
      )}
    </div>
  );
}

export default Avatar;
