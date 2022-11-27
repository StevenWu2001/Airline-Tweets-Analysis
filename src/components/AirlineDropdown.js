import React from 'react'

const AirlineDropdown = ({changeAirline}) => {
    return (
        <select name="airlineDropdown" id="airlineDropdown" onChange={changeAirline}>
            <option value="American Airline">American Airline</option>
            <option value="United Airline">United Airline</option>
            <option value="Delta Airline">Delta Airline</option>
            <option value="Southwest Airline">Southwest Airline</option>
            <option value="Alaska Airline">Alaska Airline</option>
            <option value="Jetblue">Jet Blue</option>
            <option value="Allegiant Air">Allegiant Air</option>
            <option value="Frontier Airline">Frontier Airline</option>
            <option value="Hawaiian Airline">Hawaiian Airline</option>
            <option value="Spirit Airline">Spirit Airline</option>
        </select>
    );
  }

export default AirlineDropdown