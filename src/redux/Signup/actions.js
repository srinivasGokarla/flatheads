
import {  IS_LOADING } from "./actiontypes";
import { SIGN_UP } from "./actiontypes";
import { IS_ERROR} from "./actiontypes";


export const isLoading = ()=>({
    type: IS_LOADING,
    
});

export const isSignup = (data)=>({
    type: SIGN_UP,
    payload: data
});

export const isError = (data)=>({
    type: IS_ERROR,
    payload: data
});
