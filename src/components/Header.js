import React from 'react'
import PropTypes from 'prop-types'

const Header = () => {
    return (
        <header className='header'>
            <h1>Airline Tweets Analysis</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Airline Tweets Analysis'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header