import React, { useEffect, useState } from 'react'
import './../App.css';
import  manuBar  from './../assets/icons8-menu-bar-64.png';


const NavBar = () => {

  const [scrolled , setScrolled] = useState(false);
  const [menu , setMenu] = useState(false);

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

  function handleNavBar(){
     setMenu(true);
  }

  function handleCloseBtn(){
    setMenu(false);
  }


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
        <img className='menuBar' onClick={handleNavBar} src= {manuBar} alt="" />
        {menu && <div id='overlay' className="overlayNav">
          <a href="" className='closebtn' onClick={handleCloseBtn}>&times;</a>
          <div className="overlayContent" onClick={handleCloseBtn}>
             <a className='' href="#home" >Home</a>
            <a className='' href="#about">About</a>
            <a className='' href="#services">Services</a>
            <a className='' href="#skills">Skills</a>
            <a className='' href="#otherskills">Others</a>
            <a className='' href="#contact">Contact</a>
          </div>
        </div>}
    </div>
  )
}

export default NavBar