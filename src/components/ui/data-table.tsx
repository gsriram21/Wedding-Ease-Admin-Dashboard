
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DataTableColumn<T> {
  header: string;
  accessorKey: keyof T;
  cell?: (item: T) => ReactNode;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  className?: string;
}

export function DataTable<T>({ 
  data, 
  columns, 
  searchable = false, 
  searchPlaceholder = "Search...", 
  className 
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: 'asc' | 'desc' | null;
  }>({
    key: null,
    direction: null
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Handle sorting
  const handleSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc';
      } else if (sortConfig.direction === 'desc') {
        direction = null;
      }
    }
    
    setSortConfig({
      key: direction ? key : null,
      direction
    });
  };

  // Filter data based on search query
  const filteredData = searchable && searchQuery
    ? data.filter(item => {
        return Object.values(item).some(value => 
          value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
    : data;

  // Sort data if needed
  const sortedData = sortConfig.key && sortConfig.direction
    ? [...filteredData].sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];
        
        if (aValue === bValue) return 0;
        
        const result = aValue < bValue ? -1 : 1;
        return sortConfig.direction === 'asc' ? result : -result;
      })
    : filteredData;

  return (
    <div className={cn("space-y-4", className)}>
      {searchable && (
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index} className={column.sortable ? "cursor-pointer" : ""}>
                  <div 
                    className="flex items-center"
                    onClick={column.sortable ? () => handleSort(column.accessorKey) : undefined}
                  >
                    {column.header}
                    {column.sortable && sortConfig.key === column.accessorKey && (
                      <span className="ml-1">
                        {sortConfig.direction === 'asc' ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-6 text-muted-foreground">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((item, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex}>
                      {column.cell ? column.cell(item) : item[column.accessorKey] as ReactNode}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'approved':
      case 'completed':
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case 'pending':
      case 'waiting':
      case 'in progress':
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case 'inactive':
      case 'rejected':
      case 'cancelled':
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200";
    }
  };

  return (
    <Badge className={cn("font-normal", getStatusColor(status))}>
      {status}
    </Badge>
  );
}
