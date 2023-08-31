import {RefObject} from "react";

export type TextTheme = ('primary' | 'inverted'| 'error');

export type TextAlign = ('left' | 'right' | 'center');

export type TextSize = ('medium' | 'large');

export type TextTag  = ('span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

export type HTag = Exclude<TextTag, "span" | "p" | "h1">

export type TextColor = "white" | "black" | "orange" ;

export interface TextProps {
    reference?: RefObject<HTMLDivElement>
    className?: string
    tag: TextTag
    children?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
    color?: TextColor
}

export interface DefineTag {
    tag?: TextTag | HTag
    cls?: string
    children?: string
}