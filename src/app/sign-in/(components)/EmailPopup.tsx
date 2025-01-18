
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { forgotPassword, tenantsResendOtp } from '@/store/features/auth/authSlice'
import { useAppDispatch } from '@/store/hooks'
import { CustomButton } from '@/ui/custom-button/CustomButton'

import React, { useState } from 'react'

const EmailPopup = ({popup,setPopup}:any) => {
  const dispatch=useAppDispatch();
 const[loading,setLoading]=useState({
     resendOtp:false
 })
  const stopAllLoaders = () => {
    setLoading({
      resendOtp: false,
    });
  };

  const startLoading = (name: "resendOtp") => {
    const result = Object.keys(loading).reduce((acc: any, key) => {
      acc[key] = key === name;
      return acc;
    }, {});

    setLoading({ ...result });
  };
  return (
    <div className='mt-10 flex flex-col gap-2'>
    <label htmlFor='username' className='block text-sky-950'>
    </label>
    <input
      id='email'
      name='email'
      type='email'
      placeholder='Email address'
      value={popup?.email}

      onChange={(e)=>setPopup((prev:any)=>{
        return {...prev,email:e.target.value}
      })}
      className='w-full mt-2.5 px-4 h-[43px] bg-white rounded-md border border-solid border-neutral-200 shadow-[0px_1px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-blue-500'
      required
    />
    <center>

    <CustomButton
    type='primary'
    loading={loading?.resendOtp}
    onClick={()=>{
    
       const email=popup?.email
    
      
      startLoading("resendOtp")
      dispatch(forgotPassword(email)).then(()=>{
        setPopup((prev:any)=>{
          return {...prev,type:"otp",title:"Please Enter OTP Sent on Email"}
        })
        stopAllLoaders()
      })
    }}
    >
      Get OTP
    </CustomButton>
    </center>
  </div>
  )
}

export default EmailPopup
