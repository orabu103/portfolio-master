import React , { useEffect, useState }from 'react'
import Pic from '../../Pic/Pic'
import './style.css'
const url = "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXIlMjBjb2ZmZWV8ZW58MHx8MHx8&w=1000&q=80"
const BlogCard = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  

  const body = () => {
    return(
      <div className='BlogCard_body'>
          <p>
            In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. 
            Vivamus non volutpat nisl, a luctus mi.  
          </p>
          <p> 
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
            Quisque feugiat malesuada molestie.
          </p>
        </div>
    )
  }

  return (
    <div className='BlogCard'>
        <div className='BlogCard_header'>
        {/* Header */}
            <div>
                <h5>Blog</h5>
                <h1>How to organize your CSS</h1>
            </div>
        {/* Picture */}
            <div className='BlogCard_header_pic'>
              <Pic url={url} />
            </div>
        </div>
        {/* Body */}
        {body()}
        {/* Footer */}
        <a href="#">dev.to</a>
    </div>
  )
}

export default BlogCard