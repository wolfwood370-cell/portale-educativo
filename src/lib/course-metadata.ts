// Single source of truth for course metadata used across Dashboard, CourseLibrary, CoachDashboard, ResumeLearning
export interface CourseMeta {
  title: string;
  totalLessons: number;
  category: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

export const COURSE_META: Record<string, CourseMeta> = {
  "rpe-mastery": {
    title: "RPE: La scienza dell'intensità e dell'autoregolazione",
    totalLessons: 12,
    category: "Allenamento",
    colorClass: "text-cat-training",
    bgClass: "from-cat-training to-sky-200",
    borderClass: "border-cat-training/25",
  },
  "cosa-devo-mangiare": {
    title: "Nutrizione: Scegliere i cibi e gestire le porzioni",
    totalLessons: 8,
    category: "Nutrizione",
    colorClass: "text-cat-nutrition",
    bgClass: "from-cat-nutrition to-emerald-200",
    borderClass: "border-cat-nutrition/25",
  },
  integratori: {
    title: "Integratori: La verità scientifica oltre il marketing",
    totalLessons: 19,
    category: "Integratori",
    colorClass: "text-cat-supplements",
    bgClass: "from-cat-supplements to-violet-200",
    borderClass: "border-cat-supplements/25",
  },
  "cellulite-mini-corso": {
    title: "Cellulite — Il Mini Corso",
    totalLessons: 7,
    category: "Fisiologia",
    colorClass: "text-cat-physiology",
    bgClass: "from-cat-physiology to-rose-200",
    borderClass: "border-cat-physiology/25",
  },
};

// Ordered list of course IDs for display
export const COURSE_IDS = [
  "cosa-devo-mangiare",
  "rpe-mastery",
  "integratori",
  "cellulite-mini-corso",
] as const;
