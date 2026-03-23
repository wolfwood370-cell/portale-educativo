import DashboardHeader from "@/components/DashboardHeader";
import ResumeLearning from "@/components/ResumeLearning";
import CourseLibrary from "@/components/CourseLibrary";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="mx-auto max-w-7xl space-y-12 px-6 py-10 md:px-10">
        <ResumeLearning />
        <CourseLibrary />
      </main>
    </div>
  );
};

export default Dashboard;
