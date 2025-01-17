"use client";
import * as React from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import { useSignIn } from "../hooks/useSignIn";
const SignInForm = () => {
    const { formData, handleSubmit, handleInputChange } = useSignIn();
    const [showPassword, setShowPassword] = React.useState(false);
    const handlePasswordVisibilityToggle = () => {
        setShowPassword((prev) => !prev); // Toggle the visibility
    };
    return (


        <form onSubmit={handleSubmit} className='w-full'>
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
                    type="button"
                    onClick={handlePasswordVisibilityToggle}
                    className="absolute right-3 top-[70%] -translate-y-[50%] text-black-500 hover:text-gray-700 focus:outline-none"
                >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </button>


            </div>
            <div className='flex gap-5 justify-between mt-7 w-full tracking-normal'>
                {/* <label className='flex gap-3.5 text-sky-950 cursor-pointer items-center'> */}
                {/* <input
                  type='checkbox'
                  name='rememberDevice'
                  checked={formData.rememberDevice}
                  onChange={handleInputChange}
                  className='w-5 h-5 border-2 border-solid border-neutral-200 rounded focus:ring-blue-500'
                /> */}
                {/* Remember this Device */}
                {/* </label> */}

                <a
                    href='/forgot-password'
                    className='text-right text-blue-600 hover:text-blue-700'
                >
                    Forgot Password?
                </a>
            </div>
            <button
                type='submit'
                className='w-full px-16 py-3 mt-7 text-center text-white bg-blue-600 rounded-md border border-blue-600 border-solid shadow-[0px_1px_4px_rgba(0,0,0,0.05)] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
                Sign In
            </button>
        </form>

    );
};

export default SignInForm;
