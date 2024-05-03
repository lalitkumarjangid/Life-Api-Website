import React from 'react'
import "./style.css"

const SimpleCard = ({ title, subtitle, text, icon }) => {
  return (
    <>
      <div className='simpleCard'>
        <div className='simpleCard_icon'>
          <i>{ icon }</i>
        </div>
        <div className='simpleCard_content'>
          <div>
            <h2 className='simpleCard_title'>{title}</h2>
            <h3 className='simpleCard_subtitle'>{subtitle}</h3>
          </div>
          <div className='simpleCard_text'>
            {text}
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleCard