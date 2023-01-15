import React from 'react'


const Pic = ({url , width , height}) => {
    const background = { 
        width: width ? width :"351px",
        height: height ? height : "343px",
        // maxWidth: "351px",
        // maxHeight: "343px",
        borderRadius: "12px",
        background :`url(${url})` ,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

  return (
    <div className='Pic' style={background}></div>
  )
}

export default Pic