import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import "./icon.css";

type IconProps = {
  className?: string;
  iconName?: string;
  filled?: boolean;
  weight?: "light" | "regular" | "heavy";
} & HTMLAttributes<HTMLElement>;

export const Icon: FC<IconProps> = ({
  className,
  iconName = "grid_guides",
  filled = false,
  weight = "regular",
  ...props
}) => {
  const componentClasses = classNames("icon", className, {
    [`icon--filled`]: filled,
    [`icon--weight-${weight}`]: weight,
  });
  return (
    <i className={componentClasses} {...props}>
      {iconName}
    </i>
  );
};
