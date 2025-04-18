
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MenuPage = () => {
  const menuCategories = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "snacks", label: "Snacks" },
  ];

  const menuItems = {
    breakfast: [
      { name: "Masala Dosa", price: "₹40", isVeg: true, calories: "320" },
      { name: "Poha", price: "₹25", isVeg: true, calories: "250" },
      { name: "Bread Omelette", price: "₹35", isVeg: false, calories: "280" },
    ],
    lunch: [
      { name: "Thali Special", price: "₹80", isVeg: true, calories: "650" },
      { name: "Chicken Biryani", price: "₹120", isVeg: false, calories: "750" },
      { name: "Dal Makhani", price: "₹70", isVeg: true, calories: "450" },
    ],
    dinner: [
      { name: "Paneer Butter Masala", price: "₹90", isVeg: true, calories: "550" },
      { name: "Fish Curry", price: "₹110", isVeg: false, calories: "480" },
      { name: "Roti Set", price: "₹40", isVeg: true, calories: "300" },
    ],
    snacks: [
      { name: "Samosa", price: "₹15", isVeg: true, calories: "180" },
      { name: "French Fries", price: "₹50", isVeg: true, calories: "250" },
      { name: "Chicken Sandwich", price: "₹60", isVeg: false, calories: "320" },
    ],
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Today's Menu</h1>
        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="w-full sm:w-auto flex flex-wrap justify-start gap-2 mb-6">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[category.id].map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.calories} cal</p>
                        </div>
                        <Badge variant={item.isVeg ? "default" : "destructive"}>
                          {item.isVeg ? "Veg" : "Non-veg"}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-orange-600">
                          {item.price}
                        </span>
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MenuPage;
