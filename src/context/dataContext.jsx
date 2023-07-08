import { useContext, createContext, useReducer } from "react";
import { initialData, dataReducer } from "../reducer/dataReducer";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialData);
  const addComment = (id, commentData) => {
    dispatch({ type: "ADD_COMMENT", payload: { id, commentData } });
  };
  return (
    <DataContext.Provider value={{ state, dispatch, addComment }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
