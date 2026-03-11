import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">E</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Elite Coaching Portal
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Badge className="border-primary/30 bg-primary/10 text-primary gap-1.5 px-3 py-1">
            <Award className="h-3.5 w-3.5" />
            Atleta Avanzato
          </Badge>
          <Avatar className="h-9 w-9 ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
            <AvatarFallback className="bg-secondary text-secondary-foreground text-sm font-medium">
              MC
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;