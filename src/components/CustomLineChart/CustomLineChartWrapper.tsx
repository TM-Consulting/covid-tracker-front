import styled from "styled-components";
const CustomLineChartWrapper = styled.div`
  display: inline-flex;
  border: 2px solid ${(props) => props.color};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin-bottom: 20px;
  font-family: verdana;
`;
export default CustomLineChartWrapper;
