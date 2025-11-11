import React from 'react'
import './../App.css';

const Button = ({message}:{message: string}) => {
  return (
    <button className='customBtn' style={{
      
      
    }}>
        {message}
    </button>
  )
}

export default Button