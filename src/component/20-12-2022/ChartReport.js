import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS


export const ChartReport = () => {
  const options = {
    responsive: true,
    tension: 0.3,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    showLine: true,
    scales: {
      y: {
        border: {
          display: false,
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
    },
  };

  const data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Second dataset",
        tension: 0.45,
        data: [30, 45, 32, 70, 40, 40, 40],
        fill: false,
        borderColor: "#cb1c47",
        borderSkipped: false,
      },
    ],
  };

  return <Line data={data} options={options} height={400} width={600} />;
};
