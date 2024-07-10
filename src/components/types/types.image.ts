import { HTMLAttributes } from "react";

export type ImageProps = {
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
} & HTMLAttributes<HTMLElement>;
