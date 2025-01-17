/* eslint-disable @typescript-eslint/no-explicit-any */
const width="w-[49%]";

export const registerSchema =(list:any, location:any)=> [
  {
    name: "user_first_name",
    label: "First Name",
    placeholder: "Enter your first name",
    className: width,
    rules:[
      {
          required: true,
          message: 'Please Enter First Name!',
      },]
  },
  {
    "name": "user_last_name",
    "label": "Last Name",
    "placeholder": "Enter your last name",
    className: width,
    rules:[
      {
          required: true,
          message: 'Please Enter Last Name!',
      },
  ]
    
  },
  {
    "name": "user_email",
    "label": "Email",
    "placeholder": "Enter your email address",
    className: width,
    rules:[{ type: 'email',
      message:'Please enter correct Email!'
    },
      {
        required: true,
        message: 'Email is Required!',
    },
     ]
  },
  {
    "name": "contactnumber",
    "label": "Contact Number",
    "placeholder": "Enter your contact number",
    className: width,
    rules:[
      {
          required: true,
          message: 'Please Enter Contact Number!',
      }
  ]
    
  },
  {
    "name": "tenant_name",
    "label": "Business Name",
    "placeholder": "Enter Business Name",
    className: width,
    rules:[
      {
          required: true,
          message: 'Please Enter Tenant Name!',
      },
  ]
    
  },
  {
    "name": "transactionsmonthly",
    "label": "Transaction Per month",
    "placeholder": "Enter Transaction Per Month",
    className: width
  },
  {
    name: "country",
    label: "Business Location",
    type: "select",
    placeholder: "Enter Business Location",
    select: true,
    options: location,
    className: width,
    rules:[
      {
          required: true,
          message: 'Please Select Business Location!',
      },
  ]
    
  },
  {
    "name": "industry",
    "label": "Industry",
    placeholder: "Enter Industry Type",
    select: true,
    options: list,
    className: width,
    rules:[
      {
          required: true,
          message: 'Please Select Industry Type!',
      },
  ]
    
  },
];
