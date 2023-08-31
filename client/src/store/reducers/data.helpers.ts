import {insolesTypes} from "./data";
import {QuestionnaireDataController} from "./data.types";

export const questionnaireDataController: QuestionnaireDataController = ({
    gender,
    discomfortArea,
    footType,
    activityLevel
}) => {

    if(
        gender &&
        discomfortArea === "none" &&
        footType === "high" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[9],
            insolesTypes[11],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "high" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "high" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[13],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "high" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[8],
            insolesTypes[9],
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "high" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[9],
            insolesTypes[17],
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "high" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12],
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "high" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[13],
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "high" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[9],
            insolesTypes[14],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "high" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[3],
            insolesTypes[8],
            insolesTypes[18],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "high" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "high" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[13],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "high" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[3],
            insolesTypes[5],
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "high" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[9],
            insolesTypes[17],
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "high" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[18],
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "high" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[13],
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "high" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[9],
            insolesTypes[11],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "middle" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[8],
            insolesTypes[9],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "middle" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "middle" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "middle" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[13],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "middle" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[9],
            insolesTypes[14]
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "middle" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[8],
            insolesTypes[9]
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "middle" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12]
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "middle" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[3],
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "middle" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[8],
            insolesTypes[11]
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "middle" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[3],
            insolesTypes[5],
            insolesTypes[18]
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "middle" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12]
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "middle" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "middle" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[3],
            insolesTypes[5]
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "middle" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[9],
            insolesTypes[10]
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "middle" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[18]
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "middle" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[13]
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "middle" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[2],
            insolesTypes[9],
            insolesTypes[10]
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "low" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[14],
            insolesTypes[15],
            insolesTypes[16]
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "low" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12]
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "low" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[13],
        ];
    }
    else if(
        gender &&
        discomfortArea === "none" &&
        footType === "low" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[15],
            insolesTypes[16],
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "low" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[10],
            insolesTypes[15],
            insolesTypes[16]
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "low" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12]
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "low" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
        ];
    }
    else if(
        gender &&
        discomfortArea === "middle" &&
        footType === "low" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[15],
            insolesTypes[16],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "low" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[26],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "low" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "low" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
        ];
    }
    else if(
        gender &&
        discomfortArea === "back" &&
        footType === "low" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[26],
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "low" &&
        activityLevel === "walk"
    ) {
        return [
            insolesTypes[15],
            insolesTypes[16],
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "low" &&
        activityLevel === "specialSport"
    ) {
        return [
            insolesTypes[6],
            insolesTypes[7],
            insolesTypes[12],
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "low" &&
        activityLevel === "run"
    ) {
        return [
            insolesTypes[6],
        ];
    }
    else if(
        gender &&
        discomfortArea === "front" &&
        footType === "low" &&
        activityLevel === "office"
    ) {
        return [
            insolesTypes[15],
            insolesTypes[16],
        ];
    }

}