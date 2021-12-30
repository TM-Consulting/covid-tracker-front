import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomLineChart from "../../components/CustomLineChart";
import { makeSelectChartsData, makeSelectChartsError } from "./selectors";

const chartsState = createStructuredSelector({
  chartsData: makeSelectChartsData(),
  error: makeSelectChartsError(),
});
const ChartsContainer = () => {
  const { chartsData, error } = useSelector(chartsState);
  return (
    <div className="charts">
      {chartsData &&
        chartsData?.length > 0 &&
        chartsData.map((item, index) => (
          <CustomLineChart key={index} {...item} />
        ))}
    </div>
  );
};
export default ChartsContainer;
