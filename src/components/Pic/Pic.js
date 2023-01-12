import React from 'react'


const Pic = ({url}) => {
    const background = { 
        borderRadius: "12px",
        background :`url(${url})` ,
        width: "271.86px",
        height: "266.14px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

  return (
    <div className='Pic' style={background}></div>
  )
}

export default Pic