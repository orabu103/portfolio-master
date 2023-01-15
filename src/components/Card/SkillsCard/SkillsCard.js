import React , {useRef , useState , useEffect}from 'react'
import Skill from '../../Skill/Skill'
import BasicCard from '../BasicCard'

import './style.css'

const skills = {
    React: 90 ,
    Javascript: 85 ,
    CSS: 65,
    Redux:  82 ,
    Vue: 35
}

const SkillsCard = ({flex}) => {
  const elementRef = useRef(null);
  const [isAnimating, setIsAnimating] =  useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Is apperd")
                setIsAnimating(true);
                observer.disconnect();
            }
        });
    });
    observer.observe(elementRef.current);
}, []);

  let styles = {
    gridTemplateColumns: flex === 'vertical' ? '1fr' : 'repeat(2, 1fr)'
}
  return (
    <BasicCard>
      <div  className='SkillsCard'>
          {/* Header */}
          <h1 className='SkillsCard_header'>FRONT END</h1>
          {/* Body */}
          <div  ref={elementRef} className='SkillsCard_body'  style={styles}>
          {Object.keys(skills).map((value , index) => {
              return <Skill key={index} text={value} percent={skills[value]} animation={isAnimating}/>
          })}
          </div>
      </div>
    </BasicCard>
  )
}

export default SkillsCard