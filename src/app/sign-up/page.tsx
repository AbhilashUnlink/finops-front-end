/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import Image from 'next/image';
import DECORATION from "../../assets/background-decoration2.png";
import dynamic from 'next/dynamic';

const SignUpForm = dynamic(() => import('./(components)/SignUpForm'), {
  ssr: false, 
  loading: () => <p>Loading...</p>,
});

const SignUpPage = () => {

  return (
    <div className="flex flex-row w-full h-screen rounded-none bg-sky-950 ">

     <SignUpForm />
      <div className='absolute right-0 bottom-10'>

        <Image
          loading="lazy"
          src={DECORATION}
          width={500}
          height={500}
          alt="FinOps dashboard preview"
          className="object-contain self-end mt-36 max-w-full aspect-[1.93] w-[289px] max-md:mt-10"
        />
      </div>
    </div >
  )
}

export default SignUpPage
