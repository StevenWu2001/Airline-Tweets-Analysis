import React from 'react'

const AirlineDropdown = ({changeAirline}) => {
    return (
        <select name="airlineDropdown" id="airlineDropdown" onChange={changeAirline}>
            <option value="American Airline">American Airline</option>
            <option value="United Airline">United Airline</option>
            <option value="Delta Airline">Delta Airline</option>
        </select>
    );
  }

export default AirlineDropdown