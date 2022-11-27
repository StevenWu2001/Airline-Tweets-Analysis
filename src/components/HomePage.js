import Header from './Header';
import ControlPanel from './ControlPanel';
import AvgLinePlot from './AvgLinePlot';
import PosNegCountPlot from './PosNegCountPlot';
import WordFreqPlot from './WordFreqPlot';
import NavBar from './NavBar';
import Loading from './Loading';

import { useState, useEffect } from 'react';

const HomePage = ({currAirline, timeline, avgSent, posCount, negCount, sma, bollingerUp, bollingerLow, selectedWords, wordFreq, setCurrAirline, setSelectedWords, loading}) => {
    const changeAirline = (airline) => {
        setCurrAirline(airline.target.value);
    }

    const addWord = (word) => {
        setSelectedWords([...selectedWords, word]);
    }

    const deleteWord = (i) => {
        setSelectedWords(selectedWords.filter((tag, index) => index !== i));
    }

    return (
        loading ? 
        <Loading/>
        :
        <div>
            <div className="container">
                <Header />

                <div className="subcontainer">
                    <ControlPanel 
                        changeAirline={changeAirline} 
                        addWord={addWord}
                        deleteWord={deleteWord}
                        selectedWords={selectedWords}
                    />
                </div>

                <AvgLinePlot 
                    airline={currAirline}
                    timeline={timeline}
                    avgSent={avgSent}
                    posCount={posCount}
                    negCount={negCount}
                    sma={sma}
                    bollingerUp={bollingerUp}
                    bollingerDown={bollingerLow}
                />

                {/* <WordFreqPlot
                    airline={currAirline}
                    timeline={timeline}
                    selectedWords={selectedWords}
                    wordFreq={wordFreq}
                /> */}

                <PosNegCountPlot
                    airline={currAirline}
                    timeline={timeline}
                    posCount={posCount}
                    negCount={negCount}
                />
            </div>
        </div>
    );
}

export default HomePage;
