import React from 'react'
import './style.css'

const BasicButton = ({text , type}) => {
    let outlineColor = {
        background: type === 'outline' ? 'transparent' : '#2F80ED',
        color: type === 'outline' ? '#2F80ED' : '#FFFFFF'
    }

  return (
    <button className='BasicButton' style={outlineColor}> 
        {text}
    </button>
  )
}

export default BasicButton