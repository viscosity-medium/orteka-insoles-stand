import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchApi} from "@/api/api";
import {QuestionnaireDataParams, TypesOfInsoles} from "@/store/reducers/data.types";

export interface FetchAnswerDataProps extends QuestionnaireDataParams{
    insoles: TypesOfInsoles[]
}

export const fetchAnswersData = createAsyncThunk(
    "answers-data/send-completed-questionnaire",
    async ({gender, discomfortArea, footType, activityLevel, insoles }: FetchAnswerDataProps) => {
        console.log(insoles)
        await fetchApi.postRequest({
            gender,
            discomfortArea,
            footType,
            activityLevel,
            insoles,
            endpoint: "send-data-to-controller"
        })

    }
)