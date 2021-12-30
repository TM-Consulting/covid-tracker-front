import { FiltersState } from "../containers/FilterContainer/types";
import { ChartsState } from "../containers/ChartsContainer/types";

interface Action {
  type: string;
  payload: any;
}
interface GlobalState {
  chartsState: ChartsState;
  filtersState: FiltersState;
}
export { Action, GlobalState };
