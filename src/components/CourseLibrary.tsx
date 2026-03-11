import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { COURSE_META, COURSE_IDS } from "@/lib/course-metadata";

const CourseLibrary = () => {
  const { user } = useAuth();
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!user) return;

    const fetchProgress = async () => {
      const { data } = await supabase
        .from("user_progress")
        .select("course_id, completed_lessons")
        .eq("user_id", user.id);

      const map: Record<string, number> = {};
      for (const row of data || []) {
        const completed = (row.completed_lessons as string[]) || [];
        const meta = COURSE_META[row.course_id];
        if (meta) {
          map[row.course_id] = Math.round((completed.length / meta.totalLessons) * 100);
        }
      }
      setProgressMap(map);
    };

    fetchProgress();
  }, [user]);

  return (
    <section className="space-y-5">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Libreria Corsi
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {COURSE_IDS.map((id) => {
          const meta = COURSE_META[id];
          return (
            <CourseCard
              key={id}
              id={id}
              title={meta.title}
              category={meta.category}
              colorClass={meta.colorClass}
              bgClass={meta.bgClass}
              borderClass={meta.borderClass}
              lessons={meta.totalLessons}
              progress={progressMap[id] || 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CourseLibrary;
