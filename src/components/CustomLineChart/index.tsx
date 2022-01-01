import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CustomLineChartWrapper from "./CustomLineChartWrapper";

const CustomLineChart = ({
  data,
  lineDataKey,
  title,
  color,
}: CustomLineChartProps) => {
  return (
    <CustomLineChartWrapper color={color}>
      <h4>{title}</h4>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="12 12" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={lineDataKey}
          stroke="#8884d8"
          activeDot={{ r: 12 }}
        />
      </LineChart>
    </CustomLineChartWrapper>
  );
};
export default CustomLineChart;
