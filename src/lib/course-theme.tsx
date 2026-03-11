import { createContext, useContext } from "react";

export type ThemeColor = "emerald" | "sky" | "violet" | "rose";

interface CourseThemeContextValue {
  themeColor: ThemeColor;
}

const CourseThemeContext = createContext<CourseThemeContextValue>({ themeColor: "sky" });

export const CourseThemeProvider = ({
  themeColor,
  children,
}: {
  themeColor: ThemeColor;
  children: React.ReactNode;
}) => {
  return (
    <CourseThemeContext.Provider value={{ themeColor }}>
      {children}
    </CourseThemeContext.Provider>
  );
};

export const useCourseTheme = () => useContext(CourseThemeContext);

// Utility: map theme color to tailwind classes
export const themeClasses = {
  emerald: {
    bg: "bg-emerald-500",
    bgDark: "bg-emerald-800",
    bgSubtle: "bg-emerald-500/10",
    hoverBgSubtle: "hover:bg-emerald-500/10",
    bgHover: "hover:bg-emerald-600",
    text: "text-emerald-400",
    textLight: "text-emerald-300",
    border: "border-emerald-500/20",
    ring: "ring-emerald-500/30",
    focusRing: "focus:ring-emerald-500",
    progressBar: "bg-emerald-500",
    activeBg: "bg-emerald-500/15",
    activeBorder: "border-l-emerald-500",
    shadow: "shadow-emerald-500/30",
    accent: "accent-emerald-500",
    borderActive: "border-emerald-500",
    ringActive: "ring-emerald-500",
    hoverBorder: "hover:border-emerald-500/50",
  },
  sky: {
    bg: "bg-sky-500",
    bgDark: "bg-sky-600",
    bgSubtle: "bg-sky-500/10",
    hoverBgSubtle: "hover:bg-sky-500/10",
    bgHover: "hover:bg-sky-600",
    text: "text-sky-400",
    textLight: "text-sky-200",
    border: "border-sky-500/20",
    ring: "ring-sky-500/30",
    focusRing: "focus:ring-sky-500",
    progressBar: "bg-sky-500",
    activeBg: "bg-sky-500/15",
    activeBorder: "border-l-sky-500",
    shadow: "shadow-sky-500/30",
    accent: "accent-sky-500",
    borderActive: "border-sky-500",
    ringActive: "ring-sky-500",
    hoverBorder: "hover:border-sky-500/50",
  },
  violet: {
    bg: "bg-violet-500",
    bgDark: "bg-violet-600",
    bgSubtle: "bg-violet-500/10",
    hoverBgSubtle: "hover:bg-violet-500/10",
    bgHover: "hover:bg-violet-600",
    text: "text-violet-400",
    textLight: "text-violet-200",
    border: "border-violet-500/20",
    ring: "ring-violet-500/30",
    focusRing: "focus:ring-violet-500",
    progressBar: "bg-violet-500",
    activeBg: "bg-violet-500/15",
    activeBorder: "border-l-violet-500",
    shadow: "shadow-violet-500/30",
    accent: "accent-violet-500",
    borderActive: "border-violet-500",
    ringActive: "ring-violet-500",
    hoverBorder: "hover:border-violet-500/50",
  },
  rose: {
    bg: "bg-rose-500",
    bgDark: "bg-rose-600",
    bgSubtle: "bg-rose-500/10",
    hoverBgSubtle: "hover:bg-rose-500/10",
    bgHover: "hover:bg-rose-600",
    text: "text-rose-400",
    textLight: "text-rose-200",
    border: "border-rose-500/20",
    ring: "ring-rose-500/30",
    focusRing: "focus:ring-rose-500",
    progressBar: "bg-rose-500",
    activeBg: "bg-rose-500/15",
    activeBorder: "border-l-rose-500",
    shadow: "shadow-rose-500/30",
    accent: "accent-rose-500",
    borderActive: "border-rose-500",
    ringActive: "ring-rose-500",
    hoverBorder: "hover:border-rose-500/50",
  },
} as const;
