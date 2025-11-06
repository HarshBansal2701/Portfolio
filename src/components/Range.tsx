import React from 'react'

interface RangeProps{
    name: string;
    per: string;
}

const Range: React.FC<RangeProps> = ({name, per}) => {
  return (
    <div>
        <div className="upper" style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '10px'
        }}>
            <h3>{name}</h3>
            <h3>{per}</h3>
        </div>
        <div className="lower" style={{
            height: '8px',
            width: '100%',
            border: '1px solid black',
            borderRadius: '4px'
        }}>
            <div className="percentage" style={{
                height: '100%',
                width: `${per}`,
                backgroundColor: 'darkred',
            }}>

            </div>
        </div>
    </div>
  )
}

export default Range