import React , {useRef , useState , useEffect}from 'react'
import Pic from '../Pic/Pic'

import './style.css'

const Hobbie = ({url , title , subtitle ,animation}) => {
  const elementRef = useRef(null);
  const [isAnimating, setIsAnimating] =  useState(false);

  let style = {
    visibility: isAnimating ? 'visible' : 'hidden'
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsAnimating(true);
                console.log(isAnimating)
                observer.disconnect();
            }
        });
    });
    observer.observe(elementRef.current);
}, []);
  return (
    <div ref={elementRef} className={isAnimating ? `Hobbie ${animation}`: 'Hobbie'} style={style}>
        <Pic url={url}
             width="100%"   
             height="139px"/>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </div>
  )
}

export default Hobbie