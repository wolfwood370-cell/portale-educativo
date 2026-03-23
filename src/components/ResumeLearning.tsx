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
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Bentornato, <span className="text-gradient-brand">{displayName}</span>
        </h1>
        <p className="mt-1.5 text-muted-foreground text-sm">Riprendi da dove avevi lasciato.</p>
      </div>

      <div
        className="group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-md transition-all duration-200 cursor-pointer"
        onClick={() => navigate(`/course/${courseId}`)}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col justify-end p-6 md:p-8 min-h-[200px]">
          <div className="absolute top-5 right-5 md:top-6 md:right-6">
            <span className="rounded-md bg-primary/8 px-2.5 py-1 text-[11px] font-semibold text-primary border border-primary/10 tracking-wide">
              {course?.category || "Allenamento"}
            </span>
          </div>

          <div className="space-y-4 max-w-xl">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                Riprendi a Studiare
              </p>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                {course?.title || "Corso RPE — La Guida Definitiva"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Lezione {nextLesson} di {totalLessons}
              </p>
            </div>

            {/* Progress bar */}
            <div className="flex items-center gap-3">
              <div className="flex-1 rounded-full h-2 bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${Math.max(progress, 2)}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-primary tabular-nums">{progress}%</span>
            </div>

            <Button
              size="default"
              className="gap-2 rounded-lg font-semibold text-sm px-5"
            >
              <Play className="h-3.5 w-3.5" />
              {progress > 0 ? "Riprendi Corso" : "Inizia Corso"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeLearning;
