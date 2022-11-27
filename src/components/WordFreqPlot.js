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
import { compositionDependencies, random } from "mathjs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const colors = {}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const WordFreqPlot = ({airline, timeline, selectedWords, wordFreq}) => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        const datasets = []
        var color = 0;
        for (let i = 0; i < selectedWords.length; i++) {

            if (wordFreq[airline] == undefined || wordFreq[airline][selectedWords[i].text] == undefined) {
                continue;
            }

            if (colors[selectedWords[i].text] == undefined) {
                colors[selectedWords[i].text] = randomColor();
            }
            
            const X = []
            
            for (var j = 0; j < timeline.length; j++) {
                if (wordFreq[airline][selectedWords[i].text][j] == undefined) {
                    X.push(0)
                } else {
                    X.push(wordFreq[airline][selectedWords[i].text][j]);
                }
            }

            datasets.push(
                {
                    label: selectedWords[i].text,
                    data: X,
                    borderColor: colors[selectedWords[i].text],
                    backgroundColor: colors[selectedWords[i].text],
                    pointRadius: 0,
                    pointHitRadius: 8,
                }
            );
        }

        setChartData({
            labels: timeline,
            datasets: datasets
        });
        setChartOptions({
            responsive: true,
            plugins: {  
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Word(s) Frequency Counts of " + airline,
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
    }, [airline, timeline, selectedWords, wordFreq]);

    return (
        <div className="App">
            <Line options={chartOptions} data={chartData} />
        </div>
    );
} 

export default WordFreqPlot;