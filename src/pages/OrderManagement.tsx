
import { AdminLayout } from "@/components/layout/admin-layout";
import { DataTable, StatusBadge } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Eye, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "approve" | "reject" | "view";
  children: React.ReactNode;
}

const ActionButton = ({ variant = "view", children, className, ...props }: ActionButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "gap-1 h-8",
        variant === "approve" && "text-green-600 hover:text-green-700 hover:bg-green-50",
        variant === "reject" && "text-red-600 hover:text-red-700 hover:bg-red-50",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

const pendingOrders = [
  { 
    id: "WE12345", 
    customer: "Emma Johnson", 
    products: "3 items", 
    total: "$1,250", 
    date: "Apr 15, 2025", 
    status: "Pending Approval",
    vendor: "Elegant Bridal",
    deliveryDate: "Jun 20, 2025",
  },
  { 
    id: "WE12346", 
    customer: "Liam Smith", 
    products: "2 items", 
    total: "$850", 
    date: "Apr 16, 2025", 
    status: "Pending Approval",
    vendor: "Divine Decor",
    deliveryDate: "Jun 15, 2025",
  },
  { 
    id: "WE12347", 
    customer: "Olivia Davis", 
    products: "5 items", 
    total: "$1,750", 
    date: "Apr 16, 2025", 
    status: "Pending Approval",
    vendor: "Floral Fantasy",
    deliveryDate: "May 30, 2025",
  },
  { 
    id: "WE12348", 
    customer: "Noah Wilson", 
    products: "1 item", 
    total: "$450", 
    date: "Apr 17, 2025", 
    status: "Pending Approval",
    vendor: "Couture Creations",
    deliveryDate: "Jun 5, 2025",
  },
];

const approvedOrders = [
  { 
    id: "WE12340", 
    customer: "Sophia Miller", 
    products: "4 items", 
    total: "$1,850", 
    date: "Apr 10, 2025", 
    status: "Processing",
    vendor: "Elegant Bridal",
    deliveryDate: "May 25, 2025",
  },
  { 
    id: "WE12341", 
    customer: "James Brown", 
    products: "2 items", 
    total: "$950", 
    date: "Apr 11, 2025", 
    status: "Shipped",
    vendor: "Divine Decor",
    deliveryDate: "May 20, 2025",
  },
  { 
    id: "WE12342", 
    customer: "Charlotte Taylor", 
    products: "3 items", 
    total: "$1,250", 
    date: "Apr 12, 2025", 
    status: "Processing",
    vendor: "Floral Fantasy",
    deliveryDate: "May 22, 2025",
  },
  { 
    id: "WE12343", 
    customer: "Benjamin Davis", 
    products: "1 item", 
    total: "$550", 
    date: "Apr 13, 2025", 
    status: "Delivered",
    vendor: "Sweetly Baked",
    deliveryDate: "Apr 30, 2025",
  },
];

export default function OrderManagement() {
  return (
    <AdminLayout title="Order Management" subtitle="Process orders and track deliveries">
      <div className="space-y-6">
        <Tabs defaultValue="approval" className="space-y-4">
          <TabsList>
            <TabsTrigger value="approval">Waiting For Approval</TabsTrigger>
            <TabsTrigger value="pending">Pending Orders</TabsTrigger>
          </TabsList>
          
          <TabsContent value="approval" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Orders Requiring Approval</h2>
              <div className="text-sm text-muted-foreground">
                Displaying {pendingOrders.length} pending approvals
              </div>
            </div>
          
            <DataTable 
              data={pendingOrders}
              columns={[
                { header: "Order ID", accessorKey: "id" },
                { header: "Customer", accessorKey: "customer" },
                { header: "Items", accessorKey: "products" },
                { header: "Total", accessorKey: "total" },
                { header: "Vendor", accessorKey: "vendor" },
                { header: "Order Date", accessorKey: "date" },
                { 
                  header: "Status", 
                  accessorKey: "status",
                  cell: (row) => <StatusBadge status={row.status} />
                },
                {
                  header: "Actions",
                  accessorKey: "id",
                  cell: (row) => (
                    <div className="flex gap-1">
                      <ActionButton variant="approve">
                        <Check className="h-4 w-4" />
                        Approve
                      </ActionButton>
                      <ActionButton variant="reject">
                        <X className="h-4 w-4" />
                        Reject
                      </ActionButton>
                      <ActionButton>
                        <Eye className="h-4 w-4" />
                        View
                      </ActionButton>
                    </div>
                  )
                }
              ]}
              searchable
              searchPlaceholder="Search orders..."
            />
          </TabsContent>
          
          <TabsContent value="pending" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Active Orders</h2>
              <div className="text-sm text-muted-foreground">
                Displaying {approvedOrders.length} active orders
              </div>
            </div>
            
            <DataTable 
              data={approvedOrders}
              columns={[
                { header: "Order ID", accessorKey: "id" },
                { header: "Customer", accessorKey: "customer" },
                { header: "Items", accessorKey: "products" },
                { header: "Total", accessorKey: "total" },
                { header: "Vendor", accessorKey: "vendor" },
                { header: "Delivery", accessorKey: "deliveryDate" },
                { 
                  header: "Status", 
                  accessorKey: "status",
                  cell: (row) => <StatusBadge status={row.status} />
                },
                {
                  header: "Actions",
                  accessorKey: "id",
                  cell: (row) => (
                    <Button variant="ghost" size="sm" className="gap-1 h-8">
                      <FileText className="h-4 w-4" />
                      Details
                    </Button>
                  )
                }
              ]}
              searchable
              searchPlaceholder="Search orders..."
            />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
