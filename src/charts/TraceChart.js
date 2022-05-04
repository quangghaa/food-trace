import React, { useEffect } from "react";
import { getTotal } from '../../services/api';

import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const TraceChart = () => {

    var dataPoints = [];

    useEffect(() => {
        var chart = new CanvasJS.Chart("traceContainer", {
            title: {
                text: "Daily Traces Chart"
            },
            axisX: {
                // interval: 12,
                // intervalType: "second",
                valueFormatString: "hh:mm tt"
            },
            axisY: {
                title: "Accounts per Hour",
                valueFormatString: "# ### ### ### ###"   // move comma to change formatting
            },
            data: [{
                type: "spline",
                markerType: 'circle',
                dataPoints: dataPoints
            }
            ],

        });


        const fetchData = async () => {
            const when = new Date();
            let data = null;
            const res = await getTotal('accountsByHour/24');
            if (res && res.data != null) {
                res.data.map((d) => {
                    dataPoints.push({
                        x: new Date(d.datetime),
                        y: d.count
                    })
                })

                chart.render();
            } 
        }

        fetchData();    

        // var updateChart = () => {

        //     const fetchData = async () => {
        //         const when = new Date();
        //         let data = null;

        //         const res = await getTotal('account/total');
        //         if (res) data = res.data

        //         dataPoints.push({
        //             x: when,
        //             y: data
        //         })
        //     }

        //     fetchData();
        //     chart.render();
        // };

        // setInterval(() => { updateChart() }, 6000);

    }, [])
    // update chart every second

    return (
        <>
            <div id="traceContainer" style={{ height: "300px" }}/>  
        </>
    )
}

export default TraceChart;