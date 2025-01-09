import React, { useReducer, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {rankItem} from "@tanstack/match-sorter-utils"

import Card from "@/components/ui/Card";
import GlobalFilter from './GlobalFilter';
import Icon from "@/components/ui/Icon";
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "@headlessui/react";

import { studentData } from '../../constant/student-data';

// akan menerapkan info peringkat ke baris (menggunakan utilitas sortir kecocokan)
const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({itemRank});

  return itemRank.passed
}

const columnHelper = createColumnHelper();

const actions = [
  {
    name: "view",
    icon: "heroicons-outline:eye",
  },
  {
    name: "edit",
    icon: "heroicons:pencil-square",
  },
  {
    name: "delete",
    icon: "heroicons-outline:trash",
  },
];

const columns = [
  columnHelper.accessor(row => row.firstName, {
    header: 'First Name',
    id: 'firstName',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'lastName',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.nik, {
    id: 'nik',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.address, {
    id: 'address',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.gender, {
    id: 'gender',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('action', {
    header: 'Action',
    cell: () => {
      return (
        <div>
          <Dropdown 
            classMenuItems="right-0 w-[140px] top-[110%] "
            label={
              <span className="text-xl text-center block w-full">
                <Icon icon="heroicons-outline:dots-horizontal" />
              </span>
            } 
          >
            <div className="divide-x divide-slate-100 dark:divide-slate-800">
              {actions.map((item, i) => (
                <Menu.Item key={i}>
                  <div
                    className={`
                
                  ${
                    item.name === "delete"
                      ? "bg-danger-500 text-danger-500 bg-opacity-30   hover:bg-opacity-100 hover:text-white"
                      : "hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50"
                  }
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer 
                   first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `}
                  >
                    <span className="text-base">
                      <Icon icon={item.icon} />
                    </span>
                    <span>{item.name}</span>
                  </div>
                </Menu.Item>
              ))}
            </div>
          </Dropdown>
        </div>
      )
    }
  })
];

const Student = () => {
  const [data] = useState(() => [...studentData]);
  // const rerender = useReducer(() => ({}), {})[1];
  const [globalFilter, setGlobalFilter] = useState('');

  const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 10});

  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination
    },
    // initialState: {
    //   pagination
    // },
    getCoreRowModel: getCoreRowModel(),

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),

    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  const isOdd = (num) => {
    return num % 2 ? 'bg-gray-100' : '';
  }

  return (
    <div className='space-y-5'>
        <Card noborder>
            <div className="md:flex justify-between items-center mb-2">
                <h4 className="card-title">Data Santri</h4>
                <div>
                  <GlobalFilter filter={globalFilter ?? ''} setFilter={value => setGlobalFilter(String(value))} />
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
                  onChange={(e) => {table.setPageSize(Number(e.target.value))}}
                >
                  {[5, 10, 15, 20, 30, 50, 100].map((pageSize) => (
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
  )
}

export default Student;