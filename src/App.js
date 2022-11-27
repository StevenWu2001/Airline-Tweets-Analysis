import React from 'react'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import About from './components/About'

import { useState, useEffect } from 'react';

const App = () => {
    // Loading Page Setup
    const [loading, setLoading] = useState(false);

    // Variable Initializations
    const [currAirline, setCurrAirline] = useState("American Airline");
    const [selectedWords, setSelectedWords] = useState([{id: "cancel", text: "cancel"}]);
    const [timeline, setTimeline] = useState([]);
    const [avgSent, setAvgSent] = useState([]);
    const [posCount, setPosCount] = useState([]);
    const [negCount, setNegCount] = useState([]);
    const [wordFreq, setWordFreq] = useState([]);
    const [sma, setSMA] = useState([]);
    const [bollingerUp, setBollingerUp] = useState([]);
    const [bollingerLow, setBollingerDown] = useState([]);
    
    // Fetch From Backend Server
    useEffect(() => {
        setLoading(true);

        const init = async() => {
            const fetchedTimeline = await fetchTimeline();
            const fetchedAvgSent = await fetchAvgSent();
            const fetchedPosCount = await fetchPosCount();
            const fetchedNegCount = await fetchNegCount();
            const fetchedSMA = await fetchSMA();
            const fetchedBollingerUp = await fetchBollingerUp();
            const fetchedBollingerDown = await fetchBollingerDown();
            //const fetchedWordFreq = await fetchWordFreq();
            setTimeline(fetchedTimeline);
            setAvgSent(fetchedAvgSent);
            setPosCount(fetchedPosCount);
            setNegCount(fetchedNegCount);
            setBollingerUp(fetchedBollingerUp);
            setBollingerDown(fetchedBollingerDown);
            //setWordFreq(fetchedWordFreq);
            setSMA(fetchedSMA);

            setLoading(false)
        }

        // Fetch Functions
        const fetchTimeline = async () => {
            console.log("Here");
            const response = await fetch('/timeline');
            const data = await response.json();
            return data;
        }

        const fetchAvgSent = async () => {
            const response = await fetch('/nAvgSent');
            const data = await response.json();
            return data;
        }

        const fetchSMA = async () => {
            const response = await fetch('/sma');
            const data = await response.json();
            return data;
        }

        const fetchBollingerUp = async () => {
            const response = await fetch('/bollingerUpper');
            const data = await response.json();
            return data;
        }

        const fetchBollingerDown = async () => {
            const response = await fetch('/bollingerLower');
            const data = await response.json();
            return data;
        }

        const fetchPosCount = async () => {
            const response = await fetch('/posCount');
            const data = await response.json();
            return data;
        }

        const fetchNegCount = async () => {
            const response = await fetch('/negCount');
            const data = await response.json();
            return data;
        }

        const fetchWordFreq= async () => {
            const response = await fetch('/wordFreq');
            const data = await response.json();
            return data;
        }

        init();
    }, []);

    // Check Location
    let Component;
    switch (window.location.pathname) {
        case "/":
            Component = 

            <HomePage
                currAirline={currAirline}
                timeline={timeline}
                avgSent={avgSent}
                posCount={posCount}
                negCount={negCount}
                sma={sma}
                bollingerUp={bollingerUp}
                bollingerLow={bollingerLow}
                selectedWords={selectedWords}
                wordFreq={wordFreq}
                setCurrAirline={setCurrAirline}
                setSelectedWords={setSelectedWords}
                loading={loading}
            />;

            break;
        case "/about":
            Component = <About/>;
            break;
    }

    return (
        <>
            <NavBar/>
            {Component}
        </>
    )
}

export default App;