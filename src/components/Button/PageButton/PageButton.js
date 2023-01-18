import React from 'react'
import './style.css'


const PageButton = ({children , style}) => {
  let styles = {
    border: style ? 'none' : '1px solid #4F4F4F',
  }
  return (
    <button className='PageButton' style={styles} disabled={style ? true : false}>
        {children}
    </button>
  )
}

export default PageButton