import { useState, useEffect } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const coursesData: Record<
  string,
  { title: string; themeColor: ThemeColor; lessons: Lesson[] }
> = {
  "rpe-mastery": {
    title: "RPE: La scienza dell'intensità e dell'autoregolazione",
    themeColor: "sky",
    lessons: rpeLessons,
  },
  "cosa-devo-mangiare": {
    title: "Nutrizione: Scegliere i cibi e gestire le porzioni",
    themeColor: "emerald",
    lessons: nutritionLessons,
  },
  integratori: {
    title: "Integratori: La verità scientifica oltre il marketing",
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

const applyProgress = (defaults: Lesson[], completedIds: string[]): Lesson[] =>
  defaults.map((l) => ({ ...l, completed: completedIds.includes(l.id) }));

const getDefaultActive = (lessons: Lesson[]) =>
  lessons.find((l) => !l.completed)?.id || lessons[0]?.id || "l1";

const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const course = coursesData[id || ""];

  const [lessons, setLessons] = useState<Lesson[]>(() =>
    course ? course.lessons.map((l) => ({ ...l })) : []
  );
  const [activeLessonId, setActiveLessonId] = useState(() =>
    course ? getDefaultActive(course.lessons) : "l1"
  );
  const [showCalculator, setShowCalculator] = useState(false);
  const [dbLoading, setDbLoading] = useState(true);

  // Fetch progress from Supabase on mount / route change
  useEffect(() => {
    if (!id || !coursesData[id] || !user) return;
    setDbLoading(true);

    const fetchProgress = async () => {
      const { data } = await supabase
        .from("user_progress")
        .select("completed_lessons")
        .eq("user_id", user.id)
        .eq("course_id", id)
        .maybeSingle();

      const completedIds: string[] = (data?.completed_lessons as string[]) || [];
      const fresh = applyProgress(coursesData[id].lessons, completedIds);
      setLessons(fresh);
      setActiveLessonId(getDefaultActive(fresh));
      setShowCalculator(false);
      setDbLoading(false);
    };

    fetchProgress();
  }, [id, user]);

  // Save progress to Supabase
  const saveProgress = async (updatedLessons: Lesson[]) => {
    if (!user || !id) return;
    const completedIds = updatedLessons.filter((l) => l.completed).map((l) => l.id);
    await supabase.from("user_progress").upsert(
      {
        user_id: user.id,
        course_id: id,
        completed_lessons: completedIds,
      },
      { onConflict: "user_id,course_id" }
    );
  };

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

  if (dbLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
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
    saveProgress(updatedLessons);

    if (activeIdx < lessons.length - 1) {
      setActiveLessonId(lessons[activeIdx + 1].id);
    } else {
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
        <article className="space-y-10">
          <header className="space-y-4">
            <span className={cn("inline-block px-3.5 py-1 rounded-full font-bold text-[11px] tracking-widest uppercase shadow-sm border", tc.bgSubtle, tc.text, tc.border)}>
              Lezione {activeIdx + 1}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
              {activeLesson?.title}
            </h1>
            {lessonContent && (
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
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
                  size="sm"
                  className={cn("rounded-xl text-white font-semibold border-0", tc.bg, tc.bgHover, tc.shadow)}
                  onClick={() => setShowCalculator(true)}
                >
                  <calcConfig.icon className="h-3.5 w-3.5 mr-1.5" />
                  {calcConfig.label}
                </Button>
              )}
            </div>
          </header>

          {lessonContent ? (
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/40">
              <div className="prose prose-slate max-w-none prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
                {lessonContent.content}
              </div>
            </div>
          ) : (
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/40">
              <div className="prose prose-slate max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
                <p>
                  Questa lezione copre i concetti fondamentali che devi conoscere per progredire nel tuo
                  percorso di allenamento. Segui con attenzione ogni passaggio e prendi appunti per
                  massimizzare il tuo apprendimento.
                </p>
                <h2>Punti Chiave</h2>
                <ul>
                  <li>Comprendere i principi base è essenziale prima di passare ai concetti avanzati.</li>
                  <li>L'applicazione pratica richiede costanza e pazienza.</li>
                  <li>Ogni concetto si costruisce sul precedente — non saltare le lezioni.</li>
                </ul>
              </div>
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