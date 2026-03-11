import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const ResumeLearning = () => {
  const navigate = useNavigate();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Bentornato, <span className="text-gradient-gold">Marco</span>
        </h1>
        <p className="mt-1 text-muted-foreground">Riprendi da dove avevi lasciato.</p>
      </div>

      <div
        className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm card-glow card-glow-hover transition-all duration-500 cursor-pointer"
        onClick={() => navigate("/course/rpe-mastery")}
      >
        <div className="aspect-video max-h-[320px] relative flex flex-col justify-end p-8 bg-gradient-to-t from-card via-card/80 to-transparent">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cat-training/10 via-transparent to-primary/5" />
          <div className="absolute top-6 right-6 rounded-full bg-cat-training/15 px-3 py-1 text-xs font-medium text-cat-training border border-cat-training/20">
            Allenamento
          </div>

          <div className="relative z-10 space-y-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                Riprendi a Studiare
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                Corso RPE — La Guida Definitiva
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Lezione 4 di 8 · 12 min rimanenti
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Progress value={60} className="h-1.5 flex-1 bg-secondary" />
              <span className="text-xs font-semibold text-primary">60%</span>
            </div>

            <Button
              size="lg"
              className="gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <Play className="h-4 w-4" />
              Riprendi Corso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeLearning;