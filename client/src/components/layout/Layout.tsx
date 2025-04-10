import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Sidebar from "@/components/ui/sidebar";
import { useMobile } from "@/hooks/use-mobile";
import { 
  Calendar, 
  PanelsTopLeft, 
  Truck, 
  Package, 
  Car,
  Store, 
  Users, 
  Clock, 
  Settings, 
  Bell, 
  ChevronDown,
  Menu,
  X
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { id: "dashboard", icon: <PanelsTopLeft className="h-5 w-5" />, label: "Dashboard", path: "/dashboard" },
  { id: "calendario", icon: <Calendar className="h-5 w-5" />, label: "Calendario", path: "/calendario" },
  { id: "percorsi", icon: <Truck className="h-5 w-5" />, label: "Percorsi", path: "/percorsi" },
  { id: "spedizioni", icon: <Package className="h-5 w-5" />, label: "Spedizioni", path: "/spedizioni" },
  { id: "flotte", icon: <Car className="h-5 w-5" />, label: "Flotte", path: "/flotte" },
  { id: "sedi", icon: <Store className="h-5 w-5" />, label: "Sedi", path: "/sedi" },
  { id: "personali", icon: <Users className="h-5 w-5" />, label: "Personali", path: "/personali" },
  { id: "turni", icon: <Clock className="h-5 w-5" />, label: "Turni", path: "/turni" },
];

const Layout = ({ children }: LayoutProps) => {
  const [location] = useLocation();
  const isMobile = useMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [breadcrumb, setBreadcrumb] = useState("Dashboard");

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    // Get current page based on path
    const path = location === "/" ? "/dashboard" : location;
    const currentPage = navigationItems.find(item => item.path === path) || 
                        { id: "impostazioni", label: "Impostazioni", path: "/impostazioni" };
    
    setPageTitle(currentPage.label);
    setBreadcrumb(currentPage.label);
  }, [location]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar backdrop */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        navigationItems={navigationItems}
        currentPath={location === "/" ? "/dashboard" : location}
        isOpen={sidebarOpen}
        onClose={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-0 lg:ml-64">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-500 mr-4 focus:outline-none"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <h2 className="text-2xl font-semibold text-gray-800">{pageTitle}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
              <div className="relative">
                <button className="flex items-center text-sm text-gray-700 focus:outline-none">
                  <span className="mr-2">Utente Pro</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 py-2 text-sm text-gray-500">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="font-medium">{breadcrumb}</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
