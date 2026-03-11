import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import Dashboard from "./Dashboard";

const Index = () => {
  const { userRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (userRole === "coach") {
    return <Navigate to="/coach" replace />;
  }

  return <Dashboard />;
};

export default Index;
