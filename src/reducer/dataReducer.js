export const initialData={};
export const dataReducer=(state,action)=>{
const {type,payload}=action;
switch(type){
    case '':return payload;
    default:return state;
}
}