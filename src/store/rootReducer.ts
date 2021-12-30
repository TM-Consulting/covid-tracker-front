import { combineReducers } from "redux";
import ChartsReducer from "../containers/ChartsContainer/reducer";
import FiltersReducer from "../containers/FilterContainer/reducer";

const rootReducer = combineReducers({
  chartsState: ChartsReducer,
  filtersState: FiltersReducer,
});

export default rootReducer;
