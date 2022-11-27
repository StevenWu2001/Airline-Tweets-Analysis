import React from 'react'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <a href='/' className="navTitle">Happy or Grumpy?</a>
        <ul>
            <li>
                <a href='/about'>About</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar