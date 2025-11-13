import React, { useEffect, useState } from 'react'
import './../App.css';
import  manuBar  from './../assets/icons8-menu-bar-64.png';


const NavBar = () => {

  const [scrolled , setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 15){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  },[]);


  return (
    <div id='navBar' className={(scrolled)?'navScroll':''}>
        <h2>Harsh<span>Dev.</span></h2>
        <ul className='navBarRight'>
            <li><a className='navBarList' href="#home">Home</a></li>
            <li><a className='navBarList' href="#about">About</a></li>
            <li><a className='navBarList' href="#services">Services</a></li>
            <li><a className='navBarList' href="#skills">Skills</a></li>
            <li><a className='navBarList' href="#otherskills">Others</a></li>
            <li><a className='navBarList' href="#contact">Contact</a></li>
        </ul>
        <img className='menuBar' src= {manuBar} alt="" />
    </div>
  )
}

export default NavBar