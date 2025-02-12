import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const PieChartComponent = ({ data, handleClose }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const COLORS = [...data.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`)];

  const firstObj = data[0];
  const key = Object.keys(firstObj)[0] || "skill";
  const value = Object.keys(firstObj)[1] || "number_of_employees";

  data = data.map((item) => ({
    name: item[key],
    students: item[value],
  }));

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <h1>Pie Chart</h1>
      <PieChart width={700} height={700}>
        <Pie
          activeIndex={activeIndex}
          data={data}
          dataKey="students"
          outerRadius={250}
          fill="green"
          onMouseEnter={onPieEnter}
          style={{ cursor: "pointer", outline: "none" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <button onClick={handleClose} style={{ marginBottom: "20px" }}>
        Close Chart
      </button>
    </div>
  );
};

export default PieChartComponent;
