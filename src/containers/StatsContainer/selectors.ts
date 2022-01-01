import { createSelector } from "reselect";
import _ from "lodash";
import { GlobalState } from "../../utils/types";
import { StatsState } from "./types";

const selectStatsDomain = (globalState: GlobalState): StatsState =>
  globalState.statsState;

const makeSelectStatsDoses = () =>
  createSelector(selectStatsDomain, (statsState: StatsState) =>
    _.get(statsState, "data.data.doses", null)
  );

const makeSelectStatsCibledPeople = () =>
  createSelector(selectStatsDomain, (statsState: StatsState) =>
    _.get(statsState, "data.data.cibledPeople", 0)
  );

const makeSelectStatsError = () =>
  createSelector(selectStatsDomain, (statsState: StatsState) =>
    _.get(statsState, "error", false)
  );

export {
  makeSelectStatsDoses,
  makeSelectStatsCibledPeople,
  makeSelectStatsError,
};
