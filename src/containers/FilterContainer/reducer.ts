import { Action } from "../../utils/types";
import { ActionTypes } from "./constants";
import { FiltersState } from "./types";

const initialState: FiltersState = {
  city: "",
  country: "",
  cities: null,
  countries: null,
  countriesLoadError: false,
  citiesLoadError: false,
};
const FiltersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionTypes.SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    case ActionTypes.REQUEST_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };
    case ActionTypes.REQUEST_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
      };

    case ActionTypes.REQUEST_CITIES_ERROR:
      return {
        ...state,
        citiesLoadError: action.payload,
      };
    case ActionTypes.REQUEST_COUNTRIES_ERROR:
      return {
        ...state,
        countriesLoadError: action.payload,
      };
    default:
      return state;
  }
};
export default FiltersReducer;
