import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js';

const LineChart = () => {

  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current;

    new Chart(myChartRef, {
      type: 'line',
      data: {
        //Bring in data
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'Sales',
            data: [86, 100, 91],
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });

  })

  return (
    <div className='graphContainer' >
      <canvas
        id='myChart'
        ref={chartRef}
      />
    </div >
  );
}

export default LineChart;