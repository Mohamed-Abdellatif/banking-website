"use client";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2600, 3700],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank A", "Bank B", "Bank C"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins:{
            legend: {
                display: false,
            }
        }
      }}
    />
  );
};

export default DoughnutChart;
