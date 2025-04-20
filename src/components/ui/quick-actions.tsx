
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { Box, Calendar, FilePlus, PlusCircle, Settings, UserPlus } from "lucide-react";

interface QuickActionsProps {
  className?: string;
}

export function QuickActions({ className }: QuickActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className={cn("gap-1", className)}
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          Quick Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <FilePlus className="h-4 w-4 mr-2" />
          <span>Add New Product</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <UserPlus className="h-4 w-4 mr-2" />
          <span>Add New Vendor</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Calendar className="h-4 w-4 mr-2" />
          <span>Create New Booking</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="h-4 w-4 mr-2" />
          <span>System Settings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
