import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AppRole = "coach" | "student";

interface AuthContextValue {
  session: Session | null;
  user: User | null;
  userRole: AppRole;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  session: null,
  user: null,
  userRole: "student",
  loading: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [userRole, setUserRole] = useState<AppRole>("student");
  const [loading, setLoading] = useState(true);

  const fetchRole = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    const roles = (data ?? []).map((r) => r.role);
    setUserRole(roles.includes("coach") ? "coach" : "student");
  }, []);

  useEffect(() => {
    // Set up listener FIRST (Supabase best practice)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (session?.user) {
          // Use setTimeout to avoid potential deadlocks with Supabase SDK
          setTimeout(() => fetchRole(session.user.id), 0);
        } else {
          setUserRole("student");
          setLoading(false);
        }
      }
    );

    // Then get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        fetchRole(session.user.id).then(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchRole]);

  const signOut = useCallback(async () => {
    setLoading(true);
    await supabase.auth.signOut();
    // State will be reset by onAuthStateChange listener
  }, []);

  return (
    <AuthContext.Provider value={{ session, user: session?.user ?? null, userRole, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
