import { takeLatest, select, call, put } from "redux-saga/effects";
import { buildTracksQueryParams, makeRequest } from "../../utils/request";
import { BACK_URL } from "../../variables";
import {
  makeSelectCity,
  makeSelectCountry,
} from "../FilterContainer/selectors";
import {
  requestAllChartsDataError,
  requestAllChartsDataSuccess,
} from "./actions";
import { ActionTypes } from "./constants";
import { ActionTypes as FilterActionTypes } from "../FilterContainer/constants";
import { ChartsData } from "./types";

function* chartsSaga() {
  yield takeLatest(
    [FilterActionTypes.SET_CITY, FilterActionTypes.SET_COUNTRY],
    requestChartsData
  );
}

function* requestChartsData() {
  const city: string = yield select(makeSelectCity());
  const country: string = yield select(makeSelectCountry());
  const options = {
    method: "GET",
    url: `${BACK_URL}tracks${buildTracksQueryParams(country, city)}`,
    responseType: "json",
  };

  try {
    const response: ChartsData[] = yield call(makeRequest, options);
    console.log("testtttt response", response);
    yield put(requestAllChartsDataSuccess(response));
  } catch (err: any) {
    yield put(requestAllChartsDataError(true));
  }
}

export default chartsSaga;
