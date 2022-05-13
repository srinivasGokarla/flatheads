import { IS_LOADING } from "./actiontypes";
import { LOG_IN } from "./actiontypes";
import { IS_ERROR} from "./actiontypes";

let init = {isloading:false,iserror:false,login:false}
export const reducer = (state=init, { type, payload })=>{
    switch (type){
        case IS_LOADING:
            return (
                {
                    ...state,
                    isloading:true
                }
            );
        case IS_ERROR:
            return (
                {
                    ...state,
                    iserror:payload,
                    isloading: false
                }
            );
        case LOG_IN:
            return (
                {
                    ...state,
                    login:payload,
                    isloading: false,
                    iserror:false
                }
            );  
        default:
            return state;    
    }
}