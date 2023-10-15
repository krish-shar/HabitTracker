import React, { Component } from "react";
 import { ApexOptions } from "apexcharts";
 import ReactApexChart from "react-apexcharts";

 class CombinedChart extends Component<{}, {}> {
   render() {
     const fakeLineChartData = {
       series: [
         {
           name: "Progress",
           data: [3, 2, 4, 4, 6, 5.25, 7],
           color: "#326245",
         },
       ],
     };

     const fakeLineChartOptions: ApexOptions = {
       chart: {
         height: 350,
         type: "line",

       },
       xaxis: {
         categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
       },
     };

     const fakeBarChartData = {
       series: [
         {
           name: "Values",
           data: [30, 20, 50, 70, 25, 85, 65],
           color: "#326245",
         },
       ],
     };

     const fakeBarChartOptions: ApexOptions = {
       chart: {
         height: 200,
         type: "bar",
       },
       xaxis: {
         categories: ["S", "M", "T", "W", "T", "F", "S"],
       },
     };

     return (
        
       <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
          <h1>Workout Progress</h1>
           <ReactApexChart 
             options={fakeLineChartOptions}
             series={fakeLineChartData.series}
             type="line"
             width="70%"
             height="120%"
           />
         </div>

         <div style={{ flex: 1, marginRight: "1rem" }}> 
         <h1>Hours Meditated</h1>
           <ReactApexChart
             options={fakeBarChartOptions}
             series={fakeBarChartData.series}
             type="bar"
             width="50%"
             height="120%"
           />
         </div>
       </div>
     );
   }
 }

 export default CombinedChart;
 

/*
import React from 'react'

function WorkoutProgress() {
  return (
    <div>
      Workout Progress!!!
    </div>
  )
}


export default WorkoutProgress
*/
