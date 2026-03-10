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
    bgSubtle: "bg-emerald-500/10",
    bgHover: "hover:bg-emerald-600",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    ring: "ring-emerald-500/30",
    progressBar: "bg-emerald-500",
    activeBg: "bg-emerald-500/15",
    activeBorder: "border-l-emerald-500",
  },
  sky: {
    bg: "bg-sky-500",
    bgSubtle: "bg-sky-500/10",
    bgHover: "hover:bg-sky-600",
    text: "text-sky-400",
    border: "border-sky-500/20",
    ring: "ring-sky-500/30",
    progressBar: "bg-sky-500",
    activeBg: "bg-sky-500/15",
    activeBorder: "border-l-sky-500",
  },
  violet: {
    bg: "bg-violet-500",
    bgSubtle: "bg-violet-500/10",
    bgHover: "hover:bg-violet-600",
    text: "text-violet-400",
    border: "border-violet-500/20",
    ring: "ring-violet-500/30",
    progressBar: "bg-violet-500",
    activeBg: "bg-violet-500/15",
    activeBorder: "border-l-violet-500",
  },
  rose: {
    bg: "bg-rose-500",
    bgSubtle: "bg-rose-500/10",
    bgHover: "hover:bg-rose-600",
    text: "text-rose-400",
    border: "border-rose-500/20",
    ring: "ring-rose-500/30",
    progressBar: "bg-rose-500",
    activeBg: "bg-rose-500/15",
    activeBorder: "border-l-rose-500",
  },
} as const;
