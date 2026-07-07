"use client";

import { createContext, type ReactNode, useContext } from "react";
import type { ColumnFiltersState, RowData, SortingState, Table } from "@tanstack/react-table";

import { cn } from "@kumix/utils";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    headerTitle?: string;
    headerClassName?: string;
    cellClassName?: string;
    cellClassNameFn?: (row: TData) => string;
    skeleton?: ReactNode;
    expandedContent?: (row: TData) => ReactNode;
  }
}

export type DataGridApiFetchParams = {
  pageIndex: number;
  pageSize: number;
  sorting?: SortingState;
  filters?: ColumnFiltersState;
  searchQuery?: string;
};

export type DataGridApiResponse<T> = {
  data: T[];
  empty: boolean;
  pagination: {
    total: number;
    page: number;
  };
};

export interface DataGridContextProps<TData extends object> {
  props: DataGridProps<TData>;
  table: Table<TData>;
  recordCount: number;
  isLoading: boolean;
}

export type DataGridRequestParams = {
  pageIndex: number;
  pageSize: number;
  sorting?: SortingState;
  columnFilters?: ColumnFiltersState;
};

export interface DataGridProps<TData extends object> {
  className?: string;
  table?: Table<TData>;
  recordCount: number;
  children?: ReactNode;
  onRowClick?: (row: TData) => void;
  isLoading?: boolean;
  loadingMode?: "skeleton" | "spinner";
  loadingMessage?: ReactNode | string;
  emptyMessage?: ReactNode | string;
  tableLayout?: {
    dense?: boolean;
    cellBorder?: boolean;
    rowBorder?: boolean;
    rowRounded?: boolean;
    stripped?: boolean;
    headerBackground?: boolean;
    headerBorder?: boolean;
    headerSticky?: boolean;
    width?: "auto" | "fixed";
    columnsVisibility?: boolean;
    columnsResizable?: boolean;
    columnsPinnable?: boolean;
    columnsMovable?: boolean;
    columnsDraggable?: boolean;
    rowsDraggable?: boolean;
  };
  tableClassNames?: {
    base?: string;
    header?: string;
    headerRow?: string;
    headerSticky?: string;
    body?: string;
    bodyRow?: string;
    footer?: string;
    edgeCell?: string;
  };
}

const DataGridContext = createContext<DataGridContextProps<object> | undefined>(undefined);

function useDataGrid() {
  const context = useContext(DataGridContext);
  if (!context) {
    throw new Error("useDataGrid must be used within a DataGridProvider");
  }
  return context;
}

function DataGridProvider<TData extends object>({
  children,
  table,
  ...props
}: DataGridProps<TData> & { table: Table<TData> }) {
  return (
    <DataGridContext.Provider
      value={{
        props: props as DataGridProps<object>,
        table: table as unknown as Table<object>,
        recordCount: props.recordCount,
        isLoading: props.isLoading || false,
      }}
    >
      {children}
    </DataGridContext.Provider>
  );
}

const DATA_GRID_DEFAULT_PROPS = {
  loadingMode: "skeleton" as const,
  tableLayout: {
    dense: false,
    cellBorder: false,
    rowBorder: true,
    rowRounded: false,
    stripped: false,
    headerSticky: false,
    headerBackground: true,
    headerBorder: true,
    width: "fixed" as const,
    columnsVisibility: false,
    columnsResizable: false,
    columnsPinnable: false,
    columnsMovable: false,
    columnsDraggable: false,
    rowsDraggable: false,
  },
  tableClassNames: {
    base: "",
    header: "",
    headerRow: "",
    headerSticky: "sticky top-0 z-10 bg-background/90 backdrop-blur-xs",
    body: "",
    bodyRow: "",
    footer: "",
    edgeCell: "",
  },
};

function DataGrid<TData extends object>({ children, table, ...props }: DataGridProps<TData>) {
  const mergedProps: DataGridProps<TData> = {
    ...DATA_GRID_DEFAULT_PROPS,
    ...props,
    tableLayout: {
      ...DATA_GRID_DEFAULT_PROPS.tableLayout,
      ...(props.tableLayout || {}),
    },
    tableClassNames: {
      ...DATA_GRID_DEFAULT_PROPS.tableClassNames,
      ...(props.tableClassNames || {}),
    },
  };

  // Ensure table is provided
  if (!table) {
    throw new Error('DataGrid requires a "table" prop');
  }

  return (
    <DataGridProvider table={table} {...mergedProps}>
      {children}
    </DataGridProvider>
  );
}

function DataGridContainer({
  children,
  className,
  border = true,
}: {
  children: ReactNode;
  className?: string;
  border?: boolean;
}) {
  return (
    <div
      data-slot="data-grid"
      className={cn("grid w-full", border && "rounded-lg border border-border", className)}
    >
      {children}
    </div>
  );
}

export { DataGrid, DataGridContainer, DataGridProvider, useDataGrid };
