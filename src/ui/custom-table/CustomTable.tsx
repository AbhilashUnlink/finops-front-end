/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ResizeCallbackData } from 'react-resizable';
import { Resizable } from 'react-resizable';
import "./style.css";

interface TitlePropsType {
    width: number;
    onResize: (e: React.SyntheticEvent<Element>, data: ResizeCallbackData) => void;
}

const ResizableTitle: React.FC<Readonly<React.HTMLAttributes<any> & TitlePropsType>> = (props) => {
    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={<span className="react-resizable-handle" onClick={(e) => e.stopPropagation()} />}
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};



const CustomTable = ({ dataSource, cols }: any) => {

    const [columns, setColumns] = useState<any>([]);

    useEffect(() => {
        setColumns(cols);
    }, [cols]);

    const handleResize =
        (index: number) =>
            (_: React.SyntheticEvent<Element>, { size }: ResizeCallbackData) => {
                const newColumns = [...columns];
                newColumns[index] = {
                    ...newColumns[index],
                    width: size.width,
                };
                setColumns(newColumns);
            };

    const mergedColumns = columns.map((col: any, index: any) => ({
        ...col,
        onHeaderCell: (column: any) => ({
            width: column.width,
            onResize: handleResize(index) as React.ReactEventHandler<any>,
        }),
    }));

    return (
        <div className='mt-2'>
            <Table
                size='small'
                bordered
                scroll={{ x: 2500 }}
                components={{ header: { cell: ResizableTitle } }}
                columns={mergedColumns}
                dataSource={dataSource}
            />
        </div>
    );
};

export default CustomTable;