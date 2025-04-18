
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { AlertTriangleIcon } from "lucide-react";

const Unauthorized = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4">
          <div className="h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center">
            <AlertTriangleIcon className="h-10 w-10 text-orange-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        
        <p className="text-gray-600 mb-6">
          Sorry, you don't have permission to access this page. Please contact your administrator if you think this is a mistake.
        </p>
        
        <div className="space-y-4">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link to="/dashboard">
              Return to Dashboard
            </Link>
          </Button>
          
          <div className="pt-2">
            <Link to="/login" className="text-orange-600 hover:text-orange-800 text-sm">
              Log in with a different account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
