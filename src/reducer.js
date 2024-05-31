import { Update_totalCost } from "./actions.js";

const initialState = {
  calculatedvalue: 0,
};

export default costReducer = (state = initialState, action) => {
  switch (action.type) {
    case Update_totalCost:
      return {
        ...state,
        calculatedvalue: action.payload,
      };
    default:
      return state;
  }
};
