import {Request, Response} from "express";
//import {serialPort} from "../serial-port/serial-port";
import {systemVariables} from "../system-variables/system-variables";
import { QuestionnaireDataParams, TypesOfInsoles } from "../types/types";
import { serialPort } from "../serial-port/serial-port";

export interface FetchApiProps extends QuestionnaireDataParams {
    insoles: TypesOfInsoles[]
    endpoint: string
}

class HttpController {

    async getQueryParams(req: Request){
        console.log(req.query);
    }

    async sendDataToController(req: Request, res: Response){

        try {
            const {
                // gender,
                // discomfortArea,
                // footType,
                // activityLevel,
                insoles
            }: FetchApiProps = req.body;
    
            const insolesNumbersArray = insoles?.map(insole => {
                return insole.number
            });
            
            const stringifiedData = JSON.stringify(insolesNumbersArray);
            const dataToWrite = stringifiedData.trim() === "[1]" ? "[]" : stringifiedData;
    
            console.log(dataToWrite);
            serialPort?.write(
                dataToWrite + "\n",
                (err: any) => { err !== undefined && console.log(`Error: ${err}`)}
            );
    
            return res.json({"res": "res"});
        } catch (error) {
            if(error instanceof TypeError) {
                console.log("\x1b[33m", "Error in sendDataToController (HttpContoller):", "\x1b[31m", error.message, "\x1b[0m")

            }
        }

    }

}

export const httpController = new HttpController();