// features/auth/authSlice.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { emailExistsService, forgetPasswordService, saveEmailService, setPasswordService, tenantsCreateService, tenantsResendOtpService, usersSignInService, usreOtpVerifyService, verifyEmailOtpService } from "../utilities/auth";
// import {
//   saveEmailService,
//   emailExistsService,
//   industryTypeService,
//   tenantsCreateService,
//   usreOtpVerifyService,
//   usersSignInService,
//   SignInAuthResponse,
//   tenantsResendOtpService,
//   forgetPasswordService,
//   verifyEmailOtpService,
//   setPasswordService,
// } from "@/app/services/auth";

interface User {
  id: number;
  name: string;
  email: string;
}
interface registerUser {
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  contactnumber: string;
  tenant_name: string; // Business name
  city: string; // business location
  industry: string; // Transactions per Month
  transactionsmonthly: string; // Transactions per month
  user_password: string;
  tenant_description: string;
  tenant_isactive: boolean;
  contactemail: string;
  addresstype: string;
  address1: string;
  address2: string;
  address3: string;
  state: string;
  postalcode: string;
  country: string;
}
interface AuthState {
  registerUser: registerUser | null;
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  message: string | null;
  isUserExist: boolean | null;
  uuid: string;
  data: string | null;
  SignInAuthData:any;
}

const initialState: AuthState = {
  registerUser: null,
  user: null,
  token: null,
  loading: false,
  error: null,
  message: null,
  isUserExist: null,
  data: null,
  uuid: "",
  SignInAuthData:{
  
    AuthenticationResult:{
      AccessToken:""
    }
  
}
}

// =============== Thunk: usersSignIn ===============
export const usersSignIn = createAsyncThunk(
  "auth/usersSignIn",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await usersSignInService(payload);
      
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// =============== Thunk: STORE PAYLOAD ===============
export const storeRegisterPayload = createAsyncThunk(
  "auth/storeRegisterPayload",
  async (payload: any, { rejectWithValue }) => {
    try {
 
      return payload;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// =============== Thunk: REGISTER ===============
export const saveEmail = createAsyncThunk(
  "auth/saveEmail",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await saveEmailService(payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// // =============== Thunk: TENANT CREATION =============== 
export const tenantsCreate = createAsyncThunk(
  'auth/tenantsCreate',
  async ( payload:any,{ rejectWithValue }
  ) => {
    try {

      const response = await tenantsCreateService(payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// =============== Thunk: EMAIL VALIDATION ===============
export const emailExists = createAsyncThunk(
  "auth/emailExists",
  async (payload: any, { rejectWithValue }) => {
    try {
      
      const response = await emailExistsService(payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// =============== Thunk: REGISTER USER OTP VERIFY  ===============
export const userOtpVerify = createAsyncThunk(
  "auth/userOtpVerify",
  async (payload: { otp: number; email: string }) => {
    try {
      const response = await usreOtpVerifyService(payload);
     

      return response;
    } catch (error: any) {
      return error;
    }
  }
);

// =============== Thunk: FORGOT PASSWORD ===============
export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await forgetPasswordService(payload);
     
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// =============== Thunk: RESEND TENANT OTP ===============
export const tenantsResendOtp = createAsyncThunk(
  "auth/tenantsResendOtp",
  async (payload: { email: string }, { rejectWithValue }) => {
    try {
      const response = await tenantsResendOtpService(payload);
     
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// =============== Thunk: VERIFY EMAIL OTP ===============
export const verifyEmailOtp = createAsyncThunk(
  "auth/verifyEmailOtp",
  async (payload:any, { rejectWithValue }) => {
    try {
      const response = await verifyEmailOtpService(payload);
     
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);


// =============== Thunk:SET PASSWORD ===============
export const setPassword = createAsyncThunk(
  "auth/setPassword ",
  async (payload:any, { rejectWithValue }) => {
    try {
      const response = await setPasswordService(payload);
     
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // example synchronous action: logout
    logout(state) {
      state.user = null;
      state.token = null;
    },
    saveRegistrationData(state, action) {
      const payload = action.payload.data;
      state.registerUser = payload;
    },
  },
  extraReducers: (builder) => {
    // =============== LOGIN HANDLERS ===============
    builder.addCase(usersSignIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(usersSignIn.fulfilled, (state:any, action:any) => {
      state.loading = false;
      state.SignInAuthData=action.payload.data;

      
    });
    builder.addCase(usersSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });



    // =============== REGISTER HANDLERS ===============
    builder.addCase(saveEmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(saveEmail.fulfilled, (state, action) => {
      //console.log("action.payload?.data?.uuid" , action.payload?.data?.uuid)
      state.loading = false;
      state.message = action.payload?.message;
      state.uuid = action.payload?.data?.uuid;
      //console.log("UUID VALUE:",state.uuid);
    });
    builder.addCase(saveEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });


    // =============== Email Validation HANDLERS ===============
    builder.addCase(emailExists.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(emailExists.fulfilled, (state, action) => {
      state.loading = false;
      state.isUserExist = action.payload?.data?.isUserExist;
      // state.user = action.payload.user;
    });
    builder.addCase(emailExists.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });



    // =============== REGISTER USER OTP VERIFY ===============
    builder.addCase(userOtpVerify.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userOtpVerify.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload?.data?.message;
    });
    builder.addCase(userOtpVerify.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    

    // =============== Store Form Registration data ========================
    builder.addCase(storeRegisterPayload.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(storeRegisterPayload.fulfilled, (state) => {
      //console.log("action.payload?.data?.uuid" , action.payload?.data?.uuid)
      state.loading = false;
      // state.registerUser=action
    });
    builder.addCase(storeRegisterPayload.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });



    // =============== Create tenant ID while creating password first time ========================
    builder.addCase(tenantsCreate.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(tenantsCreate.fulfilled, (state) => {
      //console.log("action.payload?.data?.uuid" , action.payload?.data?.uuid)
      state.loading = false;
      // state.registerUser=action
    });
    builder.addCase(tenantsCreate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });



    // =============== FORGOT PASSWORD HANDLERS ===============
    builder.addCase(forgetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(forgetPassword.fulfilled, (state) => {
      // On success, you might set a success message in Redux or just do nothing:
      state.loading = false;
    });
    builder.addCase(forgetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // =============== RESEND TENANTS OTP ===============
    builder.addCase(tenantsResendOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(tenantsResendOtp.fulfilled, (state) => {
      // On success, you might set a success message in Redux or just do nothing:
      state.loading = false;
    });
    builder.addCase(tenantsResendOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // =============== VERIFY EMAIL OTP ===============
    builder.addCase(verifyEmailOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(verifyEmailOtp.fulfilled, (state) => {
      // On success, you might set a success message in Redux or just do nothing:
      state.loading = false;
    });
    builder.addCase(verifyEmailOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    
      // =============== SET PASSWORD ===============
      builder.addCase(setPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(setPassword.fulfilled, (state) => {
        // On success, you might set a success message in Redux or just do nothing:
        state.loading = false;
      });
      builder.addCase(setPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

  },
});

export const { logout, saveRegistrationData } = authSlice.actions;
export default authSlice;
