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
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="aspect-video relative flex flex-col justify-between p-5">
        {/* Decorative gradient bg */}
        <div className={`absolute inset-0 opacity-[0.05] bg-gradient-to-br ${bgClass}`} />

        <div className="relative z-10 flex items-start justify-between">
          {/* Category pill */}
          <span
            className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide ${colorClass} ${borderClass} bg-card/90 border`}
          >
            {category}
          </span>
          {/* Circular progress */}
          <div className="relative h-9 w-9">
            <svg className="h-9 w-9 -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                className="stroke-muted"
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

        <div className="relative z-10 mt-auto space-y-2.5">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" />
              {lessons} lezioni
            </p>
          </div>

          {/* Linear progress bar */}
          <div className="w-full rounded-full h-1.5 bg-muted overflow-hidden">
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
