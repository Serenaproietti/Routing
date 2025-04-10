import { Link } from "wouter";
import { Settings, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface NavigationItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface SidebarProps {
  navigationItems: NavigationItem[];
  currentPath: string;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ navigationItems, currentPath, isOpen, onClose }: SidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col w-64 bg-primary text-white transition-all duration-300 ease-in-out fixed inset-y-0 left-0 z-30"
        >
          <div className="flex items-center justify-between p-4 border-b border-primary-hover">
            <h1 className="text-xl font-bold">Logistica Pro</h1>
            <button
              onClick={onClose}
              className="lg:hidden text-white focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>
                    <div
                      className={`flex items-center px-4 py-3 text-white rounded-lg transition-colors cursor-pointer ${
                        currentPath === item.path
                          ? "bg-[#c97e17]"
                          : "hover:bg-[#c97e17]"
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-2 mt-8">
              <Link href="/impostazioni">
                <div
                  className={`flex items-center px-4 py-3 text-white rounded-lg transition-colors cursor-pointer ${
                    currentPath === "/impostazioni"
                      ? "bg-[#c97e17]"
                      : "hover:bg-[#c97e17]"
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span className="ml-3">Impostazioni</span>
                </div>
              </Link>
            </div>
          </nav>
          <div className="p-4 border-t border-primary-hover">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold">
                UP
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Utente Pro</p>
                <p className="text-xs opacity-75">Amministratore</p>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
