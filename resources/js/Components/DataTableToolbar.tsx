"use client";

import { X } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
// import { incomeType, categories } from "./data";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
// import { DataTableViewOptions } from "@/Components/ui/data-table-view-options";
// import { CalendarDatePicker } from "@/Components/CalendarDatePicker";
import { useState } from "react";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { TrashIcon } from "lucide-react";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

const incomeType: any = [
    {
        value: "root",
        label: "Root",
    },
];
const categories: any = [];

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
        from: new Date(new Date().getFullYear(), 0, 1),
        to: new Date(),
    });

    const handleDateSelect = ({ from, to }: { from: Date; to: Date }) => {
        setDateRange({ from, to });
        // Filter table data based on selected date range
        table.getColumn("date")?.setFilterValue([from, to]);
    };

    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-2">
                <Input
                    placeholder="Filter labels..."
                    value={
                        (table.getColumn("name")?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) => {
                        table
                            .getColumn("name")
                            ?.setFilterValue(event.target.value);
                    }}
                    className="h-8 w-[150px] lg:w-[250px] "
                />
                {table.getColumn("email") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("email")}
                        title="Correo"
                        options={categories}
                    />
                )}
                {table.getColumn("role") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("role")}
                        title="Perfil"
                        options={incomeType}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <X className="ml-2 h-4 w-4" />
                    </Button>
                )}
                {/* <CalendarDatePicker
                    date={dateRange}
                    onDateSelect={handleDateSelect}
                    className="h-9 w-[250px]"
                    variant="outline"
                /> */}
            </div>

            <div className="flex items-center gap-2">
                {table.getFilteredSelectedRowModel().rows.length > 0 ? (
                    <Button variant="outline" size="sm">
                        <TrashIcon className="mr-2 size-4" aria-hidden="true" />
                        Delete (
                        {table.getFilteredSelectedRowModel().rows.length})
                    </Button>
                ) : null}
                <DataTableViewOptions table={table} />
            </div>
        </div>
    );
}
