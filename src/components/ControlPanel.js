import React from 'react'
import AirlineDropdown from './AirlineDropdown'
import WordSelector from './WordSelector'

const ControlPanel = ({changeAirline, addWord, deleteWord, selectedWords}) => {
    return (
        <div>
            <h2>Parameters</h2>
            <br/>
            <h4>Choose an Airline <AirlineDropdown changeAirline={changeAirline}/></h4>
            <br/>
            
            <h4>Enter Keyword(s) to Search</h4>
            <WordSelector
                addWord={addWord}
                deleteWord={deleteWord}
                selectedWords={selectedWords}
            />
        </div>
    );
}

export default ControlPanel