import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ProfitLossChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) { // Ensure data exists and is not empty
      const ctx = document.getElementById('profitLossChart').getContext('2d');
      const dates = data.map(entry => entry.date); // Extract dates from the data array
      const profits = data.map(entry => entry.profit); // Extract profits from the data array
      const losses = data.map(entry => entry.loss); // Extract losses from the data array

      if (chartRef.current) {
        // Destroy the existing chart instance if it exists
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Profit',
              backgroundColor: 'rgba(51, 204, 51)',
              borderColor: 'rgba(16, 185, 129, 1)',
              borderWidth: 1,
              
              data: profits
            },
            {
              label: 'Loss',
              backgroundColor: 'rgba(239, 68, 68, 0.5)',
              borderColor: 'rgba(239, 68, 68, 1)',
              borderWidth: 1,
              data: losses
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                font: {
                  size: 10// Adjust font size for legend
                }
              }
            }
          }
        }
      });
    }
  }, [data]);

  return <canvas id="profitLossChart" className="rounded-lg shadow-md w-10 h-16"></canvas>;
};

export default ProfitLossChart;
