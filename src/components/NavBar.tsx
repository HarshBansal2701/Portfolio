import React from 'react'

const NavBar = () => {
  return (
    <div id='navBar' style={{
        // border: '2px black solid',

        width: '100vw',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'darkred',
        position: 'fixed',
        zIndex: 1,
        
    }}>
        <h2 style={{
            // border: '1px black solid',
            fontSize: '40px',
            color : 'white',
            textShadow: '2px 2px 4px balck'
        }}>Harsh<span style={{color: 'red' , textShadow: '2px 2px 4px darkred'}}>Dev.</span></h2>
        <ul style={{
            width: '40vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // border: '1px black solid',
            color : 'white',
            textShadow: '2px 2px 4px black',
            textDecoration: 'none',
            listStyle: 'none',
            fontSize: '25px',
            fontWeight: 'bold',
            cursor: 'pointer',
        }}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Skills</li>
            <li>Others</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar