import CourseCard from "./CourseCard";

const courses = [
  {
    id: "cosa-devo-mangiare",
    title: "Cosa Devo Mangiare?",
    category: "Nutrizione",
    colorClass: "text-cat-nutrition",
    bgClass: "from-cat-nutrition to-emerald-200",
    borderClass: "border-cat-nutrition/25",
    lessons: 6,
    progress: 30,
  },
  {
    id: "rpe-mastery",
    title: "Corso RPE — La Guida Definitiva",
    category: "Allenamento",
    colorClass: "text-cat-training",
    bgClass: "from-cat-training to-sky-200",
    borderClass: "border-cat-training/25",
    lessons: 8,
    progress: 60,
  },
  {
    id: "integratori",
    title: "Quali integratori usare?",
    category: "Integratori",
    colorClass: "text-cat-supplements",
    bgClass: "from-cat-supplements to-violet-200",
    borderClass: "border-cat-supplements/25",
    lessons: 5,
    progress: 0,
  },
  {
    id: "cellulite-mini-corso",
    title: "Cellulite — Il Mini Corso",
    category: "Fisiologia",
    colorClass: "text-cat-physiology",
    bgClass: "from-cat-physiology to-rose-200",
    borderClass: "border-cat-physiology/25",
    lessons: 4,
    progress: 100,
  },
];

const CourseLibrary = () => {
  return (
    <section className="space-y-5">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Libreria Corsi
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CourseLibrary;