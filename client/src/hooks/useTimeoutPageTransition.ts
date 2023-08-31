import {useRouter} from "next/navigation";
import { useResetArduinoData } from "./useFetchAnswersData";
import { fetchApi } from "@/api/api";
import { InsolesNameList, InsolesNumberList } from "@/store/reducers/data.types";

export const useTimeoutPageTransition = () => {

    const router = useRouter();
    const timeoutTime = 120 * 1000;

    return setTimeout(async() => {
        console.log("timeout");
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
        router.push("/");
    },  timeoutTime);

}