import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomDropDown from "../../components/CustomDropDown";
import { requestCountries, setCity, setCountry } from "./actions";
import {
  makeSelectCities,
  makeSelectCity,
  makeSelectCountries,
  makeSelectCountry,
} from "./selectors";
const filtersState = createStructuredSelector({
  countries: makeSelectCountries(),
  cities: makeSelectCities(),
  country: makeSelectCountry(),
  city: makeSelectCity(),
});
const FilterContainer = () => {
  const { countries, cities, country, city } = useSelector(filtersState);

  const dispatch = useDispatch();
  const handleChange = (value: string, id: string) => {
    switch (id) {
      case "city":
        dispatch(setCity(value));
        break;
      case "country":
        dispatch(setCountry(value));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(requestCountries());
  }, []);

  return (
    <div className="filters">
      {countries && countries.length > 0 && (
        <CustomDropDown
          id={"country"}
          onChange={handleChange}
          label="Country"
          options={countries}
          value={country}
        />
      )}
      {cities && cities.length > 0 && (
        <CustomDropDown
          id={"city"}
          onChange={handleChange}
          label="City"
          options={cities}
          value={city}
        />
      )}
    </div>
  );
};
export default FilterContainer;
