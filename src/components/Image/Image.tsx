import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import "./image.css";

type ImageProps = {
  className?: string;
  imgSrc: string;
  imgAlt: string;
  width: number;
  height: number;
  isVideo?: boolean;
  aspectRatio?:
    | "none"
    | "1-1"
    | "2-1"
    | "3-4"
    | "4-3"
    | "3-2"
    | "16-9"
    | "21-9"
    | "32-9";
  onClick?: () => void;
} & HTMLAttributes<HTMLElement>;

const ThumbnailIcon: FC = () => {
  return (
    <div className="image__video-thumb">
      <svg
        className="image__video-thumb-inner"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 36 42"
      >
        <path
          fill="#F8F8F8"
          d="M6.9.7A4.5 4.5 0 0 0 0 4.5v33c0 1.6.9 3.1 2.3 4 1.4.7 3.2.7 4.6-.2l27-16.5a4.5 4.5 0 0 0 0-7.7L6.8.6Z"
        />
      </svg>
    </div>
  );
};

export const Image: FC<ImageProps> = ({
  className,
  imgSrc,
  imgAlt,
  aspectRatio,
  width = 400,
  height = 300,
  isVideo,
  onClick,
  ...props
}) => {
  const componentClasses = classNames("image-container", className, {
    // Add more classes here
  });

  const imgClasses = classNames("image", className, {
    // Add more classes here
    [`image--aspect-${aspectRatio}`]: aspectRatio,
  });
  return (
    <>
      <div className={componentClasses} onClick={onClick}>
        <img
          width={width}
          height={height}
          className={imgClasses}
          src={imgSrc}
          alt={imgAlt}
          {...props}
        />
        {isVideo && <ThumbnailIcon />}
      </div>
    </>
  );
};
