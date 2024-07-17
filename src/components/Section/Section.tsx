import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import "./section.scss";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  background?: "main" | "variant" | "contrast";
  colorway?:
    | "default"
    | "primary"
    | "secondary"
    | "supporting"
    | "supporting-variant"
    | "neutral";
} & HTMLAttributes<HTMLElement>;

export const Section: FC<SectionProps> = ({
  className,
  background = "main",
  colorway,
  children,
  ...props
}) => {
  const componentClasses = classNames("section", className, [
    `section--bg-${background}`,
  ]);
  return (
    <div data-ui-colorway={colorway} className={componentClasses} {...props}>
      {children}
    </div>
  );
};
