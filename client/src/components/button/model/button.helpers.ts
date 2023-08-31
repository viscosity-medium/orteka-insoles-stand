import Male from "@/assets/button-male.svg";
import Female from "@/assets/button-female.svg";
import DiscomfortNoDiscomfort from "@/assets/button-no-discomfort.svg";
import DiscomfortArch from "@/assets/button-discomfort-arch.svg";
import DiscomfortBack from "@/assets/button-discomfort-back.svg";
import DiscomfortFront from "@/assets/button-discomfort-front.svg";
import ArchLow from "@/assets/button-arch-low.svg";
import ArchMiddle from "@/assets/button-arch-middle.svg";
import ArchHigh from "@/assets/button-arch-high.svg";
import ArchNoInfo from "@/assets/button-arch-no-info.svg";
import PurposeSport from "@/assets/button-purpose-sport.svg";
import PurposeDaily from "@/assets/button-purpose-walk.svg";
import ActivitySport from "@/assets/button-activity-special-sport.svg";
import ActivityRun from "@/assets/button-activity-run.svg";
import ActivityOffice from "@/assets/button-activity-office.svg";
import ActivityWalk from "@/assets/button-activity-walk.svg";

import {ActivityLevel, DiscomfortArea, FootType, Gender, Purpose} from "../../../store/reducers/data.types";
import {answersDataActions} from "@/store/reducers/answersData.slice";
import {RefObject} from "react";
import {AppDispatch} from "@/store/store.types";

interface OnButtonClick {
    linkRef: RefObject<HTMLAnchorElement>
    dispatch: AppDispatch
    timeoutId: any
    gender?: Gender,
    discomfortArea?: DiscomfortArea,
    footType?: FootType,
    purpose?: Purpose,
    activityLevel?: ActivityLevel
}

type GetButtonsData = Omit<OnButtonClick, "discomfortArea">


export const onButtonWithImageClick = ({
    linkRef,
    dispatch,
    gender,
    timeoutId,
    discomfortArea,
    footType,
    purpose,
    activityLevel
}: OnButtonClick) => {

    if (gender){
        dispatch(answersDataActions.setGender(gender));
    }
    else if(discomfortArea){
        dispatch(answersDataActions.setDiscomfortArea(discomfortArea));
    }
    else if(footType){
        dispatch(answersDataActions.setFootType(footType));
    }
    else if(purpose){
        dispatch(answersDataActions.setPurpose(purpose));
    }
    else if(activityLevel){
        dispatch(answersDataActions.setActivityLevel(activityLevel));
    }
    clearTimeout(timeoutId);
    linkRef.current?.click();

};

export const getButtonsData = ({
    linkRef,
    dispatch,
    timeoutId
}: GetButtonsData) => ({
    gender: [
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, gender: "male", timeoutId});
            },
            imageSource: Male,
            imageDescription: "male.svg"
        },
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, gender: "female", timeoutId});
            },
            imageSource: Female,
            imageDescription: "female.svg"
        },
    ],
    discomfortArea: [
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, discomfortArea: "none", timeoutId});
            },
            imageSource: DiscomfortNoDiscomfort,
            imageDescription: "no-discomfort.svg"
        },
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, discomfortArea: "middle", timeoutId});
            },
            imageSource: DiscomfortArch,
            imageDescription: "button-discomfort-arch.svg"
        },
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, discomfortArea: "back", timeoutId});
            },
            imageSource: DiscomfortBack,
            imageDescription: "button-discomfort-back.svg"
        },
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, discomfortArea: "front", timeoutId});
            },
            imageSource: DiscomfortFront,
            imageDescription: "button-discomfort-front.svg"
        }
    ],
    footType: [
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, footType: "low", timeoutId});
            },
            imageSource: ArchLow,
            imageDescription: "button-arch-low.svg"
        },
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, footType: "middle", timeoutId});
            },
            imageSource: ArchMiddle,
            imageDescription: "button-arch-middle.svg"
        },
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, footType: "high", timeoutId});
            },
            imageSource: ArchHigh,
            imageDescription: "button-arch-high.svg"
        },
        // {
        //     onClickHandler: () => {
        //         onButtonWithImageClick({linkRef, dispatch, footType: "noInfo"});
        //     },
        //     imageSource: ArchNoInfo,
        //     imageDescription: "button-arch-no-info.svg"
        // }
    ],
    purpose:[
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, purpose: "sport", timeoutId});
            },
            imageSource: PurposeSport,
            imageDescription: "purpose-sport.svg"
        },
        {
            onClickHandler: () => {
                onButtonWithImageClick({linkRef, dispatch, purpose: "daily", timeoutId});
            },
            imageSource: PurposeDaily,
            imageDescription: "purpose-walk.svg"
        }
    ],
    activityLevel: {
        sport: [
            {
                onClickHandler: () => {
                    onButtonWithImageClick({linkRef, dispatch, activityLevel: "specialSport", timeoutId});
                },
                imageSource: ActivitySport,
                imageDescription: "activity-sport.svg"
            },
            {
                onClickHandler: () => {
                    onButtonWithImageClick({linkRef, dispatch, activityLevel: "run", timeoutId});
                },
                imageSource: ActivityRun,
                imageDescription: "activity-run.svg"
            }
        ],
        daily: [
            {
                onClickHandler: () => {
                    onButtonWithImageClick({linkRef, dispatch, activityLevel: "office", timeoutId});
                },
                imageSource: ActivityOffice,
                imageDescription: "activity-office.svg"
            },
            {
                onClickHandler: () => {
                    onButtonWithImageClick({linkRef, dispatch, activityLevel: "walk", timeoutId});
                },
                imageSource: ActivityWalk,
                imageDescription: "activity-walk.svg"
            },
        ]
    }

});