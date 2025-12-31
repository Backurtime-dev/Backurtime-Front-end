import React, { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableData } from "./types";
import { cn } from "@/utils";
import { RowFactory } from "./Rows";
import Head from "./Head";

interface DataTableProps {
  table: TableData;
  rowsSpace?: string;
  isTableHeader?: boolean;
  className?: string;
}

export function DataTable({
  table,
  rowsSpace,
  isTableHeader = false,
  className,
}: DataTableProps) {
  return (
    <Table className={cn(className)}>
      <TableHeader className={!isTableHeader ? "hidden" : ""}>
        <TableRow>
          {table.columns.map((column) => (
            <Head
              key={column.header}
              name={column.header}
              className={cn(
                column.align === "center" && "text-center",
                column.align === "right" && "text-right",
              )}
              style={{ width: column.width }}
            />
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {isTableHeader && (
          <TableRow
            style={{
              height: `${rowsSpace ?? "20px"}`,
            }}
          >
            <TableCell key={`empty-0`}></TableCell>
          </TableRow>
        )}
        {table.rows.map((row, index) => (
          <Fragment key={row.id}>
            <RowFactory key={row.id} rowData={row} columns={table.columns} />
            {index < table.rows.length - 1 && (
              <TableRow
                style={{
                  height: `${rowsSpace ?? "20px"}`,
                }}
              >
                {table.columns.map((column, colIndex) => (
                  <TableCell key={`empty-${row.id}-${colIndex}`}></TableCell>
                ))}
              </TableRow>
            )}
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
}
