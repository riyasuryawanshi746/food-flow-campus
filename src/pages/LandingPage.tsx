
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UtensilsIcon, CheckIcon, ShoppingCartIcon, CreditCardIcon, CalendarIcon, ClockIcon } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-semibold text-lg text-orange-600">
            <UtensilsIcon className="h-5 w-5" />
            <span>FoodFlow Campus</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-sm font-medium hover:text-orange-600 transition-colors"
            >
              Sign In
            </Link>
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              Smart Mess & Canteen Management System for Your Campus
            </h1>
            <p className="text-gray-600 md:text-lg max-w-[600px]">
              Order food, manage your mess card, and track your meals—all in one place. 
              The modern solution for campus food services.
            </p>
            <div className="flex gap-4 mt-4">
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link to="/register">Sign Up Now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col p-4 bg-orange-50 rounded-lg">
                  <ShoppingCartIcon className="h-8 w-8 text-orange-600 mb-2" />
                  <h3 className="font-semibold mb-1">Order Food</h3>
                  <p className="text-sm text-gray-600">Pre-order meals or quick canteen service</p>
                </div>
                <div className="flex flex-col p-4 bg-blue-50 rounded-lg">
                  <CreditCardIcon className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold mb-1">Digital Payments</h3>
                  <p className="text-sm text-gray-600">Cashless transactions with mess card</p>
                </div>
                <div className="flex flex-col p-4 bg-green-50 rounded-lg">
                  <CalendarIcon className="h-8 w-8 text-green-600 mb-2" />
                  <h3 className="font-semibold mb-1">Meal Schedule</h3>
                  <p className="text-sm text-gray-600">View weekly meal plans in advance</p>
                </div>
                <div className="flex flex-col p-4 bg-purple-50 rounded-lg">
                  <ClockIcon className="h-8 w-8 text-purple-600 mb-2" />
                  <h3 className="font-semibold mb-1">Real-time Updates</h3>
                  <p className="text-sm text-gray-600">Get notified when your food is ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              A Complete Food Management Solution
            </h2>
            <p className="text-gray-600 md:text-lg max-w-[700px]">
              Our platform streamlines all aspects of campus food services for students, staff, and mess administrators.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-start space-y-3 bg-white p-6 rounded-xl border hover-scale card-shadow">
              <div className="rounded-lg bg-orange-100 p-3">
                <ShoppingCartIcon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Smart Ordering</h3>
              <p className="text-gray-600">
                Order food ahead of time, customize your meals, and skip the long lines.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Pre-order meals for pickup</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Special dietary preferences</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Order notifications</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-start space-y-3 bg-white p-6 rounded-xl border hover-scale card-shadow">
              <div className="rounded-lg bg-blue-100 p-3">
                <CreditCardIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Digital Mess Card</h3>
              <p className="text-gray-600">
                Manage your mess card balance, add funds, and track your spending.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Digital wallet integration</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Transaction history</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Instant money transfers</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-start space-y-3 bg-white p-6 rounded-xl border hover-scale card-shadow">
              <div className="rounded-lg bg-green-100 p-3">
                <CalendarIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Meal Planning</h3>
              <p className="text-gray-600">
                View upcoming meals, nutritional information, and plan your week.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Weekly meal schedules</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Nutritional information</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Special event meals</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-start space-y-3 bg-white p-6 rounded-xl border hover-scale card-shadow">
              <div className="rounded-lg bg-purple-100 p-3">
                <ClockIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Tracking</h3>
              <p className="text-gray-600">
                Get notifications when your order is ready or when there are menu changes.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Order status updates</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Menu change alerts</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Special offers notifications</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-start space-y-3 bg-white p-6 rounded-xl border hover-scale card-shadow">
              <div className="rounded-lg bg-red-100 p-3">
                <UtensilsIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Mess Management</h3>
              <p className="text-gray-600">
                For staff: Efficiently manage orders, inventory, and menu planning.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Order management system</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Inventory tracking</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Analytics and reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-start space-y-3 bg-white p-6 rounded-xl border hover-scale card-shadow">
              <div className="rounded-lg bg-yellow-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-yellow-600"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M6 8h1a4 4 0 1 1 0 8H6"></path>
                  <line x1="2" y1="8" x2="22" y2="8"></line>
                  <line x1="2" y1="16" x2="22" y2="16"></line>
                  <path d="M8 8v8"></path>
                  <path d="M16 8v8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Customizable Roles</h3>
              <p className="text-gray-600">
                Different user types have access to different features of the platform.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Student accounts</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Staff accounts</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  <span>Mess administrator accounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Transform Your Campus Food Experience?
            </h2>
            <p className="md:text-lg max-w-[700px] text-orange-100">
              Join thousands of students and staff already using FoodFlow Campus. No more waiting in lines or carrying cash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Link to="/register">Create Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-500">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-semibold text-lg text-orange-600 mb-4">
                <UtensilsIcon className="h-5 w-5" />
                <span>FoodFlow Campus</span>
              </div>
              <p className="text-sm text-gray-600">
                Streamlining campus food services for a better dining experience.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-600">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">Features</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-600">Help Center</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">FAQs</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">Tutorials</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-600">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 mt-8 pt-6">
            <p className="text-sm text-gray-600">
              © 2023 FoodFlow Campus. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
