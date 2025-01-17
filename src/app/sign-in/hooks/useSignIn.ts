/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
// import { usersSignIn } from "@/app/store/features/auth/authSlice";
// import { useAppDispatch } from "@/app/store/hooks";
// import { useRouter } from "next/navigation";
import { useState } from "react";


export const useSignIn = () => {

  // const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });
  // const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await dispatch(usersSignIn(formData)).then((res: any) => {
      //   if ([201].includes(res.payload.statusCode)) {
      //     router.push("/pipelines");
      //   }
      // })
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return { formData, handleSubmit, handleInputChange };
};
