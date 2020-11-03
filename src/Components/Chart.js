import { Line  } from '@reactchartjs/react-chart.js'

import React from 'react';

import { multiStepContext } from './StepContext';
import { useContext } from 'react';


function Chart () {
    const  {csvData} = useContext(multiStepContext)
    console.log(csvData.output_kp);
    console.log(csvData.output_x);
    const data = {
    labels: csvData.output_kp,
  datasets: [
    {
      label:' KP v/s X',
      data: csvData.output_x,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}
    return(
        <div>
            <p className='label'><b> Chart Here </b></p>
            <Line data={data} options={options} />
        </div>
    );

}

export default Chart;
