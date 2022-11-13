import React from 'react'
import AirlineDropdown from './AirlineDropdown'

const ControlPanel = ({changeAirline}) => {
    return (
        <div>
            <h2>Parameters</h2>
            <h4>Choose an Airline <AirlineDropdown changeAirline={changeAirline}/></h4>
        </div>
    );
}

export default ControlPanel