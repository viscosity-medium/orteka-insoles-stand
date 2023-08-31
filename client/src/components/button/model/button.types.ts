import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type ButtonSize = "big" | "small" | "fullSize";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string
    buttonSize: ButtonSize
}

export interface ButtonWithImageProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    imageSrc: string,
    imageDescription: string
}