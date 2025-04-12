import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpen, 
  Calendar, 
  Map, 
  Package, 
  Truck, 
  MapPin, 
  Users, 
  CalendarDays,
  Settings,
  LogOut,
  User
} from "lucide-react";
import unionPattern from "@/assets/Union.png";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="relative h-screen border-r flex flex-col bg-[#ED991D] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-[1]" 
        style={{ 
          backgroundImage: `url(${unionPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9
        }}
      />
      
      {/* User Info */}
      <div className="relative z-[2] p-6 flex items-center gap-3 text-white">
        <User className="h-8 w-8" />
        <div>
          <p className="font-semibold text-lg">LUCA</p>
          <p>PERACCINI</p>
        </div>
      </div>

      {/* Main Navigation */}
      <ScrollArea className="flex-1 relative z-[2]">
        <div className="p-3 space-y-1">
          <Link href="/dashboard">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-white/10",
                pathname === "/dashboard" && "bg-white/10"
              )}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              dashboard
            </Button>
          </Link>
          <Link href="/calendario">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-white/10",
                pathname === "/calendario" && "bg-white/10"
              )}
            >
              <Calendar className="mr-2 h-5 w-5" />
              calendario
            </Button>
          </Link>
          <Link href="/percorsi">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-white/10",
                pathname === "/percorsi" && "bg-white/10"
              )}
            >
              <Map className="mr-2 h-5 w-5" />
              percorsi
            </Button>
          </Link>
          <Link href="/spedizioni">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-white/10",
                pathname === "/spedizioni" && "bg-white/10"
              )}
            >
              <Package className="mr-2 h-5 w-5" />
              spedizioni
            </Button>
          </Link>
          <Link href="/flotte">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-white/10",
                pathname === "/flotte" && "bg-white/10"
              )}
            >
              <Truck className="mr-2 h-5 w-5" />
              flotte
            </Button>
          </Link>
          <Link href="/sedi">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-white/10",
                pathname === "/sedi" && "bg-white/10"
              )}
            >
              <MapPin className="mr-2 h-5 w-5" />
              sedi
            </Button>
          </Link>
          <Link href="/personale">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-white/10",
                pathname === "/personale" && "bg-white/10"
              )}
            >
              <Users className="mr-2 h-5 w-5" />
              personale
            </Button>
          </Link>
          <Link href="/turni">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-white hover:text-white hover:bg-white/10",
                pathname === "/turni" && "bg-white/10"
              )}
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              turni
            </Button>
          </Link>
        </div>
      </ScrollArea>

      {/* Bottom Actions */}
      <div className="relative z-[1] p-3 mt-20 border-t border-white/10">
        <Link href="/impostazioni">
          <Button 
            variant="ghost" 
            className={cn(
              "w-full justify-start text-white hover:text-white hover:bg-white/10",
              pathname === "/impostazioni" && "bg-white/10"
            )}
          >
            <Settings className="mr-2 h-5 w-5" />
            impostazioni
          </Button>
        </Link>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-white hover:text-white hover:bg-white/10"
        >
          <LogOut className="mr-2 h-5 w-5" />
          logout
        </Button>
      </div>
    </div>
  );
}
