import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import './LineGraph.css'; // Import the CSS file for styling

function LineGraph({ data, handleClose }) {
  const firstObj = data[0];
  const key = Object.keys(firstObj)[0] || "name";
  const value = Object.keys(firstObj)[1] || "value";

  return (
    <div className="linegraph-container">
      <h1 className="linegraph-text-heading">Line Chart Using Rechart</h1>
      {/* Close button styled with specific class */}
      <ResponsiveContainer width="100%" aspect={3} className="linegraph-chart-wrapper">
        <LineChart data={data} margin={{ right: 300 }}>
          <CartesianGrid className="linegraph-recharts-cartesian-grid" />
          <XAxis className="linegraph-recharts-xAxis" dataKey={key} interval={"preserveStartEnd"} />
          <YAxis className="linegraph-recharts-yAxis" />
          <Legend />
          <Tooltip />
          <Line dataKey={key} stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey={value} stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <button onClick={handleClose}>
        Close Chart
      </button>
    </div>
  );
}

export default LineGraph;
