import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export interface DefinePageContentProps {
    pid: Params
    timeoutId: any
}

export type DefinePageContent = ({pid}: DefinePageContentProps) => (
    {
        questionText: string,
        questionNumber: number,
        spotType: "orange" | "aquamarine"
        buttonsDataProperty:  "gender" | "discomfortArea" | "footType" | "purpose" | "activityLevel",
        nextPageHref: string
    }
)
