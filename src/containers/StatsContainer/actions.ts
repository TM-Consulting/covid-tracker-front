import { ActionTypes } from "./constants";
import { DoseData } from "./types";

const requestStats = () => {
  return {
    type: ActionTypes.REQUEST_STATS,
  };
};

const requestStatsSuccess = (payload: DoseData) => {
  return {
    type: ActionTypes.REQUEST_STATS_SUCCESS,
    payload,
  };
};

const requestStatsError = (payload: boolean) => {
  return {
    type: ActionTypes.REQUEST_STATS_ERROR,
    payload,
  };
};
export { requestStats, requestStatsSuccess, requestStatsError };
