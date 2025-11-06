import React from 'react'

const Button = ({message}:{message: string}) => {
  return (
    <button style={{
      padding: '10px 20px',
      color : 'white',
      fontSize: '1.25rem',
      backgroundColor: 'darkred',
      borderRadius : '5px',
      cursor: 'pointer',

    }}>
        {message}
    </button>
  )
}

export default Button