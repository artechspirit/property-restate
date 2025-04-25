"use client";

import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

type Feedback = {
  id: number;
  category: string;
  sub_category: string;
  unit: string;
  status: string;
  keluhan: string;
  created_at: string;
};

const columns: ColumnDef<Feedback>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "category", header: "Kategori" },
  { accessorKey: "sub_category", header: "Subkategori" },
  { accessorKey: "unit", header: "Unit" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "keluhan", header: "Keluhan" },
  { accessorKey: "created_at", header: "Dibuat Pada" },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation(); // mencegah trigger onClick di TableRow
            window.location.href = `/feedback/${id}`;
          }}
        >
          Lihat Detail
        </Button>
      );
    },
  },
];

export function FeedbackTable({ data }: { data: Feedback[] }) {
  const router = useRouter();

  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [unitFilter, setUnitFilter] = useState<string>("all");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchStatus =
        statusFilter === "all" || item.status === statusFilter;
      const matchUnit = unitFilter === "all" || item.unit === unitFilter;
      return matchStatus && matchUnit;
    });
  }, [data, statusFilter, unitFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-md bg-white mt-4 border shadow-md p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex justify-end flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-48">
            <label className="text-sm font-medium mb-1 block">
              Filter Status
            </label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                {Array.from(new Set(data.map((d) => d.status))).map(
                  (status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48">
            <label className="text-sm font-medium mb-1 block">
              Filter Unit
            </label>
            <Select value={unitFilter} onValueChange={setUnitFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Unit</SelectItem>
                {Array.from(new Set(data.map((d) => d.unit))).map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-sm border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="bg-gray-50 text-gray-700"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => router.push(`/feedback/${row.original.id}`)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-3 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4 gap-2 flex-col md:flex-row">
        <Button
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          ⬅️ Sebelumnya
        </Button>
        <div className="text-sm text-gray-600">
          Halaman{" "}
          <span className="font-medium">
            {table.getState().pagination.pageIndex + 1}
          </span>{" "}
          dari <span className="font-medium">{table.getPageCount()}</span>
        </div>
        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Selanjutnya ➡️
        </Button>
      </div>
    </div>
  );
}
