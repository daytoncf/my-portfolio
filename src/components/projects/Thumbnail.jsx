import React from 'react'
import './thumbnail.css'

const Thumbnail = (props) => {
  return (
    <a 
      href={props.project.link}
      className='project__card'>
      <img
          alt="gallery"
          src={props.project.image}
          className='project__card_image'
      />
      <div className='project__card'>
        {props.project.description}
      </div>  
    </a>
  )
}

export default Thumbnail
