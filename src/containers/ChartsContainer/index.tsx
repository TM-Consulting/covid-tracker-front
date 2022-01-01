import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomAlert from "../../components/CustomAlert";
import CustomLineChart from "../../components/CustomLineChart";
import { alertError } from "./constants";
import { makeSelectChartsData, makeSelectChartsError } from "./selectors";
import { ChartsData } from "./types";

const chartsState = createStructuredSelector({
  chartsData: makeSelectChartsData(),
  error: makeSelectChartsError(),
});
const ChartsContainer = () => {
  const { chartsData, error } = useSelector(chartsState);

  return (
    <div className="charts">
      {console.log("testtt", chartsData)}
      {error ? (
        <CustomAlert {...alertError} />
      ) : (
        chartsData &&
        chartsData?.length > 0 &&
        chartsData.map((item: ChartsData, index: number) => (
          <CustomLineChart key={index} {...item} />
        ))
      )}
    </div>
  );
};
export default ChartsContainer;
