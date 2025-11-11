import React from 'react'
import './../App.css';

const NavBar = () => {
  return (
    <div id='navBar'>
        <h2>Harsh<span>Dev.</span></h2>
        <ul className='navBarRight'>
            <li><a className='navBarList' href="#home">Home</a></li>
            <li><a className='navBarList' href="#about">About</a></li>
            <li><a className='navBarList' href="#services">Services</a></li>
            <li><a className='navBarList' href="#skills">Skills</a></li>
            <li><a className='navBarList' href="#otherskills">Others</a></li>
            <li><a className='navBarList' href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar