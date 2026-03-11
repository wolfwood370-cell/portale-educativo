import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const COURSE_META: Record<string, { title: string; totalLessons: number; category: string }> = {
  "rpe-mastery": { title: "Corso RPE — La Guida Definitiva", totalLessons: 8, category: "Allenamento" },
  "cosa-devo-mangiare": { title: "Cosa Devo Mangiare?", totalLessons: 6, category: "Nutrizione" },
  integratori: { title: "Quali integratori usare?", totalLessons: 5, category: "Integratori" },
  "cellulite-mini-corso": { title: "Cellulite — Il Mini Corso", totalLessons: 4, category: "Fisiologia" },
};

const ResumeLearning = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const displayName = user?.user_metadata?.display_name || user?.email?.split("@")[0] || "Atleta";

  const [lastCourse, setLastCourse] = useState<{
    courseId: string;
    completedCount: number;
    totalLessons: number;
    nextLesson: number;
  } | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchLastProgress = async () => {
      const { data } = await supabase
        .from("user_progress")
        .select("course_id, completed_lessons, updated_at")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (data) {
        const completed = (data.completed_lessons as string[]) || [];
        const meta = COURSE_META[data.course_id];
        setLastCourse({
          courseId: data.course_id,
          completedCount: completed.length,
          totalLessons: meta?.totalLessons || 0,
          nextLesson: completed.length + 1,
        });
      }
    };

    fetchLastProgress();
  }, [user]);

  const course = lastCourse ? COURSE_META[lastCourse.courseId] : COURSE_META["rpe-mastery"];
  const progress = lastCourse
    ? Math.round((lastCourse.completedCount / lastCourse.totalLessons) * 100)
    : 0;
  const courseId = lastCourse?.courseId || "rpe-mastery";
  const nextLesson = lastCourse?.nextLesson || 1;
  const totalLessons = lastCourse?.totalLessons || course?.totalLessons || 8;

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Bentornato, <span className="text-gradient-gold">{displayName}</span>
        </h1>
        <p className="mt-1 text-muted-foreground">Riprendi da dove avevi lasciato.</p>
      </div>

      <div
        className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm card-glow card-glow-hover transition-all duration-500 cursor-pointer"
        onClick={() => navigate(`/course/${courseId}`)}
      >
        <div className="aspect-video max-h-[320px] relative flex flex-col justify-end p-8 bg-gradient-to-t from-card via-card/80 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-br from-cat-training/10 via-transparent to-primary/5" />
          <div className="absolute top-6 right-6 rounded-full bg-cat-training/15 px-3 py-1 text-xs font-medium text-cat-training border border-cat-training/20">
            {course?.category || "Allenamento"}
          </div>

          <div className="relative z-10 space-y-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                Riprendi a Studiare
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                {course?.title || "Corso RPE — La Guida Definitiva"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Lezione {nextLesson} di {totalLessons}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Progress value={progress} className="h-1.5 flex-1 bg-secondary" />
              <span className="text-xs font-semibold text-primary">{progress}%</span>
            </div>

            <Button
              size="lg"
              className="gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <Play className="h-4 w-4" />
              {progress > 0 ? "Riprendi Corso" : "Inizia Corso"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeLearning;
