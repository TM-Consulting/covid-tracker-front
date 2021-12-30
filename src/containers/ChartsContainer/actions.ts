import { ActionTypes } from "./constants";
import { ChartsData } from "./types";

const requestAllChartsData = () => {
  return {
    type: ActionTypes.REQUEST_ALL_CHARTS_DATA,
  };
};
const requestAllChartsDataSuccess = (payload: ChartsData) => {
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
export {
  requestAllChartsData,
  requestAllChartsDataSuccess,
  requestAllChartsDataError,
};
