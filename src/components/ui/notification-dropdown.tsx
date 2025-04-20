
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Check, Clock, PackageOpen, ShoppingCart, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BadgeCount } from "./badge-count";
import { Button } from "./button";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "order" | "product" | "vendor" | "styler" | "system";
  read: boolean;
}

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "New Order Received",
      message: "Order #WE12345 has been placed and requires your approval",
      time: "5 minutes ago",
      type: "order",
      read: false,
    },
    {
      id: "2",
      title: "Vendor Update",
      message: "Fashion Styler has updated their catalog with 5 new products",
      time: "2 hours ago",
      type: "vendor",
      read: false,
    },
    {
      id: "3",
      title: "Product Update Required",
      message: "3 products have price discrepancies that need your attention",
      time: "3 hours ago",
      type: "product",
      read: false,
    },
    {
      id: "4",
      title: "New Styler Onboarded",
      message: "Sarah Johnson has completed her profile and is ready for assignments",
      time: "1 day ago",
      type: "styler",
      read: true,
    },
    {
      id: "5",
      title: "System Update",
      message: "The system will undergo maintenance tonight at 2 AM EST",
      time: "2 days ago",
      type: "system",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "order":
        return <ShoppingCart className="h-4 w-4" />;
      case "product":
        return <PackageOpen className="h-4 w-4" />;
      case "vendor":
        return <User className="h-4 w-4" />;
      case "styler":
        return <User className="h-4 w-4" />;
      case "system":
        return <Bell className="h-4 w-4" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full text-muted-foreground hover:bg-secondary transition-colors relative">
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1">
              <BadgeCount count={unreadCount} />
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 max-h-[70vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4">
          <DropdownMenuLabel className="text-base font-normal">Notifications</DropdownMenuLabel>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-8 text-xs">
              Mark all as read
            </Button>
          )}
        </div>
        <DropdownMenuSeparator />
        <div className="p-2">
          {notifications.length === 0 ? (
            <div className="py-6 text-center text-muted-foreground">
              <p>No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div key={notification.id} className="relative">
                <DropdownMenuItem 
                  className={cn(
                    "flex items-start gap-3 p-3 cursor-default rounded-md focus:bg-accent",
                    !notification.read && "bg-accent/40"
                  )}
                >
                  <div className={cn(
                    "rounded-full p-2 mt-0.5 flex-shrink-0",
                    notification.type === "order" && "bg-blue-100 text-blue-600",
                    notification.type === "product" && "bg-green-100 text-green-600",
                    notification.type === "vendor" && "bg-purple-100 text-purple-600",
                    notification.type === "styler" && "bg-yellow-100 text-yellow-600",
                    notification.type === "system" && "bg-gray-100 text-gray-600",
                  )}>
                    {getIcon(notification.type)}
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.message}</p>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                  {!notification.read && (
                    <button 
                      onClick={() => markAsRead(notification.id)}
                      className="absolute top-3 right-3 p-1 rounded-full hover:bg-background text-muted-foreground"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  )}
                </DropdownMenuItem>
              </div>
            ))
          )}
        </div>
        <DropdownMenuSeparator />
        <div className="p-2">
          <DropdownMenuItem className="justify-center" asChild>
            <a href="/notifications">View all notifications</a>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
