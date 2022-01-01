import { combineReducers } from "redux";
import ChartsReducer from "../containers/ChartsContainer/reducer";
import FiltersReducer from "../containers/FilterContainer/reducer";
import statsReducer from "../containers/StatsContainer/reducer";

const rootReducer = combineReducers({
  chartsState: ChartsReducer,
  filtersState: FiltersReducer,
  statsState: statsReducer,
});

export default rootReducer;
