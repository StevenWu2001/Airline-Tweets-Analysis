import './App.css';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import AvgLinePlot from './components/AvgLinePlot';
import { useState, useEffect } from 'react';

const App = () => {

    // Variable Initializations
    const [currAirline, setCurrAirline] = useState("American Airline");
    const [timeline, setTimeline] = useState([]);
    const [avgSent, setAvgSent] = useState([]);

    useEffect(() => {
        const init = async() => {
            const fetchedTimeline = await fetchTimeline();
            setTimeline(fetchedTimeline);
        }

        init();
    }, []);
    
    const fetchTimeline = async () => {
        
    }


    const changeAirline = (airline) => {
        setCurrAirline(airline.target.value);
    }

    return (
        <div className="container">
            <Header />

            <div className="subcontainer">
                <ControlPanel changeAirline={changeAirline} />
            </div>

            <AvgLinePlot airline={currAirline} timeline={timeline} avgSent={avgSent} />

        </div>
    );
}

export default App;
