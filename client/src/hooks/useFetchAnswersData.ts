'use client'

import {useAppDispatch} from "@/store/store";
import {useSelector} from "react-redux";
import {getActivityLevel, getDiscomfortArea, getFootType, getGender} from "@/store/reducers/answersData.selectors";
import {questionnaireDataController} from "@/store/reducers/data.helpers";
import {useEffect} from "react";
import {fetchAnswersData} from "@/store/reducers/answersData.asyncThunks";
import { insolesTypes } from "@/store/reducers/data";

export const useFetchAnswersData = () => {

    const dispatch = useAppDispatch();
    const gender = useSelector(getGender);
    const discomfortArea = useSelector(getDiscomfortArea);
    const footType = useSelector(getFootType);
    const activityLevel = useSelector(getActivityLevel);
    const results = questionnaireDataController({
        gender, discomfortArea,
        footType, activityLevel
    });

    useEffect(()=>{

        dispatch(fetchAnswersData({
            gender,
            discomfortArea,
            footType,
            activityLevel,
            insoles: results!
        }));
        
    },[])

    return results;
};

export const useResetArduinoData = () => {

    const dispatch = useAppDispatch();
    const gender = useSelector(getGender);
    const discomfortArea = useSelector(getDiscomfortArea);
    const footType = useSelector(getFootType);
    const activityLevel = useSelector(getActivityLevel);
    const results = questionnaireDataController({
        gender, discomfortArea,
        footType, activityLevel
    });

    useEffect(()=>{
        dispatch(fetchAnswersData({
            gender: undefined,
            discomfortArea: undefined,
            footType: undefined,
            activityLevel: undefined,
            insoles: [insolesTypes[1]]
        }));
    },[])

    return results;
};