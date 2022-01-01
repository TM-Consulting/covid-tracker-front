import { FiltersState } from "../containers/FilterContainer/types";
import { ChartsState } from "../containers/ChartsContainer/types";
import { StatsState } from "../containers/StatsContainer/types";

interface Action {
  type: string;
  payload: any;
}
interface GlobalState {
  chartsState: ChartsState;
  filtersState: FiltersState;
  statsState: StatsState;
}
export { Action, GlobalState };
