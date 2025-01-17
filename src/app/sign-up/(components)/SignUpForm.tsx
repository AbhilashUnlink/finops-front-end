/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Form } from 'antd';
import AntdModal from '@/ui/popup/AntdModal';
import CustomFormComponent from '@/ui/form/antd-form-fields/CustomFormComponent';
import DasAntdCheckbox from '@/ui/form/antd-form-fields/DasAntdCheckbox';
import OTPPopup from './OTPPopup';
import RegistrationPasswordPopup from './RegistrationPasswordPopup';
import LOGO from "../../../assets/logo.png"
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { industryLocation, industryType } from '@/store/features/utilities/utilitySlice';

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


    const width = "w-[49%]";

    const schema = [
        {
            name: "user_first_name",
            label: "First Name",
            placeholder: "Enter your first name",
            className: width
        },
        {
            "name": "user_last_name",
            "label": "Last Name",
            "placeholder": "Enter your last name",
            className: width
        },
        {
            "name": "email",
            "label": "Email",
            "placeholder": "Enter your email address",
            className: width
        },
        {
            "name": "contactnumber",
            "label": "Contact Number",
            "placeholder": "Enter your contact number",
            className: width
        },
        {
            "name": "tenant_name",
            "label": "Business Name",
            "placeholder": "Enter Business Name",
            className: width
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
            className: width
        },
        {
            "name": "company_type",
            "label": "Industry",
            placeholder: "Enter Industry Type",
            select: true,
            options: list,
            className: width
        },
    ];



    const [form] = Form.useForm();


    const [popup, setPopup] = useState({
        open: false,
        uuid: "",
        title: "",
        type: "",
    });

    const [formData, setFormData] = useState({});


    const onChange = (changedValues: any, allValues: any) => {
        console.log("changedValues", changedValues);
        console.log("allValues", allValues);
        setFormData(allValues);
    }

    return (
        <>
            <AntdModal
                title={popup.title}
                open={popup?.open || false}
                handleCancel={() =>
                    setPopup((prev) => {
                        return { ...prev, open: false, uuid: "" };
                    })
                }
                handleOk={() => {
                    if (popup.type === "otp") {
                        // move to passsword popup
                        setPopup((prev) => {
                            return { ...prev, type: "password", title: "PLEASE ENTER YOUR PASSWORD" };
                        })
                    } else {
                        // close popup
                        setPopup((prev) => {
                            return { ...prev, open: false };
                        })
                    }
                }
                }

            >
                {popup.type === "otp" && (<>
                    <OTPPopup />
                </>)}
                {popup.type === "password" && (<>
                    <RegistrationPasswordPopup />
                </>)}

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
                        layout="vertical"
                        name="register-form"
                        onValuesChange={(changedValues: any, allValues: any) => {
                            onChange(changedValues, allValues);
                        }}
                        // initialValues={{}}
                        onFinish={() => {
                            console.log(formData);
                            setPopup((prev) => {
                                return { ...prev, open: true, uuid: "", type: "otp", title: "PLEASE ENTER THE OTP SENT TO YOUR EMAIL" };
                            })
                        }}
                    >
                        <div className="w-full flex flex-wrap  gap-3">
                            {schema?.map((item: any, index: number) => {
                                return (
                                    <CustomFormComponent
                                        {...item}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                        <div className='flex flex-row gap-5 w-full justify-between mt-2'>
                            <DasAntdCheckbox
                                {...{
                                    "name": "terms_conditions",
                                    "label": "I agree to the Terms & Conditions",
                                    "checkbox": true,
                                    showTooltip: false
                                }}
                            />
                        </div>
                        <button
                            type='submit'
                            className=' rounded-sm w-full px-16 py-3 mt-4 text-center text-white bg-blue-600  border border-blue-600 border-solid shadow-[0px_1px_4px_rgba(0,0,0,0.05)] hover:bg-blue-700 focus:outline-none  '
                        >
                            Register
                        </button>
                    </Form>

                </div>
            </div>
        </>

    )
}

export default SignUpForm
