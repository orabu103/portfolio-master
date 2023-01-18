import React from 'react'
import PageButton from '../Button/PageButton/PageButton'
import './style.css'
let point = () => {
    return <svg width="10" height="10">
        <circle cx="3" cy="3" r="2"  fill='#4F4F4F' />
    </svg> 
}
const SelectPage = ({number}) => {
  return (
    <div className='SelectPage'>
        <PageButton> 
          <span class="material-symbols-outlined">
              chevron_left
          </span>
        </PageButton>
        <PageButton> 1</PageButton> 
        <PageButton> 2 </PageButton>
        <PageButton> 3 </PageButton>
        {number > 3 ?
        <PageButton style='none'> 
            {point()} 
            {point()} 
            {point()} 
        </PageButton>
        :null}
        <PageButton> 10 </PageButton>
        <PageButton> 
          <span class="material-symbols-outlined">
                chevron_right
          </span>
        </PageButton>
    </div>
  )
}

export default SelectPage