"use client"

import { FC } from 'react';
import cls from './button.module.scss';
import {combineClassnames} from "@/helpers/helpers";
import {Image} from "@/components/image";
import {ButtonProps, ButtonSize, ButtonWithImageProps} from "@/components/button/model/button.types";

const Button: FC<ButtonProps> = ({
    className,
    children,
    buttonSize,
    ...otherProps
}) => {

    const buttonSizeClasses: Record<ButtonSize, string> = {
        big: cls.bigButtonSize,
        small: cls.smallButtonSize,
        fullSize: cls.fullSize
    };

    const classes = `${cls.button} ${className} ${buttonSizeClasses[buttonSize]}`

    return (
        <button
            type="button"
            className={combineClassnames(classes)}
            {...otherProps}
        >
            {children}
        </button>
    );
};

const ButtonWithImage = ({
    imageSrc,
    imageDescription,
    ...otherProps
}: ButtonWithImageProps) => {

    return(
        <Button
            buttonSize={"big"}
            {...otherProps}
        >
            <Image
                src={imageSrc}
                alt={imageDescription}
                width={280}
            />
        </Button>
    )

};

export { Button, ButtonWithImage };
