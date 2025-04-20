
import { AdminLayout } from "@/components/layout/admin-layout";
import { DataTable, StatusBadge } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Filter, PackagePlus, Trash } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: "P1001",
    title: "Crystal Embellished Wedding Gown",
    code: "WG-CEB-001",
    category: "Dresses",
    subcategory: "Wedding Gowns",
    vendorPrice: "$850",
    sellingPrice: "$1,250",
    vendor: "Elegant Bridal",
    status: "Active",
    stock: 8,
  },
  {
    id: "P1002",
    title: "Silk Bridesmaid Dress - Rose",
    code: "BD-SLK-002",
    category: "Dresses",
    subcategory: "Bridesmaid Dresses",
    vendorPrice: "$280",
    sellingPrice: "$450",
    vendor: "Elegant Bridal",
    status: "Active",
    stock: 15,
  },
  {
    id: "P1003",
    title: "Floral Centerpiece Arrangement",
    code: "DEC-FCA-003",
    category: "Decor",
    subcategory: "Centerpieces",
    vendorPrice: "$120",
    sellingPrice: "$200",
    vendor: "Floral Fantasy",
    status: "Active",
    stock: 25,
  },
  {
    id: "P1004",
    title: "Crystal Chandelier Rental",
    code: "DEC-CCR-004",
    category: "Decor",
    subcategory: "Lighting",
    vendorPrice: "$350",
    sellingPrice: "$500",
    vendor: "Divine Decor",
    status: "Active",
    stock: 5,
  },
  {
    id: "P1005",
    title: "Pearl Hair Accessories Set",
    code: "ACC-PHA-005",
    category: "Accessories",
    subcategory: "Hair Accessories",
    vendorPrice: "$65",
    sellingPrice: "$110",
    vendor: "Couture Creations",
    status: "Low Stock",
    stock: 2,
  },
  {
    id: "P1006",
    title: "Wedding Cake - 3 Tier Classic",
    code: "CAT-WCT-006",
    category: "Catering",
    subcategory: "Cakes",
    vendorPrice: "$320",
    sellingPrice: "$450",
    vendor: "Sweetly Baked",
    status: "Inactive",
    stock: 0,
  },
];

export default function ProductManagement() {
  return (
    <AdminLayout title="Product Management" subtitle="Manage product listings and inventory">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Product Catalog</h2>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-1">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </Button>
            <Button className="gap-1">
              <PackagePlus className="h-4 w-4 mr-1" />
              Add New Product
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="lowstock">Low Stock</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <DataTable 
              data={products}
              columns={[
                { header: "Product Code", accessorKey: "code" },
                { header: "Title", accessorKey: "title", sortable: true },
                { header: "Category", 
                  accessorKey: "category",
                  cell: (row) => (
                    <div>
                      <div>{row.category}</div>
                      <div className="text-xs text-muted-foreground">{row.subcategory}</div>
                    </div>
                  )
                },
                { 
                  header: "Price", 
                  accessorKey: "sellingPrice",
                  cell: (row) => (
                    <div>
                      <div>{row.sellingPrice}</div>
                      <div className="text-xs text-muted-foreground">Cost: {row.vendorPrice}</div>
                    </div>
                  )
                },
                { header: "Vendor", accessorKey: "vendor" },
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
              searchPlaceholder="Search products..."
            />
          </TabsContent>
          
          <TabsContent value="active" className="space-y-4">
            <DataTable 
              data={products.filter(p => p.status === 'Active')}
              columns={[
                { header: "Product Code", accessorKey: "code" },
                { header: "Title", accessorKey: "title", sortable: true },
                { header: "Category", 
                  accessorKey: "category",
                  cell: (row) => (
                    <div>
                      <div>{row.category}</div>
                      <div className="text-xs text-muted-foreground">{row.subcategory}</div>
                    </div>
                  )
                },
                { 
                  header: "Price", 
                  accessorKey: "sellingPrice",
                  cell: (row) => (
                    <div>
                      <div>{row.sellingPrice}</div>
                      <div className="text-xs text-muted-foreground">Cost: {row.vendorPrice}</div>
                    </div>
                  )
                },
                { header: "Vendor", accessorKey: "vendor" },
                { header: "Stock", accessorKey: "stock" },
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
              searchPlaceholder="Search active products..."
            />
          </TabsContent>
          
          <TabsContent value="lowstock" className="space-y-4">
            <DataTable 
              data={products.filter(p => p.status === 'Low Stock')}
              columns={[
                { header: "Product Code", accessorKey: "code" },
                { header: "Title", accessorKey: "title", sortable: true },
                { header: "Category", accessorKey: "category" },
                { 
                  header: "Price", 
                  accessorKey: "sellingPrice",
                  cell: (row) => (
                    <div>
                      <div>{row.sellingPrice}</div>
                      <div className="text-xs text-muted-foreground">Cost: {row.vendorPrice}</div>
                    </div>
                  )
                },
                { header: "Vendor", accessorKey: "vendor" },
                { header: "Stock", accessorKey: "stock" },
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
              searchPlaceholder="Search low stock products..."
            />
          </TabsContent>
          
          <TabsContent value="inactive" className="space-y-4">
            <DataTable 
              data={products.filter(p => p.status === 'Inactive')}
              columns={[
                { header: "Product Code", accessorKey: "code" },
                { header: "Title", accessorKey: "title", sortable: true },
                { header: "Category", accessorKey: "category" },
                { 
                  header: "Price", 
                  accessorKey: "sellingPrice",
                  cell: (row) => (
                    <div>
                      <div>{row.sellingPrice}</div>
                      <div className="text-xs text-muted-foreground">Cost: {row.vendorPrice}</div>
                    </div>
                  )
                },
                { header: "Vendor", accessorKey: "vendor" },
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
              searchPlaceholder="Search inactive products..."
            />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
