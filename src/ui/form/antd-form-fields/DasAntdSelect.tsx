/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Form, Select } from 'antd';
// import { formRuleValidation } from '../../../utils/helper';
import {
  CaretDownOutlined
} from '@ant-design/icons';
const DasAntdSelect = ({
  name,
  label,
  // rules,
  className = '',
  showSearch = true,
  options = [],
  disabled = false,
  mode = '',
  allowClear,
  defaultValue,
  disableInputFields = false,
  hide = false,
  helperText = "",
  onChange = () => { },
  placeholder
}: any) => {
  if (hide) {
    return (<></>);
  }
  return (
    <div className={className}>
      <Form.Item name={name} label={label}
        // required={true}
        // rules={rules ? rules : formRuleValidation(t(label))}
        hasFeedback={mode === "multiple" ? false : true}
      >
        <Select
          showSearch={showSearch}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled || disableInputFields}
          onChange={onChange}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          autoComplete="new-state"
          mode={mode}
          allowClear={allowClear}
          filterOption={(input, option: any) => {
            return option.label?.toLowerCase()?.includes(input?.toLowerCase());
          }}
          suffixIcon={<CaretDownOutlined />}
          options={options}
        />
      </Form.Item>
      {
        helperText &&
        <>
        </>
      }
    </div>
  );
};

export default DasAntdSelect;
