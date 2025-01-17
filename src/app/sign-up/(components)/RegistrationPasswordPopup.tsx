/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Form, Input } from "antd";
import { CustomButton } from "@/ui/custom-button/CustomButton";

const RegistrationPasswordPopup = ({
  setFormData,
  buttonText = "Reset Password",
  onClick = () => {},
  loading,
}: any) => {
  const [form] = Form.useForm();

  const onChange = (allValues: any) => {
    setFormData((prev: any) => {
        return { ...prev, user_password: allValues?.user_password };
      });
  };

  return (
    <div className='flex flex-col'>
      <Form
        form={form}
        layout='vertical'
        name='password-form'
        onValuesChange={(_changedValues: any, allValues: any) => {
          onChange(allValues);
        }}
      >
        <Form.Item
          name='user_password'
          label={"Password"}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback={true}
          tooltip={""}
        >
          <Input.Password placeholder='Create your password' title='Password' />
        </Form.Item>
        <Form.Item
          name='confirm_password'
          label={"Confirm Password"}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("user_password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
          hasFeedback={true}
          tooltip={""}
        >
          <Input.Password
            name='confirm_password'
            type='password'
            // required
            placeholder='Please confirm your password'
            title='Password'
          />
        </Form.Item>
      </Form>

      <div className='flex flex-col gap-5 justify-center items-center'>
        <CustomButton
          type='primary'
          loading={loading}
          className='px-16 py-3 mt-2 text-center text-white bg-blue-600 rounded-md border border-blue-600 border-solid shadow-[0px_1px_4px_rgba(0,0,0,0.05)] 
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          onClick={onClick}
        >
          {buttonText}
        </CustomButton>
      </div>
    </div>
  );
};

export default RegistrationPasswordPopup;
