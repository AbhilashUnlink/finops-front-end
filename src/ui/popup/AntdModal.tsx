/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';
import { Modal } from 'antd';

const AntdModal = ({ open = false, title = "", children, handleOk = undefined, handleCancel = undefined ,showCancelButton=false ,closable=false}: any) => {
    return (
        <>
            <Modal
                title={title}
                open={open}
                closable={closable}
                onOk={handleOk && handleOk}
                onCancel={handleCancel && handleCancel}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                        {showCancelButton && handleCancel && <CancelBtn />}
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