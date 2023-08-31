import Link from "next/link";
import {FC} from "react";
import {CustomLinkProps} from "@/components/link/model/CustomLink.types";

const CustomLink: FC<CustomLinkProps> = ({
    href,
    children,
    reference
}) => {
    return (
        <Link
            href={href}
            ref={reference}
        >
            {
                children
            }
        </Link>
    );
};

export { CustomLink };