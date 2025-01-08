import React, { useReducer, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {rankItem} from "@tanstack/match-sorter-utils"

import Card from "@/components/ui/Card";
import GlobalFilter from './GlobalFilter';
import Icon from "@/components/ui/Icon";
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "@headlessui/react";
// akan menerapkan info peringkat ke baris (menggunakan utilitas sortir kecocokan)
const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({itemRank});

  return itemRank.passed
}

const studentData = [
  {
    firstName: 'Ali',
    lastName: 'Ahmad',
    nik: '112233445566',
    address: 'palengaan',
    gender: 'Laki-Laki'
  },
  {
    firstName: 'Ahmad',
    lastName: 'Barick',
    nik: '112233445566',
    address: 'palengaan',
    gender: 'Laki-Laki'
  },
  {
    firstName: 'Bila',
    lastName: 'Jannah',
    nik: '112233445566',
    address: 'palengaan',
    gender: 'Perempuan'
  },
  {
    firstName: 'Ahmad',
    lastName: 'Barick',
    nik: '112233445566',
    address: 'palengaan',
    gender: 'Laki-Laki'
  },
  {
    firstName: 'Bila',
    lastName: 'Jannah',
    nik: '112233445566',
    address: 'palengaan',
    gender: 'Perempuan'
  }
];

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

  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      globalFilter,
      sorting
    },
    initialState: {
      pagination: {
        pageSize: 5,
      }
    },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: 'fuzzy',
    debugTable: true,
    debugColumns: true,
    debugHeaders: true,
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
                                  {header.isPlaceholder ? null : flexRender(
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
        </Card>
    </div>
  )
}

export default Student;