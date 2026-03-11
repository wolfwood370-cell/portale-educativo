import { useState, useEffect, useRef } from "react";
import { Check, Circle, Menu, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCourseTheme, themeClasses } from "@/lib/course-theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

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
      <div className="border-b border-border/60 p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className={cn("h-2.5 w-2.5 rounded-full", tc.bg)} />
          <h2 className="text-sm font-bold tracking-tight text-foreground leading-tight">
            {courseTitle}
          </h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{lessons.filter((l) => l.completed).length} di {lessons.length} completate</span>
            <span className={cn("font-bold", tc.text)}>{progress}%</span>
          </div>
          <div className="w-full rounded-full h-1.5 bg-secondary/80 overflow-hidden">
            <div
              className={cn("h-full rounded-full transition-all duration-500", tc.progressBar)}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lessons list */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-1">
          {lessons.map((lesson, idx) => {
            const isActive = lesson.id === activeLessonId;
            return (
              <li key={lesson.id}>
                <button
                  onClick={() => onSelectLesson(lesson.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-all duration-200",
                    isActive
                      ? cn(tc.bgSubtle, "font-semibold text-foreground border", tc.border)
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {/* Status icon */}
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    {lesson.completed ? (
                      <span className={cn("flex h-5 w-5 items-center justify-center rounded-full", tc.bg)}>
                        <Check className="h-3 w-3 text-white" />
                      </span>
                    ) : isActive ? (
                      <span className={cn("h-2.5 w-2.5 rounded-full", tc.bg)} />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground/30" />
                    )}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="truncate">{idx + 1}. {lesson.title}</p>
                    <p className="text-[11px] text-muted-foreground/50 mt-0.5">{lesson.duration}</p>
                  </div>

                  {/* Active dot indicator */}
                  {isActive && (
                    <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", tc.bg)} />
                  )}
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
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeLessonId]);

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
      <aside className="hidden md:flex w-[320px] shrink-0 flex-col border-r border-border/60 bg-card">
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-xs text-muted-foreground">Torna alla Dashboard</span>
        </div>
        <CourseSidebarContent {...sidebarProps} />
      </aside>

      {/* Mobile Sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-[300px] bg-card p-0 border-border/60">
          <SheetTitle className="sr-only">Navigazione Corso</SheetTitle>
          <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-xs text-muted-foreground">Torna alla Dashboard</span>
          </div>
          <CourseSidebarContent {...sidebarProps} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile top bar — glass effect */}
        <header className="flex items-center gap-3 px-4 py-3 md:hidden bg-white/80 backdrop-blur-md border-b border-border/40 shadow-[0_1px_3px_rgb(0,0,0,0.04)]">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{courseTitle}</p>
          </div>
          <span className={cn("text-xs font-bold", tc.text)}>{progress}%</span>
        </header>

        {/* Lesson content */}
        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
            {children}
          </div>
        </main>

        {/* Sticky bottom nav — glass effect */}
        <footer className="bg-white/80 backdrop-blur-md border-t border-border/40 px-6 py-4 shadow-[0_-1px_3px_rgb(0,0,0,0.04)]">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-border/60 text-muted-foreground hover:text-foreground transition-all active:scale-95"
              disabled={isFirstLesson}
              onClick={onPrevious}
            >
              Precedente
            </Button>
            <Button
              size="lg"
              className={cn(
                "rounded-xl text-white font-bold shadow-lg px-6 transition-all hover:opacity-90 active:scale-95",
                tc.bg, tc.bgHover, tc.shadow
              )}
              onClick={onContinue}
            >
              {isLastLesson ? "Completa Corso" : "Completa e Continua"}
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CourseViewerLayout;
