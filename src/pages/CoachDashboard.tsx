import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Users, BookOpen, Clock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { it } from "date-fns/locale";

const COURSE_META: Record<string, { title: string; totalLessons: number; color: string }> = {
  "rpe-mastery": { title: "Corso RPE", totalLessons: 8, color: "text-sky-500" },
  "cosa-devo-mangiare": { title: "Cosa Devo Mangiare?", totalLessons: 6, color: "text-emerald-500" },
  integratori: { title: "Integratori", totalLessons: 5, color: "text-violet-500" },
  "cellulite-mini-corso": { title: "Cellulite", totalLessons: 4, color: "text-rose-500" },
};

interface StudentRow {
  userId: string;
  displayName: string;
  email: string;
  courses: { courseId: string; completedCount: number; totalLessons: number; updatedAt: string }[];
  lastActive: string | null;
}

const CoachDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [students, setStudents] = useState<StudentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCoach, setIsCoach] = useState(false);

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      // Check coach role
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "coach")
        .maybeSingle();

      if (!roleData) {
        setIsCoach(false);
        setLoading(false);
        return;
      }
      setIsCoach(true);

      // Fetch all profiles and progress (coach RLS allows this)
      const [{ data: profiles }, { data: progress }] = await Promise.all([
        supabase.from("profiles").select("user_id, display_name"),
        supabase.from("user_progress").select("user_id, course_id, completed_lessons, updated_at"),
      ]);

      const profileMap = new Map(
        (profiles || []).map((p) => [p.user_id, p.display_name || "Senza nome"])
      );

      // Group progress by user
      const userMap = new Map<string, StudentRow>();

      for (const row of progress || []) {
        if (!userMap.has(row.user_id)) {
          userMap.set(row.user_id, {
            userId: row.user_id,
            displayName: profileMap.get(row.user_id) || "Senza nome",
            email: "",
            courses: [],
            lastActive: null,
          });
        }
        const student = userMap.get(row.user_id)!;
        const completedLessons = (row.completed_lessons as string[]) || [];
        const meta = COURSE_META[row.course_id];
        student.courses.push({
          courseId: row.course_id,
          completedCount: completedLessons.length,
          totalLessons: meta?.totalLessons || 0,
          updatedAt: row.updated_at,
        });
        if (!student.lastActive || row.updated_at > student.lastActive) {
          student.lastActive = row.updated_at;
        }
      }

      // Also add profiles without progress
      for (const [uid, name] of profileMap) {
        if (!userMap.has(uid) && uid !== user.id) {
          userMap.set(uid, { userId: uid, displayName: name, email: "", courses: [], lastActive: null });
        }
      }

      // Sort by last active desc, no activity last
      const sorted = Array.from(userMap.values()).sort((a, b) => {
        if (!a.lastActive && !b.lastActive) return 0;
        if (!a.lastActive) return 1;
        if (!b.lastActive) return -1;
        return b.lastActive.localeCompare(a.lastActive);
      });

      setStudents(sorted);
      setLoading(false);
    };

    load();
  }, [user]);

  if (authLoading || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!isCoach) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-3">
          <ShieldCheck className="mx-auto h-12 w-12 text-muted-foreground/40" />
          <h1 className="text-2xl font-bold text-foreground">Accesso non autorizzato</h1>
          <p className="text-muted-foreground">Solo i coach possono accedere a questa area.</p>
          <Button variant="outline" onClick={() => navigate("/")}>Torna alla Dashboard</Button>
        </div>
      </div>
    );
  }

  const totalStudents = students.length;
  const activeStudents = students.filter((s) => s.courses.length > 0).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold tracking-tight text-foreground">
              Area Coach — Panoramica Studenti
            </h1>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              {totalStudents} studenti
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {activeStudents} attivi
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 space-y-6">
        {students.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <Users className="mx-auto h-12 w-12 mb-4 opacity-40" />
            <p className="text-lg font-medium">Nessuno studente registrato ancora.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {students.map((student) => {
              const overallCompleted = student.courses.reduce((s, c) => s + c.completedCount, 0);
              const overallTotal = student.courses.reduce((s, c) => s + c.totalLessons, 0);
              const overallPct = overallTotal > 0 ? Math.round((overallCompleted / overallTotal) * 100) : 0;

              return (
                <div
                  key={student.userId}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Avatar + Info */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {student.displayName.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground truncate">{student.displayName}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                          {student.lastActive ? (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Ultimo accesso: {formatDistanceToNow(new Date(student.lastActive), { addSuffix: true, locale: it })}
                            </span>
                          ) : (
                            <span className="text-muted-foreground/50">Mai attivo</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Overall progress */}
                    <div className="flex items-center gap-3 md:w-48 shrink-0">
                      <Progress value={overallPct} className="h-2 flex-1 bg-secondary" />
                      <span className="text-sm font-semibold text-foreground w-10 text-right">{overallPct}%</span>
                    </div>
                  </div>

                  {/* Course breakdown */}
                  {student.courses.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {student.courses.map((c) => {
                        const meta = COURSE_META[c.courseId];
                        const pct = c.totalLessons > 0 ? Math.round((c.completedCount / c.totalLessons) * 100) : 0;
                        return (
                          <div key={c.courseId} className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5">
                            <div className="flex-1 min-w-0">
                              <p className={cn("text-xs font-semibold truncate", meta?.color || "text-foreground")}>
                                {meta?.title || c.courseId}
                              </p>
                              <p className="text-[11px] text-muted-foreground">
                                {c.completedCount}/{c.totalLessons} lezioni
                              </p>
                            </div>
                            <span className="text-xs font-bold text-foreground">{pct}%</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default CoachDashboard;