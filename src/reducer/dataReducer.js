import { restaurantsData } from "../data";
export const initialData=null;
export const dataReducer=(state,action)=>{
const {type,payload}=action;
switch(type){
    case 'SET_CUSINE':    
    return restaurantsData.filter(({cuisine_id})=>cuisine_id===payload);
    default:return state;
}
}