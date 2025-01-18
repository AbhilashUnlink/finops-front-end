
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { forgotPassword } from '@/store/features/auth/authSlice'
import { useAppDispatch } from '@/store/hooks'
import { CustomButton } from '@/ui/custom-button/CustomButton'

import React, { useState } from 'react'

const EmailPopup = ({ popup, setPopup }: any) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false)
  const stopLoading = () => {
    setLoading(false);
  };

  const startLoading = () => {
    setLoading(true);
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

        onChange={(e) => setPopup((prev: any) => {
          return { ...prev, email: e.target.value }
        })}
        className='w-full mt-2.5 px-4 h-[43px] bg-white rounded-md border border-solid border-neutral-200 shadow-[0px_1px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-blue-500'
        required
      />
      <center>

        <CustomButton
          type='primary1'
          loading={loading}
          className='mt-10'
          onClick={() => {

            const email = popup?.email


            startLoading()
            dispatch(forgotPassword(email)).then(() => {
              setPopup((prev: any) => {
                return { ...prev, type: "otp", title: "Please Enter OTP Sent on Email" }
              })
              stopLoading()
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
