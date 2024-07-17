import { FC } from "react";
import "./main-navigation.css";
import classNames from "classnames";

type MainNavigationProps = {
  className?: string;
};

export const MainNavigation: FC<MainNavigationProps> = ({
  className,
  ...props
}) => {
  const componentClasses = classNames("main-navigation", className, {
    // Add more classes here
  });

  return (
    <nav className={componentClasses} {...props}>
      Nav here
    </nav>
  );
};
