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
      data: [12, 19, 3],
      backgroundColor: [
        "#f68989",
        "#b3ffdf",
        "#b3dfff",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "#f68989",
        "#b3ffdf",
        "#b3dfff",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function RevenuePie() {
  let pieData = [
    {
      text: "Total Turnover",
      data: 12,
      color: "#f68989",
    },
    { text: "Total Indirect Expenses", data: 19, color: "#b3ffdf" },
    { text: "Total Purchase", data: 3, color: "#b3dfff" },
  ];
  let totalValue = data.datasets[0].data.reduce((sum, x) => sum + x, 0);
  // 12, 19, 3, 5, 2, 3
  //    ,

  return (
    <div className="pie">
      <div className="pie-chart-rev">
        <Doughnut data={data} />
      </div>

      <div className="pie-content-rev">
        <div className="pie-data">
          <Grid container spacing={0} sx={{ pl: 3 }}>
            {pieData.map((x) => (
              <Grid xs={4} sm={12} sx={{ mt: 3 }}>
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
