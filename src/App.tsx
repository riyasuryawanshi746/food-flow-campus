import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import AuthRedirect from "@/components/AuthRedirect";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route 
              path="/" 
              element={<LandingPage />} 
            />
            
            {/* Auth routes - redirect to dashboard if already logged in */}
            <Route 
              path="/login" 
              element={
                <AuthRedirect>
                  <Login />
                </AuthRedirect>
              } 
            />
            <Route 
              path="/register" 
              element={
                <AuthRedirect>
                  <Register />
                </AuthRedirect>
              } 
            />
            <Route 
              path="/forgot-password" 
              element={
                <AuthRedirect>
                  <ForgotPassword />
                </AuthRedirect>
              } 
            />
            
            {/* Protected routes - require authentication */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/menu" 
              element={
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/order" 
              element={
                <ProtectedRoute allowedRoles={["student", "staff"]}>
                  <Order />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/contact" 
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              } 
            />
            
            {/* Role-based routes */}
            <Route 
              path="/mess-card" 
              element={
                <ProtectedRoute allowedRoles={["student", "staff"]}>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/meal-schedule" 
              element={
                <ProtectedRoute>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/order-history" 
              element={
                <ProtectedRoute allowedRoles={["student", "staff"]}>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/manage-orders" 
              element={
                <ProtectedRoute allowedRoles={["messstaff", "admin"]}>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/manage-menu" 
              element={
                <ProtectedRoute allowedRoles={["messstaff", "admin"]}>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/inventory" 
              element={
                <ProtectedRoute allowedRoles={["messstaff", "admin"]}>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/users" 
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/analytics" 
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <ProtectedRoute>
                  <Dashboard /> {/* Placeholder - would be replaced with the actual component */}
                </ProtectedRoute>
              } 
            />

            {/* Other routes */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
