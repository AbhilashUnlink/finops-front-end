/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import clsx from 'clsx';
import './style.css'; // Import the external stylesheet

interface ButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'danger' | 'primary1'; // Button styles
  className?: string;
  [key: string]: any; // Allow additional props
}

export function CustomButton({ children, className, type, loading, ...rest }: ButtonProps) {
  const buttonClasses = clsx(
    'base-button', // Shared base styles
    {
      'primary-button': type === 'primary',
      'secondary-button': type === 'secondary',
      'danger-button': type === 'danger',
      'primary1-button': type === 'primary1',
    },
    className
  );

  return (
    <button
      disabled={loading}
      {...rest}
      className={buttonClasses}
    >
      {children}
      {loading && (
        <Spin
          indicator={<LoadingOutlined spin />}
          size="small"
          style={{ marginLeft: '10px', color: 'white' }}
        />
      )}
    </button>
  );
}
