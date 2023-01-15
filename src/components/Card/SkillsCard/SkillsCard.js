import React , {useRef , useState , useEffect}from 'react'
import Skill from '../../Skill/Skill'
import BasicCard from '../BasicCard'

import './style.css'



const SkillsCard = ({title , skills ,  flex , animation}) => {
  const elementRef = useRef(null);
  const [isAnimating, setIsAnimating] =  useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
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
    <BasicCard animation={animation}>
      <div  className='SkillsCard'>
          {/* Header */}
          <h1 className='SkillsCard_header'>{title}</h1>
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