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
        this.baseUrl = `http://${process.env.NEXT_PUBLIC_HTTP_HOST}:${process.env.NEXT_PUBLIC_HTTP_SERVER_PORT}/server-api/`
    };

    async postRequest({
        gender,
        discomfortArea,
        footType,
        activityLevel,
        insoles,
        endpoint
    }: FetchApiProps){

        try {
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
        } catch (error) {
            console.log(error);
        }

    };

}

export const fetchApi = new FetchApi(
    systemVariables.httpServerHost
);