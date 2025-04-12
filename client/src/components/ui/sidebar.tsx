import { Link } from "wouter";
import { Settings, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoImage from "../../assets/logo.png";
import maskPattern from "../../assets/Mask group-7.png";

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
          className="flex flex-col w-64 bg-[#ED991D] text-white transition-all duration-300 ease-in-out fixed top-0 bottom-0 left-0 z-30"
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              backgroundImage: `url(${maskPattern})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.6,
              width: '100%',
              height: '100%'
            }}
          />

          <div className="relative z-10 flex items-center justify-between p-4 border-b border-white/10">
            <div className="h-10 flex items-center">
              <img src={logoImage} alt="Ninja Engineering" className="h-full" />
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-white focus:outline-none hover:text-white/80"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="relative z-10 flex-1 overflow-y-auto py-4 [&_*]:text-shadow-sm">
            <ul className="space-y-1 px-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>
                    <div
                      className={`flex items-center px-4 py-3 text-white rounded-lg transition-colors cursor-pointer ${
                        currentPath === item.path
                          ? "bg-white/10"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-2 mt-auto pt-52">
              <Link href="/impostazioni">
                <div
                  className={`flex items-center px-4 py-3 text-white rounded-lg transition-colors cursor-pointer ${
                    currentPath === "/impostazioni"
                      ? "bg-white/10"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span className="ml-3">Impostazioni</span>
                </div>
              </Link>
            </div>
          </nav>

          <div className="relative z-10 p-4 border-t border-white/10">
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
