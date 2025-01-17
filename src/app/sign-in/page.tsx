"use client";
import * as React from "react";
import { AuthLayout } from "./(components)/AuthLayout";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../assets/logo.png";
import dynamic from 'next/dynamic';

const SignInForm = dynamic(() => import('./(components)/SignInForm'), {
  ssr: false, 
  loading: () => <p>Loading...</p>,
});

const SignInPage = () => {

  return (

    <AuthLayout>
      <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
        <div className='flex flex-col self-stretch my-auto w-full text-base font-bold tracking-wider max-md:mt-10 max-md:max-w-full'>
          <Image
            src={LOGO}
            width={50}
            height={50}
            alt='Picture of the author'
          />

          <h1 className='self-start mt-6 text-2xl tracking-widest text-black'>
            Sign In
          </h1>
          <div className='self-start mt-5 text-neutral-500'>
            Dont have an account?{" "}
            <Link
              href='/sign-up'
              className='font-bold text-blue-600 underline hover:text-blue-700'
            >
              Sign Up
            </Link>
          </div>

          <SignInForm />

        </div>
      </div>
    </AuthLayout>
  );
};

export default SignInPage;
