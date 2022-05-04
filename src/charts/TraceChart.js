import React, { useEffect } from "react";
import { getList, getOne, getTotal } from '../services/api';

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
                valueFormatString: "MMM DD"
            },
            axisY: {
                title: "Trace per day",
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
            const y = when.getFullYear() + '';
            let data = null;
            const res = await getList('count/tracing');
            if (res && res.data != null) {
                res.data.map((d) => {
                    let day = d.Day + ''
                    let mon = d.Month + ''
                    if(day.length == 1) day = '0' + day
                    if(mon.length == 1) mon = '0' + mon

                    const str = y + '-' + mon + '-' + day + 'T00:00:00'

                    dataPoints.push({
                        x: new Date(str),
                        y: d.Count
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