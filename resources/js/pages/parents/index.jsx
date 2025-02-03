import React, {useMemo} from 'react';
import { useReactTable } from '@tanstack/react-table';
import { useGlobalFilter, usePagination, useRowSelect, useSortBy } from 'react-table';
import GlobalFilter from "./GlobalFilter";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Dropdown from "@/components/ui/Dropdown";

const COLUMNS = [
    {
        Header: 'Id',
        accessorKey: 'id',
        Cell: (row) => {
            return <span>#{row?.cell?.value}</span>;
        }
    },
    {
        Header: "customer",
        accessorKey: "customer",
        Cell: (row) => {
          return (
            <div>
              <span className="inline-flex items-center">
                <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600">
                  <img
                    src={row?.cell?.value.image}
                    alt=""
                    className="object-cover w-full h-full rounded-full"
                  />
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                  {row?.cell?.value.name}
                </span>
              </span>
            </div>
          );
        },
    },
    {
        Header: 'NIK',
        accessorKey: 'nik',
        Cell: (row) => {
            return <span>#{row?.cell?.value}</span>;
        }
    },
    {
        Header: 'Nama',
        accessorKey: 'name',
        Cell: (row) => {
            return <span>#{row?.cell?.value}</span>;
        }
    },
    {
        Header: "action",
        accessorKey: "action",
        Cell: (row) => {
          return (
            <div>
              <Dropdown
                classMenuItems="right-0 w-[140px] top-[110%] "
                label={
                  <span className="text-xl text-center block w-full">
                    <Icon icon="heroicons-outline:dots-vertical" />
                  </span>
                }
              >
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
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
          );
        },
    },
];

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

const Parent = () => {
    const table = useReactTable();
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => []);

    const tableInstance = useReactTable(
        {
            columns,
            data,
            initialState: {
                pagination: 6,
            }
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        setGlobalFilter,
    );

    const {getTableProps, getTableBodyProps, setGlobalFilter, state} = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className='space-y-5'>
        <Card noborder>
            <div className="md:flex justify-between items-center mb-6">
                <h4 className="card-title">Data Wali Santri</h4>
                <div>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </div>
            </div>
            <div className="overflow-x-auto -mx-6">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden ">
                        <table
                            className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                            {...getTableProps}
                        >
                            <thead className=" border-t border-slate-100 dark:border-slate-800">

                            </thead>
                            <tbody
                            className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
                            {...getTableBodyProps}
                            ></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Parent;