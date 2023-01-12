import React from 'react'
import './style.css'
const BasicCard = ({children}) => {
  return (
    <div className='BasicCard'>
        {children}
    </div>
  )
}

export default BasicCard