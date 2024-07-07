import {ButtonHTMLAttributes, ReactNode, FC} from 'react';
import classNames from 'classnames';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary';
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ kind="primary", size="md", className, children, ...props }) => {
  const componentClasses = classNames(
    "c-button",
    [`c-button__${kind}`],
    [`c-button__${size}`],
    className
  );

  return (
    <button className={componentClasses} {...props} >
      {children}
    </button>
  );
};

export default Button;
