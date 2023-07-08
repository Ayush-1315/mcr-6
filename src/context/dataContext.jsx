import { useContext,createContext,useReducer } from "react";
import { initialData,dataReducer } from "../reducer/dataReducer";
const DataContext=createContext();

export const DataProvider=({children})=>{
    const [state,dispatch]=useReducer(dataReducer,initialData);
    return <DataContext.Provider value={{state,dispatch}}>
        {children}
    </DataContext.Provider>
}
export const useData=()=>useContext(DataContext);
