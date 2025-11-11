import React from 'react'
// import image from './../assets/paintbrush-solid-full.svg'
import './../App.css';

interface CardProps{
  image: string;
  tack: string;
  message: string;
}

const Card: React.FC<CardProps> = ({image, tack, message}) => {
  return (
    <div className='card'>
      <img src={image} alt="IMAGE WIll DISPLAY" />
      <h2 >{tack}</h2>
      <p>{message}</p>

      </div>
  )
}

export default Card