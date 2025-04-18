
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserRole = "student" | "staff" | "messstaff" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  balance?: number; // For mess card balance
  studentId?: string; // For students
  department?: string; // For staff/faculty
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole, additionalInfo?: any) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // In a real app, this would check if the user is logged in via a token in localStorage or cookies
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock authentication functions - would be replaced with actual API calls
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Mock login - in a real app, this would be an API call
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Demo users for different roles
      const users = [
        { id: "1", name: "Student User", email: "student@example.com", password: "password", role: "student", balance: 500, studentId: "ST12345" },
        { id: "2", name: "Staff User", email: "staff@example.com", password: "password", role: "staff", department: "Computer Science" },
        { id: "3", name: "Mess Staff", email: "mess@example.com", password: "password", role: "messstaff", department: "Food Services" },
        { id: "4", name: "Admin User", email: "admin@example.com", password: "password", role: "admin" }
      ];

      const foundUser = users.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword as User);
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string, role: UserRole, additionalInfo?: any) => {
    setLoading(true);
    setError(null);
    
    try {
      // Mock registration - in a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a new user
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9), // Generate random ID
        name,
        email,
        role,
        ...(role === "student" && { 
          studentId: additionalInfo?.studentId || "ST" + Math.floor(10000 + Math.random() * 90000),
          balance: 0
        }),
        ...(role === "staff" && { department: additionalInfo?.department || "General" }),
        ...(role === "messstaff" && { department: "Food Services" })
      };
      
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Mock password reset - in a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Success message would be shown to the user
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during password reset");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
