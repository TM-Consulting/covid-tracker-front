import { mockedData } from "../../utils/constants";
import { Action } from "../../utils/types";
import { ActionTypes } from "./constants";
import { ChartsState } from "./types";

const initialState: ChartsState = {
  data: mockedData,
  error: false,
};
const ChartsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_ALL_CHARTS_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ActionTypes.REQUEST_ALL_CHARTS_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ChartsReducer;
