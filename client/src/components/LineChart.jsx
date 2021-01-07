import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js';
import axios from 'axios'

const LineChart = ({ btcData }) => {

  const chartRef = useRef();

  console.log("btcData", btcData.bpi)
  useEffect(() => {

    const myChartRef = chartRef.current;


    let dates = Object.keys(btcData.bpi)
    let prices = Object.values(btcData.bpi)

    console.log('dates', dates)
    console.log('prices', prices)

    new Chart(myChartRef, {
      type: 'line',
      data: {

        labels: dates,
        datasets: [
          {
            label: 'Bitcoin',
            data: prices,
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });

  }, [btcData])

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