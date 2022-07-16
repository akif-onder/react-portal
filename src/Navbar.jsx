import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className='top-bar unclicked'>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
        </div>
        <div className='side-bar'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Navbar