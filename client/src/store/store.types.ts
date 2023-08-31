import {store} from "@/store/store";
import {AnswersStore} from "./reducers/data.types";

export interface StateSchema {
    answersData: AnswersStore
}
export type AppDispatch = typeof store.dispatch;
export type UseAppDispatch = () => AppDispatch;