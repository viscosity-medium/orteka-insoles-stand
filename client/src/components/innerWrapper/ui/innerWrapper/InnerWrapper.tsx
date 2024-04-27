'use client'

import { FC, ReactNode, useEffect } from "react"

const InnerWrapper: FC<{
    children: ReactNode
}> = ({
    children
}) => {

    useEffect(() => {

        const preventBodyZoomOnPinchGesture = (event: any) => {
            if (event?.scale !== 1) { 
                event?.preventDefault(); 
            }
          }

        document.addEventListener('touchmove', preventBodyZoomOnPinchGesture , { passive: false });

        return () => { document.removeEventListener("touchmove", preventBodyZoomOnPinchGesture) }

    }, [])

    return (
        <>
            {children}
        </>
    )
    
}

export default InnerWrapper