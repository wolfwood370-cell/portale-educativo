import { useState, useEffect, useRef } from "react";
import { Check, Circle, Menu, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCourseTheme, themeClasses } from "@/lib/course-theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface CourseSidebarContentProps {
  courseTitle: string;
  lessons: Lesson[];
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
  progress: number;
}

const CourseSidebarContent = ({
  courseTitle,
  lessons,
  activeLessonId,
  onSelectLesson,
  progress,
}: CourseSidebarContentProps) => {
  const { themeColor } = useCourseTheme();
  const tc = themeClasses[themeColor];

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-border/50 p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className={cn("h-2 w-2 rounded-full", tc.bg)} />
          <h2 className="text-sm font-semibold tracking-tight text-foreground leading-tight">
            {courseTitle}
          </h2>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{lessons.filter((l) => l.completed).length} of {lessons.length} completed</span>
            <span className={cn("font-semibold", tc.text)}>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1 bg-secondary" />
        </div>
      </div>

      {/* Lessons list */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-0.5">
          {lessons.map((lesson, idx) => {
            const isActive = lesson.id === activeLessonId;
            return (
              <li key={lesson.id}>
                <button
                  onClick={() => onSelectLesson(lesson.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg border-l-2 border-transparent px-3 py-2.5 text-left text-sm transition-all duration-200",
                    isActive
                      ? cn(tc.activeBg, tc.activeBorder, "font-semibold text-foreground")
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {/* Status icon */}
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    {lesson.completed ? (
                      <span className={cn("flex h-5 w-5 items-center justify-center rounded-full", tc.bg)}>
                        <Check className="h-3 w-3 text-background" />
                      </span>
                    ) : isActive ? (
                      <span className={cn("h-2.5 w-2.5 rounded-full", tc.bg)} />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground/40" />
                    )}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="truncate">{idx + 1}. {lesson.title}</p>
                    <p className="text-xs text-muted-foreground/60 mt-0.5">{lesson.duration}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

interface CourseViewerLayoutProps {
  courseTitle: string;
  lessons: Lesson[];
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
  onPrevious: () => void;
  onContinue: () => void;
  progress: number;
  isFirstLesson: boolean;
  isLastLesson: boolean;
  children: React.ReactNode;
}

const CourseViewerLayout = ({
  courseTitle,
  lessons,
  activeLessonId,
  onSelectLesson,
  onPrevious,
  onContinue,
  progress,
  isFirstLesson,
  isLastLesson,
  children,
}: CourseViewerLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { themeColor } = useCourseTheme();
  const tc = themeClasses[themeColor];
  const navigate = useNavigate();

  const sidebarProps = {
    courseTitle,
    lessons,
    activeLessonId,
    onSelectLesson: (id: string) => {
      onSelectLesson(id);
      setMobileOpen(false);
    },
    progress,
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-[320px] shrink-0 flex-col border-r border-border/50 bg-card">
        <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-xs text-muted-foreground">Back to Dashboard</span>
        </div>
        <CourseSidebarContent {...sidebarProps} />
      </aside>

      {/* Mobile Sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-[300px] bg-card p-0 border-border/50">
          <SheetTitle className="sr-only">Course Navigation</SheetTitle>
          <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-xs text-muted-foreground">Back to Dashboard</span>
          </div>
          <CourseSidebarContent {...sidebarProps} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile top bar */}
        <header className="flex items-center gap-3 border-b border-border/50 px-4 py-3 md:hidden bg-card">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-foreground">{courseTitle}</p>
          </div>
          <span className={cn("text-xs font-semibold", tc.text)}>{progress}%</span>
        </header>

        {/* Lesson content */}
        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-6 py-10 md:px-12 md:py-14">
            {children}
          </div>
        </main>

        {/* Sticky bottom nav */}
        <footer className="border-t border-border/50 bg-card px-6 py-4">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <Button
              variant="outline"
              className="border-border/50 text-muted-foreground hover:text-foreground"
              disabled={isFirstLesson}
              onClick={onPrevious}
            >
              Previous
            </Button>
            <Button
              className={cn(tc.bg, tc.bgHover, "text-background font-semibold shadow-lg")}
              onClick={onContinue}
            >
              {isLastLesson ? "Complete Course" : "Complete & Continue"}
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CourseViewerLayout;
