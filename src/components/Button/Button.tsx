import { ButtonHTMLAttributes, ReactNode, FC } from "react";
import classNames from "classnames";
import { Icon } from "../Icon";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: ReactNode;
  icon?: "none" | "start" | "end";
  iconName?: "favorite" | "chevron_left" | "chevron_right";
}

export const Button: FC<ButtonProps> = ({
  kind = "primary",
  size = "md",
  className,
  children,
  icon = "none",
  iconName = "favorite",
  ...props
}) => {
  const componentClasses = classNames(
    "button",
    [`button__${kind}`],
    [`button__${size}`],
    className
  );

  return (
    <button className={componentClasses} {...props}>
      <div className="button__backing" />
      {icon == "start" && (
        <Icon className="button__icon" iconName={iconName} filled />
      )}
      <div className="button__label">{children}</div>
      {icon == "end" && (
        <Icon className="button__icon" iconName={iconName} filled />
      )}
    </button>
  );
};
