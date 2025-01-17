/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Checkbox, Form, Tooltip } from 'antd';

const DasAntdCheckbox = ({
  name,
  label,
  disabled = false,
  showTooltip = true,
  tooltipTitle,
  tooltipPlacement = 'top',
  className="",
  disableInputFields
}: any) => {
  return (
    <div className={className}>
      <div className="flex flex-row gap-2">
        <Form.Item name={name} valuePropName="checked">
          <Checkbox disabled={disabled || disableInputFields} />
        </Form.Item>
        <span className="pt-1">{label}</span>
        {showTooltip && (
          <Tooltip
            className=""
            title={tooltipTitle}
            placement={tooltipPlacement}
          >
            i
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default DasAntdCheckbox;
