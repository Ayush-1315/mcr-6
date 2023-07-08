import { restaurantsData } from "../data";
export const initialData = {
  allData: restaurantsData,
  showData: [],
};
export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CUSINE":
      return {
        ...state,
        showData: restaurantsData.filter(
          ({ cuisine_id }) => cuisine_id === payload
        ),
      };
    case "ADD_COMMENT":
      const { id: rID, commentData } = payload;
      return {
        ...state,
        allData: state?.allData.map((restraunt) =>
          restraunt?.id === rID
            ? { ...restraunt, ratings: [...restraunt.ratings, commentData] }
            : restraunt
        ),
      };
    default:
      return state;
  }
};
