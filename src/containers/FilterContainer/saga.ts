import { takeLatest, select, call, put, takeEvery } from "redux-saga/effects";
import { makeRequest } from "../../utils/request";
import { BACK_URL } from "../../variables";
import { requestCitiesSuccess, requestCountriesSuccess } from "./actions";
import { ActionTypes } from "./constants";
import { makeSelectCountry } from "./selectors";
import { CountryCity } from "./types";

function* filtersSaga() {
  yield takeLatest(ActionTypes.REQUEST_COUNTRIES, requestCountriesData);
  yield takeEvery(ActionTypes.SET_COUNTRY, requestCitiesData);
}

function* requestCountriesData() {
  const options = {
    method: "GET",
    url: `${BACK_URL}country/all`,
    responseType: "json",
  };
  try {
    const response: CountryCity[] = yield call(makeRequest, options);
    console.log("success dispatched sage", response);
    yield put(requestCountriesSuccess(response));
  } catch (err: any) {}
}

function* requestCitiesData() {
  const country: string = yield select(makeSelectCountry());
  const options = {
    method: "GET",
    url: `${BACK_URL}country/${country}/cities`,
    responseType: "json",
  };
  try {
    const response: CountryCity[] = yield call(makeRequest, options);
    console.log("success dispatched sage", response);
    yield put(requestCitiesSuccess(response));
  } catch (err: any) {}
}

export default filtersSaga;
