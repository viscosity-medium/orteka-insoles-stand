import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {UseAppDispatch} from "@/store/store.types";
import {answersDataReducer as answersData} from "@/store/reducers/answersData.slice";

const store = configureStore({
    reducer: combineReducers({
        answersData
    })
});
const useAppDispatch: UseAppDispatch = useDispatch;

export {
    store,
    useAppDispatch
};