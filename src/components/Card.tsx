import React from 'react'
// import image from './../assets/paintbrush-solid-full.svg'

interface CardProps{
  image: string;
  tack: string;
  message: string;
}

const Card: React.FC<CardProps> = ({image, tack, message}) => {
  return (
    <div style={{
        backgroundColor: "darkred",
        // border: '1px white solid',
        borderRadius: '15px',
        width: '305px',
        
        height: '350px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        padding: '20px'
        
    }}>
      <img src={image} style={{width: '40%' , border: '3px solid white' , borderRadius: '50%'}} alt="IMAGE WIll DISPLAY" />
      <h2 style={{padding: '15px 0px'}}>{tack}</h2>
      <p style={{textAlign: 'center'}}>{message}</p>

      </div>
  )
}

export default Card