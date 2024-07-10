"use client";
import Image from "next/image";
import { useTheme } from "nextra-theme-docs";

export function LogoDocs() {
  const { theme, systemTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <Image
        src={
          theme === "dark"
            ? "/hivello-dark.svg"
            : theme === "light"
            ? "/hivello-light.svg"
            : systemTheme === "dark"
            ? "/hivello-dark.svg"
            : "/hivello-light.svg"
        }
        alt="hivello logo"
        width={104}
        height={44}
        priority
      />
      <span className="text-primary">Documentation</span>
    </div>
  );
}
