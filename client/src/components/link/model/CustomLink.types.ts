import {ReactNode, RefObject} from "react";

export interface CustomLinkProps {
    href: string
    reference?: RefObject<HTMLAnchorElement>
    children?: ReactNode
}