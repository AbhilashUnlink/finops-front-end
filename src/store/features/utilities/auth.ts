// services/authService.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ROUTES } from '@/utils/constants/api-routes';
import { makeApiCall } from '@/utils/helpers/api';


interface OtpResponse{
  data:string;
}


export interface SignInAuthResponse {
  AuthenticationResult:{
      AccessToken:string; 
  },
}

// Register user data response 
interface SaveEmailResponse {
  timestamp:string;
  statusCode:string;
  path:string;
  message:string;
  data: {
   uuid:string;
  };
}

interface TenantCreateResponse{
  timestamp:string;
  statusCode:string;
  path:string;
  message:string;
  data:string | undefined ;
}
  
//============== Login to Dashboard =============================//
export async function usersSignInService(payload: any) {
  return makeApiCall<SignInAuthResponse>(API_ROUTES.USERS_SIGNIN, 'POST', payload);
}
//============== STORE DATA AND Signup first time/SAVE EMAIL ==================//
export async function saveEmailService(payload: any) {
  return makeApiCall<SaveEmailResponse>(API_ROUTES.SAVE_EMAIL, 'POST', payload);
}
//=============== ForgotPassword API call on Login Page ==============//
    export async function forgetPasswordService(payload: any) {
      return makeApiCall<any>( API_ROUTES.FORGET_PASSWORD,'POST', payload);
    }
// ============== Email Validation API on Registration Page ==============//    
    export async function emailExistsService(payload:string){
      return makeApiCall<any>(`${API_ROUTES.EMAIL_EXISTS}/${payload}`,'GET');
      }
// ============== Type of Industry API on Registration Page ==============//
    export async function industryTypeService(){
        return makeApiCall<any>(API_ROUTES.INDUSTRY_TYPE,'GET');
    }
  // ==============Verify OTP During Registration  ==============//
  export async function usreOtpVerifyService(payload:any){
    return makeApiCall<OtpResponse>(API_ROUTES.USER_OTP_VERIFY,'POST',payload);
  }

  // ==============Industry location  ==============//
  export async function industryLocationListService(){
    return makeApiCall<any>(API_ROUTES.INDUSTRY_LOCATION,'GET');
  }
//============== CREATE TENANT==================//
export async function tenantsCreateService(payload:any) {
  return makeApiCall<TenantCreateResponse>(API_ROUTES.TENANT_CREATE, 'POST', payload);
}
//============== RESEND TENANT OTP==================//
export async function tenantsResendOtpService(payload:any) {
  return makeApiCall<any>(API_ROUTES.TENANTS_RESEND_OTP, 'POST', payload);
}
  
//============== VERIFY EMAIL OTP SERVICE ==================//
export async function verifyEmailOtpService(payload:any) {
  return makeApiCall<any>(API_ROUTES.VERIFY_EMAIL_OTP, 'POST', payload);
}
//============== SET PASSWORD SERVICE ==================//
export async function setPasswordService(payload:any) {
  return makeApiCall<any>(API_ROUTES.SET_PASSWORD, 'POST', payload);
}