import React from 'react'
import './thumbnail.css'

const Thumbnail = (props) => {
  return (
    <div className='project__card'>

      <img className="project__img" src={props.project.image} alt="gallery"/>
      <div className='project__content'>
        <h2 className='project__content_title'>{props.project.title}</h2>
        <p className='project__content_desc'>{props.project.description}</p> 
        <a href={props.project.link}>here</a>
      </div>
        
       
    </div>
  )
}

export default Thumbnail
