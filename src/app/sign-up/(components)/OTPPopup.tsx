/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { tenantsResendOtp } from "@/store/features/auth/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { CustomButton } from "@/ui/custom-button/CustomButton";
import { Input } from "antd";
import React, { useState } from "react";

const OTPPopup = ({
  setPopup,
  email,
  submitText = "Set New Password",
  onSubmit,
  loading,
}: any) => {
  const dispatch = useAppDispatch();

  const onChange = (text: any) => {
    setPopup((prev: any) => {
      return { ...prev, otp: text };
    });
  };
  const [resendLoading, setResendLoading] = useState(false);

  const handleresendOtp = () => {
    setResendLoading(true);
    dispatch(tenantsResendOtp({ email })).then((res: any) => {
      setResendLoading(false);
      if ([201].includes(res.payload.statusCode)) {
        // res.payload.message.success('OTP resent successfully');
      } else {
        // res.payload.message.error('Failed to resend OTP');
      }
    });
  };
  return (
    <div className='w-full flex flex-col gap-4'>

      <Input.OTP {...{ onChange }} />




      <div className='flex flex-row mt-5 gap-5 justify-center items-center'>
        <CustomButton
          type='primary1'
          loading={resendLoading}
          onClick={handleresendOtp}
        >
          {" "}
          Resend OTP{" "}
        </CustomButton>
        <CustomButton type='primary1' onClick={onSubmit} loading={loading}>
          {submitText}
        </CustomButton>
      </div>
    </div>
  );
};

export default OTPPopup;
