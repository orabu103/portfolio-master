import React , {useRef , useState , useEffect}from 'react'
import './style.css'

const BasicCard = ({children , animation}) => {
  const elementRef = useRef(null);
  const [isAnimating, setIsAnimating] =  useState(false);

    
  let style = {
    visibility: animation ? isAnimating && animation ? 'visible' : 'hidden' : 'visible'
  }

  

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
  return (
    <div ref={elementRef} className={isAnimating ? `BasicCard ${animation}` : 'BasicCard'} style={style}>
        {children} 
    </div>
  )
}

export default BasicCard