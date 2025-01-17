/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Form, Input } from 'antd';

const DasAntdInput = ({
  className = '',
  name,
  label,
  rules,
  hasFeedback,
  tooltip,
  defaultValue,
  placeholder,
  readOnly = false,
  required = true,
  disabled = false,
  disableInputFields,
  addonAfter,
  hide = false
}: any) => {
  let appliedRules = rules ? rules : [];
  if (!required) {
    appliedRules = [];
  }
  if (hide) {
    return <></>;
  } else {
    return (
      <div className={className}>
        <Form.Item
          name={name}
          label={label}
          rules={appliedRules}
          hasFeedback={hasFeedback}
          tooltip={tooltip}

        >
          <Input
            size="small"
            defaultValue={defaultValue}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled || disableInputFields}
            addonAfter={addonAfter}
          />
        </Form.Item>
      </div>
    );
  }
};

export default DasAntdInput;
