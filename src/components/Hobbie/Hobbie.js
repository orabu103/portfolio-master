import React from 'react'
import Pic from '../Pic/Pic'

import './style.css'

const Hobbie = ({url , title , subtitle}) => {
  return (
    <div className='Hobbie'>
        <Pic url={url}
             width="100%"   
             height="139px"/>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </div>
  )
}

export default Hobbie