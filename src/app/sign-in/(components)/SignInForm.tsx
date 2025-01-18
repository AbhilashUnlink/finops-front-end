/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import * as React from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import { useSignIn } from "../hooks/useSignIn";
import { CustomButton } from "@/ui/custom-button/CustomButton";
import AntdModal from "@/ui/popup/AntdModal";
import EmailPopup from "./EmailPopup";
import OTPPopup from "@/app/sign-up/(components)/OTPPopup";
import RegistrationPasswordPopup from "@/app/sign-up/(components)/RegistrationPasswordPopup";
import { Button } from "antd";
const SignInForm = () => {
  const [loading, setLoading] = React.useState(false);

  const { formData, handleSubmit, handleInputChange } = useSignIn();
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePasswordVisibilityToggle = () => {
    setShowPassword((prev) => !prev); // Toggle the visibility
  };

  const [popup, setPopup] = React.useState({
    open: false,
    email: "",
    uuid: "",
    title: "",
    type: "",
    otp: "",
  });

  return (
    <>
      <AntdModal
        closable={true}
        title={popup.title}
        open={popup?.open || false}
        handleCancel={() =>
          setPopup((prev) => {
            return { ...prev, open: false, uuid: "", otp: "" };
          })
        }
        showCancelButton={false}
      >
        {popup.type === "email" && (
          <>
            <EmailPopup popup={popup} setPopup={setPopup} />
          </>
        )}

        {popup.type === "otp" && (
          <>
            <OTPPopup
              setPopup={setPopup}
              email={popup?.email}
              onSubmit={() => {
                setPopup((prev: any) => {
                  return {
                    ...prev,
                    type: "password",
                    title: "Reset Your Password",
                  };
                });
              }}
            />
          </>
        )}
        {popup.type === "password" && (
          <>
            <RegistrationPasswordPopup
              setFormData={setPopup}
              onClick={() => { }}
            />
          </>
        )}
      </AntdModal>
      <form onSubmit={(e) => handleSubmit(e, setLoading)} className='w-full'>
        <div className='mt-10'>
          <label htmlFor='username' className='block text-sky-950'>
            Username
          </label>
          <input
            id='email'
            name='email'
            type='text'
            value={formData.email}
            onChange={handleInputChange}
            className='w-full mt-2.5 px-4 h-[43px] bg-white rounded-md border border-solid border-neutral-200 shadow-[0px_1px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mt-6 relative'>
          <label htmlFor='password' className='block text-sky-950'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            className='w-full mt-2.5 px-4 h-[43px] bg-white rounded-md border border-solid border-neutral-200 shadow-[0px_1px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
          <button
            type='button'
            onClick={handlePasswordVisibilityToggle}
            className='absolute right-3 top-[70%] -translate-y-[50%] text-black-500 hover:text-gray-700 focus:outline-none'
          >
            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </button>
        </div>
        <div className='flex gap-5 justify-between mt-7 w-full tracking-normal'>


          <Button
            onClick={() => {
              setPopup((prev) => {
                return { ...prev, type: "email", open: true, title: "PLEASE ENTER YOUR EMAIL" };
              })
            }}
            className='text-right text-blue-600 hover:text-blue-700 underline bg-transparent p-0 border-0 cursor-pointer outline-0'
          >
            Forgot Password ?

          </Button>
        </div>
        <CustomButton className="mt-6" type='primary' loading={loading}>
          Sign In
        </CustomButton>
      </form>
    </>
  );
};

export default SignInForm;
