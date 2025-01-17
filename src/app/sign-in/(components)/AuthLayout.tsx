/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import * as React from "react";
import DECORATION from "../../../assets/background-decoration2.png";

export const AuthLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col rounded-none ">
      <div className="pl-16 bg-white rounded-xl max-md:pl-5 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col h-screen">
          {children}
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-0.5 w-full rounded-none shadow-2xl bg-sky-950 max-md:mt-10 max-md:max-w-full">
              <div className="flex relative flex-col pt-60 pr-6 pb-5 pl-20 w-full rounded-none min-h-[781px] max-md:px-5 max-md:pt-24 max-md:-mr-0.5 max-md:max-w-full">
                <div className="relative text-white">
                  <span className="text-4xl tracking-wider">Welcome to </span>
                  <span className="text-4xl italic">FINOPS</span>
                  <br></br>
                  <span className="font-bold italic">Finops</span> helps developers to
                  build organized and well coded dashboards full of beautiful
                  and rich modules.
                </div>
                <Image
                  loading="lazy"
                  src={DECORATION}
                  width={300}
                  height={300}
                  alt="FinOps dashboard preview"
                  className="object-contain self-end mt-36 max-w-full aspect-[1.93] w-[289px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
