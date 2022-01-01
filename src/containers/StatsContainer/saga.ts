import { takeLatest, select, call, put } from "redux-saga/effects";
import { buildTracksQueryParams, makeRequest } from "../../utils/request";
import { BACK_URL } from "../../variables";

import { ActionTypes } from "./constants";
import { ActionTypes as FilterActionTypes } from "../FilterContainer/constants";
import {
  makeSelectCity,
  makeSelectCountry,
} from "../FilterContainer/selectors";
import { DoseData } from "./types";
import { requestStatsError, requestStatsSuccess } from "./actions";

function* statsSaga() {
  yield takeLatest(
    [FilterActionTypes.SET_CITY, FilterActionTypes.SET_COUNTRY],
    requestStatsData
  );
}

function* requestStatsData() {
  const city: string = yield select(makeSelectCity());
  const country: string = yield select(makeSelectCountry());
  const options = {
    method: "GET",
    url: `${BACK_URL}statistics${buildTracksQueryParams(country, city)}`,
    responseType: "json",
  };

  try {
    const response: DoseData = yield call(makeRequest, options);

    yield put(requestStatsSuccess(response));
  } catch (err: any) {
    yield put(requestStatsError(true));
  }
}

export default statsSaga;
