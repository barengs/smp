import React, {useMemo} from 'react';
import { useReactTable } from '@tanstack/react-table';
import { useGlobalFilter, usePagination, useRowSelect, useSortBy } from 'react-table';
// import Icon from "@/components/ui/Icon";

// import {
//     useReactTable
// } from '@tanstack/react-table';

const Parent = () => {
    const columns = useMemo(() => []);
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
        useRowSelect
    );
  return (
    <div>
        <div className="overflow-x-auto -mx-6">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                    <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                        <thead className=" bg-slate-200 dark:bg-slate-700">
                            <tr>
															<th scope='col' className='table-th '></th>
														</tr>
                        </thead>
                        <tbody>
													<tr>
														<td>

														</td>
													</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Parent;