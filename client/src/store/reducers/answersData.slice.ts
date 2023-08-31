import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActivityLevel, AnswersStore, DiscomfortArea, FootType, Gender, Purpose} from "./data.types";
import {fetchAnswersData} from "@/store/reducers/answersData.asyncThunks";

const answersData: AnswersStore = {
    gender: undefined,
    discomfortArea: undefined,
    footType: undefined,
    purpose: undefined,
    activityLevel: undefined
};

const answersDataSlice = createSlice({
    name: "answers-data",
    initialState: answersData,
    reducers: {
        setGender: (state, action: PayloadAction<Gender>) => {state.gender = action.payload},
        setDiscomfortArea: (state, action: PayloadAction<DiscomfortArea>) => {state.discomfortArea = action.payload},
        setFootType: (state, action: PayloadAction<FootType>) => {state.footType = action.payload},
        setPurpose: (state, action: PayloadAction<Purpose>) => {state.purpose = action.payload},
        setActivityLevel: (state, action: PayloadAction<ActivityLevel>) => {state.activityLevel = action.payload},
        setResetAnswersData: () => ({
            gender: undefined,
            discomfortArea: undefined,
            footType: undefined,
            purpose: undefined,
            activityLevel: undefined
        })
    },
    extraReducers: (builder) => {
        builder.addCase( fetchAnswersData.pending, () => {});
        builder.addCase( fetchAnswersData.fulfilled, () => {});
        builder.addCase( fetchAnswersData.rejected, (error) => {
            console.log(error)
        });
    }
});

export const {
    reducer: answersDataReducer,
    actions: answersDataActions
} = answersDataSlice;