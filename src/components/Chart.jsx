import React from 'react'
import {HorizontalBar} from 'react-chartjs-2';


const state = {
    labels: ['CSS', 'HTML5', 'JavaScript','Reactjs', 'Ruby', 'Rails', 'MongoDB', 'NodeJS'],
    datasets: [
      {
        label: 'Tech Skills',
        backgroundColor: 'rgba(17,35,81,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(191,97,30,1)',
        hoverBorderColor: 'rgba(191,97,30,1)',
        minBarLength: 2,
        data: [90, 90, 85, 85, 85, 80, 82, 85, 85]
      }
    ]
  }

export default function Chart() {
    return (
        <div>
            <HorizontalBar
          data={state}
          width={1000}
          height={500}
          options={{
            title:{
              display:true,
              fontSize:0.01
            },
            scales: {
              xAxes: [{
                  ticks: {
                      max: 100,
                      min: 0,
                      stepSize: 10
                  }
              }]
          },
            maintainAspectRatio: false 
          }}
        />
        </div>
    )
}
