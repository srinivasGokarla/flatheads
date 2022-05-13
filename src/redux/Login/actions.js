import {  IS_LOADING,LOG_IN, IS_ERROR  } from "./actionTypes";



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
