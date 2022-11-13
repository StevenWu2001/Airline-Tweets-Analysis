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

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const AvgLinePlot = ({airline, timeline, avgSent}) => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
            datasets: [
                {
                    label: "Whom'st let the dogs out",
                    data: [12, 55, 34, 120, 720],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.4)",
                },
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
                    text: "Whom'st let the dogs out",
                },
            },
        });
    }, []);

    return (
        <div className="App">
            <Line options={chartOptions} data={chartData} />
        </div>
    );
}

export default AvgLinePlot;