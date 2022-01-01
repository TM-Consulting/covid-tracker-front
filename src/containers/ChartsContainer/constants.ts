enum ActionTypes {
  REQUEST_ALL_CHARTS_DATA_SUCCESS = "covid/tracker/greentec-capital/REQUEST_ALL_CHARTS_DATA_SUCCESS",
  REQUEST_ALL_CHARTS_DATA_ERROR = "covid/tracker/greentec-capital/REQUEST_ALL_CHARTS_DATA_ERROR",
}

const alertError = {
  type: "error",
  message: "Error loading charts",
};
export { ActionTypes, alertError };
