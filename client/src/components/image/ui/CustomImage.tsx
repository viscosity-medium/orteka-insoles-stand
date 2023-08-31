import Image from "next/image";
import {FC} from "react";

import cls from "./CustomImage.module.scss";
import {combineClassnames} from "@/helpers/helpers";
import {NextImageProps, ObjectFitClasses, PositionClasses} from "@/components/image/model/CustomImage.types";

const CustomImage: FC<NextImageProps> = ({
	src,
	alt,
    width = 0,
    height = 0,
    className = "",
	position = "relative",
    objectFit = "cover"
}) => {

    const positionClasses: PositionClasses = {
        relative: cls.positionRelative,
        absolute: cls.positionAbsolute
    };
    const objectFitClasses: ObjectFitClasses ={
        contain: cls.objectFitContain,
        cover: cls.objectFitCover
    }

    const classes = [
        positionClasses[position],
        objectFitClasses[objectFit]
    ]

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={combineClassnames(className, {}, classes)}
        >

        </Image>
    );
};

export { CustomImage };