import React from 'react'

import HeaderButton from '../Button/HeaderButton/HeaderButton'
import BasicCard from '../Card/BasicCard'

import './style.css'

const buttons = ['React' , 'Vue' , 'NodeJs']

const Header = ({title , number}) => {
  return (
    <BasicCard>
        <div className='Header'>
            <div className='Header_title'>
                <h1>{title} ({number})</h1>
            </div>
            <div className='Header_body'>
            {buttons.map(value => {
                return <HeaderButton text={value}/>
            })}
            </div>
        </div>
       
       
    </BasicCard>
  )
}

export default Header