import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseViewerLayout, { type Lesson } from "@/components/CourseViewerLayout";
import { CourseThemeProvider, type ThemeColor, themeClasses } from "@/lib/course-theme";
import { Clock, GraduationCap, ExternalLink, Calculator, Utensils, ClipboardCheck } from "lucide-react";
import { rpeLessons, rpeLessonContent } from "@/data/rpe-course-data";
import { nutritionLessons, nutritionLessonContent } from "@/data/nutrition-course-data";
import { integratoriLessons, integratoriLessonContent } from "@/data/integratori-course-data";
import { celluliteLessons, celluliteLessonContent } from "@/data/cellulite-course-data";
import RpeCalculator from "@/components/course/RpeCalculator";
import PortionCalculator from "@/components/course/PortionCalculator";
import { CelluliteStageQuiz } from "@/components/course/CelluliteComponents";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const otherCoursesData: Record<
  string,
  { title: string; themeColor: ThemeColor; lessons: Lesson[] }
> = {};

const coursesData: Record<
  string,
  { title: string; themeColor: ThemeColor; lessons: Lesson[] }
> = {
  ...otherCoursesData,
  "rpe-mastery": {
    title: "Corso RPE — La Guida Definitiva",
    themeColor: "sky",
    lessons: rpeLessons,
  },
  "cosa-devo-mangiare": {
    title: "Cosa Devo Mangiare?",
    themeColor: "emerald",
    lessons: nutritionLessons,
  },
  integratori: {
    title: "Quali integratori usare?",
    themeColor: "violet",
    lessons: integratoriLessons,
  },
  "cellulite-mini-corso": {
    title: "Cellulite — Il Mini Corso",
    themeColor: "rose",
    lessons: celluliteLessons,
  },
};

const courseContentMap: Record<string, Record<string, { subtitle: string; content: React.ReactNode; insights: { text: string; url: string }[] }>> = {
  "rpe-mastery": rpeLessonContent,
  "cosa-devo-mangiare": nutritionLessonContent,
  integratori: integratoriLessonContent,
  "cellulite-mini-corso": celluliteLessonContent,
};

const courseCalculators: Record<string, { icon: React.ElementType; label: string }> = {
  "rpe-mastery": { icon: Calculator, label: "Calcolatore RPE" },
  "cosa-devo-mangiare": { icon: Utensils, label: "Calcola Porzioni" },
  "cellulite-mini-corso": { icon: ClipboardCheck, label: "Test Autovalutazione" },
};

const getStorageKey = (courseId: string) => `course-progress-${courseId}`;

const loadLessons = (courseId: string, defaults: Lesson[]): Lesson[] => {
  try {
    const saved = localStorage.getItem(getStorageKey(courseId));
    if (saved) {
      const completedIds: string[] = JSON.parse(saved);
      return defaults.map((l) => ({ ...l, completed: completedIds.includes(l.id) }));
    }
  } catch { /* ignore */ }
  return defaults.map((l) => ({ ...l }));
};

const getDefaultActive = (lessons: Lesson[]) =>
  lessons.find((l) => !l.completed)?.id || lessons[0]?.id || "l1";

const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = coursesData[id || ""];

  const [lessons, setLessons] = useState<Lesson[]>(() =>
    course ? loadLessons(id!, course.lessons) : []
  );
  const [activeLessonId, setActiveLessonId] = useState(() =>
    course ? getDefaultActive(loadLessons(id!, course.lessons)) : "l1"
  );
  const [showCalculator, setShowCalculator] = useState(false);

  // Bug 1: Re-sync state when route param changes without unmount
  useEffect(() => {
    if (!id || !coursesData[id]) return;
    const fresh = loadLessons(id, coursesData[id].lessons);
    setLessons(fresh);
    setActiveLessonId(getDefaultActive(fresh));
    setShowCalculator(false);
  }, [id]);

  // Persist progress to localStorage
  useEffect(() => {
    if (!id || !course) return;
    const completedIds = lessons.filter((l) => l.completed).map((l) => l.id);
    localStorage.setItem(getStorageKey(id), JSON.stringify(completedIds));
  }, [lessons, id, course]);

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-foreground">Corso non trovato</h1>
          <button className="text-sm text-primary underline" onClick={() => navigate("/")}>
            Torna alla Dashboard
          </button>
        </div>
      </div>
    );
  }

  const activeIdx = lessons.findIndex((l) => l.id === activeLessonId);
  const activeLesson = lessons[activeIdx];
  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  const handlePrevious = () => {
    if (activeIdx > 0) setActiveLessonId(lessons[activeIdx - 1].id);
  };

  const handleContinue = () => {
    const updatedLessons = lessons.map((l) =>
      l.id === activeLessonId ? { ...l, completed: true } : l
    );
    setLessons(updatedLessons);

    if (activeIdx < lessons.length - 1) {
      setActiveLessonId(lessons[activeIdx + 1].id);
    } else {
      // Synchronously persist before navigating away
      const completedIds = updatedLessons.filter((l) => l.completed).map((l) => l.id);
      localStorage.setItem(getStorageKey(id!), JSON.stringify(completedIds));

      toast.success("Corso completato! 🎉", {
        description: "Ottimo lavoro! Stai tornando alla dashboard.",
      });
      setTimeout(() => navigate("/"), 1500);
    }
  };

  const contentMap = courseContentMap[id || ""];
  const lessonContent = contentMap?.[activeLessonId];
  const calcConfig = courseCalculators[id || ""];
  const tc = themeClasses[course.themeColor];

  return (
    <CourseThemeProvider themeColor={course.themeColor}>
      <CourseViewerLayout
        courseTitle={course.title}
        lessons={lessons}
        activeLessonId={activeLessonId}
        onSelectLesson={setActiveLessonId}
        onPrevious={handlePrevious}
        onContinue={handleContinue}
        progress={progress}
        isFirstLesson={activeIdx === 0}
        isLastLesson={activeIdx === lessons.length - 1}
      >
        <article className="space-y-8">
          {/* Bug 3: All classNames use cn() */}
          <header className="space-y-3">
            <span className={cn("inline-block px-3 py-1 rounded-full font-bold text-xs tracking-widest uppercase shadow-sm border", tc.bgSubtle, tc.text, tc.border)}>
              Lezione {activeIdx + 1}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {activeLesson?.title}
            </h1>
            {lessonContent && (
              <p className="text-xl text-muted-foreground font-light tracking-wide">
                {lessonContent.subtitle}
              </p>
            )}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {activeLesson?.duration}
              </span>
              {calcConfig && (
                <Button
                  variant="outline"
                  size="sm"
                  className={cn("border-border/50", tc.text, tc.hoverBgSubtle)}
                  onClick={() => setShowCalculator(true)}
                >
                  <calcConfig.icon className="h-3.5 w-3.5 mr-1.5" />
                  {calcConfig.label}
                </Button>
              )}
            </div>
          </header>

          {lessonContent ? (
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl border border-border/50">
              {lessonContent.content}
            </div>
          ) : (
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Questa lezione copre i concetti fondamentali che devi conoscere per progredire nel tuo
                percorso di allenamento. Segui con attenzione ogni passaggio e prendi appunti per
                massimizzare il tuo apprendimento.
              </p>
              <h2 className="text-lg font-semibold text-foreground mt-8">Punti Chiave</h2>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                  Comprendere i principi base è essenziale prima di passare ai concetti avanzati.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                  L'applicazione pratica richiede costanza e pazienza.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                  Ogni concetto si costruisce sul precedente — non saltare le lezioni.
                </li>
              </ul>
            </div>
          )}

          {lessonContent?.insights && lessonContent.insights.length > 0 && (
            <div className="mt-16 pt-8 border-t-2 border-border/30">
              <h4 className={cn("flex items-center text-xs font-bold uppercase tracking-widest mb-6", tc.text)}>
                <GraduationCap className="w-4 h-4 mr-2" /> RIFERIMENTI SCIENTIFICI
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {lessonContent.insights.map((insight, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground font-mono leading-relaxed bg-card p-4 rounded-lg border border-border/50 shadow-sm flex items-start"
                  >
                    <ExternalLink className={cn("w-3 h-3 mr-3 mt-1 flex-shrink-0", tc.text)} />
                    <span>
                      {insight.text}{" "}
                      <a
                        href={insight.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("hover:underline ml-1", tc.text)}
                      >
                        [Link]
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </CourseViewerLayout>

      {showCalculator && id === "rpe-mastery" && (
        <RpeCalculator onClose={() => setShowCalculator(false)} />
      )}
      {showCalculator && id === "cosa-devo-mangiare" && (
        <PortionCalculator onClose={() => setShowCalculator(false)} />
      )}
      {showCalculator && id === "cellulite-mini-corso" && (
        <CelluliteStageQuiz onClose={() => setShowCalculator(false)} />
      )}
    </CourseThemeProvider>
  );
};

export default CoursePage;
