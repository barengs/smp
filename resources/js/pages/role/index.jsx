import React, {useState} from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
  
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";

import GlobalFilter from '@/components/partials/filter/GlobalFilter';

import {useGetRolesQuery} from "@/store/api/role/roleApiSlice";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('name', {
    header: "Nama Penugasan",
    id: 'name',
    cell: item => item.getValue(),
  }),
  columnHelper.accessor('guard_name', {
    header: "Keamanan",
    id: 'guard_name',
    cell: item => item.getValue(),
  }),
  columnHelper.accessor('action', {
    header: 'Aksi',
    cell: () => {
      return (
        <div className="flex space-x-3 rtl:space-x-reverse">
          <Tooltip content="View" placement="top" arrow animation="shift-away">
            <button className="action-btn" type="button">
              <Icon icon="heroicons:eye" />
            </button>
          </Tooltip>
          <Tooltip content="Edit" placement="top" arrow animation="shift-away">
            <button className="action-btn" type="button">
              <Icon icon="heroicons:pencil-square" />
            </button>
          </Tooltip>
          <Tooltip
            content="Delete"
            placement="top"
            arrow
            animation="shift-away"
            theme="danger"
          >
            <button className="action-btn" type="button">
              <Icon icon="heroicons:trash" />
            </button>
          </Tooltip>
        </div>
      );
    }
  })
];

const Role = () => {
  const {data, isLoading} = useGetRolesQuery();

  const [globalFilter, setGlobalFilter] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 10});

  const table = useReactTable({
    data: !isLoading ? data.data : [],
    columns,
    state: {
      sorting,
      globalFilter,
      pagination
    },
    getCoreRowModel: getCoreRowModel(),
    
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
  });
    
  const isOdd = (index) => {
    return index % 2 ? 'bg-gray-100' : '';
  };
  return (
    <div className='space-y-5'>
      <Card noborder>
        <div className="md:flex justify-between items-center mb-2">
          <h4 className="card-title">Daftar Tugas Pengguna</h4>
          <div className='flex'>
            <GlobalFilter filter={globalFilter ?? ''} setFilter={value => setGlobalFilter(String(value))} />
            <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 ml-2">
              <Icon icon='heroicons:inbox-arrow-down' width="20" className="mr-2" /> Export Dokumen
            </button>
          </div>
        </div>
		
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="table-auto min-w-full divide-y divide-slate-100 dark:divide-slate-700">
                <thead className="bg-gray-600 text-white border-t border-slate-100 dark:border-slate-800">
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <th key={header.id} scope='col' className='table-th py-4 text-white'>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none flex item-center"
                                : "",
                              onClick: header.column.getToggleSortingHandler()
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            <Icon icon="heroicons:arrows-up-down" className="text-white text-center ml-2" />
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                {isLoading ? (
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                    <tr>
                      <td className='table-td py-2'>Loading..</td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                    {
                      table.getRowModel().rows.map((row, i) => (
                        <tr key={row.id} className={isOdd(i)}>
                          {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className='table-td py-2'>
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                          ))}
                        </tr>
                      ))
                    }
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-700'>
          <div className='flex items-center mb-4 sm:mb-0'>
            <span className='mr-2'>Data Per Halaman</span>
            <select id='' name='page'
              className='border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2'
              value={table.getState().pagination.pageSize}
              onChange={(e) => {table.setPageSize(Number(e.target.value));}}
            >
              {[5, 10, 15, 20, 30, 50, 100, 200, 500].map((pageSize) => (
                <option value={pageSize} key={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
		
          <div className='flex items-center space-x-2'>
            <button className='p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-600'
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <Icon icon='heroicons:chevron-double-left' />
            </button>
		
            <button className='p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-600'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <Icon icon='heroicons:chevron-left' />
            </button>
		
            <span className='flex items-center'>
              <input id='' name='curentpage'
                type="number" min={1} max={table.getPageCount()}
                value={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className='w-16 p-2 rounded-md border border-gray-300 text-center'
              />
              <span className='ml-1'>of {table.getPageCount()}</span>
            </span>
		
            <button
              className='p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <Icon icon="heroicons:chevron-right" />
            </button>
		
            <button
              className='p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50'
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <Icon icon="heroicons:chevron-double-right" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Role;