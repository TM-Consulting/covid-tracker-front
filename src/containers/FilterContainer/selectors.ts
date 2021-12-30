import { createSelector } from "reselect";
import _ from "lodash";
import { GlobalState } from "../../utils/types";
import { FiltersState } from "./types";

const selectFiltersDomain = (globalState: GlobalState): FiltersState =>
  globalState.filtersState;

const makeSelectCity = () =>
  createSelector(selectFiltersDomain, (filtersState: FiltersState) =>
    _.get(filtersState, "city", "")
  );

const makeSelectCountry = () =>
  createSelector(selectFiltersDomain, (filtersState: FiltersState) =>
    _.get(filtersState, "country", "")
  );

const makeSelectCountries = () =>
  createSelector(selectFiltersDomain, (filtersState: FiltersState) =>
    _.get(filtersState, "countries.data", null)
  );

const makeSelectCities = () =>
  createSelector(selectFiltersDomain, (filtersState: FiltersState) =>
    _.get(filtersState, "cities.data", null)
  );

const makeSelectCountriesError = () =>
  createSelector(selectFiltersDomain, (filtersState: FiltersState) =>
    _.get(filtersState, "countriesLoadError", false)
  );

const makeSelectCitiesError = () =>
  createSelector(selectFiltersDomain, (filtersState: FiltersState) =>
    _.get(filtersState, "citiesLoadError", false)
  );

export {
  makeSelectCity,
  makeSelectCountry,
  makeSelectCountries,
  makeSelectCountriesError,
  makeSelectCities,
  makeSelectCitiesError,
};
