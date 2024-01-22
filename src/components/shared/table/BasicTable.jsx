import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import mData from "./MOCK_DATA.json";
import { useMemo, useState } from "react";
import {columns} from "../../lib/navigation"


const BasicTable = () => {
  const data = useMemo(() => mData, []);

 
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Table</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          onFocus={(e) => (e.target.style.border = "none")}
          onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
          className=" p-2 border border-gray-300 rounded-l-none rounded-lg focus:outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="shadow-lg overflow-x-auto rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-violet-500 text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="py-3 px-4 text-left font-semibold cursor-pointer"
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          { asc: "^", desc: "v" }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-white divide-y divide-gray-500">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100 transition-all">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-3 px-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button
          onClick={() => table.setPageIndex(0)}
          className="py-2 px-4 bg-violet-500 text-white rounded-xl hover:bg-violet-900 transition-all"
        >
          First
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="py-2 px-4 ml-2 bg-violet-500 text-white rounded-xl hover:bg-violet-900 transition-all"
        >
          Prev
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="py-2 px-4 ml-2 bg-violet-500 text-white rounded-xl hover:bg-violet-900 transition-all"
        >
          Next
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="py-2 px-4 ml-2 bg-violet-500 text-white rounded-xl hover:bg-violet-900 transition-all"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default BasicTable;
