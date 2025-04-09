import React, { useEffect, useState, useContext, ReactNode } from "react";
import { auth } from "../../firebase/Firebase";
import { User, onAuthStateChanged } from "firebase/auth";

// Define the shape of your auth context
interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: () => void;
  logout: () => void;
  signup: () => void;
  
}

// Create context with initial null
const AuthContext = React.createContext<AuthContextType | null>(null);

// Hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Props for provider
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
      } else {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    currentUser,
    isAuthenticated,
    loading,
    login: () => {}, 
    logout: () => {}, 
    signup: () => {},
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
