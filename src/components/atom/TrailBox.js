import React from 'react'
import './TrailBox.css'


const TrailBox = ({children,}) => {
  return (
    <div lg={12}>
        <div className='nbar' sm={8} md={8}>
          <div className='box1' sm={8} md={8}>
                {children}
          </div>
        </div>
    </div>
  )
}

export default TrailBox