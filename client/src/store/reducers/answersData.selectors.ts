import {StateSchema} from "@/store/store.types";

export const getGender = (state: StateSchema) => state.answersData.gender;
export const getDiscomfortArea = (state: StateSchema) => state.answersData.discomfortArea;
export const getFootType = (state: StateSchema) => state.answersData.footType;
export const getPurpose = (state: StateSchema) => state.answersData.purpose;
export const getActivityLevel = (state: StateSchema) => state.answersData.activityLevel;