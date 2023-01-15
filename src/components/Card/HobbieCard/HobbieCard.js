import React from 'react'
import Hobbie from '../../Hobbie/Hobbie'
import BasicCard from '../BasicCard'
import './style.css'

const footivoly = "https://images.squarespace-cdn.com/content/v1/567091455a5668a2de2f852a/1525463613244-GV44ORVUBH7SO0515O3P/footvolley-ball-on-sand-heap.png?format=1500w"
const piano = "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/111a24a6658dc9c34383d0892ee63176105d324e877e013c3c9c5312cc433da4._RI_V_TTW_.jpg"
const coocking = "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"

const HobbieCard = ({flex , animation}) => {
  let styles = {
    display: flex === 'vertical' ? null : 'flex'
}

  return (
    <BasicCard animation={animation}>
        <div className='HobbieCard'>
            <h1>Hobbies</h1>
            <div className='HobbieCard_body' style={styles}>
                <Hobbie url={footivoly}
                        title={'fuccivelli'}
                        subtitle={'Quisque feugiat malesuada molestie.'}
                        animation={'slideInRight'}
                        />
                <Hobbie url={piano}
                        title={'Piano'}
                        subtitle={'Quisque feugiat malesuada molestie.'}
                        animation={'slideInLeft'}/>
                <Hobbie url={coocking}
                        title={'Coocking'}
                        subtitle={'Quisque feugiat malesuada molestie.'}
                        animation={'slideInRight'}/>
            </div>
        </div>
    </BasicCard>
  )
}

export default HobbieCard