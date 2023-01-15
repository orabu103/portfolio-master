import React from 'react'
import Pic from '../../Pic/Pic'
import UserContact from '../../UserContact/UserContact';
import BasicCard from '../BasicCard';

import './style.css'
const url = "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg";
 
const UserCard = ({flex}) => {
    let styles = {
        display: flex === 'vertical' ? null : 'flex'
    }

  return (
    <BasicCard >
        <div className='UserCard' style={styles}>
            {/* Picture */}
            <div className="UserCard_pic" >
                <Pic url = {url}
                    width={'100%'}/>
            </div>
            {/* Header */}
            <div className='UserCard_container'>
                <div className='UserCard_container_header' style={styles}>
                    <div className='UserCard_container_UserCard_container_header_info'>
                        <h1>Or Abuhtzira</h1>
                        <h4>Full stack developer</h4>
                    </div>
                    {/* Contact */}
                    <div>
                        <UserContact icon="mail" text="orabu103@gmail.com"/>
                        <UserContact icon="phone" text="(+972) 504640514"/>
                    </div>
                </div>
                {/* Body */}
                <div className='UserCard_container_body'>
                    <p>
                    Self-motivated developer, who is willing to learn and create outstanding UI applications. 
                    </p>
                    <p>
                    Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
                    Quisque feugiat malesuada molestie.
                    </p>
                </div>
            </div>
        </div>
    </BasicCard>
  )
}

export default UserCard