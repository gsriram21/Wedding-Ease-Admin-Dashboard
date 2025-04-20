
import { AdminLayout } from "@/components/layout/admin-layout";
import { DataTable, StatusBadge } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash, UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const vendors = [
  {
    id: "1",
    name: "Elegant Bridal",
    email: "contact@elegantbridal.com",
    business: "Elegant Bridal Boutique",
    city: "New York",
    state: "NY",
    status: "Active",
    level: "Premium",
    products: 45,
    sales: "$15,750",
  },
  {
    id: "2",
    name: "Divine Decor",
    email: "info@divinedecor.com",
    business: "Divine Wedding Decor",
    city: "Los Angeles",
    state: "CA",
    status: "Active",
    level: "Premium",
    products: 38,
    sales: "$12,900",
  },
  {
    id: "3",
    name: "Floral Fantasy",
    email: "orders@floralfantasy.com",
    business: "Floral Fantasy Designs",
    city: "Chicago",
    state: "IL",
    status: "Active",
    level: "Standard",
    products: 30,
    sales: "$10,250",
  },
  {
    id: "4",
    name: "Couture Creations",
    email: "hello@couturecreations.com",
    business: "Couture Wedding Creations",
    city: "Miami",
    state: "FL",
    status: "Active",
    level: "Standard",
    products: 25,
    sales: "$9,500",
  },
  {
    id: "5",
    name: "Sweetly Baked",
    email: "orders@sweetlybaked.com",
    business: "Sweetly Baked Cakes",
    city: "Dallas",
    state: "TX",
    status: "Inactive",
    level: "Basic",
    products: 15,
    sales: "$5,200",
  },
];

export default function VendorManagement() {
  return (
    <AdminLayout title="Vendor Management" subtitle="Manage vendors and track their performance">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Vendor Directory</h2>
          <Button className="gap-1">
            <UserPlus className="h-4 w-4 mr-1" />
            Add New Vendor
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Vendors</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <DataTable 
              data={vendors}
              columns={[
                { header: "Vendor Name", accessorKey: "name", sortable: true },
                { header: "Email", accessorKey: "email" },
                { header: "Business Name", accessorKey: "business" },
                { header: "Location", 
                  accessorKey: "city",
                  cell: (row) => `${row.city}, ${row.state}`
                },
                { 
                  header: "Level", 
                  accessorKey: "level",
                  cell: (row) => {
                    const colorMap: Record<string, string> = {
                      Premium: "bg-purple-100 text-purple-800 hover:bg-purple-200",
                      Standard: "bg-blue-100 text-blue-800 hover:bg-blue-200",
                      Basic: "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    };
                    
                    return (
                      <Badge className={colorMap[row.level] || ""}>
                        {row.level}
                      </Badge>
                    );
                  }
                },
                { 
                  header: "Status", 
                  accessorKey: "status",
                  cell: (row) => <StatusBadge status={row.status} />
                },
                {
                  header: "Actions",
                  accessorKey: "id",
                  cell: (row) => (
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                }
              ]}
              searchable
              searchPlaceholder="Search vendors..."
            />
          </TabsContent>
          
          <TabsContent value="active" className="space-y-4">
            <DataTable 
              data={vendors.filter(v => v.status === 'Active')}
              columns={[
                { header: "Vendor Name", accessorKey: "name", sortable: true },
                { header: "Email", accessorKey: "email" },
                { header: "Business Name", accessorKey: "business" },
                { header: "Location", 
                  accessorKey: "city",
                  cell: (row) => `${row.city}, ${row.state}`
                },
                { 
                  header: "Level", 
                  accessorKey: "level",
                  cell: (row) => {
                    const colorMap: Record<string, string> = {
                      Premium: "bg-purple-100 text-purple-800 hover:bg-purple-200",
                      Standard: "bg-blue-100 text-blue-800 hover:bg-blue-200",
                      Basic: "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    };
                    
                    return (
                      <Badge className={colorMap[row.level] || ""}>
                        {row.level}
                      </Badge>
                    );
                  }
                },
                {
                  header: "Actions",
                  accessorKey: "id",
                  cell: (row) => (
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                }
              ]}
              searchable
              searchPlaceholder="Search active vendors..."
            />
          </TabsContent>
          
          <TabsContent value="inactive" className="space-y-4">
            <DataTable 
              data={vendors.filter(v => v.status === 'Inactive')}
              columns={[
                { header: "Vendor Name", accessorKey: "name", sortable: true },
                { header: "Email", accessorKey: "email" },
                { header: "Business Name", accessorKey: "business" },
                { header: "Location", 
                  accessorKey: "city",
                  cell: (row) => `${row.city}, ${row.state}`
                },
                {
                  header: "Actions",
                  accessorKey: "id",
                  cell: (row) => (
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                }
              ]}
              searchable
              searchPlaceholder="Search inactive vendors..."
            />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
