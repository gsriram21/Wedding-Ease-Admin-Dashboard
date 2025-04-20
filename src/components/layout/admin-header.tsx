
import { NotificationDropdown } from "@/components/ui/notification-dropdown";
import { QuickActions } from "@/components/ui/quick-actions";
import { User } from "lucide-react";

interface AdminHeaderProps {
  title?: string;
  subtitle?: string;
}

export function AdminHeader({ title, subtitle }: AdminHeaderProps) {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-card">
      <div>
        {title && <h1 className="text-xl font-semibold text-foreground">{title}</h1>}
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-4">
        {/* Quick Actions */}
        <QuickActions />
        
        {/* Notifications */}
        <NotificationDropdown />
        
        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <User size={20} className="text-primary" />
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-medium">Admin User</div>
            <div className="text-xs text-muted-foreground">admin@weddingease.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
