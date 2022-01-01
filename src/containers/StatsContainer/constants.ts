enum ActionTypes {
  REQUEST_STATS = "covid/tracker/greentec-capital/REQUEST_STATS",
  REQUEST_STATS_SUCCESS = "covid/tracker/greentec-capital/REQUEST_STATS_SUCCESS",
  REQUEST_STATS_ERROR = "covid/tracker/greentec-capital/REQUEST_STATS_ERROR",
}

const alertError = {
  type: "error",
  message: "Error loading Statistics",
};
export { ActionTypes, alertError };
