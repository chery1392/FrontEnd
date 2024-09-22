import { createContext, useContext, useEffect, useMemo, useState } from "react";

type UserContextProviderProps = {
  children: React.ReactNode;
};

type AuthUser = {
  email: string;
  username: string;
  id: number;
};

export type UserContextType = {
  user: null | AuthUser;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, [localStorage]);

  const value = useMemo(() => ({ user }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvier");
  return context;
}
