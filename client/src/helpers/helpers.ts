import {answersDataActions} from "@/store/reducers/answersData.slice";
import {Dispatch, RefObject} from "react";
import {AnswersStore, InsolesNameList, InsolesNumberList} from "@/store/reducers/data.types";
import {AnyAction, CombinedState, ThunkDispatch} from "@reduxjs/toolkit";
import { useResetArduinoData } from "@/hooks/useFetchAnswersData";
import { fetchApi } from "@/api/api";

export type Mods = Record<string, boolean | string | undefined>

export const combineClassnames = (
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
    .filter(([cls, clsValue]) => Boolean(clsValue))
    .map(([cls]) => cls),
].join(' ');

export const onResetButtonClick = async ({dispatch, linkRef, timeoutId}: {dispatch:  ThunkDispatch<CombinedState<{answersData: AnswersStore}>, undefined, AnyAction> & Dispatch<AnyAction>, linkRef: RefObject<HTMLAnchorElement>, timeoutId: any}) => {

    await fetchApi.postRequest({
        gender: "male",
        discomfortArea: "back",
        footType: "high",
        activityLevel: "office",
        insoles: [
            {
                name: InsolesNameList.DefaultContent,
                number: InsolesNumberList.DefaultContent
            }
        ],
        endpoint: "send-data-to-controller"
    })
    console.log("reset")
    clearTimeout(timeoutId);
    linkRef.current?.click();

};