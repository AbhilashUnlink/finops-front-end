/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';
import DasAntdSelect from './DasAntdSelect';
import DasAntdCheckbox from './DasAntdCheckbox';
import DasAntdInput from './DasAntdInput';

const CustomFormComponent = ({
    name,
    placeholder,
    label,
    required,
    select = false,
    disabled,
    options,
    title,
    className,
    mode,
    rules,
    tooltip,
    hasFeedback,
    checkbox = false,
    showTooltip = false,
    disableInputFields = false,
    helperText = "",
    onChange
}: any) => {
    return select ? (
        <DasAntdSelect
            label={label}
            options={options}
            name={name}
            mode={mode}
            className={className}
            disabled={disabled}
            rules={rules}
            disableInputFields={disableInputFields}
            helperText={helperText}
            onChange={onChange}
            placeholder={placeholder}
        />
    ) : checkbox ? (
        <DasAntdCheckbox
            name={name}
            label={label}
            className={className}
            rules={rules}
            clasName={className}
            showTooltip={showTooltip}
            disabled={disabled}
            disableInputFields={disableInputFields}
        />
    ) : (
        <DasAntdInput
            name={name}
            label={label}
            required={required}
            placeholder={placeholder}
            title={title}
            className={className}
            rules={rules}
            tooltip={tooltip}
            hasFeedback={hasFeedback}
            disabled={disabled}
            disableInputFields={disableInputFields}
        />
    );
};

export default CustomFormComponent;
