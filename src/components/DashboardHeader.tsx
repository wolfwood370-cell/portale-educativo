import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Award, LogOut, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const DashboardHeader = () => {
  const { user, userRole, signOut } = useAuth();
  const navigate = useNavigate();
  const displayName = user?.user_metadata?.display_name || user?.email?.split("@")[0] || "Utente";
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">E</span>
          </div>
          <span className="text-base font-semibold tracking-tight text-foreground">
            Elite Coaching Portal
          </span>
        </div>

        <div className="flex items-center gap-3">
          {userRole === "coach" && (
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs"
              onClick={() => navigate("/coach")}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Area Coach
            </Button>
          )}
          <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary gap-1.5 px-2.5 py-1 text-xs font-medium">
            <Award className="h-3 w-3" />
            {userRole === "coach" ? "Coach" : "Atleta"}
          </Badge>
          <Avatar className="h-8 w-8 ring-1 ring-border ring-offset-1 ring-offset-background">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={signOut}
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
