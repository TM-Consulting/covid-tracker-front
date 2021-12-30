import axios from "axios";

const makeRequest = async (options: any) => await axios(options);

const buildTracksQueryParams = (country: string, city: string) => {
  var query = "?";
  if (country) query += `country=${country}`;
  if (city) query += `&city=${city}`;
  return query;
};
export { makeRequest, buildTracksQueryParams };
