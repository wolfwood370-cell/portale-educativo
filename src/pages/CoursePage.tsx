import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Course: {id}</h1>
        <p className="text-muted-foreground">Course content coming soon.</p>
        <Button variant="outline" className="gap-2" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default CoursePage;
