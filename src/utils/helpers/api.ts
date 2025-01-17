/* eslint-disable @typescript-eslint/no-explicit-any */
// services/api.ts
import axios, { AxiosError, AxiosRequestConfig } from "axios";

/**
 * Generic function to make an API call using Axios.
 * @param url - The endpoint URL.
 * @param method - HTTP method (GET, POST, PUT, DELETE).
 * @param data - Request body for POST or PUT requests.
 */
export async function makeApiCall<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  // headers:string,
  data?: any
): Promise<T> {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_API_PATH}/${url}`;
    // const apiUrl = `https://au9ktdp1al.execute-api.ap-southeast-1.amazonaws.com/dev/api/v1/finops/${url}`;

    const headers={
      X_APIGUARD:`${process.env.NEXT_PUBLIC_X_APIGUARD}` || "",
      Origin: process.env.NEXT_PUBLIC_SERVER_API_PATH as string,
    }
    const config: AxiosRequestConfig = {
      url:apiUrl,
      headers,
      method,
      data,
    };
    
    const response = await axios.request<T>(config);
    return response.data;
    
  } catch (error: any) {
    const message: any = (error as AxiosError<{ message: string }>).response?.data
      ?.message;
     
    //  if (message.hasOwnProperty(message) && Array.isArray(message.message)) {
    //   message = message.join(",");
    // } else {
    //   message = message.message;
    // }
    // e.g., you might want to handle status codes, transform error messages, etc.
    throw message || "Something went wrong";
  }
}
