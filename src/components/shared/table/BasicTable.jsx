import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { VscArrowCircleDown, VscArrowCircleUp } from "react-icons/vsc";
import GloabalFilter from "./GloabalFilter";

const BasicTable = ({ columnsProps, dataProps }) => {
  const columns = useMemo(() => columnsProps, [columnsProps]);
  const data = useMemo(() => dataProps, [dataProps]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <div className="shadow-lg p-4 mx-20 my-10 border border-b-gray-300 rounded-md bg-white overflow-x-auto">
      <GloabalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps} className="w-full mt-4 table-auto ">
        <thead className="bg-violet-400 ">
          {headerGroups.map((headerGroup) => (
            <tr
              key={headerGroup.id}
              {...headerGroup.getHeaderGroupProps()}
              className="border-b"
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-2 px-4 text-left  "
                >
                  {column.render("Header")}
                  <span className="ml-1 ">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <VscArrowCircleDown className="text-blue-500 " />
                      ) : (
                        <VscArrowCircleUp className="text-blue-500" />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps} className="divide-y">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={row.original._id}
                {...row.getRowProps()}
                className="hover:bg-gray-100"
              >
                {row.cells.map((cell) => (
                  <td
                    key={cell.column._id}
                    {...cell.getCellProps()}
                    className=" px-4"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span>
            Page {""}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
            {""}
          </span>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="px-2 py-1 rounded-md bg-blue-500 text-white"
          >
            {"<<"}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-2 py-1 rounded-md bg-blue-500 text-white"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-2 py-1 rounded-md bg-blue-500 text-white"
          >
            Next
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="px-2 py-1 rounded-md bg-blue-500 text-white"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicTable;
