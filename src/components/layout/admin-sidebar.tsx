import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  ShoppingBag, 
  CalendarDays,
  MessageSquare,
  BarChart2, 
  FileText, 
  Heart,
  Image, 
  Settings, 
  LogOut,
  DollarSign
} from "lucide-react";
import { BadgeCount } from "@/components/ui/badge-count";
import { Logo } from "@/components/ui/logo";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
  badgeCount?: number;
}

function NavItem({ icon, label, to, isActive, badgeCount }: NavItemProps) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors relative group hover:bg-white/50",
        isActive 
          ? "bg-white/80 text-primary font-medium shadow-sm" 
          : "text-sidebar-foreground hover:text-primary"
      )}
    >
      <span className="flex-shrink-0 w-5 h-5">{icon}</span>
      <span className="flex-grow font-medium">{label}</span>
      {badgeCount && badgeCount > 0 && (
        <BadgeCount count={badgeCount} />
      )}
    </Link>
  );
}

export function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", to: "/", badgeCount: 0 },
    { icon: <Users size={20} />, label: "Vendor Management", to: "/vendors", badgeCount: 5 },
    { icon: <Package size={20} />, label: "Product Management", to: "/products", badgeCount: 12 },
    { icon: <ShoppingBag size={20} />, label: "Order Management", to: "/orders", badgeCount: 8 },
    { icon: <CalendarDays size={20} />, label: "Styler & Bookings", to: "/stylers", badgeCount: 0 },
    { icon: <DollarSign size={20} />, label: "Packages", to: "/packages", badgeCount: 0 },
    { icon: <MessageSquare size={20} />, label: "Inquiries", to: "/inquiries", badgeCount: 3 },
    { icon: <BarChart2 size={20} />, label: "Analytics", to: "/analytics", badgeCount: 0 },
    { icon: <FileText size={20} />, label: "Blogs", to: "/blogs", badgeCount: 0 },
    { icon: <Heart size={20} />, label: "Testimonials", to: "/testimonials", badgeCount: 0 },
    { icon: <Image size={20} />, label: "Gallery", to: "/gallery", badgeCount: 0 },
  ];

  return (
    <div className="h-screen w-64 flex flex-col bg-gradient-to-b from-secondary to-background overflow-y-auto border-r border-sidebar-border">
      {/* Logo/Brand Header */}
      <div className="flex items-center gap-3 px-4 py-5">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
          <Logo size={40} />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-display text-foreground">Wedding Ease</span>
          <span className="text-xs font-medium text-primary">Admin Portal</span>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={currentPath === item.to}
            badgeCount={item.badgeCount}
          />
        ))}
      </div>
      
      {/* Admin section */}
      <div className="px-3 py-4 border-t border-sidebar-border/50 backdrop-blur-sm">
        <div className="text-xs font-medium text-muted-foreground px-3 py-2">
          ADMIN
        </div>
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
          to="/settings"
          isActive={currentPath === "/settings"}
        />
        <div className="mt-2">
          <button className="flex w-full items-center gap-3 px-3 py-2 text-sidebar-foreground hover:bg-white/50 hover:text-primary rounded-lg transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
