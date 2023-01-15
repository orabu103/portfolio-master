import React from 'react'
import './style.css'

const UserContact = ({icon , text}) => {
  return (
    <div className='UserContact'>
        <span className="UserContact_icon material-symbols-outlined">
            {icon}
        </span>
        <span>
            {text}
        </span>
    </div>
  )
}

export default UserContact