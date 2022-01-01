import { Action } from "../../utils/types";
import { ActionTypes } from "./constants";
import { StatsState } from "./types";

const initialState: StatsState = {
  data: null,
  error: false,
};
const statsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_STATS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    case ActionTypes.REQUEST_STATS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default statsReducer;
