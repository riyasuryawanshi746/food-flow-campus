
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UtensilsIcon, ShoppingCartIcon, CalendarIcon, CreditCardIcon, PlusIcon, ClipboardListIcon, TrendingUpIcon } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  
  // Content based on user role
  const renderRoleBasedContent = () => {
    switch (user?.role) {
      case "student":
      case "staff":
        return (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <UtensilsIcon className="h-5 w-5 text-orange-600" />
                  <span>Today's Menu</span>
                </CardTitle>
                <CardDescription>Check what's cooking today</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Special today: Butter Chicken, Naan, and Dal Makhani</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/menu">View Full Menu</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <ShoppingCartIcon className="h-5 w-5 text-orange-600" />
                  <span>Order Food</span>
                </CardTitle>
                <CardDescription>Place an order for pickup or delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Quick order from canteen or pre-order for mess</p>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link to="/order">Order Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <CreditCardIcon className="h-5 w-5 text-orange-600" />
                  <span>Mess Card</span>
                </CardTitle>
                <CardDescription>Manage your mess card balance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">Current Balance:</span>
                  <span className="text-xl font-bold text-orange-600">₹{user?.balance || 0}</span>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/mess-card">
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Money
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-scale card-shadow md:col-span-2 lg:col-span-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-orange-600" />
                  <span>Weekly Meal Schedule</span>
                </CardTitle>
                <CardDescription>Upcoming meals for this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-orange-50 rounded-md">
                    <h3 className="font-medium mb-2">Monday</h3>
                    <p className="text-sm text-gray-600">Breakfast: Idli & Sambar</p>
                    <p className="text-sm text-gray-600">Lunch: Rice, Dal, Vegetable Curry</p>
                    <p className="text-sm text-gray-600">Dinner: Chapati, Paneer Dish</p>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded-md">
                    <h3 className="font-medium mb-2">Tuesday</h3>
                    <p className="text-sm text-gray-600">Breakfast: Poha & Tea</p>
                    <p className="text-sm text-gray-600">Lunch: Rice, Sambar, Papad</p>
                    <p className="text-sm text-gray-600">Dinner: Chapati, Chicken Curry</p>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded-md">
                    <h3 className="font-medium mb-2">Wednesday</h3>
                    <p className="text-sm text-gray-600">Breakfast: Bread & Eggs</p>
                    <p className="text-sm text-gray-600">Lunch: Pulao, Raita</p>
                    <p className="text-sm text-gray-600">Dinner: Chapati, Mixed Vegetables</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link to="/meal-schedule">View Full Schedule →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      case "messstaff":
        return (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <ClipboardListIcon className="h-5 w-5 text-orange-600" />
                  <span>Current Orders</span>
                </CardTitle>
                <CardDescription>Manage incoming orders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">You have 5 pending orders to fulfill</p>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link to="/manage-orders">View Orders</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <UtensilsIcon className="h-5 w-5 text-orange-600" />
                  <span>Manage Menu</span>
                </CardTitle>
                <CardDescription>Update today's menu items</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Add or remove items from today's offerings</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/manage-menu">Update Menu</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-orange-600" />
                  <span>Meal Schedule</span>
                </CardTitle>
                <CardDescription>Manage upcoming meals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Update or plan the weekly meal schedule</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/meal-schedule">Manage Schedule</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        );
        
      case "admin":
        return (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUpIcon className="h-5 w-5 text-orange-600" />
                  <span>System Overview</span>
                </CardTitle>
                <CardDescription>Key system statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Users:</span>
                    <span className="font-medium">1,250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Today's Orders:</span>
                    <span className="font-medium">87</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Revenue:</span>
                    <span className="font-medium">₹24,750</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/analytics">Detailed Analytics</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <ClipboardListIcon className="h-5 w-5 text-orange-600" />
                  <span>Order Management</span>
                </CardTitle>
                <CardDescription>Oversee all orders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Review and manage all current orders</p>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link to="/manage-orders">Manage Orders</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-scale card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <UtensilsIcon className="h-5 w-5 text-orange-600" />
                  <span>Menu & Food</span>
                </CardTitle>
                <CardDescription>Full menu control</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Manage menu items, categories, and pricing</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/manage-menu">Menu Settings</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        );
        
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Welcome to FoodFlow Campus</h2>
            <p className="text-gray-600">Please contact an administrator if you need help.</p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      <div className="container px-4 py-6 md:px-6 md:py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Welcome, {user?.name}</h1>
          <p className="text-muted-foreground">
            Here's what you need to know for today.
          </p>
        </div>
        
        {renderRoleBasedContent()}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
