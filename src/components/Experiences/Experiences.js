import React , {useRef , useState , useEffect}from 'react'
import './style.css'

const Experiences = ({logo , timeline , title , summary , flex}) => {
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
    <div ref={elementRef} className='Experiences' style={style}>
        <img src={logo} alt='' className={isAnimating ?'slideInLeft' : null}/>
        <div className={isAnimating ? 'Experiences_body slideInRight' : 'Experiences_body'}>
          <h4> {timeline} </h4>
          <h3> {title} </h3>
          <p> {summary} </p>
        </div>
    </div>
  )
}

export default Experiences