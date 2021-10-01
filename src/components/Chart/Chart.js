import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((e) => e.value);
  const max = Math.max(...dataPointValues);
  console.log(max);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={max}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
