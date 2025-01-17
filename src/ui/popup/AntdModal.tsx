/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';
import { Modal } from 'antd';

const AntdModal = ({ open = false, title = "", children, handleOk = undefined, handleCancel = undefined }: any) => {
    return (
        <>
            <Modal
                title={title}
                open={open}
                onOk={handleOk && handleOk}
                onCancel={handleCancel && handleCancel}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                        {handleCancel && <CancelBtn />}
                        {handleOk && <OkBtn />}
                    </>
                )}
            >
                {children}
            </Modal >
        </>
    );
};

export default AntdModal;