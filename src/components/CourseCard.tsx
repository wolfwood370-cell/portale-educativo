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
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:scale-[1.03] hover:border-border card-glow card-glow-hover"
    >
      <div className="aspect-video relative flex flex-col justify-between p-5">
        {/* Decorative gradient bg */}
        <div className={`absolute inset-0 opacity-[0.07] bg-gradient-to-br ${bgClass}`} />

        <div className="relative z-10 flex items-start justify-between">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${colorClass} ${borderClass} bg-background/50 backdrop-blur-sm`}
          >
            {category}
          </span>
          {/* Circular progress */}
          <div className="relative h-9 w-9">
            <svg className="h-9 w-9 -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                className="stroke-secondary"
                strokeWidth="3"
              />
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                className={`${colorClass.replace('text-', 'stroke-')}`}
                strokeWidth="3"
                strokeDasharray={`${progress * 0.9425} 94.25`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-foreground">
              {progress}%
            </span>
          </div>
        </div>

        <div className="relative z-10 mt-auto space-y-1.5">
          <h3 className="text-base font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" />
            {lessons} lessons
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
