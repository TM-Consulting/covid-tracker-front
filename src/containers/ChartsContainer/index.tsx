import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomLineChart from "../../components/CustomLineChart";
import { makeSelectChartsData, makeSelectChartsError } from "./selectors";
import { ChartsData } from "./types";

const chartsState = createStructuredSelector({
  chartsData: makeSelectChartsData(),
  error: makeSelectChartsError(),
});
const ChartsContainer = () => {
  const { chartsData, error } = useSelector(chartsState);
  const dispatch = useDispatch();

  return (
    <div className="charts">
      {chartsData &&
        chartsData?.length > 0 &&
        chartsData.map((item: ChartsData, index: number) => (
          <CustomLineChart key={index} {...item} />
        ))}
    </div>
  );
};
export default ChartsContainer;
