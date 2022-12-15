import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // We create a new array to exstract just the values of each expense. We use map to access each object in array and map that to a new value.  
    const totalMaxValue = Math.max(...dataPointValues); // the spread operator (...) is used here to extract each element out of the array and add them as stand alone arguments to the max method

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // Remember the key prop help to render the list properly, in this case we use the label prop to say each label will be unique for each chartBar 
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
