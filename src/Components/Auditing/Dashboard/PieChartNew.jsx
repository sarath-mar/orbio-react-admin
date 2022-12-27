import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    //  "Blue", "Yellow", "Green", "Purple", "Orange"
  ],
  datasets: [
    {
      // label: "# of Votes",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChartNew() {
  let pieData = [
    {
      text: "Employee Benefit Expenses",
      data: 12,
      color: "rgba(255, 99, 132, 0.2)",
    },
    { text: "Rental Expenses", data: 19, color: "rgba(54, 162, 235, 0.2)" },
    { text: "Administrative", data: 3, color: "rgba(255, 206, 86, 0.2)" },
    {
      text: "Repair and Maintenance",
      data: 5,
      color: "rgba(75, 192, 192, 0.2)",
    },
    { text: "Office Maintenance", data: 2, color: "rgba(153, 102, 255, 0.2)" },
  ];
  // 12, 19, 3, 5, 2, 3
  //    ,

  return (
    <div className="pie">
      <div className="pie-chart">
        <Doughnut data={data} />
      </div>

      <div className="pie-content">
        {pieData.map((x) => (
          <div className="pie-data">
            <div style={{ backgroundColor: "red" }} className="circle"></div>
            <div className="pie-count">
              <p>{`30 saddfgff `}</p>
              <p>30 </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
