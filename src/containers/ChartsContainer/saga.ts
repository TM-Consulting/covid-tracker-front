import { takeLatest, select, call, put } from "redux-saga/effects";
import { makeRequest } from "../../utils/request";
import { BACK_URL } from "../../variables";
import { ActionTypes } from "./constants";
import { ChartsData } from "./types";

function* chartsSaga() {
  yield takeLatest(ActionTypes.REQUEST_ALL_CHARTS_DATA, requestChartsData);
}

function* requestChartsData() {
  const options = {
    method: "POST",
    url: `${BACK_URL}users/login`,
    responseType: "json",
    data: {},
  };

  try {
    const response: ChartsData[] | null = yield call(makeRequest, options);
    console.log("success dispatched sage", response);
  } catch (err: any) {}
}

export default chartsSaga;
