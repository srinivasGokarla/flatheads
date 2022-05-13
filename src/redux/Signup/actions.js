
import {  IS_LOADING, SIGN_UP, IS_ERROR  } from "./actionTypes";



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
