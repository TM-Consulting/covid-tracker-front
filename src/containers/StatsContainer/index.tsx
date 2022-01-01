import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomAlert from "../../components/CustomAlert";
import CustomTitle from "../../components/CustomTitle";
import { alertError } from "./constants";
import { makeSelectStatsDoses, makeSelectStatsError } from "./selectors";
import { Dose } from "./types";

const statsState = createStructuredSelector({
  doses: makeSelectStatsDoses(),
  error: makeSelectStatsError(),
});
const StatsContainer = () => {
  const { doses, error } = useSelector(statsState);

  return (
    <div className="statistics">
      {error ? (
        <CustomAlert {...alertError} />
      ) : (
        doses &&
        doses.length > 0 &&
        doses.map((item: Dose, index: number) => (
          <CustomTitle key={index} {...item} />
        ))
      )}
    </div>
  );
};

export default StatsContainer;
