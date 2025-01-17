/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { Form } from 'antd'
import DasAntdInput from '@/ui/form/antd-form-fields/DasAntdInput';

const RegistrationPasswordPopup = () => {

    const [form] = Form.useForm();



    const [formData, setFormData] = React.useState<any>({});


    const onChange = (changedValues: any, allValues: any) => {
        console.log("changedValues", changedValues);
        console.log("allValues", allValues);
        setFormData(allValues);
    }

    return (
        <div className='flex flex-col'>

            <Form
                form={form}
                layout="vertical"
                name="password-form"
                onValuesChange={(changedValues: any, allValues: any) => {
                    onChange(changedValues, allValues);
                }}
                // initialValues={{}}
                onFinish={() => {
                    console.log(formData);

                }}
            >

                <DasAntdInput
                    name="password"
                    label="Password"
                    // required
                    placeholder="Enter your password"
                    title="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                />
                <DasAntdInput
                    name="confirm_password"
                    label="Confirm Password"
                    // required
                    placeholder="Please confirm password"
                    title="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                />
            </Form>
        </div>
    )
}

export default RegistrationPasswordPopup