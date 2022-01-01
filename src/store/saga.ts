import { fork } from "redux-saga/effects";
import filtersSaga from "../containers/FilterContainer/saga";
import chartsSaga from "../containers/ChartsContainer/saga";
import statsSaga from "../containers/StatsContainer/saga";

function* rootSaga() {
  yield fork(filtersSaga);
  yield fork(chartsSaga);
  yield fork(statsSaga);
}

export default rootSaga;
