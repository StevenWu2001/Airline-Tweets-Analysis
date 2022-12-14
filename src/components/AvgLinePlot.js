import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import Hammer from "hammerjs";
import * as Zoom from "chartjs-plugin-zoom"

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Zoom,
    Title,
    Tooltip,
    Legend
);

const AvgLinePlot = ({airline, timeline, avgSent, sma, bollingerUp, bollingerDown}) => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels: timeline,
            datasets: [
                {
                    label: "7 Days SMA",
                    data: sma[airline],
                    borderColor: "rgb(180, 67, 78)",
                    pointRadius: 0,
                    pointHitRadius: 8,
                    backgroundColor: "rgb(180, 67, 78)",
                },

                {
                    label: "Z-Average Sentiment",
                    data: avgSent[airline],
                    borderColor: "rgba(53, 162, 235, 0.4)",
                    pointRadius: 0,
                    pointHitRadius: 8,
                    backgroundColor: "rgba(53, 162, 235, 0.4)",
                },

                {
                    label: "Upper Bollinger Band",
                    data: bollingerUp[airline],
                    borderColor: "rgba(115, 115, 115, 0.4)",
                    pointRadius: 0,
                    pointHitRadius: 8,
                    backgroundColor: "rgba(115, 115, 115, 0.4)",
                },

                {
                    label: "Lower Bollinger Band",
                    data: bollingerDown[airline],
                    borderColor: "rgba(115, 115, 115, 0.4)",
                    pointRadius: 0,
                    pointHitRadius: 8,
                    backgroundColor: "rgba(115, 115, 115, 0.4)",
                },

            ],
        });
        setChartOptions({
            type: 'line',
            responsive: true,
            plugins: { 
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Daily Average Sentiment of " + airline,
                },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true
                        },

                        drag: {
                            enabled: true
                        },
                        mode: "x",
                        speed: 100,
                        onZoom: function({chart}) { console.log(`I'm zooming!!!`); },
                    },

                }
            },
        });
    }, [timeline, airline, avgSent, sma, bollingerUp, bollingerDown]);

    return (
        <div className="App">
            <Line options={chartOptions} data={chartData} />
        </div>
    );
}

export default AvgLinePlot;