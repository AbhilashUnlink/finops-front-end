/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import clsx from 'clsx';

interface ButtonProps {
    loading?:boolean,
    children: React.ReactNode;
    type?: 'primary' | 'secondary' | 'danger' |'primary1';  // Add the 'type' prop for different button styles
    className?: string;
    [key:string]:any
}

export function CustomButton({ children, className, type,loading ,...rest }: ButtonProps) {
    let buttonClasses = '';

    // Use a switch case to decide the button style based on the 'type' prop
    switch (type) {
        case 'primary':
            buttonClasses = 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600';
            break;
        case 'secondary':
            buttonClasses = 'bg-gray-500 hover:bg-gray-400 active:bg-gray-600';
            break;
        case 'danger':
            buttonClasses = 'bg-red-500 hover:bg-red-400 active:bg-red-600';
            break;
        case 'primary1':
            buttonClasses = 'rounded-sm w-2/4 px-16 py-3 mt-4 text-center text-white bg-blue-600  border border-blue-600 border-solid shadow-[0px_1px_4px_rgba(0,0,0,0.05)] hover:bg-blue-700 focus:outline-none  flex justify-center items-center';
            break;
        default:
            buttonClasses = '';
    }

//     <button
//     type='submit'
//     className=' rounded-sm w-full px-16 py-3 mt-4 text-center text-white bg-blue-600  border border-blue-600 border-solid shadow-[0px_1px_4px_rgba(0,0,0,0.05)] hover:bg-blue-700 focus:outline-none  '
//   >
//     Registerd

   
    
//   </button>

    return (
        <button
        disabled={loading}

            {...rest}
            className={clsx('rounded-sm w-full flex h-8 items-center px-4 text-sm font-small text-white transition-colors outline-none  aria-disabled:cursor-not-allowed aria-disabled:opacity-50 flex justify-center items-center',
                buttonClasses,
                className,
               
            )}
        >
            {children}
            {
            loading && 
            <Spin indicator={<LoadingOutlined spin />} size="small"  style={{marginLeft:"10px",color:"white"}} />
            }
        </button>
        
    );
}