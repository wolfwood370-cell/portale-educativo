import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  lessons: number;
  progress: number;
}

const CourseCard = ({
  id,
  title,
  category,
  colorClass,
  bgClass,
  borderClass,
  lessons,
  progress,
}: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/course/${id}`)}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
    >
      <div className="aspect-video relative flex flex-col justify-between p-6">
        {/* Decorative gradient bg */}
        <div className={`absolute inset-0 opacity-[0.06] bg-gradient-to-br ${bgClass}`} />

        <div className="relative z-10 flex items-start justify-between">
          {/* Modern pill tag */}
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${colorClass} ${borderClass} bg-card/90 backdrop-blur-sm border`}
          >
            {category}
          </span>
          {/* Circular progress */}
          <div className="relative h-10 w-10">
            <svg className="h-10 w-10 -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                className="stroke-secondary"
                strokeWidth="2.5"
              />
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                className={`${colorClass.replace('text-', 'stroke-')}`}
                strokeWidth="2.5"
                strokeDasharray={`${progress * 0.9425} 94.25`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-foreground">
              {progress}%
            </span>
          </div>
        </div>

        <div className="relative z-10 mt-auto space-y-3">
          <div className="space-y-1">
            <h3 className="text-base font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" />
              {lessons} lezioni
            </p>
          </div>

          {/* Linear progress bar */}
          <div className="w-full rounded-full h-2 bg-secondary/80 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${colorClass.replace('text-', 'bg-')}`}
              style={{ width: `${Math.max(progress, 2)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
