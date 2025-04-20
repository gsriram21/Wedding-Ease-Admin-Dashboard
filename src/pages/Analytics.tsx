
import { AdminLayout } from "@/components/layout/admin-layout";
import { ChartCard } from "@/components/dashboard/chart-card";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Cell, 
  Legend, 
  Line,
  LineChart, 
  Pie, 
  PieChart,
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";

const vendorSalesData = [
  { name: "Elegant Bridal", sales: 15750 },
  { name: "Divine Decor", sales: 12900 },
  { name: "Floral Fantasy", sales: 10250 },
  { name: "Couture Creations", sales: 9500 },
  { name: "Sweetly Baked", sales: 5200 },
];

const regionData = [
  { name: "New York", value: 35 },
  { name: "Los Angeles", value: 25 },
  { name: "Chicago", value: 15 },
  { name: "Miami", value: 12 },
  { name: "Dallas", value: 8 },
  { name: "Other", value: 5 },
];

const COLORS = ['#e9a296', '#f0b8a0', '#f7cda9', '#fadbb3', '#ecd0c4', '#dbc6c2'];

const monthlyData = [
  { month: "Jan", sales: 12000, orders: 124 },
  { month: "Feb", sales: 15500, orders: 145 },
  { month: "Mar", sales: 18000, orders: 165 },
  { month: "Apr", sales: 22500, orders: 192 },
  { month: "May", sales: 24000, orders: 210 },
  { month: "Jun", sales: 27500, orders: 230 },
  { month: "Jul", sales: 30000, orders: 256 },
  { month: "Aug", sales: 32500, orders: 275 },
  { month: "Sep", sales: 35000, orders: 290 },
  { month: "Oct", sales: 37500, orders: 310 },
  { month: "Nov", sales: 40000, orders: 330 },
  { month: "Dec", sales: 45000, orders: 360 },
];

const productCategoryData = [
  { category: "Dresses", sales: 25000 },
  { category: "Decor", sales: 18000 },
  { category: "Accessories", sales: 12000 },
  { category: "Flowers", sales: 9000 },
  { category: "Catering", sales: 6000 },
];

export default function Analytics() {
  return (
    <AdminLayout title="Analytics & Reporting" subtitle="Track sales, performance, and vendor metrics">
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Monthly Revenue & Orders" description="Annual trend analysis">
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={(value, name) => {
                    if (name === 'sales') return [`$${value}`, 'Revenue'];
                    return [value, 'Orders'];
                  }} />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="sales"
                    stroke="hsl(var(--primary))"
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="hsl(var(--info))" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Regional Distribution" description="Orders by location">
            <div className="p-4 h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Top Vendors" description="Revenue by vendor">
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={vendorSalesData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 90, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    scale="band" 
                  />
                  <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                  <Legend />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}>
                    {vendorSalesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Sales by Category" description="Product category performance">
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={productCategoryData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="category" />
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
        </div>
      </div>
    </AdminLayout>
  );
}
