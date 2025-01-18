/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';
import CustomTable from '@/ui/custom-table/CustomTable';
import PipelinesHeader from './PipelinesHeader';

const PipelinesTable = () => {
    const dataSource: any = [
        {
            key: '1',
            NAME: 'ABHILASH',
            CODE: 'ABHI001',
            "PROCESS TYPE": 'BATCH',
            "MASKING": 'MASKING',
            STARRED: "STARRED",
            STATUS: "STATUS",
            FREQUENCY: "FREQUENCY",
            "LAST RUN BY": "LAST RUN BY",
            "LAST RUN AT": "LAST RUN AT",
            STATE: "STATE",
            PRIORITY: "PRIORITY",
            ACTIONS: "ACTIONS"
        },
        {
            key: '2',
            NAME: 'sharma',
            CODE: 'ABHI001',
            "PROCESS TYPE": 'BATCH',
            "MASKING": 'MASKING',
            STARRED: "STARRED",
            STATUS: "STATUS",
            FREQUENCY: "FREQUENCY",
            "LAST RUN BY": "LAST RUN BY",
            "LAST RUN AT": "LAST RUN AT",
            STATE: "STATE",
            PRIORITY: "PRIORITY",
            ACTIONS: "ACTIONS"
        }
    ];
    const cols = [
        {
            title: 'NAME',
            dataIndex: 'NAME',
            key: 'NAME',
            width: 300,
            render: (cell: any) => {
                return (<>
                    {/* <button className='bg-red-400 px-5 py-1 mr-4' onClick={() => alert(`hello ${cell.toUpperCase()}`)}>
                        Say hello
                    </button> */}
                    {cell.toUpperCase()}
                </>)
            }
        },
        {
            title: 'CODE',
            dataIndex: 'CODE',
            width: 300
            ,
            key: 'CODE',
        },
        {
            title: 'PROCESS TYPE',
            dataIndex: 'PROCESS TYPE',
            width: 300
            ,
            key: 'PROCESS TYPE',
        },
        {
            title: 'MASKING',
            dataIndex: 'MASKING',
            width: 300
            ,
            key: 'MASKING',
        },
        {
            title: 'STARRED',
            dataIndex: 'STARRED',
            width: 300
            ,
            key: 'STARRED',
        },
        {
            title: 'STATUS',
            dataIndex: 'STATUS',
            width: 300
            ,
            key: 'STATUS',
        },
        {
            title: 'FREQUENCY',
            dataIndex: 'FREQUENCY',
            width: 300
            ,
            key: 'FREQUENCY',
        },
        {
            title: 'LAST RUN BY',
            dataIndex: 'LAST RUN BY',
            width: 300
            ,
            key: 'LAST RUN BY',
        },
        {
            title: 'LAST RUN AT',
            dataIndex: 'LAST RUN AT',
            width: 300
            ,
            key: 'LAST RUN AT',
        },
        {
            title: 'STATE',
            dataIndex: 'STATE',
            width: 300
            ,
            key: 'STATE',
        },
        {
            title: 'PRIORITY',
            dataIndex: 'PRIORITY',
            width: 300
            ,
            key: 'PRIORITY',
        },
        {
            title: 'ACTIONS',
            dataIndex: 'ACTIONS',
            width: 300
            ,
            key: 'ACTIONS',
        },
    ];
    return (
        <div>
            <PipelinesHeader />
            <div className='mt-2'>
                <CustomTable
                    cols={cols}
                    dataSource={dataSource}
                />
            </div>
        </div>
    )
}

export default PipelinesTable