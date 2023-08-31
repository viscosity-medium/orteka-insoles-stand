import {QuestionnaireDataParams, TypesOfInsoles} from "@/store/reducers/data.types";
import { systemVariables } from "@/system-variables/system-variables";



export interface FetchApiProps extends QuestionnaireDataParams {
    insoles: TypesOfInsoles[]
    endpoint: string
}

const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
}

class FetchApi {

    constructor(
        public baseUrl: string
    ) {
        this.baseUrl = `${baseUrl}/server-api/`
    };

    async postRequest({
        gender,
        discomfortArea,
        footType,
        activityLevel,
        insoles,
        endpoint
    }: FetchApiProps){

        await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                gender,
                discomfortArea,
                footType,
                activityLevel,
                insoles
            })
        });

    };

}

export const fetchApi = new FetchApi(
    systemVariables.httpServerHost
);