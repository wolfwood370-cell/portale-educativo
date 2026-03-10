import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseViewerLayout, { type Lesson } from "@/components/CourseViewerLayout";
import { CourseThemeProvider, type ThemeColor } from "@/lib/course-theme";
import { Clock, GraduationCap, ExternalLink, Calculator } from "lucide-react";
import { rpeLessons, rpeLessonContent } from "@/data/rpe-course-data";
import RpeCalculator from "@/components/course/RpeCalculator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { themeClasses } from "@/lib/course-theme";

// Non-RPE courses keep mock data
const otherCoursesData: Record<
  string,
  { title: string; themeColor: ThemeColor; lessons: Lesson[] }
> = {
  "cosa-devo-mangiare": {
    title: "Cosa Devo Mangiare?",
    themeColor: "emerald",
    lessons: [
      { id: "l1", title: "Introduzione alla Nutrizione", duration: "8 min", completed: true },
      { id: "l2", title: "Macronutrienti Essenziali", duration: "12 min", completed: true },
      { id: "l3", title: "Come Calcolare il Fabbisogno", duration: "15 min", completed: false },
      { id: "l4", title: "Meal Planning Pratico", duration: "10 min", completed: false },
      { id: "l5", title: "Timing dei Pasti", duration: "9 min", completed: false },
      { id: "l6", title: "Errori Comuni da Evitare", duration: "7 min", completed: false },
    ],
  },
  integratori: {
    title: "Quali integratori usare?",
    themeColor: "violet",
    lessons: [
      { id: "l1", title: "Il Mondo degli Integratori", duration: "7 min", completed: false },
      { id: "l2", title: "Creatina — La Base", duration: "11 min", completed: false },
      { id: "l3", title: "Proteine in Polvere", duration: "9 min", completed: false },
      { id: "l4", title: "Vitamine e Minerali", duration: "10 min", completed: false },
      { id: "l5", title: "Cosa Evitare", duration: "6 min", completed: false },
    ],
  },
  "cellulite-mini-corso": {
    title: "Cellulite — Il Mini Corso",
    themeColor: "rose",
    lessons: [
      { id: "l1", title: "Cos'è la Cellulite?", duration: "8 min", completed: true },
      { id: "l2", title: "Cause e Fattori", duration: "10 min", completed: true },
      { id: "l3", title: "Strategie di Allenamento", duration: "12 min", completed: true },
      { id: "l4", title: "Nutrizione e Stile di Vita", duration: "9 min", completed: true },
    ],
  },
};

// Build full courses map including RPE
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
};

const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = coursesData[id || ""];
  const isRpeCourse = id === "rpe-mastery";

  const [lessons, setLessons] = useState<Lesson[]>(course?.lessons || []);
  const [showCalculator, setShowCalculator] = useState(false);

  const defaultActive = useMemo(
    () => lessons.find((l) => !l.completed)?.id || lessons[0]?.id || "l1",
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );
  const [activeLessonId, setActiveLessonId] = useState(defaultActive);

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-foreground">Course not found</h1>
          <button className="text-sm text-primary underline" onClick={() => navigate("/")}>
            Back to Dashboard
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
    setLessons((prev) =>
      prev.map((l) => (l.id === activeLessonId ? { ...l, completed: true } : l))
    );
    if (activeIdx < lessons.length - 1) {
      setActiveLessonId(lessons[activeIdx + 1].id);
    }
  };

  // Get real RPE content if available
  const rpeContent = isRpeCourse ? rpeLessonContent[activeLessonId] : null;
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
          {/* Lesson Header */}
          <header className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-bold text-xs tracking-widest uppercase shadow-sm border border-sky-500/20">
              Lezione {activeIdx + 1}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {activeLesson?.title}
            </h1>
            {rpeContent && (
              <p className="text-xl text-muted-foreground font-light tracking-wide">
                {rpeContent.subtitle}
              </p>
            )}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {activeLesson?.duration}
              </span>
              {isRpeCourse && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:text-sky-300"
                  onClick={() => setShowCalculator(true)}
                >
                  <Calculator className="h-3.5 w-3.5 mr-1.5" />
                  Calcolatore RPE
                </Button>
              )}
            </div>
          </header>

          {/* Lesson Content */}
          {rpeContent ? (
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl border border-border/50">
              {rpeContent.content}
            </div>
          ) : (
            /* Fallback for non-RPE courses */
            <div className="prose prose-invert prose-sm max-w-none space-y-4">
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

          {/* Scientific References */}
          {rpeContent?.insights && rpeContent.insights.length > 0 && (
            <div className="mt-16 pt-8 border-t-2 border-border/30">
              <h4 className="flex items-center text-xs font-bold text-sky-400 uppercase tracking-widest mb-6">
                <GraduationCap className="w-4 h-4 mr-2" /> RIFERIMENTI SCIENTIFICI
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {rpeContent.insights.map((insight, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground font-mono leading-relaxed bg-card p-4 rounded-lg border border-border/50 shadow-sm flex items-start"
                  >
                    <ExternalLink className="w-3 h-3 text-sky-400 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      {insight.text}{" "}
                      <a
                        href={insight.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:underline ml-1"
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

      {/* RPE Calculator Modal */}
      {showCalculator && <RpeCalculator onClose={() => setShowCalculator(false)} />}
    </CourseThemeProvider>
  );
};

export default CoursePage;
