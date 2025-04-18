
import { useState, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import { 
  MenuIcon, 
  HomeIcon, 
  CalendarIcon, 
  UtensilsIcon,
  ShoppingCartIcon, 
  CreditCardIcon, 
  HistoryIcon, 
  SettingsIcon, 
  LogOutIcon,
  UsersIcon,
  ClipboardListIcon,
  PieChartIcon,
  PackageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  roles: string[];
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Define navigation items with role-based access
  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      icon: HomeIcon,
      href: "/dashboard",
      roles: ["student", "staff", "messstaff", "admin"],
    },
    {
      label: "Menu",
      icon: UtensilsIcon,
      href: "/menu",
      roles: ["student", "staff", "messstaff", "admin"],
    },
    {
      label: "Order Food",
      icon: ShoppingCartIcon,
      href: "/order",
      roles: ["student", "staff"],
    },
    {
      label: "Mess Card",
      icon: CreditCardIcon,
      href: "/mess-card",
      roles: ["student", "staff"],
    },
    {
      label: "Meal Schedule",
      icon: CalendarIcon,
      href: "/meal-schedule",
      roles: ["student", "staff", "messstaff", "admin"],
    },
    {
      label: "Order History",
      icon: HistoryIcon,
      href: "/order-history",
      roles: ["student", "staff"],
    },
    {
      label: "Manage Orders",
      icon: ClipboardListIcon,
      href: "/manage-orders",
      roles: ["messstaff", "admin"],
    },
    {
      label: "Manage Menu",
      icon: UtensilsIcon,
      href: "/manage-menu",
      roles: ["messstaff", "admin"],
    },
    {
      label: "Inventory",
      icon: PackageIcon,
      href: "/inventory",
      roles: ["messstaff", "admin"],
    },
    {
      label: "User Management",
      icon: UsersIcon,
      href: "/users",
      roles: ["admin"],
    },
    {
      label: "Analytics",
      icon: PieChartIcon,
      href: "/analytics",
      roles: ["admin"],
    },
    {
      label: "Settings",
      icon: SettingsIcon,
      href: "/settings",
      roles: ["student", "staff", "messstaff", "admin"],
    },
  ];

  // Filter navigation items based on user role
  const filteredNavItems = navItems.filter((item) =>
    item.roles.includes(user?.role || "")
  );

  const NavLink = ({ item }: { item: NavItem }) => (
    <Link
      to={item.href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:text-orange-600",
        location.pathname === item.href
          ? "bg-orange-50 text-orange-600 font-medium"
          : "text-gray-700 hover:bg-orange-50"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <item.icon className="h-4 w-4" />
      <span>{item.label}</span>
    </Link>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex w-64 flex-col border-r bg-white">
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-lg text-orange-600">
            <UtensilsIcon className="h-5 w-5" />
            <span>FoodFlow Campus</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm">
            {filteredNavItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </div>
        
        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-orange-100 text-orange-800">
                {user ? getInitials(user.name) : "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium truncate">{user?.name}</span>
              <span className="text-xs text-gray-500 truncate capitalize">{user?.role}</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                  <SettingsIcon className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex h-14 items-center border-b px-4">
                <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-lg text-orange-600">
                  <UtensilsIcon className="h-5 w-5" />
                  <span>FoodFlow Campus</span>
                </Link>
              </div>
              <nav className="grid gap-1 p-2">
                {filteredNavItems.map((item) => (
                  <NavLink key={item.href} item={item} />
                ))}
              </nav>
              <Separator />
              <Button variant="ghost" className="w-full justify-start gap-2 p-2" onClick={handleLogout}>
                <LogOutIcon className="h-4 w-4" />
                <span>Log out</span>
              </Button>
            </SheetContent>
          </Sheet>
          
          <div className="md:hidden flex items-center gap-2 font-semibold">
            <UtensilsIcon className="h-5 w-5 text-orange-600" />
            <span className="text-orange-600">FoodFlow</span>
          </div>
          
          <div className="ml-auto flex items-center gap-2">
            {user?.role === "student" && (
              <Link to="/mess-card" className="hidden md:flex items-center gap-1.5 text-sm">
                <CreditCardIcon className="h-4 w-4 text-orange-600" />
                <span className="font-medium">Balance:</span>
                <span className="text-orange-600 font-semibold">₹{user?.balance || 0}</span>
              </Link>
            )}
            
            <div className="hidden md:block h-4 w-px bg-gray-200 mx-2" />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-orange-100 text-orange-800 text-sm">
                      {user ? getInitials(user.name) : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Open user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground capitalize">
                      {user?.role}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
