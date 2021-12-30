import { createSelector } from "reselect";
import _ from "lodash";
import { GlobalState } from "../../utils/types";
import { ChartsState } from "./types";

const selectChartsDomain = (globalState: GlobalState): ChartsState =>
  globalState.chartsState;

const makeSelectChartsData = () =>
  createSelector(selectChartsDomain, (chartsState: ChartsState) =>
    _.get(chartsState, "data", null)
  );

const makeSelectChartsError = () =>
  createSelector(selectChartsDomain, (chartsState: ChartsState) =>
    _.get(chartsState, "error", false)
  );

export { makeSelectChartsData, makeSelectChartsError };
