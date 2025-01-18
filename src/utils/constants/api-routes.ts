export const API_ROUTES = {
    USERS_SIGNIN:`users/signin`,                     // tenant Signin API                           
    TENANT_CREATE:`tenants/create`,                  // After otp verify tenants/first-time user migrate to create tenants page (Request --> Registration form details,New Password)
    SAVE_EMAIL: `tenants/save-email`,                // When tenants come first time save email api run to save email data (Request --> only nonexisted Email)
    FORGOT_PASSWORD:`users/forgot-password`,         // forget password api on login page
    EMAIL_EXISTS:`users/email-exists`,               // Check for exist user based on email on Register page (Request --> Email value from registration details page)
    INDUSTRY_TYPE:'industries/list',                 // Industry Dropdown list on Register page (Request -->empty request)
    USER_OTP_VERIFY:'users/verify-otp',              // verify OTP API come (Request -->EMAIL,OTP)
    INDUSTRY_LOCATION:`locations/list`,              // Industry location on Register page (Request -->empty request)
    TENANTS_RESEND_OTP:`tenants/resend-otp`,         // API for tenants Resend otp when tenants send otp again (Request -->email)
    VERIFY_EMAIL_OTP:`users/verify-email-otp`,       // API to verify email that entered after user forgot password
    SET_PASSWORD:`users/set-password`                // API to set new password after forgotten the old password 
  };
  