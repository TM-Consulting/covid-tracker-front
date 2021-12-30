import { ActionTypes } from "./constants";
import { CountryCity } from "./types";

const setCity = (payload: string) => {
  return {
    type: ActionTypes.SET_CITY,
    payload,
  };
};
const setCountry = (payload: string) => {
  return {
    type: ActionTypes.SET_COUNTRY,
    payload,
  };
};

const requestCountries = () => {
  return {
    type: ActionTypes.REQUEST_COUNTRIES,
  };
};

const requestCountriesSuccess = (payload: CountryCity[]) => {
  return {
    type: ActionTypes.REQUEST_COUNTRIES_SUCCESS,
    payload,
  };
};
const requestCountriesError = (payload: boolean) => {
  return {
    type: ActionTypes.REQUEST_COUNTRIES_ERROR,
    payload,
  };
};

const requestCities = () => {
  return {
    type: ActionTypes.REQUEST_CITIES,
  };
};

const requestCitiesSuccess = (payload: CountryCity[]) => {
  return {
    type: ActionTypes.REQUEST_CITIES_SUCCESS,
    payload,
  };
};
const requestCitiesError = (payload: boolean) => {
  return {
    type: ActionTypes.REQUEST_CITIES_ERROR,
    payload,
  };
};

export {
  setCity,
  setCountry,
  requestCountries,
  requestCountriesSuccess,
  requestCountriesError,
  requestCities,
  requestCitiesSuccess,
  requestCitiesError,
};
