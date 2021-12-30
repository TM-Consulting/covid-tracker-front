interface FiltersState {
  country: string;
  city: string;
  cities: CountryCity[] | null;
  countries: CountryCity[] | null;
  countriesLoadError: boolean;
  citiesLoadError: boolean;
}
interface CountryCity {
  value: string;
  label: string;
}

export { FiltersState, CountryCity };
