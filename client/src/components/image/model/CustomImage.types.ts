import {StaticImageData} from "next/image";

export type ImagePosition = "absolute" | "relative";
export type ImageObjectFit = "cover" | "contain";

export type PositionClasses = Record<ImagePosition, string>;
export type ObjectFitClasses = Record<ImageObjectFit, string>

export interface NextImageProps {
    src: StaticImageData | string
    alt: string
    width?: number
    height?: number
    className?: string
    position?: ImagePosition
    objectFit?: ImageObjectFit
}