/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Form } from "antd";
import AntdModal from "@/ui/popup/AntdModal";
import CustomFormComponent from "@/ui/form/antd-form-fields/CustomFormComponent";
import DasAntdCheckbox from "@/ui/form/antd-form-fields/DasAntdCheckbox";
import OTPPopup from "./OTPPopup";
import RegistrationPasswordPopup from "./RegistrationPasswordPopup";
import LOGO from "../../../assets/logo.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  industryLocation,
  industryType,
} from "@/store/features/utilities/utilitySlice";
import { registerSchema } from "./register-schema";
import {
  saveEmail,
  tenantsCreate,
  userOtpVerify,
} from "@/store/features/auth/authSlice";
import { CustomButton } from "@/ui/custom-button/CustomButton";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(industryType());
      dispatch(industryLocation());
    } catch (e) {
      console.log("error while fetching industries  ", e);
    }
  }, [dispatch]);

  const { list, location } = useAppSelector((state) => state.utilities);
  const [form] = Form.useForm();
  const [popup, setPopup] = useState({
    open: false,
    email: "",
    title: "",
    type: "",
    otp: "",
  });
  // formData
  const [formData, setFormData] = useState({
    user_email: "",
    terms_conditions: false,
  });
  const onChange = (changedValues: any, allValues: any) => {
    console.log("changedValues", changedValues);
    console.log("allValues", allValues);
    setFormData(allValues);
  };

  // loader for each button and service request

  const [loading, setLoading] = useState({
    registerButton: false,
    resendOtp: false,
    getOtp: false,
    passwordOk: false,
    tenantCreate: false,
  });

  const stopAllLoaders = () => {
    setLoading({
      registerButton: false,
      resendOtp: false,
      getOtp: false,
      passwordOk: false,
      tenantCreate: false,
    });
  };

  const startLoading = (
    name:
      | "registerButton"
      | "resendOtp"
      | "getOtp"
      | "passwordOk"
      | "tenantCreate"
  ) => {
    const result = Object.keys(loading).reduce((acc: any, key) => {
      acc[key] = key == name;
      return acc;
    }, {});
    setLoading({ ...result });
  };

  const router = useRouter();
  return (
    <>
      <AntdModal
        title={popup.title}
        open={popup?.open || false}
        handleCancel={() =>
          setPopup((prev) => {
            return { ...prev, open: false, uuid: "", otp: "" };
          })
        }
        closable={true}
      >
        {popup.type === "otp" && (
          <>
            <OTPPopup
              setPopup={setPopup}
              loading={loading?.getOtp || false}
              email={formData?.user_email}
              submitText={"Verify OTP"}
              onSubmit={() => {
                if (popup.otp.length === 6) {
                  const payload = {
                    email: formData.user_email,
                    otp: +popup.otp,
                  };
                  startLoading("getOtp");
                  dispatch(userOtpVerify(payload)).then((res: any) => {
                    stopAllLoaders();
                    if ([201].includes(res.payload.statusCode)) {
                      setPopup((prev) => {
                        return {
                          ...prev,
                          type: "password",
                          title: "PLEASE ENTER YOUR PASSWORD",
                        };
                      });
                    }
                  });
                }
              }}
            />
          </>
        )}
        {popup.type === "password" && (
          <>
            <RegistrationPasswordPopup
              setFormData={setFormData}
              buttonText={"Register User"}
              loading={loading?.tenantCreate || false}
              onClick={() => {
                const payload: any = {
                  ...formData,
                  terms_conditions: formData?.terms_conditions,
                  tenant_description: "Hills Top",
                  addresstype: "Permanent",
                  address1: "Uchi Building",
                  address2: "Mast pur",
                  address3: "mike chesse are hairy",
                  city: "Rudrapra",
                  state: "Madhya Pradesh",
                  postalcode: 123456,
                  contactemail: "samemail@gmail.com",
                  isactive: true,
                };
                delete payload["terms_conditions"];
                startLoading("tenantCreate");
                dispatch(tenantsCreate(payload)).then(() => {
                  stopAllLoaders();
                  setPopup((prev) => {
                    return { ...prev, open: false };
                  });
                  router.push("/sign-in");
                });
              }}
            />
          </>
        )}
      </AntdModal>
      <div className='flex flex-col w-full bg-white lg:w-[55%] py-8 px-4'>
        <div className='flex flex-row items-center gap-3'>
          <Image
            src={LOGO}
            width={50}
            height={50}
            alt='Picture of the author'
          />

          <h1 className='self-start text-2xl tracking-widest text-black'>
            Sign Up
          </h1>
        </div>
        <div className='flex relative mt-10'>
          <Form
            form={form}
            layout='vertical'
            name='register-form'
            onValuesChange={(changedValues: any, allValues: any) => {
              onChange(changedValues, allValues);
            }}
            initialValues={{}}
            onFinish={() => {
              console.log(formData);
              startLoading("registerButton");
              dispatch(saveEmail({ email: formData.user_email })).then(
                (res: any) => {
                  stopAllLoaders();
                  if ([201].includes(res.payload.statusCode)) {
                    setPopup((prev) => {
                      return {
                        ...prev,
                        open: true,
                        email: formData.user_email,
                        type: "otp",
                        title: "PLEASE ENTER THE OTP SENT TO YOUR EMAIL",
                      };
                    });
                  }
                }
              );
            }}
          >
            <div className='w-full flex flex-wrap  gap-3'>
              {registerSchema(list, location)?.map(
                (item: any, index: number) => {
                  return <CustomFormComponent {...item} key={index} />;
                }
              )}
            </div>
            <div className='flex flex-row gap-5 w-full justify-between mt-2'>
              <DasAntdCheckbox
                {...{
                  name: "terms_conditions",
                  label: "I agree to the Terms & Conditions",
                  checkbox: true,
                  showTooltip: false,
                }}
              />
            </div>
            <CustomButton
              type='primary1'
              loading={loading?.registerButton || false}
            >
              Register
            </CustomButton>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
