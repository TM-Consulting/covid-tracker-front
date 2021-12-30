import { fork } from "redux-saga/effects";
import filtersSaga from "../containers/FilterContainer/saga";
import chartsSaga from "../containers/ChartsContainer/saga";

function* rootSaga() {
  yield fork(filtersSaga);
  yield fork(chartsSaga);
}

export default rootSaga;
