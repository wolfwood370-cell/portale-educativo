import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { COURSE_META } from "@/lib/course-metadata";

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

  const defaultCourseId = "rpe-mastery";
  const course = lastCourse ? COURSE_META[lastCourse.courseId] : COURSE_META[defaultCourseId];
  const progress = lastCourse
    ? Math.round((lastCourse.completedCount / lastCourse.totalLessons) * 100)
    : 0;
  const courseId = lastCourse?.courseId || defaultCourseId;
  const nextLesson = lastCourse?.nextLesson || 1;
  const totalLessons = lastCourse?.totalLessons || course?.totalLessons || 12;

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Bentornato, <span className="text-gradient-gold">{displayName}</span>
        </h1>
        <p className="mt-2 text-muted-foreground text-base">Riprendi da dove avevi lasciato.</p>
      </div>

      <div
        className="group relative overflow-hidden rounded-3xl bg-card border-2 border-primary/15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
        onClick={() => navigate(`/course/${courseId}`)}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.02]" />

        <div className="relative z-10 flex flex-col justify-end p-8 md:p-10 min-h-[260px]">
          <div className="absolute top-6 right-6 md:top-8 md:right-8">
            <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary border border-primary/15 tracking-wide">
              {course?.category || "Allenamento"}
            </span>
          </div>

          <div className="space-y-5 max-w-xl">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                Riprendi a Studiare
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {course?.title || "Corso RPE — La Guida Definitiva"}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Lezione {nextLesson} di {totalLessons}
              </p>
            </div>

            {/* Progress bar */}
            <div className="flex items-center gap-4">
              <div className="flex-1 rounded-full h-2.5 bg-secondary/80 overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${Math.max(progress, 2)}%` }}
                />
              </div>
              <span className="text-sm font-bold text-primary tabular-nums">{progress}%</span>
            </div>

            <Button
              size="lg"
              className="gap-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold text-sm px-6"
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
