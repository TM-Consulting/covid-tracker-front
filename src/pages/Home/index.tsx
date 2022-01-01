import ChartsContainer from "../../containers/ChartsContainer";
import FilterContainer from "../../containers/FilterContainer";
import StatsContainer from "../../containers/StatsContainer";

const Home = () => {
  return (
    <>
      <FilterContainer />
      <StatsContainer />
      <ChartsContainer />
    </>
  );
};

export default Home;
