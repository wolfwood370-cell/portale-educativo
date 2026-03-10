import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseViewerLayout, { type Lesson } from "@/components/CourseViewerLayout";
import { CourseThemeProvider, type ThemeColor } from "@/lib/course-theme";
import { BookOpen, Clock } from "lucide-react";

// Mock course data
const coursesData: Record<
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
  "rpe-mastery": {
    title: "Corso RPE — La Guida Definitiva",
    themeColor: "sky",
    lessons: [
      { id: "l1", title: "Cos'è l'RPE?", duration: "6 min", completed: true },
      { id: "l2", title: "La Scala RPE vs RIR", duration: "10 min", completed: true },
      { id: "l3", title: "Autoregolazione in Pratica", duration: "14 min", completed: true },
      { id: "l4", title: "RPE per la Forza", duration: "12 min", completed: false },
      { id: "l5", title: "RPE per l'Ipertrofia", duration: "11 min", completed: false },
      { id: "l6", title: "Periodizzazione con RPE", duration: "15 min", completed: false },
      { id: "l7", title: "Errori Comuni", duration: "8 min", completed: false },
      { id: "l8", title: "Programma Finale", duration: "13 min", completed: false },
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

const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = coursesData[id || ""];

  const [lessons, setLessons] = useState<Lesson[]>(course?.lessons || []);

  // Find first incomplete lesson as default active
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
          <button
            className="text-sm text-primary underline"
            onClick={() => navigate("/")}
          >
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
    // Mark current as completed
    setLessons((prev) =>
      prev.map((l) => (l.id === activeLessonId ? { ...l, completed: true } : l))
    );
    // Move to next
    if (activeIdx < lessons.length - 1) {
      setActiveLessonId(lessons[activeIdx + 1].id);
    }
  };

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
        {/* Mock lesson content */}
        <article className="space-y-8">
          <header className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Lesson {activeIdx + 1} of {lessons.length}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {activeLesson?.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {activeLesson?.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                Reading
              </span>
            </div>
          </header>

          {/* Placeholder video area */}
          <div className="aspect-video rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center">
            <div className="text-center text-muted-foreground space-y-2">
              <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm">Video content placeholder</p>
            </div>
          </div>

          {/* Mock text content */}
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
            <blockquote className="border-l-2 border-muted-foreground/20 pl-4 italic text-muted-foreground">
              "La chiave del progresso non è la perfezione, ma la consistenza nel tempo."
            </blockquote>
          </div>
        </article>
      </CourseViewerLayout>
    </CourseThemeProvider>
  );
};

export default CoursePage;
