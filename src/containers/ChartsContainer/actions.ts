import { ActionTypes } from "./constants";
import { ChartsData } from "./types";

const requestAllChartsDataSuccess = (payload: ChartsData[]) => {
  return {
    type: ActionTypes.REQUEST_ALL_CHARTS_DATA_SUCCESS,
    payload,
  };
};

const requestAllChartsDataError = (payload: boolean) => {
  return {
    type: ActionTypes.REQUEST_ALL_CHARTS_DATA_ERROR,
    payload,
  };
};
export { requestAllChartsDataSuccess, requestAllChartsDataError };
