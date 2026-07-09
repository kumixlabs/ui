import { useState } from "react";
import {
  type ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  DataGrid,
  DataGridColumnHeader,
  DataGridContainer,
  DataGridPagination,
  DataGridTable,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
}

const users: User[] = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: i % 2 === 0 ? "Engineer" : "Designer",
  status: i % 3 === 0 ? "Active" : "Invited",
}));

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataGridColumnHeader column={column} title="Name" />,
  },
  {
    accessorKey: "role",
    header: ({ column }) => <DataGridColumnHeader column={column} title="Role" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataGridColumnHeader column={column} title="Status" />,
  },
];

export function DataGridPage() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const table = useReactTable({
    columns,
    data: users,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Page title="DataGrid" description="TanStack Table-powered grid with pagination.">
      <Sample title="Basic grid">
        <DataGrid table={table} recordCount={users.length} className="w-full">
          <DataGridContainer>
            <DataGridTable />
          </DataGridContainer>
          <DataGridPagination />
        </DataGrid>
      </Sample>
    </Page>
  );
}
