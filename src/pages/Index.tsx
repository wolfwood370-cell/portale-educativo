import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Dashboard from "./Dashboard";

const Index = () => {
  const { userRole } = useAuth();

  if (userRole === "coach") {
    return <Navigate to="/coach" replace />;
  }

  return <Dashboard />;
};

export default Index;
