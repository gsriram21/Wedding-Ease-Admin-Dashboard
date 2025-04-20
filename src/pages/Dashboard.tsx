
import { AdminLayout } from "@/components/layout/admin-layout";
import { ActionCard } from "@/components/dashboard/action-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { DataTable, StatusBadge } from "@/components/ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, Box, Calendar, CheckSquare, DollarSign, PackageOpen, ShoppingCart, Users } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const salesData = [
  { month: "Jan", sales: 5000 },
  { month: "Feb", sales: 7500 },
  { month: "Mar", sales: 6800 },
  { month: "Apr", sales: 9000 },
  { month: "May", sales: 12000 },
  { month: "Jun", sales: 10800 },
  { month: "Jul", sales: 15000 },
];

const categoryData = [
  { name: "Dresses", value: 35 },
  { name: "Decor", value: 25 },
  { name: "Accessories", value: 20 },
  { name: "Flowers", value: 15 },
  { name: "Catering", value: 5 },
];

const pendingOrders = [
  { id: "WE12345", customer: "Emma Johnson", items: 3, total: "$1,250", date: "Apr 15, 2025", status: "Pending" },
  { id: "WE12346", customer: "Liam Smith", items: 2, total: "$850", date: "Apr 16, 2025", status: "Pending" },
  { id: "WE12347", customer: "Olivia Davis", items: 5, total: "$1,750", date: "Apr 16, 2025", status: "Pending" },
  { id: "WE12348", customer: "Noah Wilson", items: 1, total: "$450", date: "Apr 17, 2025", status: "Pending" },
];

const topVendors = [
  { name: "Elegant Bridal", sales: "$15,750", products: 45, rating: 4.8, status: "Active" },
  { name: "Divine Decor", sales: "$12,900", products: 38, rating: 4.7, status: "Active" },
  { name: "Floral Fantasy", sales: "$10,250", products: 30, rating: 4.9, status: "Active" },
  { name: "Couture Creations", sales: "$9,500", products: 25, rating: 4.6, status: "Active" },
];

export default function Dashboard() {
  return (
    <AdminLayout title="Dashboard" subtitle="Welcome to your Wedding Ease Admin Portal">
      <div className="space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Orders" 
            value="1,254" 
            icon={<ShoppingCart size={20} />} 
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard 
            title="Pending Approvals" 
            value="28" 
            icon={<CheckSquare size={20} />} 
            trend={{ value: 5, isPositive: false }}
          />
          <StatCard 
            title="Active Vendors" 
            value="86" 
            icon={<Users size={20} />} 
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard 
            title="Monthly Revenue" 
            value="$45,290" 
            icon={<DollarSign size={20} />} 
            trend={{ value: 15, isPositive: true }}
          />
        </div>

        {/* Quick Actions Row */}
        <div>
          <h2 className="text-lg font-medium mb-3">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ActionCard 
              title="Add New Product" 
              description="Create and publish a new product listing" 
              icon={Box}
            />
            <ActionCard 
              title="Add New Vendor" 
              description="Onboard a new vendor to the platform" 
              icon={Users}
            />
            <ActionCard 
              title="Create Booking" 
              description="Schedule a new styler consultation" 
              icon={Calendar}
            />
            <ActionCard 
              title="View Reports" 
              description="Access detailed analytics and reports" 
              icon={BarChart2}
            />
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Sales Overview" description="Monthly sales data">
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip formatter={(value) => [`$${value}`, 'Sales']} />
                  <Area 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="hsl(var(--primary))" 
                    fillOpacity={1} 
                    fill="url(#colorSales)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Product Categories" description="Sales by category">
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  <Legend />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* Tabs for Orders and Vendors */}
        <Tabs defaultValue="orders" className="space-y-4">
          <TabsList>
            <TabsTrigger value="orders">Pending Orders</TabsTrigger>
            <TabsTrigger value="vendors">Top Vendors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="space-y-4">
            <DataTable 
              data={pendingOrders}
              columns={[
                { header: "Order ID", accessorKey: "id" },
                { header: "Customer", accessorKey: "customer" },
                { header: "Items", accessorKey: "items" },
                { header: "Total", accessorKey: "total" },
                { header: "Date", accessorKey: "date" },
                { 
                  header: "Status", 
                  accessorKey: "status",
                  cell: (row) => <StatusBadge status={row.status} />
                },
              ]}
              searchable
              searchPlaceholder="Search orders..."
            />
          </TabsContent>
          
          <TabsContent value="vendors" className="space-y-4">
            <DataTable 
              data={topVendors}
              columns={[
                { header: "Vendor Name", accessorKey: "name" },
                { header: "Total Sales", accessorKey: "sales" },
                { header: "Products", accessorKey: "products" },
                { header: "Rating", accessorKey: "rating" },
                { 
                  header: "Status", 
                  accessorKey: "status",
                  cell: (row) => <StatusBadge status={row.status} />
                },
              ]}
              searchable
              searchPlaceholder="Search vendors..."
            />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
