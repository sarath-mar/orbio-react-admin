import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Dashboard.css";
import { Grid } from "@mui/material";

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
        "#f68989",
        "#b3ffdf",
        "#b3dfff",
        "#c4c9ee",
        "#ffeeb3",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "#f68989",
        "#b3ffdf",
        "#b3dfff",
        "#c4c9ee",
        "#ffeeb3",
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
      color: "#f68989",
    },
    { text: "Rental Expenses", data: 19, color: "#b3ffdf" },
    { text: "Administrative", data: 3, color: "#b3dfff" },
    {
      text: "Repair and Maintenance",
      data: 5,
      color: "#c4c9ee",
    },
    { text: "Office Maintenance", data: 2, color: "#ffeeb3" },
  ];
  let totalValue = data.datasets[0].data.reduce((sum, x) => sum + x, 0);
  // 12, 19, 3, 5, 2, 3
  //    ,

  return (
    <div className="pie">
      <div className="pie-chart">
        <Doughnut data={data} />
      </div>

      <div className="pie-content">
        <div className="pie-data">
          <Grid container spacing={0} sx={{ pl: 3 }}>
            {pieData.map((x) => (
              <Grid xs={6} sx={{ mt: 3 }}>
                <div className="grid-pie">
                  <div
                    style={{ backgroundColor: `${x.color}` }}
                    className="circle"
                  ></div>
                  <div className="pie-count">
                    <p>{`${Math.round((x.data / totalValue) * 100)} %`}</p>
                    <p style={{ fontSize: "10px" }}>{x.text} </p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
