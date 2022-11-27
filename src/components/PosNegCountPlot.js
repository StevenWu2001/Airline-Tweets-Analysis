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
import zoomPlugin from "chartjs-plugin-zoom"
import panPlugin from "chartjs-plugin-zoom"

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    panPlugin,
    zoomPlugin,
    Title,
    Tooltip,
    Legend
);

const PosNegCountPlot = ({airline, timeline, posCount, negCount}) => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: timeline,
            datasets: [
                {
                    label: "Number of Positive Tweets",
                    data: posCount[airline],
                    borderColor: "rgb(0, 200, 50)",
                    backgroundColor: "rgb(0, 200, 50)",
                    pointRadius: 0,
                    pointHitRadius: 8,
                },

                {
                    label: "Number of Positive Tweets",
                    data: negCount[airline],
                    borderColor: "rgb(255, 50, 50)",
                    backgroundColor: "rgb(255, 50, 50)",
                    pointRadius: 0,
                    pointHitRadius: 8,
                }
            ],
        });
        setChartOptions({
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
    }, [airline, timeline, posCount, negCount]);

    return (
        <div className="App">
            <Line options={chartOptions} data={chartData} />
        </div>
    );
}

export default PosNegCountPlot;