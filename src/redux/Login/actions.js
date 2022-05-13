import {  IS_LOADING } from "./actiontypes";
import { LOG_IN } from "./actiontypes";
import { IS_ERROR} from "./actiontypes";


export const isLoading = ()=>({
    type: IS_LOADING,
    
});

export const isLogin = (data)=>({
    type: LOG_IN,
    payload: data
});

export const isError = (data)=>({
    type: IS_ERROR,
    payload: data
});
