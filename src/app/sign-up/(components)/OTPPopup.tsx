/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Input } from 'antd'
import React from 'react'

const OTPPopup = () => {
    const onChange = (text: any) => {
        console.log('onChange:', text);
    };

    return (
        <div className='w-full h-40 flex flex-col gap-4'>
            <span className='text-lg font-medium mt-10'>

                {/* PLEASE ENTER THE OTP SENT TO YOUR EMAIL */}
            </span>
            <Input.OTP {...{ onChange }} />
        </div>
    )
}

export default OTPPopup