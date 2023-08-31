'use client'

import {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react';
import cls from "./frameBorder.module.scss"
import {store} from "@/store/store";
import {Provider} from "react-redux";

type FrameType = "outer" | "inner" | "none";

interface FrameBorderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children?: ReactNode
    borderType?: FrameType
    setStore?: boolean
}

const FrameBorder: FC<FrameBorderProps> = ({
    children,
    borderType = "none",
    setStore = false
}) => {

    const borderTypeClasses: Record<FrameType, string> = {
        outer: cls.outerBorder,
        inner: cls.innerBorder,
        none: ""
    };

    return (
        <>
            {
                setStore ? (
                    <Provider store={store}>
                        <div className={`${cls.frameBorder} ${borderTypeClasses[borderType]}`}>
                            {children}
                        </div>
                    </Provider>
                ) : (
                    <div className={`${cls.frameBorder} ${borderTypeClasses[borderType]}`}>
                        {children}
                    </div>
                )
            }
        </>
    );

};

export {FrameBorder};