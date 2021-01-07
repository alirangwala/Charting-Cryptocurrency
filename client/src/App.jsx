import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js';
import LineChart from './components/LineChart.jsx'
import axios from 'axios'

const App = () => {

  const [btcData, setBtcData] = useState({})

  useEffect(() => {

    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2020-09-05')
      .then(res => {
        let btcData = res.data
        setBtcData(btcData)
      })

  }, [])

  return (
    <div >
      {Object.keys(btcData).length && <LineChart
        btcData={btcData}
      />}

    </div >
  );
}

export default App;