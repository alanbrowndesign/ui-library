import { FC, HTMLAttributes } from "react";
import { Image } from "..";
import classNames from "classnames";
import "./display-image.scss";
import { ImageProps } from "../types/types.image";

type DisplayImageProps = ImageProps & {
  border?: boolean;
  onClick?: () => void;
  blocked?: boolean;
  elevation?: "none" | "low" | "medium" | "high";
};

export const DisplayImage: FC<DisplayImageProps> = ({
  className,
  imgSrc,
  imgAlt,
  aspectRatio,
  width = 400,
  height = 300,
  isVideo,
  blocked,
  border = true,
  elevation = "medium",
  onClick,
  ...props
}) => {
  const componentClasses = classNames("display-image", className, {
    // Add more classes here
    "display-image--border": border,
    [`display-image--elevation-${elevation}`]: elevation,
  });

  return (
    <>
      <div className={componentClasses} onClick={onClick} {...props}>
        <Image
          imgAlt={imgAlt}
          imgSrc={imgSrc}
          width={800}
          height={400}
          isVideo={isVideo}
          aspectRatio={aspectRatio}
        />
      </div>
    </>
  );
};
