import React from 'react'
import './../App.css';

interface RangeProps{
    name: string;
    per: string;
}

const Range: React.FC<RangeProps> = ({name, per}) => {
  return (
    <div className='range'>
        <div className="upper" >
            <h3>{name}</h3>
            <h3>{per}</h3>
        </div>
        <div className="lower" style={{
           
        }}>
            <div className="percentage" style={{
                width: `${per}`,
            }}>

            </div>
        </div>
    </div>
  )
}

export default Range