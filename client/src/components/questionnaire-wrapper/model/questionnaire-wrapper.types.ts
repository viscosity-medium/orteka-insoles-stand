import {ReactNode} from "react";

interface ButtonDataItem {
    onClickHandler: void,
    imageSource: string,
    imageDescription: string
}

export interface QuestionnaireWrapperProps {
    buttonsData?: {
        gender: ButtonDataItem[]
        discomfortArea: ButtonDataItem[]
        footType: ButtonDataItem[]
        purpose: ButtonDataItem
        activityLevel: {
            sport: ButtonDataItem[]
            daily: ButtonDataItem[]
        }
    }
    questionNumber: number
    questionText: string
    spotType: "orange" | "aquamarine"
    children: ReactNode
}