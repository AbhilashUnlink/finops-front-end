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
  hide = false,
  addonBefore,
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
            defaultValue={defaultValue}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled || disableInputFields}
            addonAfter={addonAfter}
            addonBefore={addonBefore}
          />
        </Form.Item>
      </div>
    );
  }
};

export default DasAntdInput;
