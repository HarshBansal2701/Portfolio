import React from 'react'

const Footer = () => {
  return (
    <div
      style={{
        background: 'black',
        color: 'white',
        height: '5vh',
        fontWeight: 'bold',
        fontSize: 'large',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <p>Created by <span style={{color: 'darkred'}}>HarshDev.</span> | &copy; 2025 All rights reserved.</p>
    </div>
  )
}

export default Footer